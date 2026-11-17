import * as THREE from 'three';

export interface ViewerOptions {
  container: HTMLElement;
  initialColor?: string;
  initialWheel?: string;
  initialInterior?: string;
}

export class BMW360Viewer {
  private container: HTMLElement;
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private carGroup: THREE.Group;
  private bodyMeshList: THREE.Mesh[] = [];
  private wheelGroupList: THREE.Group[] = [];
  private interiorMeshList: THREE.Mesh[] = [];
  private headlightMeshes: THREE.Mesh[] = [];

  // Interaction & Camera
  private isDragging = false;
  private prevMouseX = 0;
  private prevMouseY = 0;
  private targetRotationY = -0.6;
  private targetRotationX = 0.22;
  private currentRotationY = -0.6;
  private currentRotationX = 0.22;
  private targetDistance = 6.2;
  private currentDistance = 6.2;
  private minDistance = 2.4;
  private maxDistance = 9.5;
  private isAutoRotating = true;
  private autoRotateSpeed = 0.003;
  private isInteriorMode = false;
  private headlightsOn = true;
  private animationFrameId: number | null = null;

  // Materials
  private bodyMaterial: THREE.MeshPhysicalMaterial;
  private glassMaterial: THREE.MeshPhysicalMaterial;
  private carbonMaterial: THREE.MeshStandardMaterial;
  private rimMaterial: THREE.MeshStandardMaterial;
  private interiorLeatherMaterial: THREE.MeshStandardMaterial;
  private caliperMaterial: THREE.MeshStandardMaterial;

  constructor(options: ViewerOptions) {
    this.container = options.container;

    // 1. Scene & Background
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0a0a0c);
    this.scene.fog = new THREE.FogExp2(0x0a0a0c, 0.045);

    // 2. Camera
    const aspect = this.container.clientWidth / this.container.clientHeight;
    this.camera = new THREE.PerspectiveCamera(40, aspect, 0.1, 100);
    this.camera.position.set(0, 1.8, this.currentDistance);

    // 3. Renderer with High Performance & Shadows
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' });
    this.renderer.setSize(this.container.clientWidth, this.container.clientHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    this.container.innerHTML = '';
    this.container.appendChild(this.renderer.domElement);

    // 4. Default Materials
    const initialHex = options.initialColor || '#c41820'; // Toronto Red default (matching reference)
    this.bodyMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(initialHex),
      metalness: 0.88,
      roughness: 0.18,
      clearcoat: 1.0,
      clearcoatRoughness: 0.06,
      reflectivity: 0.98
    });

    this.glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color(0x111620),
      metalness: 0.9,
      roughness: 0.1,
      transmission: 0.7,
      transparent: true,
      opacity: 0.85
    });

    this.carbonMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x18181a),
      roughness: 0.45,
      metalness: 0.5
    });

    this.rimMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x222225),
      metalness: 0.92,
      roughness: 0.2
    });

    this.interiorLeatherMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(options.initialInterior || '#e06612'), // Kyalami orange
      roughness: 0.7,
      metalness: 0.1
    });

    this.caliperMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0x1c69d4), // BMW M Blue caliper
      roughness: 0.3,
      metalness: 0.8
    });

    // 5. Build Environment & 3D Car
    this.setupLighting();
    this.setupStudioFloor();
    this.carGroup = new THREE.Group();
    this.buildProceduralBMWModel();
    this.scene.add(this.carGroup);

    // 6. Bind User Controls
    this.bindEvents();
    this.animate();
  }

  private setupLighting() {
    // Ambient fill
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    this.scene.add(ambientLight);

    // Overhead Key Studio Softbox
    const mainSpot = new THREE.SpotLight(0xffffff, 3.2);
    mainSpot.position.set(3, 8, 4);
    mainSpot.angle = Math.PI / 4;
    mainSpot.penumbra = 0.8;
    mainSpot.castShadow = true;
    mainSpot.shadow.mapSize.width = 2048;
    mainSpot.shadow.mapSize.height = 2048;
    mainSpot.shadow.bias = -0.0001;
    this.scene.add(mainSpot);

    // Rim / Backlight for sculpted shoulder lines
    const rimLight = new THREE.DirectionalLight(0x75aaff, 1.8);
    rimLight.position.set(-6, 4, -5);
    this.scene.add(rimLight);

    // Opposite warm fill light
    const warmFill = new THREE.DirectionalLight(0xffeedd, 1.2);
    warmFill.position.set(6, 3, 2);
    this.scene.add(warmFill);

    // Subtle blue under-glow
    const blueFloorLight = new THREE.PointLight(0x1c69d4, 1.5, 8);
    blueFloorLight.position.set(0, 0.1, 0);
    this.scene.add(blueFloorLight);
  }

  private setupStudioFloor() {
    // High-end circular showroom pedestal
    const pedestalGeo = new THREE.CylinderGeometry(4.2, 4.4, 0.1, 64);
    const pedestalMat = new THREE.MeshStandardMaterial({
      color: 0x111114,
      metalness: 0.85,
      roughness: 0.35
    });
    const pedestal = new THREE.Mesh(pedestalGeo, pedestalMat);
    pedestal.position.y = -0.05;
    pedestal.receiveShadow = true;
    this.scene.add(pedestal);

    // Studio Centerline Red Guide (matching Reference Photo)
    const redGuide = new THREE.Mesh(
      new THREE.PlaneGeometry(0.16, 16.0),
      new THREE.MeshBasicMaterial({ color: 0xcc1122, side: THREE.DoubleSide })
    );
    redGuide.rotation.x = -Math.PI / 2;
    redGuide.position.y = 0.006;
    this.scene.add(redGuide);

    // Concentric halo ring
    const ringGeo = new THREE.RingGeometry(4.25, 4.32, 64);
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0x1c69d4,
      side: THREE.DoubleSide
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = -Math.PI / 2;
    ring.position.y = 0.005;
    this.scene.add(ring);

    // Subtle radial grid floor
    const grid = new THREE.GridHelper(20, 20, 0x292930, 0x181820);
    grid.position.y = -0.06;
    this.scene.add(grid);
  }

  private buildProceduralBMWModel() {
    // Accurate proportions for BMW M4 Competition
    const carRoot = new THREE.Group();

    // --- MAIN LOWER CHASSIS & HOOD ---
    const bodyShape = new THREE.BoxGeometry(1.85, 0.45, 4.4);
    const mainBody = new THREE.Mesh(bodyShape, this.bodyMaterial);
    mainBody.position.set(0, 0.45, 0);
    mainBody.castShadow = true;
    mainBody.receiveShadow = true;
    carRoot.add(mainBody);
    this.bodyMeshList.push(mainBody);

    // Sculpted Powerdome Hood
    const hoodGeo = new THREE.BoxGeometry(1.6, 0.15, 1.5);
    const hood = new THREE.Mesh(hoodGeo, this.bodyMaterial);
    hood.position.set(0, 0.72, 1.0);
    hood.rotation.x = 0.08;
    hood.castShadow = true;
    carRoot.add(hood);
    this.bodyMeshList.push(hood);

    // Twin Matte Black Racing Stripes on Hood (matching Reference Photo)
    const stripeMat = new THREE.MeshStandardMaterial({
      color: 0x141416,
      roughness: 0.65,
      metalness: 0.25
    });
    const hoodStripeL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 1.52), stripeMat);
    hoodStripeL.position.set(-0.25, 0.805, 1.0);
    hoodStripeL.rotation.x = 0.08;
    const hoodStripeR = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 1.52), stripeMat);
    hoodStripeR.position.set(0.25, 0.805, 1.0);
    hoodStripeR.rotation.x = 0.08;
    carRoot.add(hoodStripeL);
    carRoot.add(hoodStripeR);

    // Front Bumper & Twin Iconic Kidney Grilles
    const bumperGeo = new THREE.BoxGeometry(1.82, 0.38, 0.45);
    const bumper = new THREE.Mesh(bumperGeo, this.bodyMaterial);
    bumper.position.set(0, 0.35, 2.3);
    carRoot.add(bumper);
    this.bodyMeshList.push(bumper);

    // Gloss Black BMW M Kidney Grilles (Left & Right)
    const grilleMat = new THREE.MeshStandardMaterial({ color: 0x08080a, roughness: 0.15, metalness: 0.9 });
    const grilleLeft = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.45, 0.08), grilleMat);
    grilleLeft.position.set(-0.25, 0.42, 2.5);
    const grilleRight = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.45, 0.08), grilleMat);
    grilleRight.position.set(0.25, 0.42, 2.5);
    carRoot.add(grilleLeft);
    carRoot.add(grilleRight);

    // M Front Carbon Splitter
    const splitter = new THREE.Mesh(new THREE.BoxGeometry(1.9, 0.06, 0.3), this.carbonMaterial);
    splitter.position.set(0, 0.15, 2.4);
    carRoot.add(splitter);

    // --- CABIN GREENHOUSE (ROOF, PILLARS, GLASS) ---
    // Carbon Fibre Lightweight Roof
    const roofGeo = new THREE.BoxGeometry(1.42, 0.08, 1.9);
    const roof = new THREE.Mesh(roofGeo, this.carbonMaterial);
    roof.position.set(0, 1.34, -0.2);
    roof.castShadow = true;
    carRoot.add(roof);

    // Twin Racing Stripes on Carbon Roof (matching Reference Photo)
    const roofStripeL = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 1.92), stripeMat);
    roofStripeL.position.set(-0.25, 1.385, -0.2);
    const roofStripeR = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.02, 1.92), stripeMat);
    roofStripeR.position.set(0.25, 1.385, -0.2);
    carRoot.add(roofStripeL);
    carRoot.add(roofStripeR);

    // Glass Canopy (Windshield, Rear Screen, Side Windows)
    const cabinGeo = new THREE.BoxGeometry(1.5, 0.65, 2.1);
    const cabin = new THREE.Mesh(cabinGeo, this.glassMaterial);
    cabin.position.set(0, 0.98, -0.2);
    cabin.castShadow = true;
    carRoot.add(cabin);

    // Side Mirrors with M Horn Aero Design
    const mirrorLeft = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.14, 0.18), this.carbonMaterial);
    mirrorLeft.position.set(-0.98, 0.92, 0.7);
    const mirrorRight = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.14, 0.18), this.carbonMaterial);
    mirrorRight.position.set(0.98, 0.92, 0.7);
    carRoot.add(mirrorLeft);
    carRoot.add(mirrorRight);

    // Rear Carbon Ducktail Spoiler
    const spoiler = new THREE.Mesh(new THREE.BoxGeometry(1.55, 0.06, 0.22), this.carbonMaterial);
    spoiler.position.set(0, 0.88, -2.15);
    spoiler.rotation.x = -0.12;
    spoiler.castShadow = true;
    carRoot.add(spoiler);

    // Rear Carbon Diffuser with Quad Exhausts
    const diffuser = new THREE.Mesh(new THREE.BoxGeometry(1.7, 0.24, 0.28), this.carbonMaterial);
    diffuser.position.set(0, 0.25, -2.18);
    carRoot.add(diffuser);

    // 4 M Quad Exhaust Tips
    const pipeGeo = new THREE.CylinderGeometry(0.05, 0.05, 0.2, 16);
    const pipeMat = new THREE.MeshStandardMaterial({ color: 0x111111, metalness: 0.95, roughness: 0.1 });
    const positionsX = [-0.62, -0.48, 0.48, 0.62];
    positionsX.forEach(px => {
      const pipe = new THREE.Mesh(pipeGeo, pipeMat);
      pipe.rotation.x = Math.PI / 2;
      pipe.position.set(px, 0.22, -2.32);
      carRoot.add(pipe);
    });

    // --- LIGHTS ---
    // Iconic BMW Twin LED Ring Headlamps (Left & Right)
    const headlampMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const headlampLeft = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.12, 0.1), headlampMat);
    headlampLeft.position.set(-0.68, 0.58, 2.22);
    const headlampRight = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.12, 0.1), headlampMat);
    headlampRight.position.set(0.68, 0.58, 2.22);
    carRoot.add(headlampLeft);
    carRoot.add(headlampRight);
    this.headlightMeshes.push(headlampLeft, headlampRight);

    // L-Shaped LED Taillights (Red)
    const tailMat = new THREE.MeshBasicMaterial({ color: 0xff1122 });
    const tailLeft = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.1), tailMat);
    tailLeft.position.set(-0.65, 0.68, -2.2);
    const tailRight = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.12, 0.1), tailMat);
    tailRight.position.set(0.65, 0.68, -2.2);
    carRoot.add(tailLeft);
    carRoot.add(tailRight);

    // --- DETAILED INTERIOR COCKPIT (VISIBLE IN 360 & INTERIOR MODE) ---
    const cockpitGroup = new THREE.Group();
    cockpitGroup.position.set(0, 0.6, -0.2);

    // Front M Sport Seats (Left & Right)
    const seatGeo = new THREE.BoxGeometry(0.52, 0.72, 0.55);
    const driverSeat = new THREE.Mesh(seatGeo, this.interiorLeatherMaterial);
    driverSeat.position.set(-0.45, 0.2, 0.0);
    const passengerSeat = new THREE.Mesh(seatGeo, this.interiorLeatherMaterial);
    passengerSeat.position.set(0.45, 0.2, 0.0);
    cockpitGroup.add(driverSeat);
    cockpitGroup.add(passengerSeat);
    this.interiorMeshList.push(driverSeat, passengerSeat);

    // Center Console
    const consoleGeo = new THREE.BoxGeometry(0.28, 0.35, 1.2);
    const centerConsole = new THREE.Mesh(consoleGeo, this.carbonMaterial);
    centerConsole.position.set(0, 0.1, 0.0);
    cockpitGroup.add(centerConsole);

    // BMW Curved Display (12.3" + 14.9")
    const displayGeo = new THREE.BoxGeometry(1.0, 0.18, 0.04);
    const displayMat = new THREE.MeshBasicMaterial({ color: 0x1c69d4 });
    const curvedDisplay = new THREE.Mesh(displayGeo, displayMat);
    curvedDisplay.position.set(-0.15, 0.42, 0.58);
    curvedDisplay.rotation.y = 0.08;
    cockpitGroup.add(curvedDisplay);

    // M Sport Steering Wheel
    const wheelTorus = new THREE.Mesh(new THREE.TorusGeometry(0.18, 0.025, 12, 24), this.carbonMaterial);
    wheelTorus.position.set(-0.45, 0.38, 0.42);
    cockpitGroup.add(wheelTorus);

    carRoot.add(cockpitGroup);

    // --- 4 WHEELS WITH M BRAKE CALIPERS ---
    const wheelPositions = [
      { x: -0.96, y: 0.35, z: 1.4 },  // Front Left
      { x: 0.96, y: 0.35, z: 1.4 },   // Front Right
      { x: -0.96, y: 0.35, z: -1.35 }, // Rear Left
      { x: 0.96, y: 0.35, z: -1.35 }  // Rear Right
    ];

    wheelPositions.forEach((pos, idx) => {
      const wGroup = this.createWheelAssembly(idx % 2 === 1);
      wGroup.position.set(pos.x, pos.y, pos.z);
      carRoot.add(wGroup);
      this.wheelGroupList.push(wGroup);
    });

    this.carGroup.add(carRoot);
  }

  private createWheelAssembly(isRightSide: boolean): THREE.Group {
    const group = new THREE.Group();

    // High-grip Michelin Pilot Sport Cup tyre
    const tyreGeo = new THREE.CylinderGeometry(0.36, 0.36, 0.26, 32);
    const tyreMat = new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.85, metalness: 0.1 });
    const tyre = new THREE.Mesh(tyreGeo, tyreMat);
    tyre.rotation.z = Math.PI / 2;
    tyre.castShadow = true;
    group.add(tyre);

    // M Double-Spoke Alloy Rim
    const rimGeo = new THREE.CylinderGeometry(0.28, 0.28, 0.27, 20);
    const rim = new THREE.Mesh(rimGeo, this.rimMaterial);
    rim.rotation.z = Math.PI / 2;
    group.add(rim);

    // Drilled Carbon-Ceramic Brake Disc
    const discGeo = new THREE.CylinderGeometry(0.24, 0.24, 0.04, 24);
    const discMat = new THREE.MeshStandardMaterial({ color: 0x555558, metalness: 0.95, roughness: 0.35 });
    const disc = new THREE.Mesh(discGeo, discMat);
    disc.rotation.z = Math.PI / 2;
    disc.position.x = isRightSide ? -0.06 : 0.06;
    group.add(disc);

    // High-Performance M Brake Caliper
    const caliperGeo = new THREE.BoxGeometry(0.08, 0.12, 0.18);
    const caliper = new THREE.Mesh(caliperGeo, this.caliperMaterial);
    caliper.position.set(isRightSide ? -0.06 : 0.06, 0.12, 0.1);
    group.add(caliper);

    return group;
  }

  // --- PUBLIC API FOR INTERACTION & CUSTOMIZATION ---

  public setPaintColor(hex: string) {
    this.bodyMaterial.color.set(hex);
  }

  public setInteriorTrim(colorHex: string) {
    this.interiorLeatherMaterial.color.set(colorHex);
  }

  public setRimFinish(type: 'dark' | 'bicolour' | 'bronze') {
    if (type === 'bronze') {
      this.rimMaterial.color.set(0x9e7b45);
      this.rimMaterial.roughness = 0.3;
    } else if (type === 'bicolour') {
      this.rimMaterial.color.set(0xcccccc);
      this.rimMaterial.roughness = 0.15;
    } else {
      this.rimMaterial.color.set(0x222225);
      this.rimMaterial.roughness = 0.2;
    }
  }

  public setCaliperColor(hex: string) {
    this.caliperMaterial.color.set(hex);
  }

  public toggleHeadlights(): boolean {
    this.headlightsOn = !this.headlightsOn;
    this.headlightMeshes.forEach(m => {
      (m.material as THREE.MeshBasicMaterial).color.set(this.headlightsOn ? 0xffffff : 0x333333);
    });
    return this.headlightsOn;
  }

  public toggleAutoRotate(): boolean {
    this.isAutoRotating = !this.isAutoRotating;
    return this.isAutoRotating;
  }

  public resetCamera() {
    this.targetRotationY = -0.6;
    this.targetRotationX = 0.22;
    this.targetDistance = 6.2;
    this.isInteriorMode = false;
  }

  public setPresetView(preset: 'front' | 'front34' | 'side' | 'rear' | 'rear34' | 'top' | 'interior') {
    this.isAutoRotating = false;
    if (preset === 'front') {
      this.targetRotationY = 0;
      this.targetRotationX = 0.15;
      this.targetDistance = 5.6;
      this.isInteriorMode = false;
    } else if (preset === 'front34') {
      this.targetRotationY = -0.78;
      this.targetRotationX = 0.2;
      this.targetDistance = 6.0;
      this.isInteriorMode = false;
    } else if (preset === 'side') {
      this.targetRotationY = -Math.PI / 2;
      this.targetRotationX = 0.12;
      this.targetDistance = 5.8;
      this.isInteriorMode = false;
    } else if (preset === 'rear') {
      this.targetRotationY = -Math.PI;
      this.targetRotationX = 0.15;
      this.targetDistance = 5.8;
      this.isInteriorMode = false;
    } else if (preset === 'rear34') {
      this.targetRotationY = -2.35;
      this.targetRotationX = 0.22;
      this.targetDistance = 6.2;
      this.isInteriorMode = false;
    } else if (preset === 'top') {
      // Direct Overhead Aerial Perspective matching Reference Photo
      this.targetRotationY = 0;
      this.targetRotationX = 1.54;
      this.targetDistance = 6.0;
      this.isInteriorMode = false;
    } else if (preset === 'interior') {
      this.targetRotationY = -0.2;
      this.targetRotationX = 0.05;
      this.targetDistance = 2.5; // close-up cockpit
      this.isInteriorMode = true;
    }
  }

  public zoomIn() {
    this.targetDistance = Math.max(this.minDistance, this.targetDistance - 0.8);
  }

  public zoomOut() {
    this.targetDistance = Math.min(this.maxDistance, this.targetDistance + 0.8);
  }

  public toggleFullscreen() {
    if (!document.fullscreenElement) {
      this.container.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  }

  // --- EVENT BINDING & RENDER LOOP ---

  private bindEvents() {
    const el = this.container;

    // Mouse drag
    el.addEventListener('mousedown', (e) => {
      this.isDragging = true;
      this.isAutoRotating = false;
      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    el.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.prevMouseX;
      const dy = e.clientY - this.prevMouseY;
      this.targetRotationY += dx * 0.007;
      this.targetRotationX = Math.max(0.02, Math.min(1.4, this.targetRotationX + dy * 0.005));
      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;
    });

    // Touch support for mobile
    let touchStartX = 0;
    let touchStartY = 0;
    let initialPinchDist = 0;

    el.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.isAutoRotating = false;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        initialPinchDist = Math.hypot(dx, dy);
      }
    }, { passive: true });

    el.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && this.isDragging) {
        const dx = e.touches[0].clientX - touchStartX;
        const dy = e.touches[0].clientY - touchStartY;
        this.targetRotationY += dx * 0.008;
        this.targetRotationX = Math.max(0.02, Math.min(1.4, this.targetRotationX + dy * 0.006));
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      } else if (e.touches.length === 2) {
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const currentDist = Math.hypot(dx, dy);
        const diff = initialPinchDist - currentDist;
        this.targetDistance = Math.max(this.minDistance, Math.min(this.maxDistance, this.targetDistance + diff * 0.01));
        initialPinchDist = currentDist;
      }
    }, { passive: true });

    el.addEventListener('touchend', () => {
      this.isDragging = false;
    });

    // Mouse wheel zoom
    el.addEventListener('wheel', (e) => {
      e.preventDefault();
      this.targetDistance = Math.max(this.minDistance, Math.min(this.maxDistance, this.targetDistance + e.deltaY * 0.005));
    }, { passive: false });

    // Window resize
    window.addEventListener('resize', this.onResize);
  }

  private onResize = () => {
    if (!this.container) return;
    const w = this.container.clientWidth;
    const h = this.container.clientHeight;
    if (w === 0 || h === 0) return;
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(w, h);
  };

  private animate = () => {
    this.animationFrameId = requestAnimationFrame(this.animate);

    // Smooth inertia interpolation
    this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.08;
    this.currentRotationX += (this.targetRotationX - this.currentRotationX) * 0.08;
    this.currentDistance += (this.targetDistance - this.currentDistance) * 0.08;

    if (this.isAutoRotating) {
      this.targetRotationY += this.autoRotateSpeed;
    }

    // Update camera spherical position
    const radius = this.currentDistance;
    const phi = this.currentRotationX;
    const theta = this.currentRotationY;

    this.camera.position.x = radius * Math.sin(theta) * Math.cos(phi);
    this.camera.position.z = radius * Math.cos(theta) * Math.cos(phi);
    this.camera.position.y = Math.max(0.3, radius * Math.sin(phi)) + (this.isInteriorMode ? 0.6 : 0.8);
    this.camera.lookAt(0, this.isInteriorMode ? 0.85 : 0.5, 0);

    this.renderer.render(this.scene, this.camera);
  };

  public destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener('resize', this.onResize);
    this.renderer.dispose();
    this.container.innerHTML = '';
  }
}
