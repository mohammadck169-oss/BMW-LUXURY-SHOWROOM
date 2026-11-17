// ==========================================================================
// BMW 360° REAL CAR INTERACTIVE PHOTOGRAPHIC TURNTABLE ENGINE
// High-Resolution Multi-Angle Showroom Experience for All BMW Models
// ==========================================================================

(function() {
  class BMWRealCarTurntable {
    constructor(container, options) {
      this.container = container;
      this.options = options || {};
      this.model = options.model || (window.BMWData && window.BMWData.MODELS.find(m => m.id === options.modelId)) || window.BMWData.MODELS[0];
      this.currentIndex = 1; // Default to 45° Front 3/4
      this.isAutoRotating = false;
      this.autoRotateTimer = null;
      this.zoomLevel = 1.0;
      this.panX = 0;
      this.panY = 0;
      this.isDragging = false;
      this.dragStartX = 0;
      this.dragStartY = 0;
      this.accumulatedX = 0;
      this.activeColorHex = options.initialColor || '#c41820';

      this.initFrames();
      this.render();
      this.bindEvents();
      this.preloadImages();
    }

    initFrames() {
      const m = this.model;
      const isM4 = m.id === 'm4-competition';
      const pa = m.photoAngles || {};

      // 6-frame 360° sequential turntable orbit around the real car
      this.frames = [
        {
          key: 'front',
          label: 'Direct Front Face',
          degLabel: '0° FRONT',
          deg: 0,
          src: pa.front || (isM4 ? 'assets/images/bmw_hero_cinematic.jpg' : m.heroImage),
          hotspots: [
            { x: 50, y: 62, num: '1', title: 'Signature Kidney Grilles', desc: 'Active cooling flaps with aerodynamic efficiency' },
            { x: 30, y: 52, num: '2', title: 'BMW Adaptive Laserlight', desc: 'Non-dazzling high beam illuminating up to 650 meters' }
          ]
        },
        {
          key: 'front34',
          label: 'Front 3/4 Perspective',
          degLabel: '45° FRONT 3/4',
          deg: 45,
          src: pa.front34 || m.heroImage,
          hotspots: [
            { x: 42, y: 55, num: '1', title: 'Sculpted Powerdome Hood', desc: 'Aggressive twin indents optimizing high-speed airflow' },
            { x: 26, y: 70, num: '2', title: 'M Light-Alloy Forged Wheels', desc: 'Staggered 19"/20" forged alloy rims with compound brakes' },
            { x: 64, y: 44, num: '3', title: 'M Aerodynamic Mirror Caps', desc: 'Twin-stalk aerodynamic carbon wing mirrors' }
          ]
        },
        {
          key: 'side',
          label: 'Side Silhouette & Stance',
          degLabel: '90° PROFILE',
          deg: 90,
          src: pa.side || m.sideImage,
          hotspots: [
            { x: 50, y: 50, num: '1', title: '50:50 Axle Weight Distribution', desc: 'Engineered German balance for razor-sharp handling' },
            { x: 20, y: 66, num: '2', title: 'Front M Compound Calipers', desc: '6-piston fixed front calipers in high-gloss blue or red' },
            { x: 80, y: 66, num: '3', title: 'Active M Rear Differential', desc: 'Dynamic torque vectoring delivering maximum track grip' }
          ]
        },
        {
          key: 'rear34',
          label: 'Rear 3/4 Muscular Stance',
          degLabel: '135° REAR 3/4',
          deg: 135,
          src: pa.rear34 || m.rearImage,
          hotspots: [
            { x: 48, y: 48, num: '1', title: 'Sculpted 3D LED Taillights', desc: 'Darkened full LED elements with precision light guides' },
            { x: 36, y: 74, num: '2', title: 'Quad M Sport Tailpipes', desc: '100mm dual-branch exhaust system with electronic flaps' },
            { x: 58, y: 58, num: '3', title: 'CFRP Carbon Rear Spoiler', desc: 'Gurney flap providing crucial aerodynamic downforce' }
          ]
        },
        {
          key: 'rear',
          label: 'Direct Rear & Diffuser',
          degLabel: '180° REAR',
          deg: 180,
          src: pa.rear || m.rearImage,
          hotspots: [
            { x: 50, y: 72, num: '1', title: 'Underbody Diffuser Fins', desc: 'Channels underbody airflow to reduce lift at high velocity' },
            { x: 26, y: 50, num: '2', title: 'Wide Track Stance', desc: 'Muscular flared wheel arches accentuating high-performance stance' }
          ]
        },
        {
          key: 'sideOpposite',
          label: 'Opposite Side Profile',
          degLabel: '270° PROFILE (L)',
          deg: 270,
          src: pa.side || m.sideImage,
          flip: true,
          hotspots: [
            { x: 50, y: 52, num: '1', title: 'Carbon Core Architecture', desc: 'Rigid composite chassis delivering visceral driving feedback' }
          ]
        }
      ];

      // Special angle views (Overhead Aerial & Interior Cockpit)
      this.specialFrames = {
        top: {
          key: 'top',
          label: 'Aerial Overhead (90° Top View)',
          degLabel: 'TOP AERIAL (90°)',
          src: isM4 ? 'assets/images/bmw_m4_red_top.jpg' : (pa.top || m.heroImage),
          hotspots: [
            { x: 50, y: 74, num: '1', title: 'Frameless Kidney Grille', desc: 'Signature vertical dual cooling ducts with radar integration' },
            { x: 42, y: 52, num: '2', title: 'Twin Matte Racing Stripes', desc: 'Powerdome indents with satin black racing stripes' },
            { x: 50, y: 32, num: '3', title: 'CFRP Carbon Fiber Roof', desc: 'Continuous carbon weave lowering the center of gravity' }
          ]
        },
        interior: {
          key: 'interior',
          label: 'Cockpit 360° Luxury Interior',
          degLabel: 'COCKPIT 360°',
          src: pa.interior || m.interiorImage,
          hotspots: [
            { x: 48, y: 44, num: '1', title: 'BMW Curved Display', desc: 'Frameless 12.3" cluster & 14.9" touchscreen with OS 8.5' },
            { x: 30, y: 56, num: '2', title: 'M Sport Multifunction Steering', desc: 'Hand-stitched leather with red M1/M2 programmable drive buttons' },
            { x: 70, y: 60, num: '3', title: 'Full Merino Leather Upholstery', desc: 'Hand-fluted luxury leather with integrated headrest badges' }
          ]
        }
      };
    }

    preloadImages() {
      const urls = [
        ...this.frames.map(f => f.src),
        this.specialFrames.top.src,
        this.specialFrames.interior.src
      ];
      urls.forEach(src => {
        if (!src) return;
        const img = new Image();
        img.src = src;
      });
    }

    render() {
      const cur = this.getCurrentFrame();

      this.container.innerHTML = `
        <div class="relative w-full h-full flex flex-col justify-between overflow-hidden bg-[#070709] select-none" id="turntable-root">
          <!-- Ambient Studio Lighting & Grid Floor Backdrop -->
          <div class="absolute inset-0 pointer-events-none">
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1C69D4]/15 via-[#08080b]/90 to-[#050507]"></div>
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#151518_1px,transparent_1px),linear-gradient(to_bottom,#151518_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-25"></div>
            <!-- Ground Spotlight Glow -->
            <div class="absolute bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[#1C69D4]/20 blur-3xl rounded-full pointer-events-none"></div>
          </div>

          <!-- Top Floating Angle / Mode Indicator Badge -->
          <div class="absolute top-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/15 shadow-2xl">
            <span class="w-2 h-2 rounded-full bg-[#1C69D4] animate-pulse"></span>
            <span id="turntable-angle-badge" class="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-white font-bold">
              ${cur.degLabel} • ${cur.label}
            </span>
            <span class="text-[10px] text-neutral-400 font-mono hidden md:inline border-l border-white/20 pl-2">
              DRAG TO ROTATE IN 360°
            </span>
          </div>

          <!-- Camera & Turntable Control Toolbar (Left Side) -->
          <div class="absolute top-4 left-4 z-30 flex flex-col gap-2">
            <button id="btn-turntable-autorotate" title="Toggle 360° Auto-Spin" class="p-2.5 rounded-sm bg-black/70 hover:bg-[#1C69D4] text-white border border-white/15 backdrop-blur-md transition-all shadow-lg flex items-center justify-center">
              <i data-lucide="rotate-cw" class="w-4 h-4"></i>
            </button>
            <button id="btn-turntable-zoomin" title="Zoom In Inspection" class="p-2.5 rounded-sm bg-black/70 hover:bg-[#1C69D4] text-white border border-white/15 backdrop-blur-md transition-all shadow-lg flex items-center justify-center">
              <i data-lucide="zoom-in" class="w-4 h-4"></i>
            </button>
            <button id="btn-turntable-zoomout" title="Zoom Out" class="p-2.5 rounded-sm bg-black/70 hover:bg-[#1C69D4] text-white border border-white/15 backdrop-blur-md transition-all shadow-lg flex items-center justify-center">
              <i data-lucide="zoom-out" class="w-4 h-4"></i>
            </button>
            <button id="btn-turntable-reset" title="Reset View" class="p-2.5 rounded-sm bg-black/70 hover:bg-[#1C69D4] text-white border border-white/15 backdrop-blur-md transition-all shadow-lg flex items-center justify-center">
              <i data-lucide="rotate-ccw" class="w-4 h-4"></i>
            </button>
            <button id="btn-turntable-fullscreen" title="Toggle Fullscreen" class="p-2.5 rounded-sm bg-black/70 hover:bg-[#1C69D4] text-white border border-white/15 backdrop-blur-md transition-all shadow-lg flex items-center justify-center">
              <i data-lucide="maximize-2" class="w-4 h-4"></i>
            </button>
          </div>

          <!-- Drag Instructions Hint (Top Right) -->
          <div class="absolute top-4 right-4 z-30 pointer-events-none hidden sm:flex items-center gap-2 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-[10px] font-mono text-neutral-300 shadow-lg">
            <i data-lucide="move-horizontal" class="w-3.5 h-3.5 text-[#1C69D4]"></i>
            <span>DRAG HORIZONTALLY TO SPIN • DOUBLE CLICK TO ZOOM</span>
          </div>

          <!-- Main Real Car Viewport Stage -->
          <div id="realcar-stage" class="relative flex-1 flex items-center justify-center p-3 sm:p-6 cursor-grab active:cursor-grabbing overflow-hidden">
            <div id="realcar-wrapper" class="relative max-w-5xl max-h-[82vh] w-full flex items-center justify-center transition-transform duration-150 ease-out">
              <img 
                id="realcar-image" 
                src="${cur.src}" 
                alt="${this.model.name} — ${cur.label}" 
                class="max-h-[58vh] sm:max-h-[66vh] w-auto max-w-full object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] filter transition-all duration-300 pointer-events-none select-none ${cur.flip ? '-scale-x-100' : ''}" 
              />

              <!-- Interactive Pulse Hotspots -->
              <div id="realcar-hotspots" class="absolute inset-0 pointer-events-none">
                ${this.renderHotspotsHTML(cur)}
              </div>
            </div>
          </div>

          <!-- Interactive Degree Scrubber & Turntable Control Bar (Bottom) -->
          <div class="relative z-30 px-4 sm:px-8 py-3 bg-[#0a0a0d]/95 border-t border-white/10 backdrop-blur-xl">
            <div class="max-w-4xl mx-auto space-y-2.5">
              
              <!-- Degree Markers -->
              <div class="grid grid-cols-6 gap-1 text-center text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                <button onclick="window.BMWPages.currentViewer?.setAngle('front')" class="hover:text-white py-1 transition-colors ${cur.key === 'front' ? 'text-[#1C69D4] font-bold' : ''}">0° Front</button>
                <button onclick="window.BMWPages.currentViewer?.setAngle('front34')" class="hover:text-white py-1 transition-colors ${cur.key === 'front34' ? 'text-[#1C69D4] font-bold' : ''}">45° 3/4</button>
                <button onclick="window.BMWPages.currentViewer?.setAngle('side')" class="hover:text-white py-1 transition-colors ${cur.key === 'side' ? 'text-[#1C69D4] font-bold' : ''}">90° Profile</button>
                <button onclick="window.BMWPages.currentViewer?.setAngle('rear34')" class="hover:text-white py-1 transition-colors ${cur.key === 'rear34' ? 'text-[#1C69D4] font-bold' : ''}">135° 3/4</button>
                <button onclick="window.BMWPages.currentViewer?.setAngle('rear')" class="hover:text-white py-1 transition-colors ${cur.key === 'rear' ? 'text-[#1C69D4] font-bold' : ''}">180° Rear</button>
                <button onclick="window.BMWPages.currentViewer?.setAngle('sideOpposite')" class="hover:text-white py-1 transition-colors ${cur.key === 'sideOpposite' ? 'text-[#1C69D4] font-bold' : ''}">270° Left</button>
              </div>

              <!-- Range Scrubber Bar -->
              <div class="relative flex items-center">
                <input 
                  type="range" 
                  id="realcar-scrubber" 
                  min="0" 
                  max="5" 
                  step="1" 
                  value="${typeof this.currentIndex === 'number' ? this.currentIndex : 1}" 
                  class="w-full h-1.5 bg-[#1f1f26] rounded-lg appearance-none cursor-pointer accent-[#1C69D4]"
                />
              </div>

              <!-- Quick Special View Tabs -->
              <div class="flex items-center justify-between pt-1">
                <div class="flex items-center gap-2">
                  <span class="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">Special Presets:</span>
                  <button onclick="window.BMWPages.currentViewer?.setAngle('top')" class="px-2.5 py-1 rounded-xs border text-[10px] font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${cur.key === 'top' ? 'bg-[#1C69D4] border-[#1C69D4] text-white font-bold' : 'bg-[#151518] border-[#292930] text-amber-400 hover:text-white'}">
                    <i data-lucide="arrow-up" class="w-3 h-3"></i>
                    <span>Top Aerial (90°)</span>
                  </button>
                  <button onclick="window.BMWPages.currentViewer?.setAngle('interior')" class="px-2.5 py-1 rounded-xs border text-[10px] font-mono uppercase tracking-wider transition-all flex items-center gap-1.5 ${cur.key === 'interior' ? 'bg-[#1C69D4] border-[#1C69D4] text-white font-bold' : 'bg-[#151518] border-[#292930] text-neutral-300 hover:text-white'}">
                    <i data-lucide="eye" class="w-3 h-3"></i>
                    <span>Cockpit 360°</span>
                  </button>
                </div>

                <div class="flex items-center gap-2">
                  <button onclick="window.BMWPages.currentViewer?.prev()" class="p-1 px-2 rounded-xs bg-[#18181c] hover:bg-[#1C69D4] text-neutral-300 hover:text-white text-xs border border-white/10 transition-colors" title="Previous Angle">
                    <i data-lucide="chevron-left" class="w-3.5 h-3.5 inline"></i>
                  </button>
                  <button onclick="window.BMWPages.currentViewer?.next()" class="p-1 px-2 rounded-xs bg-[#18181c] hover:bg-[#1C69D4] text-neutral-300 hover:text-white text-xs border border-white/10 transition-colors" title="Next Angle">
                    <i data-lucide="chevron-right" class="w-3.5 h-3.5 inline"></i>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      `;

      if (window.lucide) window.lucide.createIcons();
    }

    renderHotspotsHTML(frame) {
      if (!frame || !frame.hotspots) return '';
      return frame.hotspots.map(h => `
        <div class="absolute group pointer-events-auto cursor-pointer" style="left: ${h.x}%; top: ${h.y}%; transform: translate(-50%, -50%);">
          <span class="w-5 h-5 rounded-full bg-[#1C69D4] opacity-75 flex items-center justify-center animate-ping absolute"></span>
          <span class="w-5 h-5 rounded-full bg-[#1C69D4] border-2 border-white flex items-center justify-center text-[10px] font-bold text-white relative shadow-lg">
            ${h.num}
          </span>
          <div class="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-black/95 border border-white/20 text-white text-[11px] p-2.5 rounded-xs whitespace-nowrap z-40 shadow-2xl backdrop-blur-md">
            <strong class="text-[#1C69D4] block font-heading text-xs tracking-wide">${h.title}</strong>
            <span class="text-neutral-300 text-[10px] block mt-0.5">${h.desc}</span>
          </div>
        </div>
      `).join('');
    }

    getCurrentFrame() {
      if (typeof this.currentIndex === 'string') {
        return this.specialFrames[this.currentIndex] || this.frames[0];
      }
      return this.frames[this.currentIndex] || this.frames[0];
    }

    bindEvents() {
      const stage = document.getElementById('realcar-stage');
      const scrubber = document.getElementById('realcar-scrubber');

      // 1. Mouse Dragging on Stage
      stage?.addEventListener('mousedown', (e) => {
        this.isDragging = true;
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
        this.lastDragX = e.clientX;
        this.lastDragY = e.clientY;
        this.accumulatedX = 0;
        if (this.isAutoRotating) this.stopAutoRotate();
      });

      window.addEventListener('mouseup', () => {
        this.isDragging = false;
      });

      window.addEventListener('mousemove', (e) => {
        if (!this.isDragging) return;

        if (this.zoomLevel > 1.0) {
          // Pan when zoomed
          const dx = e.clientX - this.lastDragX;
          const dy = e.clientY - this.lastDragY;
          this.panX += dx;
          this.panY += dy;
          this.lastDragX = e.clientX;
          this.lastDragY = e.clientY;
          this.updateTransform();
          return;
        }

        const delta = e.clientX - this.lastDragX;
        this.accumulatedX += delta;
        this.lastDragX = e.clientX;

        // Threshold to step to next or prev frame (35px per step)
        if (this.accumulatedX > 35) {
          this.next();
          this.accumulatedX = 0;
        } else if (this.accumulatedX < -35) {
          this.prev();
          this.accumulatedX = 0;
        }
      });

      // 2. Touch Dragging for Mobile / Tablets
      stage?.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          this.isDragging = true;
          this.dragStartX = e.touches[0].clientX;
          this.dragStartY = e.touches[0].clientY;
          this.lastDragX = e.touches[0].clientX;
          this.lastDragY = e.touches[0].clientY;
          this.accumulatedX = 0;
          if (this.isAutoRotating) this.stopAutoRotate();
        }
      }, { passive: true });

      window.addEventListener('touchend', () => {
        this.isDragging = false;
      });

      window.addEventListener('touchmove', (e) => {
        if (!this.isDragging || e.touches.length !== 1) return;

        if (this.zoomLevel > 1.0) {
          const dx = e.touches[0].clientX - this.lastDragX;
          const dy = e.touches[0].clientY - this.lastDragY;
          this.panX += dx;
          this.panY += dy;
          this.lastDragX = e.touches[0].clientX;
          this.lastDragY = e.touches[0].clientY;
          this.updateTransform();
          return;
        }

        const delta = e.touches[0].clientX - this.lastDragX;
        this.accumulatedX += delta;
        this.lastDragX = e.touches[0].clientX;

        if (this.accumulatedX > 35) {
          this.next();
          this.accumulatedX = 0;
        } else if (this.accumulatedX < -35) {
          this.prev();
          this.accumulatedX = 0;
        }
      }, { passive: true });

      // 3. Double Click on Stage to Toggle Zoom
      stage?.addEventListener('dblclick', () => {
        if (this.zoomLevel > 1.0) {
          this.resetZoom();
        } else {
          this.zoomIn();
        }
      });

      // 4. Scrubber Range Input
      scrubber?.addEventListener('input', (e) => {
        const val = parseInt(e.target.value, 10);
        this.setAngle(val);
      });

      // 5. Toolbar Buttons
      document.getElementById('btn-turntable-autorotate')?.addEventListener('click', () => this.toggleAutoRotate());
      document.getElementById('btn-turntable-zoomin')?.addEventListener('click', () => this.zoomIn());
      document.getElementById('btn-turntable-zoomout')?.addEventListener('click', () => this.zoomOut());
      document.getElementById('btn-turntable-reset')?.addEventListener('click', () => this.resetCamera());
      document.getElementById('btn-turntable-fullscreen')?.addEventListener('click', () => this.toggleFullscreen());
    }

    setAngle(keyOrIndex) {
      if (typeof keyOrIndex === 'string') {
        if (this.specialFrames[keyOrIndex]) {
          this.currentIndex = keyOrIndex;
        } else {
          const idx = this.frames.findIndex(f => f.key === keyOrIndex);
          if (idx !== -1) this.currentIndex = idx;
        }
      } else if (typeof keyOrIndex === 'number') {
        const total = this.frames.length;
        this.currentIndex = ((keyOrIndex % total) + total) % total;
      }

      this.updateView();
    }

    next() {
      if (typeof this.currentIndex === 'string') {
        this.currentIndex = 0;
      } else {
        this.currentIndex = (this.currentIndex + 1) % this.frames.length;
      }
      this.updateView();
    }

    prev() {
      if (typeof this.currentIndex === 'string') {
        this.currentIndex = this.frames.length - 1;
      } else {
        this.currentIndex = (this.currentIndex - 1 + this.frames.length) % this.frames.length;
      }
      this.updateView();
    }

    updateView() {
      const cur = this.getCurrentFrame();
      const img = document.getElementById('realcar-image');
      const badge = document.getElementById('turntable-angle-badge');
      const scrubber = document.getElementById('realcar-scrubber');
      const hotspotsContainer = document.getElementById('realcar-hotspots');

      if (img) {
        img.src = cur.src;
        img.alt = `${this.model.name} — ${cur.label}`;
        if (cur.flip) {
          img.classList.add('-scale-x-100');
        } else {
          img.classList.remove('-scale-x-100');
        }
      }

      if (badge) {
        badge.textContent = `${cur.degLabel} • ${cur.label}`;
      }

      if (scrubber && typeof this.currentIndex === 'number') {
        scrubber.value = this.currentIndex;
      }

      if (hotspotsContainer) {
        hotspotsContainer.innerHTML = this.renderHotspotsHTML(cur);
      }

      // Update preset buttons in pages.js top bar if present
      document.querySelectorAll('.preset-angle-btn').forEach(btn => {
        const k = btn.getAttribute('data-angle');
        if (k === cur.key) {
          btn.classList.add('bg-[#1C69D4]', 'text-white');
          btn.classList.remove('text-neutral-400');
        } else {
          btn.classList.remove('bg-[#1C69D4]', 'text-white');
          btn.classList.add('text-neutral-400');
        }
      });
    }

    updateTransform() {
      const wrapper = document.getElementById('realcar-wrapper');
      if (wrapper) {
        wrapper.style.transform = `scale(${this.zoomLevel}) translate(${this.panX / this.zoomLevel}px, ${this.panY / this.zoomLevel}px)`;
      }
    }

    zoomIn() {
      this.zoomLevel = Math.min(2.5, this.zoomLevel + 0.4);
      this.updateTransform();
    }

    zoomOut() {
      this.zoomLevel = Math.max(1.0, this.zoomLevel - 0.4);
      if (this.zoomLevel === 1.0) {
        this.panX = 0;
        this.panY = 0;
      }
      this.updateTransform();
    }

    resetZoom() {
      this.zoomLevel = 1.0;
      this.panX = 0;
      this.panY = 0;
      this.updateTransform();
    }

    resetCamera() {
      this.resetZoom();
      this.setAngle('front34');
    }

    toggleAutoRotate() {
      if (this.isAutoRotating) {
        this.stopAutoRotate();
      } else {
        this.startAutoRotate();
      }
    }

    startAutoRotate() {
      this.isAutoRotating = true;
      const btn = document.getElementById('btn-turntable-autorotate');
      btn?.classList.add('bg-[#1C69D4]', 'text-white');
      this.autoRotateTimer = setInterval(() => {
        this.next();
      }, 1600);
    }

    stopAutoRotate() {
      this.isAutoRotating = false;
      const btn = document.getElementById('btn-turntable-autorotate');
      btn?.classList.remove('bg-[#1C69D4]', 'text-white');
      if (this.autoRotateTimer) {
        clearInterval(this.autoRotateTimer);
        this.autoRotateTimer = null;
      }
    }

    toggleFullscreen() {
      const root = document.getElementById('turntable-root') || this.container;
      if (!document.fullscreenElement) {
        root?.requestFullscreen?.();
      } else {
        document.exitFullscreen?.();
      }
    }

    // High compatibility aliases for external callers
    setPresetView(view) {
      this.setAngle(view);
    }

    setPaintColor(hex) {
      this.activeColorHex = hex;
      // Subtle pulse on image to acknowledge color selection
      const img = document.getElementById('realcar-image');
      if (img) {
        img.style.filter = 'brightness(1.15)';
        setTimeout(() => {
          img.style.filter = '';
        }, 250);
      }
    }

    setRimFinish(finish) {
      // Visual feedback
      const img = document.getElementById('realcar-image');
      if (img) {
        img.style.filter = 'contrast(1.1)';
        setTimeout(() => {
          img.style.filter = '';
        }, 250);
      }
    }

    setInteriorTrim(hex) {
      // Switch view directly to interior
      this.setAngle('interior');
    }

    toggleHeadlights() {
      // Flashes the lights
      const img = document.getElementById('realcar-image');
      if (img) {
        img.style.filter = 'drop-shadow(0 0 45px rgba(28,105,212,0.8)) brightness(1.2)';
        setTimeout(() => {
          img.style.filter = '';
        }, 400);
      }
    }

    destroy() {
      this.stopAutoRotate();
      this.container.innerHTML = '';
    }
  }

  // Export as both BMWRealCarTurntable and BMW360CanvasViewer for seamless integration
  window.BMWRealCarTurntable = BMWRealCarTurntable;
  window.BMW360CanvasViewer = BMWRealCarTurntable;
})();
