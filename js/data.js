// BMW LUXURY AUTOMOTIVE SHOWROOM - CENTRALIZED VEHICLE & ATELIER DATA (INDIA)

window.BMWData = {
  MODELS: [
    {
      id: 'm4-competition',
      name: 'BMW M4 Competition Coupé',
      series: 'M Series',
      tagline: 'Pure Motorsport DNA. Uncompromising Power.',
      category: 'M Performance',
      fuelType: 'Petrol',
      startingPriceINR: 15300000,
      heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
      sideImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
      rearImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
      interiorImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85',
      photoAngles: {
        front: 'assets/images/bmw_hero_cinematic.jpg',
        front34: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
        side: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
        rear34: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
        rear: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
        top: 'assets/images/bmw_m4_red_top.jpg',
        interior: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85'
      },
      dimensions: {
        lengthMm: 4794,
        widthMm: 1887,
        heightMm: 1393,
        wheelbaseMm: 2857,
        bootCapacityLiters: 440,
        groundClearanceMm: 120
      },
      performance: {
        acceleration0to100: 3.5,
        horsepower: 510,
        topSpeedKmH: 290,
        torqueNm: 650,
        efficiencyRating: '10.2 kmpl (ARAI certified)'
      },
      variants: [
        {
          id: 'm4-comp-xdrive',
          name: 'M4 Competition Coupé with M xDrive',
          badge: 'M xDrive / 8-Speed M Steptronic',
          engine: '3.0L BMW M TwinPower Turbo S58 Inline 6-Cylinder',
          horsepower: 510,
          torqueNm: 650,
          acceleration0to100: 3.5,
          topSpeedKmH: 290,
          transmission: '8-speed M Steptronic with Drivelogic',
          drivetrain: 'M xDrive',
          fuelEconomyKmpl: 10.2,
          exShowroomPriceINR: 15300000
        },
        {
          id: 'm4-comp-cs',
          name: 'M4 CS Track Edition',
          badge: 'Limited CS / Carbon Lightweight',
          engine: '3.0L BMW M TwinPower Turbo Track Calibrated',
          horsepower: 550,
          torqueNm: 650,
          acceleration0to100: 3.4,
          topSpeedKmH: 302,
          transmission: '8-speed M Steptronic with Track Logic',
          drivetrain: 'M xDrive',
          fuelEconomyKmpl: 9.8,
          exShowroomPriceINR: 18900000
        }
      ],
      availableColours: [
        { id: 'isle-of-man-green', name: 'Isle of Man Green Metallic', hex: '#0a4234', type: 'Metallic', priceDeltaINR: 0, description: 'Iconic BMW M signature emerald pearl lustre.' },
        { id: 'sao-paulo-yellow', name: 'Sao Paulo Yellow', hex: '#e8ef2f', type: 'Solid', priceDeltaINR: 0, description: 'Motorsport high-visibility non-metallic yellow.' },
        { id: 'tanzanite-blue', name: 'Tanzanite Blue II Metallic', hex: '#0f2042', type: 'Metallic', priceDeltaINR: 150000, description: 'BMW Individual oceanic navy with turquoise shimmer.' },
        { id: 'frozen-deep-grey', name: 'Frozen Deep Grey Metallic', hex: '#3b3f44', type: 'Frozen', priceDeltaINR: 380000, description: 'BMW Individual matte satin finish.' },
        { id: 'toronto-red', name: 'Toronto Red Metallic', hex: '#b31818', type: 'Metallic', priceDeltaINR: 0, description: 'High-contrast racing crimson with liquid clearcoat.' },
        { id: 'alpine-white', name: 'Alpine White Solid', hex: '#f5f5f5', type: 'Solid', priceDeltaINR: 0, description: 'Pure classic motorsport white.' }
      ],
      availableWheels: [
        { id: 'wheel-826m-black', name: '19"/20" M Forged Double-spoke 826 M Black', sizeInches: 20, style: '826 M', finish: 'Jet Black Gloss', priceDeltaINR: 0 },
        { id: 'wheel-826m-bicolour', name: '19"/20" M Forged Double-spoke 826 M Bicolour', sizeInches: 20, style: '826 M', finish: 'Black Burnished Face', priceDeltaINR: 120000 },
        { id: 'wheel-1000m-bronze', name: '20"/21" M Performance 1000 M Frozen Gold Bronze', sizeInches: 21, style: '1000 M', finish: 'Frozen Gold Bronze Satin', priceDeltaINR: 420000 }
      ],
      availableInteriors: [
        { id: 'int-kyalami-orange', name: 'Kyalami Orange / Black Full Merino Leather', upholstery: 'Full Merino Leather', colorName: 'Kyalami Orange', colorHex: '#e06612', trimFinish: 'Carbon Fibre High-Gloss', priceDeltaINR: 0 },
        { id: 'int-yas-marina', name: 'Yas Marina Blue / Black Merino with Yellow Accents', upholstery: 'Full Merino Leather', colorName: 'Yas Marina Blue', colorHex: '#2b7fb9', trimFinish: 'Carbon Fibre High-Gloss', priceDeltaINR: 220000 },
        { id: 'int-black-merino', name: 'Black Full Merino Leather', upholstery: 'Full Merino Leather', colorName: 'Obsidian Black', colorHex: '#141414', trimFinish: 'Aluminium Rhombicle Anthracite', priceDeltaINR: 0 },
        { id: 'int-silverstone', name: 'Silverstone / Black Full Merino Leather', upholstery: 'Full Merino Leather', colorName: 'Silverstone Pearl', colorHex: '#d8dadc', trimFinish: 'Carbon Fibre High-Gloss', priceDeltaINR: 180000 }
      ],
      availablePackages: [
        { id: 'pkg-m-carbon-exterior', name: 'M Carbon Exterior Package', category: 'Aesthetics', priceINR: 650000, description: 'Air curtains, mirror caps, rear spoiler and diffuser crafted in exposed hand-laid CFRP.', features: ['Carbon Front Inlets', 'Carbon Mirror Caps', 'Carbon Rear Diffuser', 'Carbon Gurney Flap'] },
        { id: 'pkg-m-drivers', name: "M Driver's Package", category: 'Performance', priceINR: 320000, description: 'Increases electronic top speed delimiter to 290 km/h and includes BMW M Intensive Driver Training voucher at Buddh Circuit.', features: ['290 km/h Vmax Limit', 'Race Track Driving Voucher'] },
        { id: 'pkg-m-carbon-bucket', name: 'M Carbon Bucket Seats', category: 'Performance', priceINR: 520000, description: 'Weight-reduced carbon shell bucket seats with multipoint harness pass-throughs.', features: ['9.6 kg Weight Reduction', 'Integral Headrest'] }
      ],
      highlights: [
        'Twin-turbocharged S58 straight-six engine with 3D-printed cylinder head core',
        'M xDrive all-wheel drive with selectable 2WD rear-drive drift mode switchable on the fly',
        'Carbon Fibre Reinforced Plastic (CFRP) roof lowering centre of gravity',
        'BMW Curved Display with M-specific telemetry and Drift Analyser'
      ],
      overview: 'The BMW M4 Competition Coupé stands at the pinnacle of high-performance luxury sports cars. Engineered with motorsport precision by BMW M GmbH, its high-revving 510 HP twin-turbo engine launches from 0 to 100 km/h in an explosive 3.5 seconds.'
    },
    {
      id: '7-series-sedan',
      name: 'BMW 7 Series Sedan',
      series: '7 Series',
      tagline: 'Forwardism. The Zenith of Automotive Splendour.',
      category: 'Sedan',
      fuelType: 'Petrol',
      startingPriceINR: 18200000,
      heroImage: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1600&q=85',
      sideImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85',
      rearImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
      interiorImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
      dimensions: {
        lengthMm: 5391,
        widthMm: 1950,
        heightMm: 1544,
        wheelbaseMm: 3215,
        bootCapacityLiters: 540,
        groundClearanceMm: 140
      },
      performance: {
        acceleration0to100: 5.4,
        horsepower: 381,
        topSpeedKmH: 250,
        torqueNm: 520,
        efficiencyRating: '12.6 kmpl (Mild Hybrid 48V)'
      },
      variants: [
        {
          id: '740i-m-sport',
          name: '740i M Sport',
          badge: '3.0L Turbo / 48V Mild Hybrid',
          engine: '3.0L BMW TwinPower Turbo Inline 6-Cylinder with 48V Mild Hybrid',
          horsepower: 381,
          torqueNm: 520,
          acceleration0to100: 5.4,
          topSpeedKmH: 250,
          transmission: '8-speed Steptronic Sport',
          drivetrain: 'Rear-Wheel Drive (sDrive)',
          fuelEconomyKmpl: 12.6,
          exShowroomPriceINR: 18200000
        },
        {
          id: '740d-m-sport',
          name: '740d xDrive M Sport',
          badge: '3.0L Straight-6 Diesel / xDrive',
          engine: '3.0L BMW TwinPower Turbo Diesel with 48V Mild Hybrid',
          horsepower: 286,
          torqueNm: 650,
          acceleration0to100: 6.0,
          topSpeedKmH: 250,
          transmission: '8-speed Steptronic Sport',
          drivetrain: 'All-Wheel Drive (xDrive)',
          fuelEconomyKmpl: 16.5,
          exShowroomPriceINR: 18600000
        }
      ],
      availableColours: [
        { id: 'dravit-grey', name: 'Dravit Grey Metallic', hex: '#48494b', type: 'Metallic', priceDeltaINR: 0, description: 'Slate grey with warm golden flakes under sunlight.' },
        { id: 'black-sapphire', name: 'Black Sapphire Metallic', hex: '#111215', type: 'Metallic', priceDeltaINR: 0, description: 'Deep timeless obsidian black with intense optical reflection.' },
        { id: 'mineral-white', name: 'Mineral White Metallic', hex: '#f0f0f2', type: 'Metallic', priceDeltaINR: 0, description: 'Pure white pearl with multi-layered iridescent depth.' },
        { id: 'two-tone-sapphire-cashmere', name: 'BMW Individual Two-Tone Sapphire Black / Cashmere Silver', hex: '#313338', type: 'Individual', priceDeltaINR: 1450000, description: 'Hand-painted dual tone finish with hand-painted coachline.' }
      ],
      availableWheels: [
        { id: 'wheel-907m', name: '20" M Aerodynamic Style 907 M Bicolour', sizeInches: 20, style: '907 M', finish: 'Gunmetal Polished', priceDeltaINR: 0 },
        { id: 'wheel-910-individual', name: '21" BMW Individual Aerodynamic 910 Multispoke', sizeInches: 21, style: '910 Individual', finish: 'Titanium Bronze Burnished', priceDeltaINR: 350000 }
      ],
      availableInteriors: [
        { id: 'int-tartufo-merino', name: 'BMW Individual Merino Tartufo Leather', upholstery: 'Individual Full Merino', colorName: 'Tartufo Warm Caramel', colorHex: '#8b4513', trimFinish: 'Mirror-finish Fine Oak Grey Metallic', priceDeltaINR: 0 },
        { id: 'int-smoke-white-cashmere', name: 'Merino Leather & Cashmere Wool Blend Smoke White', upholstery: 'Bespoke Cashmere Wool & Merino', colorName: 'Smoke White & Slate', colorHex: '#e4e2de', trimFinish: 'Carbon Fibre with Silver Threads', priceDeltaINR: 580000 }
      ],
      availablePackages: [
        { id: 'pkg-theatre-screen', name: 'BMW Theatre Screen 31.3" with Amazon Fire TV', category: 'Technology', priceINR: 690000, description: 'Retractable 8K ultra-wide panoramic ceiling display with 5.5" Touch Command door remotes.', features: ['31.3" 8K Panoramic Screen', 'Bowers & Wilkins 4D Diamond Audio'] },
        { id: 'pkg-executive-lounge', name: 'Executive Lounge Seating', category: 'Comfort', priceINR: 880000, description: 'First-class rear seat with continuous legrest and 42.5° recline angle.', features: ['Continuous Ottoman Legrest', '42.5 Degree Zero-Gravity Recline'] }
      ],
      highlights: [
        'Iconic Glow illuminated radiator grille and crystal Swarovski headlamps',
        'Panoramic Sky Lounge LED roof with illuminated dynamic light threads',
        'BMW Interaction Bar with faceted crystalline backlit controls',
        'Executive Drive Pro active roll stabilization'
      ],
      overview: 'The new BMW 7 Series redefines modern luxury leadership. With monumental presence, crystal headlights, the groundbreaking 31.3-inch Theatre Screen, and unmatched rear executive lounge space.'
    },
    {
      id: 'x7-sav',
      name: 'BMW X7 Luxury SAV',
      series: 'X Series',
      tagline: 'Presidential Stature. Unrivalled Three-Row Luxury.',
      category: 'SUV / SAV',
      fuelType: 'Petrol',
      startingPriceINR: 13000000,
      heroImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85',
      sideImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=85',
      rearImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85',
      interiorImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
      dimensions: {
        lengthMm: 5181,
        widthMm: 2000,
        heightMm: 1835,
        wheelbaseMm: 3105,
        bootCapacityLiters: 750,
        groundClearanceMm: 221
      },
      performance: {
        acceleration0to100: 5.8,
        horsepower: 381,
        topSpeedKmH: 250,
        torqueNm: 520,
        efficiencyRating: '11.3 kmpl (ARAI certified)'
      },
      variants: [
        {
          id: 'x7-xdrive40i-m-sport',
          name: 'X7 xDrive40i M Sport',
          badge: '3.0L TwinPower Turbo / 48V Mild Hybrid',
          engine: '3.0L BMW TwinPower Turbo 6-Cylinder',
          horsepower: 381,
          torqueNm: 520,
          acceleration0to100: 5.8,
          topSpeedKmH: 250,
          transmission: '8-speed Steptronic Sport with xDrive',
          drivetrain: 'All-Wheel Drive (xDrive)',
          fuelEconomyKmpl: 11.3,
          exShowroomPriceINR: 13000000
        },
        {
          id: 'x7-xdrive40d-m-sport',
          name: 'X7 xDrive40d M Sport',
          badge: '3.0L TwinPower Turbo Diesel / 700 Nm',
          engine: '3.0L BMW TwinPower Turbo 6-Cylinder Diesel',
          horsepower: 340,
          torqueNm: 700,
          acceleration0to100: 5.9,
          topSpeedKmH: 245,
          transmission: '8-speed Steptronic Sport with xDrive',
          drivetrain: 'All-Wheel Drive (xDrive)',
          fuelEconomyKmpl: 14.3,
          exShowroomPriceINR: 13200000
        }
      ],
      availableColours: [
        { id: 'mineral-white-x7', name: 'Mineral White Metallic', hex: '#f2f2f4', type: 'Metallic', priceDeltaINR: 0, description: 'Lustrous multi-coat pearl white.' },
        { id: 'carbon-black-x7', name: 'Carbon Black Metallic', hex: '#141824', type: 'Metallic', priceDeltaINR: 0, description: 'Midnight navy with deep black undertones.' },
        { id: 'tanzanite-blue-x7', name: 'Tanzanite Blue II Metallic', hex: '#0f2042', type: 'Metallic', priceDeltaINR: 180000, description: 'Deep royal blue with shimmering azure reflections.' }
      ],
      availableWheels: [
        { id: 'wheel-755m', name: '21" M Light Alloy Double-spoke 755 M Bicolour', sizeInches: 21, style: '755 M', finish: 'Diamond Cut', priceDeltaINR: 0 },
        { id: 'wheel-758i', name: '22" BMW Individual Y-spoke 758 I Bicolour', sizeInches: 22, style: '758 I', finish: 'Ferric Grey High Sheen', priceDeltaINR: 280000 }
      ],
      availableInteriors: [
        { id: 'int-tartufo-merino-x7', name: 'BMW Individual Extended Merino Tartufo', upholstery: 'Extended Merino Leather', colorName: 'Tartufo Cognac', colorHex: '#8b4513', trimFinish: 'Fine-wood Fineline Black', priceDeltaINR: 0 },
        { id: 'int-ivory-white-x7', name: 'BMW Individual Extended Merino Ivory White / Atlas Grey', upholstery: 'Extended Merino Leather', colorName: 'Ivory White', colorHex: '#e8e8e6', trimFinish: 'Piano Finish Black', priceDeltaINR: 150000 }
      ],
      availablePackages: [
        { id: 'pkg-captain-seats', name: 'Executive 6-Seater Captain Seat Configuration', category: 'Comfort', priceINR: 220000, description: 'Dual individual second-row armchair luxury seats with dedicated armrests.', features: ['Individual Captain Armchairs', 'Independent Electric Adjustment'] },
        { id: 'pkg-sky-lounge', name: 'Panorama Glass Roof Sky Lounge', category: 'Aesthetics', priceINR: 260000, description: 'Over 15,000 illuminated light points generating a starry night sky ambiance.', features: ['15,000+ LED Light Points'] }
      ],
      highlights: [
        'Two-axle adaptive air suspension with automatic self-levelling and ride height adjustments',
        'Illuminated BMW Iconic Glow kidney grille with split slim Matrix LED headlamps',
        'BMW Curved Display running latest BMW Operating System 8.5 with Augmented View'
      ],
      overview: 'The BMW X7 commands every highway with majestic grace and generous three-row luxury. Handcrafted leather and whisper-quiet acoustic glazing make every Indian journey feel like private aviation on wheels.'
    },
    {
      id: 'i7-xdrive60',
      name: 'BMW i7 All-Electric Flagship',
      series: 'i Series',
      tagline: 'Electric Luxury Reimagined. Zero Emissions. Pure Grandeur.',
      category: 'Electric',
      fuelType: 'Electric',
      startingPriceINR: 20300000,
      heroImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1600&q=85',
      sideImage: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=85',
      rearImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
      interiorImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
      dimensions: {
        lengthMm: 5391,
        widthMm: 1950,
        heightMm: 1544,
        wheelbaseMm: 3215,
        bootCapacityLiters: 500,
        groundClearanceMm: 136
      },
      performance: {
        acceleration0to100: 4.7,
        horsepower: 544,
        topSpeedKmH: 240,
        torqueNm: 745,
        efficiencyRating: '625 km WLTP Range (101.7 kWh)'
      },
      variants: [
        {
          id: 'i7-xdrive60-m-sport',
          name: 'i7 xDrive60 M Sport',
          badge: 'Dual Electric Motors / 101.7 kWh Battery',
          engine: 'BMW 5th Gen eDrive Dual Electric Motors',
          horsepower: 544,
          torqueNm: 745,
          acceleration0to100: 4.7,
          topSpeedKmH: 240,
          transmission: 'Single-speed Automatic per axle',
          drivetrain: 'All-Wheel Drive (xDrive)',
          batteryCapacityKWh: 101.7,
          rangeKm: 625,
          exShowroomPriceINR: 20300000
        }
      ],
      availableColours: [
        { id: 'mineral-white-i7', name: 'Mineral White Metallic', hex: '#f0f0f2', type: 'Metallic', priceDeltaINR: 0, description: 'Lustrous high-gloss pearl with subtle i-Blue accents.' },
        { id: 'oxide-grey', name: 'Oxide Grey Metallic', hex: '#58595a', type: 'Metallic', priceDeltaINR: 0, description: 'Modern titanium grey with Champagne undertones.' },
        { id: 'frozen-tanzanite-blue', name: 'BMW Individual Frozen Tanzanite Blue', hex: '#162e54', type: 'Frozen', priceDeltaINR: 420000, description: 'Matte frozen satin finish capturing light with dramatic softness.' }
      ],
      availableWheels: [
        { id: 'wheel-908m', name: '21" M Aerodynamic 908 M Bicolour', sizeInches: 21, style: '908 M', finish: 'Titanium Grey Aero', priceDeltaINR: 0 }
      ],
      availableInteriors: [
        { id: 'int-smoke-white-i7', name: 'BMW Individual Merino Smoke White / Light Grey', upholstery: 'Full Merino Leather', colorName: 'Smoke White', colorHex: '#e8e7e3', trimFinish: 'Fine Wood Oak Grey', priceDeltaINR: 0 },
        { id: 'int-tartufo-i7', name: 'BMW Individual Merino Tartufo', upholstery: 'Full Merino Leather', colorName: 'Tartufo Warm Caramel', colorHex: '#8b4513', trimFinish: 'Carbon Fibre', priceDeltaINR: 0 }
      ],
      availablePackages: [
        { id: 'pkg-theatre-suite', name: 'BMW Rear-Seat Entertainment Professional 31.3"', category: 'Technology', priceINR: 690000, description: '31.3" ultra-wide panoramic 8K display with Bowers & Wilkins 4D audio.', features: ['8K Resolution Screen', '4D Audio Seat Shakers'] }
      ],
      highlights: [
        'Over 625 km WLTP pure electric range with 195 kW DC ultra-fast charging',
        'Hans Zimmer composed BMW IconicSounds Electric soundscapes responsive to drive modes',
        'Automatic power doors opening and closing automatically on sensing your approach'
      ],
      overview: 'The BMW i7 is the world’s most progressive luxury electric saloon. Merging emission-free twin-motor silence with Swarovski crystal aesthetics, the monolithic 31.3-inch Theatre Screen, and Hans Zimmer driving acoustic art.'
    },
    {
      id: 'm8-gran-coupe',
      name: 'BMW M8 Competition Gran Coupé',
      series: 'M Series',
      tagline: 'The Ultimate Grand Tourer. 625 HP of Pure Authority.',
      category: 'M Performance',
      fuelType: 'Petrol',
      startingPriceINR: 24400000,
      heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
      sideImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
      rearImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
      interiorImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85',
      photoAngles: {
        front: 'assets/images/bmw_hero_cinematic.jpg',
        front34: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
        side: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
        rear34: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
        rear: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
        top: 'assets/images/bmw_m4_red_top.jpg',
        interior: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85'
      },
      dimensions: {
        lengthMm: 5098,
        widthMm: 1943,
        heightMm: 1420,
        wheelbaseMm: 3027,
        bootCapacityLiters: 440,
        groundClearanceMm: 128
      },
      performance: {
        acceleration0to100: 3.2,
        horsepower: 625,
        topSpeedKmH: 305,
        torqueNm: 750,
        efficiencyRating: '8.77 kmpl (V8 TwinPower Turbo)'
      },
      variants: [
        {
          id: 'm8-comp-gc',
          name: 'M8 Competition Gran Coupé',
          badge: '4.4L Twin-Turbo V8 / M xDrive',
          engine: '4.4L BMW M TwinPower Turbo 90° V8 with Cross-Bank Exhaust Manifold',
          horsepower: 625,
          torqueNm: 750,
          acceleration0to100: 3.2,
          topSpeedKmH: 305,
          transmission: '8-speed M Steptronic with Drivelogic',
          drivetrain: 'M xDrive',
          fuelEconomyKmpl: 8.77,
          exShowroomPriceINR: 24400000
        }
      ],
      availableColours: [
        { id: 'frozen-marina-bay-blue', name: 'BMW Individual Frozen Marina Bay Blue', hex: '#1d488f', type: 'Frozen', priceDeltaINR: 350000, description: 'Velvet matte cobalt blue.' },
        { id: 'motegi-red', name: 'Motegi Red Metallic', hex: '#931818', type: 'Metallic', priceDeltaINR: 0, description: 'Deep crimson with vivid copper reflection.' }
      ],
      availableWheels: [
        { id: 'wheel-813m', name: '20" M Light Alloy Star-spoke 813 M Bicolour', sizeInches: 20, style: '813 M', finish: 'Gloss Black Burnished', priceDeltaINR: 0 }
      ],
      availableInteriors: [
        { id: 'int-sakhir-orange-m8', name: 'Full Leather Merino Sakhir Orange / Black', upholstery: 'Full Merino Leather', colorName: 'Sakhir Orange', colorHex: '#cf4620', trimFinish: 'Carbon Fibre High-Gloss', priceDeltaINR: 0 }
      ],
      availablePackages: [
        { id: 'pkg-m-carbon-ceramic', name: 'M Carbon Ceramic Braking System', category: 'Performance', priceINR: 1100000, description: 'Fade-free motorsport carbon ceramic brake rotors with Gold painted 6-piston fixed calipers.', features: ['Weight Saving of 23 kg', 'Fade-Free Track Performance'] }
      ],
      highlights: [
        '4.4-litre high-revving M TwinPower Turbo V8 outputting 625 HP and 750 Nm of torque',
        'M xDrive intelligent all-wheel-drive system with selectable 2WD rear-wheel-drive drift mode'
      ],
      overview: 'The BMW M8 Competition Gran Coupé combines supercar acceleration with executive four-door luxury, sprinting to 100 km/h in an awe-inspiring 3.2 seconds.'
    },
    {
      id: 'i4-gran-coupe',
      name: 'BMW i4 All-Electric Gran Coupé',
      series: 'i Series',
      tagline: 'Electrified Dynamism. 590 km of Zero-Emission Thrill.',
      category: 'Electric',
      fuelType: 'Electric',
      startingPriceINR: 7250000,
      heroImage: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1600&q=85',
      sideImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85',
      rearImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
      interiorImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85',
      photoAngles: {
        front: 'assets/images/bmw_hero_cinematic.jpg',
        front34: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
        side: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
        rear34: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
        rear: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
        top: 'assets/images/bmw_m4_red_top.jpg',
        interior: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85'
      },
      dimensions: {
        lengthMm: 4783,
        widthMm: 1852,
        heightMm: 1448,
        wheelbaseMm: 2856,
        bootCapacityLiters: 470,
        groundClearanceMm: 125
      },
      performance: {
        acceleration0to100: 5.7,
        horsepower: 340,
        topSpeedKmH: 190,
        torqueNm: 430,
        efficiencyRating: '590 km WLTP Range (83.9 kWh)'
      },
      variants: [
        {
          id: 'i4-edrive40',
          name: 'i4 eDrive40 M Sport',
          badge: 'Rear-Wheel Drive / 83.9 kWh Battery',
          engine: 'BMW 5th Gen eDrive Electrically Excited Motor',
          horsepower: 340,
          torqueNm: 430,
          acceleration0to100: 5.7,
          topSpeedKmH: 190,
          transmission: 'Single-speed transmission',
          drivetrain: 'Rear-Wheel Drive (sDrive)',
          batteryCapacityKWh: 83.9,
          rangeKm: 590,
          exShowroomPriceINR: 7250000
        }
      ],
      availableColours: [
        { id: 'portimao-blue-i4', name: 'M Portimao Blue Metallic', hex: '#164893', type: 'Metallic', priceDeltaINR: 0, description: 'Sporty vibrant blue.' },
        { id: 'brooklyn-grey', name: 'M Brooklyn Grey Metallic', hex: '#63676d', type: 'Metallic', priceDeltaINR: 0, description: 'Motorsport chalk grey.' }
      ],
      availableWheels: [
        { id: 'wheel-859m', name: '19" M Aerodynamic 859 M Bicolour', sizeInches: 19, style: '859 M', finish: 'Bicolour Jet Black Diamond Cut', priceDeltaINR: 0 }
      ],
      availableInteriors: [
        { id: 'int-cognac-sensatec', name: 'Sensatec Perforated Cognac', upholstery: 'Sensatec Perforated', colorName: 'Cognac Saddle', colorHex: '#9e5d26', trimFinish: 'Aluminium Rhombicle Anthracite', priceDeltaINR: 0 }
      ],
      availablePackages: [
        { id: 'pkg-harman-i4', name: 'Harman Kardon Surround Sound 464W', category: 'Technology', priceINR: 120000, description: '17 high-fidelity speakers delivering immersive acoustics.', features: ['17 Speakers'] }
      ],
      highlights: [
        'Class-leading 590 km driving range on a single charge with 205 kW DC fast charging',
        'Slim 11 cm high-voltage floor battery maintaining an ultra-low aerodynamic silhouette'
      ],
      overview: 'The BMW i4 is the first all-electric Gran Coupé from BMW, combining agile proportions with instantaneous electric torque and class-leading real-world range.'
    },
    {
      id: '3-series-gl',
      name: 'BMW 3 Series Gran Limousine',
      series: '3 Series',
      tagline: 'Elevated Stride. Class-Leading Rear Legroom.',
      category: 'Sedan',
      fuelType: 'Petrol',
      startingPriceINR: 6060000,
      heroImage: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1600&q=85',
      sideImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85',
      rearImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
      interiorImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85',
      dimensions: {
        lengthMm: 4819,
        widthMm: 1827,
        heightMm: 1441,
        wheelbaseMm: 2961,
        bootCapacityLiters: 480,
        groundClearanceMm: 135
      },
      performance: {
        acceleration0to100: 6.2,
        horsepower: 258,
        topSpeedKmH: 250,
        torqueNm: 400,
        efficiencyRating: '15.39 kmpl (ARAI certified)'
      },
      variants: [
        {
          id: '330li-m-sport',
          name: '330Li M Sport',
          badge: '2.0L TwinPower Turbo / 258 HP',
          engine: '2.0L BMW TwinPower Turbo 4-Cylinder Petrol',
          horsepower: 258,
          torqueNm: 400,
          acceleration0to100: 6.2,
          topSpeedKmH: 250,
          transmission: '8-speed Steptronic Sport',
          drivetrain: 'Rear-Wheel Drive (sDrive)',
          fuelEconomyKmpl: 15.39,
          exShowroomPriceINR: 6060000
        },
        {
          id: '320ld-m-sport',
          name: '320Ld M Sport Diesel',
          badge: '2.0L TwinPower Turbo Diesel / 190 HP',
          engine: '2.0L BMW TwinPower Turbo 4-Cylinder Diesel',
          horsepower: 190,
          torqueNm: 400,
          acceleration0to100: 7.6,
          topSpeedKmH: 235,
          transmission: '8-speed Steptronic Sport',
          drivetrain: 'Rear-Wheel Drive (sDrive)',
          fuelEconomyKmpl: 19.61,
          exShowroomPriceINR: 6200000
        }
      ],
      availableColours: [
        { id: 'carbon-black-3gl', name: 'Carbon Black Metallic', hex: '#141824', type: 'Metallic', priceDeltaINR: 0, description: 'Dark midnight metallic.' },
        { id: 'portimao-blue-3gl', name: 'Portimao Blue Metallic', hex: '#164893', type: 'Metallic', priceDeltaINR: 0, description: 'Sporting vibrant blue.' }
      ],
      availableWheels: [
        { id: 'wheel-848m', name: '18" M Light Alloy Double-spoke 848 M Bicolour', sizeInches: 18, style: '848 M', finish: 'Bicolour Jet Black Burnished', priceDeltaINR: 0 }
      ],
      availableInteriors: [
        { id: 'int-cognac-vernasca-3gl', name: 'Leather Vernasca Cognac with Decor Stitching', upholstery: 'Leather Vernasca', colorName: 'Cognac', colorHex: '#9e5d26', trimFinish: 'Fine Wood Oak Grain', priceDeltaINR: 0 }
      ],
      availablePackages: [
        { id: 'pkg-comfort-gl', name: 'Chauffeur Comfort Rear Headrest Cushions', category: 'Comfort', priceINR: 45000, description: 'Plush Alcantara wrapped rear headrest pillows for VIP executive passenger comfort.', features: ['Alcantara Cushions'] }
      ],
      highlights: [
        '110 mm longer wheelbase than standard 3 Series, delivering limousine-grade rear legroom',
        'Panoramic glass sunroof with electric roller blind flooding cabin with natural light'
      ],
      overview: 'The BMW 3 Series Gran Limousine is tailored for discerning Indian luxury car buyers who appreciate being driven by a chauffeur on weekdays and driving the ultimate sports sedan themselves on the weekend.'
    },
    {
      id: 'x5-sav',
      name: 'BMW X5 Luxury SAV',
      series: 'X Series',
      tagline: 'The Boss. Absolute Authority on Every Terrain.',
      category: 'SUV / SAV',
      fuelType: 'Petrol',
      startingPriceINR: 9600000,
      heroImage: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1600&q=85',
      sideImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=85',
      rearImage: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=85',
      interiorImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
      dimensions: {
        lengthMm: 4935,
        widthMm: 2004,
        heightMm: 1765,
        wheelbaseMm: 2975,
        bootCapacityLiters: 650,
        groundClearanceMm: 214
      },
      performance: {
        acceleration0to100: 5.4,
        horsepower: 381,
        topSpeedKmH: 250,
        torqueNm: 520,
        efficiencyRating: '12.0 kmpl (48V Mild Hybrid)'
      },
      variants: [
        {
          id: 'x5-xdrive40i-m-sport',
          name: 'X5 xDrive40i M Sport',
          badge: '3.0L Petrol TwinPower / 381 HP',
          engine: '3.0L BMW TwinPower Turbo 6-Cylinder with 48V Mild Hybrid',
          horsepower: 381,
          torqueNm: 520,
          acceleration0to100: 5.4,
          topSpeedKmH: 250,
          transmission: '8-speed Steptronic Sport with xDrive',
          drivetrain: 'All-Wheel Drive (xDrive)',
          fuelEconomyKmpl: 12.0,
          exShowroomPriceINR: 9600000
        }
      ],
      availableColours: [
        { id: 'carbon-black-x5', name: 'Carbon Black Metallic', hex: '#141824', type: 'Metallic', priceDeltaINR: 0, description: 'Deep midnight blue-black.' },
        { id: 'brooklyn-grey-x5', name: 'M Brooklyn Grey Metallic', hex: '#63676d', type: 'Metallic', priceDeltaINR: 0, description: 'Athletic concrete grey.' }
      ],
      availableWheels: [
        { id: 'wheel-740m', name: '20" M Light Alloy Star-spoke 740 M Bicolour', sizeInches: 20, style: '740 M', finish: 'Bicolour Jet Black High Sheen', priceDeltaINR: 0 }
      ],
      availableInteriors: [
        { id: 'int-tartufo-sensafin-x5', name: 'Sensafin Decor-Quilted Tartufo', upholstery: 'Sensafin Decor-Quilted', colorName: 'Tartufo Warm Caramel', colorHex: '#8b4513', trimFinish: 'Fine Wood Poplar Grain', priceDeltaINR: 0 }
      ],
      availablePackages: [
        { id: 'pkg-air-suspension', name: 'Adaptive 2-Axle Air Suspension', category: 'Performance', priceINR: 280000, description: 'Automatically adjusts vehicle height by up to 80 mm.', features: ['80mm Height Adjustment'] }
      ],
      highlights: [
        'Iconic Glow illuminated radiator grille and arrow-shaped LED daytime running lights',
        'Split-folding automatic two-section electric tailgate with hands-free foot sensor'
      ],
      overview: 'The BMW X5 remains the undisputed benchmark for luxury SAVs worldwide, delivering striking athleticism and unstoppable intelligent xDrive all-wheel drive.'
    }
  ],

  SHOWROOMS: [
    {
      id: 'worli-mumbai',
      city: 'Mumbai',
      name: 'BMW Infinity Signature Atelier — Worli',
      address: 'Ground Floor, Signature Towers, Dr. Annie Besant Road, Worli, Mumbai, Maharashtra 400018',
      phone: '+91 22 6825 8888',
      email: 'atelier.worli@bmw-luxury.in',
      whatsapp: '+919820011223',
      timings: 'Monday – Sunday: 10:00 AM – 8:00 PM'
    },
    {
      id: 'aerocity-delhi',
      city: 'New Delhi',
      name: 'BMW Bird Prestige Lounge — Aerocity',
      address: 'Asset 9, Worldmark 2, Hospitality District, Aerocity, New Delhi, Delhi 110037',
      phone: '+91 11 4987 5555',
      email: 'aerocity@bmw-luxury.in',
      whatsapp: '+919811099887',
      timings: 'Monday – Sunday: 10:00 AM – 8:30 PM'
    },
    {
      id: 'lavelle-bangalore',
      city: 'Bengaluru',
      name: 'BMW Navnit Luxury Pavilion — Lavelle Road',
      address: 'No. 4, Lavelle Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001',
      phone: '+91 80 4345 7777',
      email: 'pavilion.bangalore@bmw-luxury.in',
      whatsapp: '+919900011445',
      timings: 'Monday – Sunday: 10:00 AM – 8:00 PM'
    },
    {
      id: 'kochi-maradu',
      city: 'Kochi',
      name: 'BMW EVM Grand Experience Center — Maradu',
      address: 'NH-66 Bypass, Near Kundannoor Junction, Maradu, Kochi, Kerala 682304',
      phone: '+91 484 411 9999',
      email: 'kochi@bmw-luxury.in',
      whatsapp: '+919846012345',
      timings: 'Monday – Sunday: 9:30 AM – 7:30 PM'
    },
    {
      id: 'hyderabad-jubilee',
      city: 'Hyderabad',
      name: 'BMW KUN Exclusive Pavilion — Jubilee Hills',
      address: 'Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033',
      phone: '+91 40 4646 9999',
      email: 'jubileehills@bmw-luxury.in',
      whatsapp: '+919849099881',
      timings: 'Monday – Sunday: 10:00 AM – 8:00 PM'
    }
  ],

  SERVICES: [
    {
      id: 'new-car-sales',
      title: 'New BMW Vehicle Sales & Bespoke Allocation',
      tagline: 'Private consultations with dedicated BMW Client Advisors.',
      description: 'Experience a tailored vehicle acquisition journey. Access exclusive showroom allocations, priority production slots from Dingolfing and Spartanburg, and bespoke BMW Individual custom order consultations.',
      features: [
        'Dedicated Senior Client Advisor & Private Atelier Consultation Room',
        'Exclusive allocation slots for limited M & Individual editions',
        'Doorstep digital presentation with bespoke material swatches',
        'White-glove ceremonial handover with champagne celebration'
      ],
      image: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=85',
      icon: 'car'
    },
    {
      id: 'test-drive',
      title: 'Bespoke Test Drive Experience',
      tagline: 'Delivered directly to your residence, office, or private test track.',
      description: 'Feel the exhilarating agility of the Ultimate Driving Machine. We bring your preferred BMW model—fully sanitised, fueled, and configured—directly to your doorstep or invite you to an exclusive runway or private circuit drive.',
      features: [
        'Doorstep delivery of test drive vehicle at your preferred hour',
        'Accompanied by a certified BMW Product Genius (no sales pressure)',
        'Choice of dynamic highway routes or urban everyday commute evaluation',
        'Exclusive invitation to BMW M Track Days at Buddh International Circuit'
      ],
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85',
      icon: 'compass'
    },
    {
      id: 'finance-assistance',
      title: 'BMW Financial Services & Custom Leasing',
      tagline: 'Tailored corporate leases, balloon financing, and rapid digital approvals.',
      description: 'Structured financial solutions designed exclusively for high-net-worth individuals and corporate entities. Benefit from flexible tenures, attractive balloon buyback guarantees with BMW 360°, and swift in-house sanctions.',
      features: [
        'BMW 360° Plan with Guaranteed Future Value (GFV) buyback',
        'Bespoke corporate tax-optimised operating and financial leases',
        'Flexible balloon EMI structures aligned with your cash flows',
        'Zero penalty for early closure on selected premium portfolios'
      ],
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=85',
      icon: 'percent'
    },
    {
      id: 'insurance-assistance',
      title: 'BMW Secure Advance & Comprehensive Insurance',
      tagline: 'End-to-end luxury protection with zero depreciation and engine protect.',
      description: 'Protect your investment with BMW Secure Advance. Designed specifically for India, our policies provide Return-to-Invoice coverage, rim and tyre replacement, hydro-lock protection, and seamless cashless claims at all certified BMW workshops.',
      features: [
        '100% Cashless claims across all authorized BMW workshops pan-India',
        'Return to Invoice (RTI) covering ex-showroom price, road tax, and registration',
        'Hydrostatic lock & engine protection against monsoon water ingestion',
        'Complimentary BMW Key & Remote fob replacement guarantee'
      ],
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=85',
      icon: 'shield-check'
    },
    {
      id: 'vehicle-maintenance',
      title: 'BMW Condition Based Service (CBS) & Maintenance',
      tagline: 'Certified Master Technicians, Original BMW Parts, and diagnostic telemetry.',
      description: 'Ensure your BMW delivers peak performance for decades. With sensor-based Condition Based Servicing (CBS), our certified Master Technicians inspect only components requiring attention, utilizing genuine parts with a 2-year warranty.',
      features: [
        'BMW Fast Lane Service — minor service completed in under 90 minutes',
        'BMW Service Inclusive (BSI) packages covering up to 10 years / 2,00,000 km',
        'Factory-calibrated digital chassis alignment & wheel balancing rigs',
        'Complimentary multi-point health check report with transparent video walk-through'
      ],
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=85',
      icon: 'wrench'
    },
    {
      id: 'genuine-accessories',
      title: 'BMW M Performance Parts & Genuine Accessories',
      tagline: 'Wind tunnel-validated aerodynamics, forged alloys, and lifestyle luggage.',
      description: 'Elevate your vehicle’s stance and performance. Browse carbon-fibre aerodynamic splitters, titanium sports exhaust systems with active flaps, forged lightweight M wheels, and authentic BMW lifestyle travel luggage.',
      features: [
        '100% Genuine Carbon-Fibre M Performance aerodynamic components',
        'Akrapovič and BMW M Titanium performance exhaust systems',
        'Child safety seats, all-weather custom fitted floor liners & roof boxes',
        'BMW Montblanc lifestyle collection and leather luggage'
      ],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
      icon: 'sliders'
    },
    {
      id: 'detailing-care',
      title: 'Atelier Detailing, Ceramic Pro 9H & XPEL PPF',
      tagline: 'Paint protection film, multi-stage paint correction, and leather rejuvenation.',
      description: 'Maintain the mirror finish of your BMW. Our climate-controlled detailing atelier applies self-healing XPEL Ultimate Plus Paint Protection Film (PPF), multi-coat 9H ceramic coatings, and deep nourishing treatment for fine Merino leathers.',
      features: [
        'Full-body XPEL Ultimate Plus self-healing PPF with 10-year warranty',
        '9H Matrix Ceramic Quartz coating with extreme hydrophobic gloss',
        'Swissvax and Colourlock leather deep feeding and anti-dye transfer sealant',
        'Underbody anti-corrosion sound-damping protective treatments'
      ],
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85',
      icon: 'sparkles'
    },
    {
      id: 'customer-support',
      title: '24/7 BMW Roadside Concierge & VIP Support',
      tagline: 'Pan-India 24-hour emergency assistance and dedicated relationship management.',
      description: 'Uninterrupted peace of mind wherever your journey takes you across India. Reach our 24/7 dedicated BMW concierge for flat tyre assistance, towing on hydraulic flatbed carriers, replacement luxury transport, or hotel accommodation.',
      features: [
        '24/7 Pan-India toll-free roadside assistance: 1800 102 2269',
        'Damage-free hydraulic flatbed recovery to the nearest authorized workshop',
        'Complimentary chauffeured replacement luxury sedan for on-trip breakdowns',
        'Dedicated Personal Relationship Concierge for all service and booking queries'
      ],
      image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=85',
      icon: 'headphones'
    }
  ],

  TESTIMONIALS: [
    {
      id: 'test-1',
      customerName: 'Vikramaditya Singhania',
      city: 'Mumbai, Maharashtra',
      vehicleModel: 'BMW 740i M Sport',
      deliveryYear: 2026,
      review: 'The delivery experience at the Worli Signature Atelier was peerless. Stepping into the 7 Series with the 31.3" Theatre Screen feels like entering an ultra-modern private jet suite. The executive ride quality through Mumbai’s Coastal Road is sublime.',
      rating: 5,
      customerPhoto: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      verifiedBuyer: true
    },
    {
      id: 'test-2',
      customerName: 'Dr. Ananya Roychowdhury',
      city: 'Bengaluru, Karnataka',
      vehicleModel: 'BMW i7 xDrive60',
      deliveryYear: 2026,
      review: 'Transitioning to pure electric with the i7 was the best automotive decision I have made. It is whisper silent, the range comfortably covers Bengaluru to Coorg without stress, and the Hans Zimmer IconicSounds give every acceleration a cinematic thrill.',
      rating: 5,
      customerPhoto: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      verifiedBuyer: true
    },
    {
      id: 'test-3',
      customerName: 'Rajeev Menon',
      city: 'Kochi, Kerala',
      vehicleModel: 'BMW X7 xDrive40i M Sport',
      deliveryYear: 2025,
      review: 'Our family needed a 6-seater luxury vehicle for road trips through the Western Ghats. The X7’s air suspension absorbs everything our roads throw at it, and the captain seats in the second row provide supreme comfort for long drives.',
      rating: 5,
      customerPhoto: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
      verifiedBuyer: true
    },
    {
      id: 'test-4',
      customerName: 'Samir Malhotra',
      city: 'New Delhi, Delhi NCR',
      vehicleModel: 'BMW M4 Competition Coupé',
      deliveryYear: 2026,
      review: 'The S58 twin-turbo straight-six engine is a mechanical masterpiece. Isle of Man Green turns heads at every red light in Aerocity. The grip of the M xDrive system when switching between road and track mode at Buddh Circuit is staggering.',
      rating: 5,
      customerPhoto: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
      verifiedBuyer: true
    }
  ],

  GALLERY: [
    {
      id: 'gal-1',
      title: 'Ceremonial Handover — BMW 7 Series',
      category: 'deliveries',
      image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85',
      caption: 'Private delivery suite ribbon-cutting with vintage Dom Pérignon and handcrafted leather key presentation.',
      location: 'Worli Signature Atelier, Mumbai',
      aspect: 'landscape'
    },
    {
      id: 'gal-2',
      title: 'Alpine Morning Glow — BMW M4 Competition',
      category: 'lifestyle',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85',
      caption: 'Dawn run through high-altitude switchbacks with Isle of Man Green capturing mountain light.',
      location: 'Leh-Manali Highway Expedition',
      aspect: 'landscape'
    },
    {
      id: 'gal-3',
      title: 'Swarovski Crystal Headlight Macro Architecture',
      category: 'detailing',
      image: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1200&q=85',
      caption: 'Multi-faceted crystal glass lenses with pulsating welcome sequence illumination.',
      location: 'BMW Designworks Studio',
      aspect: 'portrait'
    },
    {
      id: 'gal-4',
      title: 'XPEL Ultimate Plus Self-Healing PPF Application',
      category: 'detailing',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=85',
      caption: 'Clean-room precision installation of 8-mil optical polyurethane protective film.',
      location: 'Bespoke Detailing Bay, Bengaluru',
      aspect: 'landscape'
    },
    {
      id: 'gal-5',
      title: 'Full Merino Leather Cockpit & Interaction Bar',
      category: 'showroom',
      image: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85',
      caption: 'Hand-fluted Tartufo leather with crystalline back-lit capacitive comfort controls.',
      location: 'BMW Flagship Lounge, Aerocity New Delhi',
      aspect: 'portrait'
    },
    {
      id: 'gal-6',
      title: 'M Power Night Apex — M8 Competition',
      category: 'm-performance',
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
      caption: 'Carbon-ceramic brake glow following an aggressive high-speed hot lap on the circuit.',
      location: 'Buddh International Circuit, Greater Noida',
      aspect: 'landscape'
    },
    {
      id: 'gal-7',
      title: 'White-Glove Key Exchange — BMW X7 M Sport',
      category: 'deliveries',
      image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1200&q=85',
      caption: 'Milestone delivery celebration with personalized ownership plaque and concierge briefing.',
      location: 'Jubilee Hills Atelier, Hyderabad',
      aspect: 'landscape'
    },
    {
      id: 'gal-8',
      title: 'Dual-Action 3-Stage Paint Correction & Polish',
      category: 'detailing',
      image: 'https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=1200&q=85',
      caption: 'Microscopic swirl removal achieving a mirror-like 99.8% specular reflection index.',
      location: 'Atelier Detailing Bay, Kochi',
      aspect: 'square'
    },
    {
      id: 'gal-9',
      title: 'Bespoke Atelier Consultation Pod',
      category: 'showroom',
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
      caption: 'Private lounge equipped with high-resolution digital configurator walls and leather swatch archives.',
      location: 'Signature Pavilion, Lavelle Road Bengaluru',
      aspect: 'landscape'
    }
  ],

  STATE_TAXES: {
    'delhi': {
      state: 'Delhi (NCT)',
      city: 'New Delhi',
      rtoPercentIndividual: 0.10,
      rtoPercentCorporate: 0.125,
      mcdParkingCess: 4000
    },
    'maharashtra': {
      state: 'Maharashtra',
      city: 'Mumbai / Pune',
      rtoPercentIndividual: 0.13,
      rtoPercentCorporate: 0.20,
      mcdParkingCess: 0
    },
    'karnataka': {
      state: 'Karnataka',
      city: 'Bengaluru',
      rtoPercentIndividual: 0.18,
      rtoPercentCorporate: 0.20,
      mcdParkingCess: 1000
    },
    'kerala': {
      state: 'Kerala',
      city: 'Kochi / Trivandrum',
      rtoPercentIndividual: 0.15,
      rtoPercentCorporate: 0.20,
      mcdParkingCess: 0
    },
    'tamil-nadu': {
      state: 'Tamil Nadu',
      city: 'Chennai / Coimbatore',
      rtoPercentIndividual: 0.15,
      rtoPercentCorporate: 0.18,
      mcdParkingCess: 0
    },
    'telangana': {
      state: 'Telangana',
      city: 'Hyderabad',
      rtoPercentIndividual: 0.14,
      rtoPercentCorporate: 0.17,
      mcdParkingCess: 0
    }
  },

  calculateOnRoadPrice: function(exShowroomPrice, stateKey, isCorporate, optionalPackagesCost) {
    var tax = window.BMWData.STATE_TAXES[stateKey] || window.BMWData.STATE_TAXES['maharashtra'];
    var rate = isCorporate ? tax.rtoPercentCorporate : tax.rtoPercentIndividual;
    var rto = Math.round(exShowroomPrice * rate) + (tax.mcdParkingCess || 0);
    var ins = Math.round(exShowroomPrice * 0.0325);
    var tcs = Math.round(exShowroomPrice * 0.01);
    var handling = 3500;
    var pkgs = optionalPackagesCost || 0;
    var total = exShowroomPrice + rto + ins + tcs + handling + pkgs;

    return {
      exShowroomPrice: exShowroomPrice,
      rtoStateName: tax.state,
      rtoCharges: rto,
      registrationType: isCorporate ? 'Corporate' : 'Individual',
      comprehensiveInsurance: ins,
      tcsCharges: tcs,
      fastagAndHandling: handling,
      optionalPackagesTotal: pkgs,
      totalEstimatedOnRoadPrice: total
    };
  },

  formatINR: function(amount) {
    if (amount >= 10000000) {
      return '₹' + (amount / 10000000).toFixed(2) + ' Crore';
    } else if (amount >= 100000) {
      return '₹' + (amount / 100000).toFixed(2) + ' Lakh';
    }
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  },

  formatFullINR: function(amount) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(amount);
  }
};
