import { BMWModel } from '../types/bmw';

export const BMW_MODELS: BMWModel[] = [
  {
    id: 'm4-competition',
    name: 'BMW M4 Competition Coupé',
    series: 'M Series',
    tagline: 'Pure Motorsport DNA. Uncompromising Power.',
    category: 'M Performance',
    fuelType: 'Petrol',
    startingPriceINR: 15300000, // ₹1.53 Crore
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
    sideImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
    rearImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
    interiorImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85',
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
      { id: 'isle-of-man-green', name: 'Isle of Man Green Metallic', hex: '#0a4234', type: 'Metallic', priceDeltaINR: 0, description: 'Iconic BMW M launch signature hue with deep emerald pearl lustre.' },
      { id: 'sao-paulo-yellow', name: 'Sao Paulo Yellow', hex: '#e8ef2f', type: 'Solid', priceDeltaINR: 0, description: 'High-visibility non-metallic motorsport yellow.' },
      { id: 'tanzanite-blue', name: 'Tanzanite Blue II Metallic', hex: '#0f2042', type: 'Metallic', priceDeltaINR: 150000, description: 'BMW Individual deep oceanic navy with brilliant turquoise shimmer.' },
      { id: 'frozen-deep-grey', name: 'Frozen Deep Grey Metallic', hex: '#3b3f44', type: 'Frozen', priceDeltaINR: 380000, description: 'BMW Individual matte satin finish engineered for sculpted aero surfaces.' },
      { id: 'toronto-red', name: 'Toronto Red Metallic', hex: '#b31818', type: 'Metallic', priceDeltaINR: 0, description: 'Fiery high-contrast racing red with liquid clearcoat.' },
      { id: 'alpine-white', name: 'Alpine White Solid', hex: '#f5f5f5', type: 'Solid', priceDeltaINR: 0, description: 'Crisp classic motorsport pure white.' }
    ],
    availableWheels: [
      { id: 'wheel-826m-black', name: '19"/20" M Forged Double-spoke 826 M Black', sizeInches: 20, style: '826 M', finish: 'Jet Black Gloss', priceDeltaINR: 0 },
      { id: 'wheel-826m-bicolour', name: '19"/20" M Forged Double-spoke 826 M Bicolour', sizeInches: 20, style: '826 M', finish: 'Black with Burnished Face', priceDeltaINR: 120000 },
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
      { id: 'pkg-m-carbon-bucket', name: 'M Carbon Bucket Seats', category: 'Performance', priceINR: 520000, description: 'Weight-reduced carbon shell bucket seats with multipoint harness pass-throughs and illuminated M badges.', features: ['9.6 kg Weight Reduction', 'Pneumatic Backrest Bolster', 'Integral Headrest'] },
      { id: 'pkg-harman-kardon', name: 'Harman Kardon Surround Sound System', category: 'Technology', priceINR: 180000, description: '464-watt 16-speaker digital amplifier acoustically calibrated for the coupe cockpit.', features: ['16 Speakers', '9-Channel DSP Amplifier'] }
    ],
    highlights: [
      'Twin-turbocharged S58 straight-six engine with 3D-printed cylinder head core',
      'M xDrive all-wheel drive with pure 2WD rear-drive drift mode switchable on the fly',
      'Carbon Fibre Reinforced Plastic (CFRP) roof lowering the centre of gravity',
      'Curved Display with M-specific graphics and Drift Analyser telemetry'
    ],
    overview: 'The BMW M4 Competition Coupé stands at the pinnacle of high-performance luxury sports cars. Engineered with precision by BMW M GmbH, its high-revving 510 HP twin-turbo engine launches from 0 to 100 km/h in an explosive 3.5 seconds, while retaining daily executive usability and exquisite bespoke finishes.'
  },
  {
    id: '7-series-sedan',
    name: 'BMW 7 Series Sedan',
    series: '7 Series',
    tagline: 'Forwardism. The Zenith of Automotive Splendour.',
    category: 'Sedan',
    fuelType: 'Petrol',
    startingPriceINR: 18200000, // ₹1.82 Crore
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
      { id: 'dravit-grey', name: 'Dravit Grey Metallic', hex: '#48494b', type: 'Metallic', priceDeltaINR: 0, description: 'Subtle slate grey with warm golden flakes under sunlight.' },
      { id: 'black-sapphire', name: 'Black Sapphire Metallic', hex: '#111215', type: 'Metallic', priceDeltaINR: 0, description: 'Deep timeless obsidian black with intense optical reflection.' },
      { id: 'mineral-white', name: 'Mineral White Metallic', hex: '#f0f0f2', type: 'Metallic', priceDeltaINR: 0, description: 'Pure white pearl with multi-layered iridescent depth.' },
      { id: 'two-tone-sapphire-cashmere', name: 'BMW Individual Two-Tone Sapphire Black / Cashmere Silver', hex: '#313338', type: 'Individual', priceDeltaINR: 1450000, description: 'Exquisite hand-painted dual tone finish with hand-painted coachline.' }
    ],
    availableWheels: [
      { id: 'wheel-907m', name: '20" M Aerodynamic Style 907 M Bicolour', sizeInches: 20, style: '907 M', finish: 'Gunmetal Polished', priceDeltaINR: 0 },
      { id: 'wheel-910-individual', name: '21" BMW Individual Aerodynamic 910 Multispoke', sizeInches: 21, style: '910 Individual', finish: 'Titanium Bronze Burnished', priceDeltaINR: 350000 }
    ],
    availableInteriors: [
      { id: 'int-tartufo-merino', name: 'BMW Individual Merino Tartufo Leather', upholstery: 'Individual Full Merino', colorName: 'Tartufo Warm Caramel', colorHex: '#8b4513', trimFinish: 'Mirror-finish Fine Oak Grey Metallic', priceDeltaINR: 0 },
      { id: 'int-smoke-white-cashmere', name: 'Merino Leather & Cashmere Wool Blend Smoke White', upholstery: 'Bespoke Cashmere Wool & Merino', colorName: 'Smoke White & Slate', colorHex: '#e4e2de', trimFinish: 'Carbon Fibre with Silver Threads', priceDeltaINR: 580000 },
      { id: 'int-amarone', name: 'BMW Individual Merino Amarone Burgundy', upholstery: 'Individual Full Merino', colorName: 'Amarone Burgundy', colorHex: '#4d1928', trimFinish: 'Fine Wood Fineline Black', priceDeltaINR: 0 }
    ],
    availablePackages: [
      { id: 'pkg-theatre-screen', name: 'BMW Theatre Screen 31.3" with Amazon Fire TV', category: 'Technology', priceINR: 690000, description: 'Retractable 8K ultra-wide panoramic ceiling display with 5.5" Touch Command door remotes.', features: ['31.3" 8K Panoramic Screen', 'Bowers & Wilkins 4D Diamond Audio', 'Touch Command in Rear Doors'] },
      { id: 'pkg-executive-lounge', name: 'Executive Lounge Seating', category: 'Comfort', priceINR: 880000, description: 'First-class rear seat with continuous legrest, 42.5° recline angle, and active ventilation with hot stone massage.', features: ['Continuous Ottoman Legrest', '42.5 Degree Zero-Gravity Recline', 'Hot Stone Massage Programs'] },
      { id: 'pkg-automatic-doors', name: 'Automatic Comfort Closing Doors', category: 'Comfort', priceINR: 240000, description: 'Power-assisted self-opening and closing doors activated via key, display, or brake pedal.', features: ['Ultrasonic Obstacle Detection', 'Foot Brake Close Assist'] }
    ],
    highlights: [
      'Iconic Glow illuminated radiator grille and crystal Swarovski headlamps',
      'Panoramic Sky Lounge LED roof with illuminated dynamic light threads',
      'BMW Interaction Bar with faceted crystalline backlit capacitive controls',
      'Executive Drive Pro active roll stabilization and rear-wheel integral active steering'
    ],
    overview: 'The new BMW 7 Series redefines modern luxury leadership. With monumental presence, crystal headlights, the groundbreaking 31.3-inch Theatre Screen, and unmatched rear executive lounge space, it represents the absolute apex of luxury travel in India.'
  },
  {
    id: 'x7-sav',
    name: 'BMW X7 Luxury SAV',
    series: 'X Series',
    tagline: 'Presidential Stature. Unrivalled Three-Row Luxury.',
    category: 'SUV / SAV',
    fuelType: 'Petrol',
    startingPriceINR: 13000000, // ₹1.30 Crore
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
      { id: 'mineral-white', name: 'Mineral White Metallic', hex: '#f2f2f4', type: 'Metallic', priceDeltaINR: 0, description: 'Lustrous multi-coat pearl white.' },
      { id: 'carbon-black', name: 'Carbon Black Metallic', hex: '#141824', type: 'Metallic', priceDeltaINR: 0, description: 'Rich midnight navy with deep black undertones.' },
      { id: 'tanzanite-blue-x7', name: 'Tanzanite Blue II Metallic', hex: '#0f2042', type: 'Metallic', priceDeltaINR: 180000, description: 'Deep royal blue with shimmering azure reflections.' },
      { id: 'dravit-grey-x7', name: 'Dravit Grey Metallic', hex: '#48494b', type: 'Metallic', priceDeltaINR: 180000, description: 'Refined anthracite with subtle bronze metallic grain.' }
    ],
    availableWheels: [
      { id: 'wheel-755m', name: '21" M Light Alloy Double-spoke 755 M Bicolour', sizeInches: 21, style: '755 M', finish: 'Diamond Cut', priceDeltaINR: 0 },
      { id: 'wheel-758i', name: '22" BMW Individual Y-spoke 758 I Bicolour', sizeInches: 22, style: '758 I', finish: 'Ferric Grey with High Sheen', priceDeltaINR: 280000 }
    ],
    availableInteriors: [
      { id: 'int-tartufo-merino-x7', name: 'BMW Individual Extended Merino Tartufo', upholstery: 'Extended Merino Leather', colorName: 'Tartufo Cognac', colorHex: '#8b4513', trimFinish: 'Fine-wood Fineline Black with Metal Effect', priceDeltaINR: 0 },
      { id: 'int-ivory-white-x7', name: 'BMW Individual Extended Merino Ivory White / Atlas Grey', upholstery: 'Extended Merino Leather', colorName: 'Ivory White', colorHex: '#e8e8e6', trimFinish: 'Piano Finish Black', priceDeltaINR: 150000 },
      { id: 'int-coffee-vernasca', name: 'Leather Vernasca design-perforated Coffee', upholstery: 'Vernasca Leather', colorName: 'Rich Coffee', colorHex: '#422817', trimFinish: 'Fine-wood Oak Grain Anthracite', priceDeltaINR: 0 }
    ],
    availablePackages: [
      { id: 'pkg-captain-seats', name: 'Executive 6-Seater Captain Seat Configuration', category: 'Comfort', priceINR: 220000, description: 'Dual individual second-row armchair luxury seats with dedicated armrests and pass-through aisle.', features: ['Individual Captain Armchairs', 'Independent Electric Adjustment'] },
      { id: 'pkg-sky-lounge', name: 'Panorama Glass Roof Sky Lounge', category: 'Aesthetics', priceINR: 260000, description: 'Over 15,000 illuminated light points generating a starry night sky ambiance matching ambient light theme.', features: ['15,000+ LED Light Points', 'Color Coordinated Ambient Lights'] },
      { id: 'pkg-bowers-wilkins-x7', name: 'Bowers & Wilkins Diamond Surround Sound System', category: 'Technology', priceINR: 480000, description: '20 speakers, 1,475-watt audiophile output with illuminated diamond dome tweeters.', features: ['1,475 Watts Amplification', 'Illuminated Diamond Tweeters'] }
    ],
    highlights: [
      'Two-axle adaptive air suspension with automatic self-levelling and ride height adjustments',
      'Illuminated BMW Iconic Glow kidney grille with split slim Matrix LED headlamps',
      'BMW Curved Display running latest BMW Operating System 8.5 with Augmented View',
      '5-Zone independent climate control with nanofibre particulate air purification filter'
    ],
    overview: 'The BMW X7 commands every highway with majestic grace and generous three-row luxury. Handcrafted leather, two-axle adaptive air suspension, and whisper-quiet acoustic glazing make every Indian journey feel like private aviation on wheels.'
  },
  {
    id: 'i7-xdrive60',
    name: 'BMW i7 All-Electric Flagship',
    series: 'i Series',
    tagline: 'Electric Luxury Reimagined. Zero Emissions. Pure Grandeur.',
    category: 'Electric',
    fuelType: 'Electric',
    startingPriceINR: 20300000, // ₹2.03 Crore
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
        engine: 'BMW 5th Gen eDrive Dual Electric Synchronous Motors',
        horsepower: 544,
        torqueNm: 745,
        acceleration0to100: 4.7,
        topSpeedKmH: 240,
        transmission: 'Single-speed Automatic per axle',
        drivetrain: 'All-Wheel Drive (xDrive)',
        batteryCapacityKWh: 101.7,
        rangeKm: 625,
        exShowroomPriceINR: 20300000
      },
      {
        id: 'i7-m70-xdrive',
        name: 'i7 M70 xDrive (Top Electric Performance)',
        badge: 'M High Performance / 659 HP / 1100 Nm',
        engine: 'BMW M eDrive High Output Dual Motors',
        horsepower: 659,
        torqueNm: 1100,
        acceleration0to100: 3.7,
        topSpeedKmH: 250,
        transmission: 'Single-speed Automatic',
        drivetrain: 'M xDrive',
        batteryCapacityKWh: 101.7,
        rangeKm: 560,
        exShowroomPriceINR: 25000000
      }
    ],
    availableColours: [
      { id: 'mineral-white-i7', name: 'Mineral White Metallic', hex: '#f0f0f2', type: 'Metallic', priceDeltaINR: 0, description: 'Lustrous high-gloss pearl with subtle i-Blue accents.' },
      { id: 'oxide-grey', name: 'Oxide Grey Metallic', hex: '#58595a', type: 'Metallic', priceDeltaINR: 0, description: 'Modern titanium grey with Champagne undertones.' },
      { id: 'tanzanite-blue-i7', name: 'BMW Individual Tanzanite Blue II', hex: '#0f2042', type: 'Metallic', priceDeltaINR: 180000, description: 'Deep electric sapphire blue metallic.' },
      { id: 'frozen-tanzanite-blue', name: 'BMW Individual Frozen Tanzanite Blue', hex: '#162e54', type: 'Frozen', priceDeltaINR: 420000, description: 'Matte frozen satin finish capturing light with dramatic softness.' }
    ],
    availableWheels: [
      { id: 'wheel-908m', name: '21" M Aerodynamic 908 M Bicolour with 3D Polished Inlays', sizeInches: 21, style: '908 M', finish: 'Titanium Grey Aero', priceDeltaINR: 0 },
      { id: 'wheel-910i', name: '21" BMW Individual 910 Aerodynamic Dark Bronze', sizeInches: 21, style: '910 I', finish: 'Dark Bronze Satin', priceDeltaINR: 320000 }
    ],
    availableInteriors: [
      { id: 'int-smoke-white-i7', name: 'BMW Individual Merino Smoke White / Light Grey', upholstery: 'Full Merino Leather', colorName: 'Smoke White', colorHex: '#e8e7e3', trimFinish: 'Fine Wood Oak Grey with Silver Pinstripes', priceDeltaINR: 0 },
      { id: 'int-tartufo-i7', name: 'BMW Individual Merino Tartufo', upholstery: 'Full Merino Leather', colorName: 'Tartufo Warm Caramel', colorHex: '#8b4513', trimFinish: 'Carbon Fibre with Silver Threading', priceDeltaINR: 0 },
      { id: 'int-black-atlas-grey', name: 'BMW Individual Merino Black / Atlas Grey', upholstery: 'Full Merino Leather', colorName: 'Atlas Black', colorHex: '#181a1c', trimFinish: 'Piano Black High Gloss', priceDeltaINR: 0 }
    ],
    availablePackages: [
      { id: 'pkg-theatre-suite', name: 'BMW Rear-Seat Entertainment Professional 31.3"', category: 'Technology', priceINR: 690000, description: '31.3" ultra-wide panoramic 8K display with Bowers & Wilkins 4D audio exciter speakers in seat backrests.', features: ['8K Resolution Screen', '4D Audio Seat Shakers', 'Automated Rear Blinds'] },
      { id: 'pkg-executive-lounge-i7', name: 'Executive Lounge Seating & Console', category: 'Comfort', priceINR: 880000, description: 'Zero-gravity recline with integrated footrest, refrigerated compartment and wireless charging pads.', features: ['Refrigerated Champagne Compartment', 'Wireless Touch Console'] }
    ],
    highlights: [
      'Over 625 km WLTP pure electric range with 195 kW DC ultra-fast charging (10-80% in 34 mins)',
      'Hans Zimmer composed BMW IconicSounds Electric soundscapes responsive to drive modes',
      'Automatic power doors opening and closing automatically on sensing your approach',
      'BMW Interaction Bar running along the dashboard with crystal facets and interactive lighting'
    ],
    overview: 'The BMW i7 is the world’s most progressive luxury electric saloon. Merging emission-free twin-motor silence with Swarovski crystal front aesthetics, the monolithic 31.3-inch Theatre Screen, and Hans Zimmer driving acoustic art.'
  },
  {
    id: 'm8-gran-coupe',
    name: 'BMW M8 Competition Gran Coupé',
    series: 'M Series',
    tagline: 'The Ultimate Grand Tourer. 625 HP of Pure Authority.',
    category: 'M Performance',
    fuelType: 'Petrol',
    startingPriceINR: 24400000, // ₹2.44 Crore
    heroImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=85',
    sideImage: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=85',
    rearImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
    interiorImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85',
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
        id: 'm8-comp-gc-50-jahre',
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
      { id: 'frozen-marina-bay-blue', name: 'BMW Individual Frozen Marina Bay Blue', hex: '#1d488f', type: 'Frozen', priceDeltaINR: 350000, description: 'Velvet matte cobalt blue showing muscular flared wheel arches.' },
      { id: 'motegi-red', name: 'Motegi Red Metallic', hex: '#931818', type: 'Metallic', priceDeltaINR: 0, description: 'Deep crimson with vivid copper reflection under sunlight.' },
      { id: 'isle-of-man-green-m8', name: 'Isle of Man Green Metallic', hex: '#0a4234', type: 'Metallic', priceDeltaINR: 0, description: 'Iconic BMW M emerald sheen with rich depth.' },
      { id: 'black-sapphire-m8', name: 'Black Sapphire Metallic', hex: '#0d0e10', type: 'Metallic', priceDeltaINR: 0, description: 'Lustrous high-gloss piano black.' }
    ],
    availableWheels: [
      { id: 'wheel-813m', name: '20" M Light Alloy Star-spoke 813 M Bicolour', sizeInches: 20, style: '813 M', finish: 'Gloss Black Burnished', priceDeltaINR: 0 },
      { id: 'wheel-811m', name: '20" M Star-spoke 811 M Bicolour Black', sizeInches: 20, style: '811 M', finish: 'Jet Black Gloss', priceDeltaINR: 120000 }
    ],
    availableInteriors: [
      { id: 'int-sakhir-orange-m8', name: 'Full Leather Merino Sakhir Orange / Black', upholstery: 'Full Merino Leather', colorName: 'Sakhir Orange', colorHex: '#cf4620', trimFinish: 'Carbon Fibre High-Gloss', priceDeltaINR: 0 },
      { id: 'int-midrand-beige', name: 'Merino / Alcantara Midrand Beige with Black Contrast', upholstery: 'Merino & Alcantara', colorName: 'Midrand Beige', colorHex: '#d8c29d', trimFinish: 'Carbon Fibre High-Gloss', priceDeltaINR: 180000 }
    ],
    availablePackages: [
      { id: 'pkg-m-carbon-ceramic', name: 'M Carbon Ceramic Braking System', category: 'Performance', priceINR: 1100000, description: 'Fade-free motorsport carbon ceramic brake rotors with Gold painted 6-piston fixed calipers.', features: ['Weight Saving of 23 kg', 'Fade-Free Track Performance', 'Gold M Calipers'] },
      { id: 'pkg-bowers-m8', name: 'Bowers & Wilkins Diamond Surround Sound', category: 'Technology', priceINR: 480000, description: '16 speakers, 1,400 watts with Nautilus diamond tweeters and stainless steel illuminated grilles.', features: ['Nautilus Tweeters', '16-Channel Audio'] }
    ],
    highlights: [
      '4.4-litre high-revving M TwinPower Turbo V8 outputting 625 HP and 750 Nm of torque',
      'M xDrive intelligent all-wheel-drive system with selectable 2WD rear-wheel-drive drift mode',
      'Active M Differential on the rear axle ensuring razor-sharp mechanical grip out of corners',
      'Four-door Gran Coupé silhouette offering generous seating for 4+1 passengers'
    ],
    overview: 'The BMW M8 Competition Gran Coupé combines supercar acceleration with executive four-door luxury. Powered by the legendary 4.4L twin-turbo V8, it launches from standstill to 100 km/h in an awe-inspiring 3.2 seconds.'
  },
  {
    id: 'i4-gran-coupe',
    name: 'BMW i4 All-Electric Gran Coupé',
    series: 'i Series',
    tagline: 'Electrified Dynamism. 590 km of Zero-Emission Thrill.',
    category: 'Electric',
    fuelType: 'Electric',
    startingPriceINR: 7250000, // ₹72.50 Lakh
    heroImage: 'https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=1600&q=85',
    sideImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85',
    rearImage: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
    interiorImage: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85',
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
        engine: 'BMW 5th Gen eDrive Electrically Excited Synchronous Motor',
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
      { id: 'portimao-blue-i4', name: 'M Portimao Blue Metallic', hex: '#164893', type: 'Metallic', priceDeltaINR: 0, description: 'Sporty vibrant blue celebrating BMW dynamic racing heritage.' },
      { id: 'sanremo-green', name: 'Sanremo Green Metallic', hex: '#1b4028', type: 'Metallic', priceDeltaINR: 0, description: 'Earthy luxury dark racing green with rich warmth.' },
      { id: 'brooklyn-grey', name: 'M Brooklyn Grey Metallic', hex: '#63676d', type: 'Metallic', priceDeltaINR: 0, description: 'Contemporary motorsport chalk grey.' },
      { id: 'mineral-white-i4', name: 'Mineral White Metallic', hex: '#f0f0f2', type: 'Metallic', priceDeltaINR: 0, description: 'Elegant shimmering pearl white.' }
    ],
    availableWheels: [
      { id: 'wheel-859m', name: '19" M Aerodynamic 859 M Bicolour', sizeInches: 19, style: '859 M', finish: 'Bicolour Jet Black Diamond Cut', priceDeltaINR: 0 },
      { id: 'wheel-860m', name: '19" M Aerodynamic 860 M Bicolour with Aero Inserts', sizeInches: 19, style: '860 M', finish: 'Burnished Aero', priceDeltaINR: 85000 }
    ],
    availableInteriors: [
      { id: 'int-cognac-sensatec', name: 'Sensatec Perforated Cognac', upholstery: 'Sensatec Perforated', colorName: 'Cognac Saddle', colorHex: '#9e5d26', trimFinish: 'Aluminium Rhombicle Anthracite', priceDeltaINR: 0 },
      { id: 'int-tacora-red', name: 'Sensatec Perforated Tacora Red', upholstery: 'Sensatec Perforated', colorName: 'Tacora Red', colorHex: '#801818', trimFinish: 'Fine Wood Oak Grain Open-Pore', priceDeltaINR: 45000 },
      { id: 'int-black-sensatec', name: 'Sensatec Perforated Black with Blue Stitching', upholstery: 'Sensatec Perforated', colorName: 'Black with Blue Thread', colorHex: '#181818', trimFinish: 'Aluminium Mesh Effect', priceDeltaINR: 0 }
    ],
    availablePackages: [
      { id: 'pkg-comfort-access', name: 'Comfort Access & Digital Key Plus', category: 'Technology', priceINR: 85000, description: 'Unlock via iPhone / Apple Watch Ultra-Wideband (UWB) proximity.', features: ['Digital Key Plus Sharing', 'Hands-Free Tailgate Gesture'] },
      { id: 'pkg-harman-i4', name: 'Harman Kardon Surround Sound 464W', category: 'Technology', priceINR: 120000, description: '17 high-fidelity speakers delivering immersive acoustics throughout the cabin.', features: ['17 Speakers', 'Surround Sound Virtualizer'] }
    ],
    highlights: [
      'Class-leading 590 km driving range on a single charge with 205 kW DC fast charging',
      'Slim 11 cm high-voltage floor battery maintaining an ultra-low aerodynamic silhouette',
      'BMW Curved Display seamlessly combining 12.3" instrument cluster and 14.9" control display',
      'Iconic fastback tailgate revealing 470 litres expandable to 1,290 litres of cargo room'
    ],
    overview: 'The BMW i4 is the first all-electric Gran Coupé from BMW. Combining the balanced proportions and agility of a classic 4 Series Gran Coupé with instantaneous electric torque and class-leading real-world range.'
  },
  {
    id: '3-series-gl',
    name: 'BMW 3 Series Gran Limousine',
    series: '3 Series',
    tagline: 'Elevated Stride. Class-Leading Rear Legroom.',
    category: 'Sedan',
    fuelType: 'Petrol',
    startingPriceINR: 6060000, // ₹60.60 Lakh
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
      { id: 'carbon-black-3gl', name: 'Carbon Black Metallic', hex: '#141824', type: 'Metallic', priceDeltaINR: 0, description: 'Dark midnight metallic reflecting blue highlights.' },
      { id: 'portimao-blue-3gl', name: 'Portimao Blue Metallic', hex: '#164893', type: 'Metallic', priceDeltaINR: 0, description: 'Sporting vibrant metallic blue.' },
      { id: 'skyskraper-grey', name: 'Skyscraper Grey Metallic', hex: '#777b82', type: 'Metallic', priceDeltaINR: 0, description: 'Contemporary high-tech metallic grey.' },
      { id: 'mineral-white-3gl', name: 'Mineral White Metallic', hex: '#f0f0f2', type: 'Metallic', priceDeltaINR: 0, description: 'High-gloss crystalline white.' }
    ],
    availableWheels: [
      { id: 'wheel-848m', name: '18" M Light Alloy Double-spoke 848 M Bicolour', sizeInches: 18, style: '848 M', finish: 'Bicolour Jet Black Burnished', priceDeltaINR: 0 }
    ],
    availableInteriors: [
      { id: 'int-cognac-vernasca-3gl', name: 'Leather Vernasca Cognac with Decor Stitching', upholstery: 'Leather Vernasca', colorName: 'Cognac', colorHex: '#9e5d26', trimFinish: 'Fine Wood Oak Grain Anthracite', priceDeltaINR: 0 },
      { id: 'int-moch-vernasca', name: 'Leather Vernasca Mocha with Decor Stitching', upholstery: 'Leather Vernasca', colorName: 'Rich Mocha', colorHex: '#3d2516', trimFinish: 'Aluminium Rhombicle Anthracite', priceDeltaINR: 0 }
    ],
    availablePackages: [
      { id: 'pkg-comfort-gl', name: 'Chauffeur Comfort Rear Headrest Cushions', category: 'Comfort', priceINR: 45000, description: 'Plush Alcantara wrapped rear headrest pillows for VIP executive passenger comfort.', features: ['Alcantara Cushions', 'Illuminated Door Sills'] },
      { id: 'pkg-harman-3gl', name: 'Harman Kardon Surround Sound System', category: 'Technology', priceINR: 110000, description: '16 high-performance speakers with 464-watt digital amplifier.', features: ['16 Speakers', '464-Watt Amp'] }
    ],
    highlights: [
      '110 mm longer wheelbase than standard 3 Series, delivering limousine-grade rear legroom',
      'Panoramic glass sunroof with electric roller blind flooding the cabin with natural light',
      'BMW Curved Display running Operating System 8 with intelligent voice assistant',
      'Acoustic glazing and rear comfort seats with extra padded seat base cushioning'
    ],
    overview: 'The BMW 3 Series Gran Limousine is specifically tailored for discerning Indian luxury car buyers who appreciate being driven by a chauffeur during weekdays and driving the ultimate sports sedan themselves on the weekend.'
  },
  {
    id: 'x5-sav',
    name: 'BMW X5 Luxury SAV',
    series: 'X Series',
    tagline: 'The Boss. Absolute Authority on Every Terrain.',
    category: 'SUV / SAV',
    fuelType: 'Petrol',
    startingPriceINR: 9600000, // ₹96.00 Lakh
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
      },
      {
        id: 'x5-xdrive30d-m-sport',
        name: 'X5 xDrive30d M Sport',
        badge: '3.0L Diesel TwinPower / 650 Nm',
        engine: '3.0L BMW TwinPower Turbo 6-Cylinder Diesel with 48V Mild Hybrid',
        horsepower: 286,
        torqueNm: 650,
        acceleration0to100: 6.1,
        topSpeedKmH: 243,
        transmission: '8-speed Steptronic Sport with xDrive',
        drivetrain: 'All-Wheel Drive (xDrive)',
        fuelEconomyKmpl: 13.9,
        exShowroomPriceINR: 9800000
      }
    ],
    availableColours: [
      { id: 'carbon-black-x5', name: 'Carbon Black Metallic', hex: '#141824', type: 'Metallic', priceDeltaINR: 0, description: 'Deep midnight blue-black with liquid lustre.' },
      { id: 'brooklyn-grey-x5', name: 'M Brooklyn Grey Metallic', hex: '#63676d', type: 'Metallic', priceDeltaINR: 0, description: 'Sporty athletic satin concrete grey.' },
      { id: 'mineral-white-x5', name: 'Mineral White Metallic', hex: '#f0f0f2', type: 'Metallic', priceDeltaINR: 0, description: 'Pristine metallic pearl white.' },
      { id: 'tanzanite-blue-x5', name: 'BMW Individual Tanzanite Blue II', hex: '#0f2042', type: 'Metallic', priceDeltaINR: 180000, description: 'Exquisite deep metallic sapphire.' }
    ],
    availableWheels: [
      { id: 'wheel-740m', name: '20" M Light Alloy Star-spoke 740 M Bicolour', sizeInches: 20, style: '740 M', finish: 'Bicolour Jet Black High Sheen', priceDeltaINR: 0 },
      { id: 'wheel-741m', name: '21" M Y-spoke 741 M Bicolour', sizeInches: 21, style: '741 M', finish: 'Bicolour Orbit Grey Diamond Cut', priceDeltaINR: 195000 }
    ],
    availableInteriors: [
      { id: 'int-tartufo-sensafin-x5', name: 'Sensafin Decor-Quilted Tartufo', upholstery: 'Sensafin Decor-Quilted', colorName: 'Tartufo Warm Caramel', colorHex: '#8b4513', trimFinish: 'Fine Wood Poplar Grain Anthracite-Brown', priceDeltaINR: 0 },
      { id: 'int-cognac-sensafin-x5', name: 'Sensafin Decor-Quilted Cognac', upholstery: 'Sensafin Decor-Quilted', colorName: 'Cognac Saddle', colorHex: '#9e5d26', trimFinish: 'Aluminium Tetragon', priceDeltaINR: 0 },
      { id: 'int-black-sensafin-x5', name: 'Sensafin Decor-Quilted Black', upholstery: 'Sensafin Decor-Quilted', colorName: 'Obsidian Black', colorHex: '#141414', trimFinish: 'Piano Finish Black', priceDeltaINR: 0 }
    ],
    availablePackages: [
      { id: 'pkg-air-suspension', name: 'Adaptive 2-Axle Air Suspension', category: 'Performance', priceINR: 280000, description: 'Automatically adjusts vehicle height by up to 80 mm for effortless boarding and off-road clearance.', features: ['80mm Height Adjustment', 'Automatic Load Levelling'] },
      { id: 'pkg-harman-x5', name: 'Harman Kardon Surround Sound System', category: 'Technology', priceINR: 140000, description: '16 speakers, 464-watt digital amplifier with 9 channels.', features: ['16 Speakers', '9 Channels'] }
    ],
    highlights: [
      'Iconic Glow illuminated radiator grille and arrow-shaped LED daytime running lights',
      'Split-folding automatic two-section electric tailgate with hands-free foot sensor',
      'Adaptive 2-axle air suspension providing magic-carpet ride isolation over broken roads',
      'BMW Curved Display running Operating System 8.5 with Augmented Reality navigation'
    ],
    overview: 'The BMW X5 remains the undisputed benchmark for luxury SAVs worldwide. Striking athleticism, sumptuous Sensafin quilted seats, and unstoppable intelligent xDrive all-wheel drive deliver supreme confidence anywhere in India.'
  }
];

export const SHOWROOM_LOCATIONS = [
  {
    id: 'worli-mumbai',
    city: 'Mumbai',
    name: 'BMW Infinity Signature Atelier — Worli',
    address: 'Ground Floor, Signature Towers, Dr. Annie Besant Road, Worli, Mumbai, Maharashtra 400018',
    phone: '+91 22 6825 8888',
    email: 'atelier.worli@bmw-luxury.in',
    whatsapp: '+919820011223',
    timings: 'Monday – Sunday: 10:00 AM – 8:00 PM',
    coordinates: { lat: 19.0068, lng: 72.8181 }
  },
  {
    id: 'aerocity-delhi',
    city: 'New Delhi',
    name: 'BMW Bird Prestige Lounge — Aerocity',
    address: 'Asset 9, Worldmark 2, Hospitality District, Aerocity, New Delhi, Delhi 110037',
    phone: '+91 11 4987 5555',
    email: 'aerocity@bmw-luxury.in',
    whatsapp: '+919811099887',
    timings: 'Monday – Sunday: 10:00 AM – 8:30 PM',
    coordinates: { lat: 28.5502, lng: 77.1215 }
  },
  {
    id: 'lavelle-bangalore',
    city: 'Bengaluru',
    name: 'BMW Navnit Luxury Pavilion — Lavelle Road',
    address: 'No. 4, Lavelle Road, Shanthala Nagar, Ashok Nagar, Bengaluru, Karnataka 560001',
    phone: '+91 80 4345 7777',
    email: 'pavilion.bangalore@bmw-luxury.in',
    whatsapp: '+919900011445',
    timings: 'Monday – Sunday: 10:00 AM – 8:00 PM',
    coordinates: { lat: 12.9716, lng: 77.5946 }
  },
  {
    id: 'kochi-maradu',
    city: 'Kochi',
    name: 'BMW EVM Grand Experience Center — Maradu',
    address: 'NH-66 Bypass, Near Kundannoor Junction, Maradu, Kochi, Kerala 682304',
    phone: '+91 484 411 9999',
    email: 'kochi@bmw-luxury.in',
    whatsapp: '+919846012345',
    timings: 'Monday – Sunday: 9:30 AM – 7:30 PM',
    coordinates: { lat: 9.9312, lng: 76.3248 }
  },
  {
    id: 'hyderabad-jubilee',
    city: 'Hyderabad',
    name: 'BMW KUN Exclusive Pavilion — Jubilee Hills',
    address: 'Road No. 36, Jubilee Hills, Hyderabad, Telangana 500033',
    phone: '+91 40 4646 9999',
    email: 'jubileehills@bmw-luxury.in',
    whatsapp: '+919849099881',
    timings: 'Monday – Sunday: 10:00 AM – 8:00 PM',
    coordinates: { lat: 17.4319, lng: 78.4073 }
  }
];
