// BMW LUXURY SHOWROOM - COMPLETE 6-PAGE ARCHITECTURE (JS RENDERERS)

window.BMWPages = {
  currentViewer: null,
  activeConfiguratorModel: null,
  activeConfiguratorStep: 1,
  configuratorState: {},
  lightboxCurrentIndex: 0,

  // ==========================================
  // PAGE 01 — CINEMATIC LUXURY HOMEPAGE
  // ==========================================
  renderHome: function() {
    const data = window.BMWData;
    const heroModel = data.MODELS[0];
    const featured = [data.MODELS[0], data.MODELS[1], data.MODELS[2], data.MODELS[3]];

    let html = `
      <div class="w-full bg-[#080808] text-white">
        
        <!-- 2. FULL-SCREEN HERO SECTION (CINEMATIC LUXURY DIGITAL ATELIER) -->
        <section class="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden bg-[#080808]">
          <div class="absolute inset-0 pointer-events-none">
            <!-- Luxury Ambient Spotlight & BMW Blue Glow -->
            <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1C69D4]/20 via-[#080808]/80 to-[#080808]"></div>
            <div class="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#1C69D4]/15 blur-[120px] rounded-full"></div>
            <!-- Subtle Studio Floor Perspective Grid -->
            <div class="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/60"></div>
          </div>

          <div class="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full mt-12 sm:mt-16">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#1C69D4]/40 text-[#1C69D4] text-xs font-mono tracking-widest uppercase mb-5 shadow-[0_0_25px_rgba(28,105,212,0.35)]">
              <span class="w-2 h-2 rounded-full bg-[#1C69D4] animate-pulse"></span>
              <span>BMW INDIA SIGNATURE ATELIER</span>
            </div>

            <!-- Headline & Subtitle -->
            <h1 class="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-heading tracking-tight text-white uppercase leading-[0.92] max-w-4xl mx-auto">
              THE ART OF DRIVING.
            </h1>

            <p class="text-lg sm:text-2xl text-neutral-300 font-light mt-4 max-w-2xl mx-auto tracking-wide">
              Discover the extraordinary world of BMW.
            </p>

            <p class="text-xs sm:text-sm font-mono text-[#1C69D4] tracking-widest uppercase mt-3">
              TwinPower Turbo • M xDrive Precision • Sheer Driving Pleasure
            </p>

            <!-- CTA Group -->
            <div class="flex flex-wrap items-center gap-4 mt-8 sm:mt-10 justify-center">
              <a href="#models" class="btn-bmw-blue">
                <span>Explore All Models</span>
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
              </a>

              <a href="#configurator" onclick="window.BMWPages.selectModelForConfig('${heroModel.id}')" class="btn-bmw-ghost">
                <i data-lucide="sliders" class="w-4 h-4"></i>
                <span>Configure Now</span>
              </a>

              <a href="#360" onclick="window.BMWPages.selectModelFor360('${heroModel.id}')" class="px-6 py-3 rounded-xs bg-[#0a0a0c]/80 hover:bg-[#1C69D4]/20 text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-widest border border-white/10 flex items-center gap-2 transition-all backdrop-blur-md">
                <i data-lucide="compass" class="w-4 h-4 text-[#1C69D4]"></i>
                <span>Interactive 360° Studio</span>
              </a>
            </div>

            <!-- Atelier Metrics -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-3xl mx-auto pt-8 border-t border-[#292929]/70">
              <div class="text-center">
                <span class="text-2xl sm:text-3xl font-heading text-white block">503 HP</span>
                <span class="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">TwinPower M Peak</span>
              </div>
              <div class="text-center">
                <span class="text-2xl sm:text-3xl font-heading text-[#1C69D4] block">3.5 SEC</span>
                <span class="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">0-100 km/h Sprint</span>
              </div>
              <div class="text-center">
                <span class="text-2xl sm:text-3xl font-heading text-white block">100%</span>
                <span class="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">German Precision</span>
              </div>
              <div class="text-center">
                <span class="text-2xl sm:text-3xl font-heading text-[#1C69D4] block">₹0</span>
                <span class="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Zero Hidden Fees</span>
              </div>
            </div>
          </div>

          <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 opacity-60">
            <span class="text-[9px] uppercase font-mono tracking-widest text-neutral-400">SCROLL DOWN</span>
            <div class="w-4 h-7 border border-white/30 rounded-full flex justify-center p-1">
              <div class="w-1 h-1.5 bg-[#1C69D4] rounded-full animate-bounce"></div>
            </div>
          </div>
        </section>

        <!-- 7. DISCOVER THE BMW EXPERIENCE -->
        <section class="py-24 bg-[#0d0d10] border-y border-[#292929]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16">
              <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-2">
                THE PURSUIT OF PERFECTION
              </span>
              <h2 class="text-3xl sm:text-5xl font-heading font-black text-white uppercase">
                Discover The BMW Experience
              </h2>
              <p class="text-neutral-400 text-sm mt-3 leading-relaxed">
                Every curve, combustion chamber, and electric winding is tuned to produce visceral joy. Discover the core pillars that define the Ultimate Driving Machine in India.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="p-6 bg-[#141417] border border-[#222225] rounded-sm hover:border-[#1C69D4] transition-all">
                <div class="w-12 h-12 rounded-sm bg-[#1C69D4]/10 border border-[#1C69D4]/30 text-[#1C69D4] flex items-center justify-center mb-5">
                  <i data-lucide="zap" class="w-6 h-6"></i>
                </div>
                <h3 class="font-heading font-bold text-lg text-white mb-2">TwinPower Turbo & eDrive</h3>
                <p class="text-xs text-neutral-400 leading-relaxed">
                  From high-revving M straight-six twin-turbocharged engines to cutting-edge 625 km emission-free electric motors, each drivetrain is calibrated for instant throttle response.
                </p>
              </div>

              <div class="p-6 bg-[#141417] border border-[#222225] rounded-sm hover:border-[#1C69D4] transition-all">
                <div class="w-12 h-12 rounded-sm bg-[#1C69D4]/10 border border-[#1C69D4]/30 text-[#1C69D4] flex items-center justify-center mb-5">
                  <i data-lucide="layers" class="w-6 h-6"></i>
                </div>
                <h3 class="font-heading font-bold text-lg text-white mb-2">Carbon Core & 50:50 Balance</h3>
                <p class="text-xs text-neutral-400 leading-relaxed">
                  Pioneering carbon-fibre passenger cell architectures combined with perfect 50:50 front-to-rear weight distribution deliver unmatched poise and stability on every Indian roadway.
                </p>
              </div>

              <div class="p-6 bg-[#141417] border border-[#222225] rounded-sm hover:border-[#1C69D4] transition-all">
                <div class="w-12 h-12 rounded-sm bg-[#1C69D4]/10 border border-[#1C69D4]/30 text-[#1C69D4] flex items-center justify-center mb-5">
                  <i data-lucide="cpu" class="w-6 h-6"></i>
                </div>
                <h3 class="font-heading font-bold text-lg text-white mb-2">BMW Operating System 8.5 & 9</h3>
                <p class="text-xs text-neutral-400 leading-relaxed">
                  Frameless curved glass cockpits integrating QuickSelect menu logic, augmented reality heads-up displays, and intelligent voice interaction responding in natural Indian English.
                </p>
              </div>

              <div class="p-6 bg-[#141417] border border-[#222225] rounded-sm hover:border-[#1C69D4] transition-all">
                <div class="w-12 h-12 rounded-sm bg-[#1C69D4]/10 border border-[#1C69D4]/30 text-[#1C69D4] flex items-center justify-center mb-5">
                  <i data-lucide="sparkles" class="w-6 h-6"></i>
                </div>
                <h3 class="font-heading font-bold text-lg text-white mb-2">Hans Zimmer IconicSounds</h3>
                <p class="text-xs text-neutral-400 leading-relaxed">
                  Composed exclusively by Academy Award-winner Hans Zimmer, BMW IconicSounds Electric creates emotional, cinematic acoustic feedback for acceleration in the i4, iX, and i7.
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- 8. BRAND AND SHOWROOM INTRODUCTION -->
        <section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#292929] shadow-2xl group">
              <img src="assets/images/bmw_sanctuary_atelier.jpg" alt="Bespoke Showroom Architecture Across India" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
              <div class="absolute bottom-6 left-6 right-6">
                <span class="text-[10px] font-mono text-[#1C69D4] uppercase tracking-wider block mb-1">PRIVATE ATELIER CONSULTATION</span>
                <h4 class="text-xl font-heading font-bold text-white">Bespoke Showroom Architecture Across India</h4>
              </div>
            </div>

            <div class="space-y-6">
              <div>
                <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">EXCELLENCE IN AUTOMOTIVE BESPOKE</span>
                <h2 class="text-3xl sm:text-4xl font-heading font-black text-white uppercase leading-tight">
                  An Unmatched Sanctuary For Luxury Automotive Buyers
                </h2>
              </div>
              <p class="text-neutral-300 text-sm leading-relaxed">
                Our flagship showrooms in Mumbai (Worli), New Delhi (Aerocity), and Bengaluru (Lavelle Road) are not merely dealerships—they are design sanctuaries. Here, client advisors guide you through tactile material archives featuring hand-fluted Merino leathers, open-pore woods, and bespoke BMW Individual paint samples.
              </p>
              <div class="space-y-3 pt-2">
                <div class="flex items-start gap-3">
                  <i data-lucide="award" class="w-5 h-5 text-[#1C69D4] shrink-0 mt-0.5"></i>
                  <div>
                    <h4 class="text-white text-sm font-bold">White-Glove Ceremonial Handover</h4>
                    <p class="text-neutral-400 text-xs mt-0.5">Every vehicle collection is accompanied by private unveiling suites, champagne reception, and personal Product Genius telemetry setup.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <i data-lucide="shield-check" class="w-5 h-5 text-[#1C69D4] shrink-0 mt-0.5"></i>
                  <div>
                    <h4 class="text-white text-sm font-bold">Certified Master Technicians</h4>
                    <p class="text-neutral-400 text-xs mt-0.5">Condition Based Service (CBS) performed in climate-controlled clean-room bays using genuine BMW factory diagnostic rigs.</p>
                  </div>
                </div>
              </div>

              <div class="pt-4 flex gap-4">
                <button onclick="window.BMWApp.openQuickEnquiry('Private Atelier Viewing')" class="btn-bmw-blue">
                  Schedule Private Viewing
                </button>
                <a href="#gallery" class="btn-bmw-ghost">
                  Tour Showroom Gallery
                </a>
              </div>
            </div>
          </div>
        </section>

        <!-- 9. SERVICES PREVIEW -->
        <section class="py-24 bg-[#0a0a0c] border-t border-[#292929]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">COMPREHENSIVE LUXURY CARE</span>
                <h2 class="text-3xl sm:text-4xl font-heading font-black text-white uppercase">Premium Atelier Services</h2>
              </div>
              <a href="#services" class="mt-4 md:mt-0 text-xs uppercase tracking-widest text-[#1C69D4] hover:underline flex items-center gap-1 font-mono">
                <span>Explore All 8 Services</span>
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
              </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              ${data.SERVICES.slice(0, 4).map(s => `
                <div class="bg-[#141417] border border-[#222225] hover:border-[#1C69D4] rounded-sm overflow-hidden flex flex-col justify-between group transition-all">
                  <div class="aspect-[16/10] overflow-hidden bg-black">
                    <img src="${s.image}" alt="${s.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div class="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 class="text-white font-heading font-bold text-base group-hover:text-[#1C69D4] transition-colors">${s.title}</h3>
                      <p class="text-neutral-400 text-xs mt-2 line-clamp-3 leading-relaxed">${s.description}</p>
                    </div>
                    <div class="pt-4 mt-4 border-t border-[#222225]">
                      <a href="#services" class="text-xs font-mono uppercase tracking-wider text-[#1C69D4] hover:text-white flex items-center gap-1">
                        <span>Learn More & Enquire</span>
                        <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- 10. CUSTOMER TESTIMONIALS PREVIEW -->
        <section class="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div class="text-center max-w-2xl mx-auto mb-16">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">CLIENT PERSPECTIVES</span>
            <h2 class="text-3xl sm:text-4xl font-heading font-black text-white uppercase">Voices of Ownership</h2>
            <p class="text-xs text-neutral-400 mt-2">Reflections from luxury automobile owners across Mumbai, New Delhi, Bengaluru, and Kochi.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${data.TESTIMONIALS.slice(0, 3).map(t => `
              <div class="p-6 bg-[#141417] border border-[#222225] rounded-sm flex flex-col justify-between hover:border-[#1C69D4]/60 transition-all">
                <div>
                  <div class="flex items-center gap-1 text-[#1C69D4] mb-4">
                    ${Array(t.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-current"></i>').join('')}
                  </div>
                  <p class="text-neutral-300 text-xs leading-relaxed italic">"${t.review}"</p>
                </div>
                <div class="flex items-center gap-3 pt-6 mt-6 border-t border-[#222225]">
                  <img src="${t.customerPhoto}" alt="${t.customerName}" class="w-10 h-10 rounded-full object-cover border border-[#1C69D4]/40" />
                  <div>
                    <h4 class="text-white text-xs font-bold font-heading">${t.customerName}</h4>
                    <div class="text-[11px] text-[#1C69D4] font-mono">${t.vehicleModel}</div>
                    <div class="text-[10px] text-neutral-500">${t.city}</div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- 11. CONTACT AND SHOWROOM LOCATIONS -->
        <section class="py-24 bg-[#0a0a0c] border-t border-[#292929]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
              <div class="space-y-4">
                <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">FLAGSHIP NETWORK</span>
                <h2 class="text-3xl font-heading font-black text-white uppercase">Visit Our Showrooms</h2>
                <p class="text-xs text-neutral-400 leading-relaxed">
                  Step into our flagship ateliers for a private consultation, tailored espresso, and a private briefing with a certified BMW Product Genius.
                </p>
                <div class="pt-2">
                  <button onclick="window.BMWApp.openQuickEnquiry('Showroom Appointment')" class="btn-bmw-blue">
                    Book Showroom Consultation
                  </button>
                </div>
              </div>

              <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                ${data.SHOWROOMS.map(loc => `
                  <div class="p-5 bg-[#141417] border border-[#222225] rounded-sm hover:border-[#1C69D4]/60 transition-all flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between mb-2">
                        <span class="text-xs font-mono uppercase font-bold text-[#1C69D4]">${loc.city}</span>
                        <span class="text-[10px] text-neutral-500 font-mono">Open Daily</span>
                      </div>
                      <h4 class="text-white font-heading font-bold text-sm mb-1">${loc.name}</h4>
                      <p class="text-xs text-neutral-400 leading-snug mb-3">${loc.address}</p>
                    </div>
                    <div class="pt-3 border-t border-[#222225] flex items-center justify-between text-xs">
                      <span class="font-mono text-neutral-300">${loc.phone}</span>
                      <a href="https://wa.me/${loc.whatsapp.replace('+', '')}?text=Hello%20BMW%20${loc.city},%20I%20would%20like%20to%20schedule%20an%20atelier%20visit." target="_blank" class="text-[#25D366] hover:underline font-mono text-[11px]">
                        WhatsApp
                      </a>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>

      </div>
    `;

    document.getElementById('page-container').innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  },

  // ==========================================
  // PAGE 02 — SERVICES & APPOINTMENT BOOKING
  // ==========================================
  renderServices: function() {
    const data = window.BMWData;

    let html = `
      <div class="w-full bg-[#080808] text-white pt-10 pb-20">
        <section class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#292929] mb-16">
          <div class="max-w-3xl">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-2">
              PAGE 02 • COMPREHENSIVE AUTOMOTIVE ATELIER
            </span>
            <h1 class="text-4xl sm:text-6xl font-heading font-black text-white uppercase tracking-tight leading-none">
              BMW Atelier & Owner Services
            </h1>
            <p class="text-neutral-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
              From tailored corporate lease consultation to condition-based servicing and XPEL self-healing ceramic protection, discover our suite of 8 certified luxury automotive services.
            </p>
          </div>
        </section>

        <!-- 8 Services Grid -->
        <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            ${data.SERVICES.map(srv => `
              <div class="bg-[#141417] border border-[#26262b] hover:border-[#1C69D4] rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_10px_35px_rgba(28,105,212,0.15)]">
                <div class="relative aspect-[16/10] overflow-hidden bg-black">
                  <img src="${srv.image}" alt="${srv.title}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-black/40"></div>
                  <div class="absolute top-3 left-3 p-2 rounded-xs bg-black/80 border border-white/10 backdrop-blur-md text-[#1C69D4]">
                    <i data-lucide="${srv.icon}" class="w-5 h-5"></i>
                  </div>
                </div>

                <div class="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 class="font-heading font-bold text-base text-white group-hover:text-[#1C69D4] transition-colors leading-snug">${srv.title}</h3>
                    <p class="text-[11px] font-mono text-[#1C69D4] mt-1 mb-2 font-medium">${srv.tagline}</p>
                    <p class="text-xs text-neutral-400 line-clamp-3 leading-relaxed">${srv.description}</p>
                  </div>

                  <div class="space-y-1.5 mt-4 pt-3 border-t border-[#222225]">
                    ${srv.features.slice(0, 2).map(f => `
                      <div class="flex items-center gap-2 text-[11px] text-neutral-300">
                        <span class="w-1 h-1 rounded-full bg-[#1C69D4]"></span>
                        <span class="truncate">${f}</span>
                      </div>
                    `).join('')}
                  </div>

                  <div class="grid grid-cols-2 gap-2 mt-5 pt-3 border-t border-[#222225]">
                    <button onclick="window.BMWPages.showServiceDetailModal('${srv.id}')" class="py-2 rounded-xs bg-[#1f1f23] hover:bg-[#28282f] text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider text-center transition-colors border border-[#2a2a32]">
                      Learn More
                    </button>
                    <button onclick="window.BMWPages.selectServiceForForm('${srv.title}')" class="py-2 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-mono font-bold uppercase tracking-wider text-center transition-all shadow-md">
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- Service Enquiry Form Section -->
        <section id="service-form-section" class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="bg-[#111114] border border-[#292929] rounded-sm p-6 sm:p-10 shadow-2xl relative">
            <div class="mb-8 border-b border-[#222225] pb-4">
              <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">DIRECT BOOKING PORTAL</span>
              <h2 class="text-2xl sm:text-3xl font-heading font-black text-white uppercase">Schedule An Atelier Service Appointment</h2>
              <p class="text-xs text-neutral-400 mt-1">Select your service category, vehicle model, and preferred showroom. Our advisors confirm bookings within 60 minutes.</p>
            </div>

            <div id="service-form-container">
              <form id="service-appointment-form" onsubmit="window.BMWPages.submitServiceAppointment(event)" class="space-y-5">
                <div>
                  <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Selected Service Category *</label>
                  <select id="srv-category" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-4 py-2.5 rounded-xs text-white text-xs outline-none font-medium">
                    ${data.SERVICES.map(s => `<option value="${s.title}">${s.title}</option>`).join('')}
                  </select>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Owner Full Name *</label>
                    <input type="text" id="srv-name" required placeholder="e.g. Vikramaditya Singhania" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none" />
                  </div>
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Mobile Number (India) *</label>
                    <input type="tel" id="srv-phone" required placeholder="+91 98200 12345" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Email Address *</label>
                    <input type="email" id="srv-email" required placeholder="owner@domain.com" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none" />
                  </div>
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Preferred BMW Atelier Workshop *</label>
                    <select id="srv-showroom" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none font-medium">
                      ${data.SHOWROOMS.map(loc => `<option value="${loc.name}">${loc.city} — ${loc.name.split('—')[1]?.trim() || loc.name}</option>`).join('')}
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Vehicle Model</label>
                    <input type="text" id="srv-carmodel" value="BMW 7 Series" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none" />
                  </div>
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Registration Plate Number</label>
                    <input type="text" id="srv-reg" placeholder="MH 01 DX 0007" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none uppercase font-mono" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Preferred Appointment Date *</label>
                    <input type="date" id="srv-date" required class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none" />
                  </div>
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Preferred Time Window</label>
                    <select id="srv-time" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none">
                      <option value="10:00 AM">10:00 AM (Morning Slot)</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="02:00 PM">02:00 PM (Afternoon Slot)</option>
                      <option value="04:00 PM">04:00 PM</option>
                      <option value="06:00 PM">06:00 PM (Evening Fast Lane)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Specific Requirements / Chauffeur Drop-off Instructions</label>
                  <textarea id="srv-notes" rows="2" placeholder="e.g. Please arrange hydraulic flatbed pickup from Worli Sea Face." class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none resize-none"></textarea>
                </div>

                <div class="pt-2">
                  <button type="submit" class="btn-bmw-blue w-full py-3.5">
                    Submit Service Appointment
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    `;

    document.getElementById('page-container').innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  },

  selectServiceForForm: function(serviceTitle) {
    const el = document.getElementById('srv-category');
    if (el) el.value = serviceTitle;
    document.getElementById('service-form-section')?.scrollIntoView({ behavior: 'smooth' });
  },

  showServiceDetailModal: function(srvId) {
    const srv = window.BMWData.SERVICES.find(s => s.id === srvId);
    if (!srv) return;

    const modalHtml = `
      <div id="service-detail-modal" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
        <div class="relative w-full max-w-2xl bg-[#111114] border border-[#292929] rounded-sm shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
          <div class="relative aspect-[16/9] bg-black">
            <img src="${srv.image}" alt="${srv.title}" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent"></div>
            <button onclick="document.getElementById('service-detail-modal').remove()" class="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
            <div class="absolute bottom-4 left-6">
              <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">OFFICIAL BMW SERVICE</span>
              <h3 class="text-xl font-heading font-bold text-white">${srv.title}</h3>
            </div>
          </div>
          <div class="p-6 space-y-4 overflow-y-auto">
            <p class="text-neutral-300 text-xs leading-relaxed">${srv.description}</p>
            <div>
              <h4 class="text-xs uppercase font-mono tracking-wider text-white font-bold mb-2">Service Standards & Capabilities</h4>
              <div class="space-y-2">
                ${srv.features.map(f => `
                  <div class="flex items-start gap-2.5 text-xs text-neutral-300">
                    <i data-lucide="check-circle" class="w-4 h-4 text-[#1C69D4] shrink-0 mt-0.5"></i>
                    <span>${f}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
          <div class="p-4 border-t border-[#222225] bg-[#0a0a0c] flex justify-end gap-3">
            <button onclick="document.getElementById('service-detail-modal').remove()" class="px-4 py-2 rounded-xs bg-[#1f1f23] text-neutral-300 text-xs font-mono uppercase">
              Close
            </button>
            <button onclick="document.getElementById('service-detail-modal').remove(); window.BMWPages.selectServiceForForm('${srv.title}')" class="btn-bmw-blue py-2 px-6 text-xs">
              Book This Service
            </button>
          </div>
        </div>
      </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    if (window.lucide) window.lucide.createIcons();
  },

  submitServiceAppointment: function(e) {
    e.preventDefault();
    const name = document.getElementById('srv-name').value;
    const phone = document.getElementById('srv-phone').value;
    const email = document.getElementById('srv-email').value;
    const cat = document.getElementById('srv-category').value;
    const date = document.getElementById('srv-date').value;
    const time = document.getElementById('srv-time').value;
    const car = document.getElementById('srv-carmodel').value;
    const reg = document.getElementById('srv-reg').value;
    const loc = document.getElementById('srv-showroom').value;
    const notes = document.getElementById('srv-notes').value;

    const newSrv = window.BMWStore.addService({
      customerName: name,
      mobileNumber: phone,
      emailAddress: email,
      serviceType: cat,
      preferredDate: date,
      preferredTime: time,
      vehicleModel: car,
      registrationNumber: reg,
      preferredShowroom: loc,
      additionalNotes: notes
    });

    const successHtml = `
      <div class="text-center py-10 space-y-4 animate-scaleUp">
        <div class="w-16 h-16 rounded-full bg-[#1C69D4]/20 border border-[#1C69D4] text-[#1C69D4] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(28,105,212,0.4)]">
          <i data-lucide="check-circle" class="w-9 h-9"></i>
        </div>
        <h3 class="text-2xl font-heading font-bold text-white">Service Appointment Scheduled</h3>
        <p class="text-xs text-neutral-400 max-w-md mx-auto">
          Thank you, <strong>${name}</strong>. Your service appointment for <strong>${cat}</strong> on <strong>${date} (${time})</strong> has been registered.
        </p>
        <div class="p-4 bg-[#161619] rounded-xs border border-[#2a2a30] max-w-sm mx-auto">
          <span class="text-[10px] uppercase text-neutral-500 block font-mono">SERVICE APPOINTMENT TOKEN</span>
          <span class="text-xl font-mono font-bold text-[#1C69D4]">${newSrv.referenceNumber}</span>
          <div class="text-xs text-neutral-400 mt-1">Atelier: ${loc.split('—')[0]}</div>
        </div>
        <div class="pt-3">
          <button onclick="window.BMWPages.renderServices()" class="btn-bmw-blue py-2.5 px-6 text-xs">
            Book Another Appointment
          </button>
        </div>
      </div>
    `;

    document.getElementById('service-form-container').innerHTML = successHtml;
    if (window.lucide) window.lucide.createIcons();
  },

  // ==========================================
  // PAGE 03 — BMW 360° INTERACTIVE 3D EXPERIENCE
  // ==========================================
  render360: function(modelId) {
    const data = window.BMWData;
    const model = data.MODELS.find(m => m.id === modelId) || data.MODELS[0];
    this.activeConfiguratorModel = model;

    let html = `
      <div class="w-full bg-[#080808] text-white pt-10 min-h-screen flex flex-col">
        <!-- 360 Top Bar -->
        <div class="px-4 sm:px-8 py-3.5 bg-[#0a0a0c] border-b border-[#222225] flex flex-wrap items-center justify-between gap-4 z-20">
          <div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#1C69D4] animate-ping"></span>
              <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold">
                PAGE 03 • REAL CAR 360° DIGITAL ATELIER
              </span>
            </div>
            <h1 class="text-xl sm:text-2xl font-heading font-extrabold text-white flex items-center gap-2">
              <span>BMW 360° Real Car Atelier</span>
              <span class="text-xs font-mono font-normal text-neutral-400">— ${model.name}</span>
            </h1>
          </div>

          <!-- Quick Angle Presets Bar -->
          <div class="flex flex-wrap items-center gap-1.5 bg-[#141417] p-1 rounded-xs border border-[#26262a]">
            <button onclick="window.BMWPages.currentViewer?.setAngle('front')" data-angle="front" class="preset-angle-btn px-2.5 py-1 rounded-xs text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors">
              Front (0°)
            </button>
            <button onclick="window.BMWPages.currentViewer?.setAngle('front34')" data-angle="front34" class="preset-angle-btn px-2.5 py-1 rounded-xs text-[11px] font-mono uppercase tracking-wider text-white bg-[#1C69D4] transition-colors">
              Front 3/4 (45°)
            </button>
            <button onclick="window.BMWPages.currentViewer?.setAngle('side')" data-angle="side" class="preset-angle-btn px-2.5 py-1 rounded-xs text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors">
              Profile (90°)
            </button>
            <button onclick="window.BMWPages.currentViewer?.setAngle('rear34')" data-angle="rear34" class="preset-angle-btn px-2.5 py-1 rounded-xs text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors">
              Rear 3/4 (135°)
            </button>
            <button onclick="window.BMWPages.currentViewer?.setAngle('rear')" data-angle="rear" class="preset-angle-btn px-2.5 py-1 rounded-xs text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors">
              Rear (180°)
            </button>
            <button onclick="window.BMWPages.currentViewer?.setAngle('top')" data-angle="top" class="preset-angle-btn px-2.5 py-1 rounded-xs text-[11px] font-mono uppercase tracking-wider text-amber-400 hover:text-white transition-colors flex items-center gap-1">
              <i data-lucide="arrow-up" class="w-3 h-3"></i>
              <span>Top Aerial</span>
            </button>
            <button onclick="window.BMWPages.currentViewer?.setAngle('interior')" data-angle="interior" class="preset-angle-btn px-2.5 py-1 rounded-xs text-[11px] font-mono uppercase tracking-wider text-neutral-400 hover:text-white transition-colors flex items-center gap-1">
              <i data-lucide="eye" class="w-3 h-3"></i>
              <span>Cockpit 360°</span>
            </button>
          </div>
        </div>

        <!-- ALL 8 BMW MODELS 360° QUICK SELECTOR BAR -->
        <div class="px-4 sm:px-8 py-2.5 bg-[#0e0e12] border-b border-[#222225] overflow-x-auto no-scrollbar z-20">
          <div class="flex items-center gap-2.5 min-w-max">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] shrink-0 font-bold flex items-center gap-1.5 pr-3 border-r border-[#26262a]">
              <i data-lucide="compass" class="w-3.5 h-3.5"></i>
              <span>360° FLEET:</span>
            </span>
            ${data.MODELS.map(m => `
              <button onclick="window.BMWPages.selectModelFor360('${m.id}')" class="px-3.5 py-1.5 rounded-full border text-xs font-mono transition-all flex items-center gap-2 ${
                m.id === model.id 
                  ? 'bg-[#1C69D4] border-[#1C69D4] text-white font-bold shadow-[0_0_15px_rgba(28,105,212,0.4)]' 
                  : 'bg-[#141417] border-[#26262a] text-neutral-300 hover:text-white hover:border-[#1C69D4]/50'
              }">
                <span class="w-2 h-2 rounded-full ${m.id === model.id ? 'bg-white animate-pulse' : 'bg-[#1C69D4]'}"></span>
                <span class="font-bold">${m.name.replace('BMW ', '')}</span>
                <span class="text-[10px] opacity-75">${data.formatINR(m.startingPriceINR)}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- Real Car 360 Turntable Viewport Stage -->
        <div class="relative flex-1 min-h-[540px] h-[66vh] bg-[#070709] overflow-hidden select-none">
          <!-- Real Car Turntable Container -->
          <div id="turntable-container" class="w-full h-full"></div>

          <!-- Bottom Floating Stats -->
          <div class="absolute bottom-4 left-4 z-20 bg-black/75 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-sm flex items-center gap-6 text-xs max-w-lg pointer-events-none">
            <div>
              <span class="text-[9px] uppercase tracking-wider text-neutral-400 block font-mono">Power</span>
              <span class="font-heading font-extrabold text-white text-sm">${model.performance.horsepower} HP</span>
            </div>
            <div class="border-l border-white/10 pl-6">
              <span class="text-[9px] uppercase tracking-wider text-neutral-400 block font-mono">0–100 km/h</span>
              <span class="font-heading font-extrabold text-[#1C69D4] text-sm">${model.performance.acceleration0to100}s</span>
            </div>
            <div class="border-l border-white/10 pl-6">
              <span class="text-[9px] uppercase tracking-wider text-neutral-400 block font-mono">Ex-Showroom</span>
              <span class="font-heading font-extrabold text-white text-sm">${data.formatINR(model.startingPriceINR)}</span>
            </div>
          </div>
        </div>

        <!-- Customization Palette Controls (Bottom Drawer) -->
        <div class="bg-[#111114] border-t border-[#222225] p-4 sm:p-6 z-20">
          <div class="max-w-7xl mx-auto space-y-4">
            
            <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[#222225] pb-3">
              <div class="flex gap-2">
                <button onclick="window.BMWPages.switch360Tab('exterior')" id="tab-360-exterior" class="px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider bg-[#1C69D4] text-white font-bold">
                  1. Exterior Paint (${model.availableColours.length})
                </button>
                <button onclick="window.BMWPages.switch360Tab('wheels')" id="tab-360-wheels" class="px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider bg-[#18181c] text-neutral-400 hover:text-white">
                  2. Wheels & Rims (${model.availableWheels.length})
                </button>
                <button onclick="window.BMWPages.switch360Tab('interior'); window.BMWPages.currentViewer?.setPresetView('interior')" id="tab-360-interior" class="px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider bg-[#18181c] text-neutral-400 hover:text-white">
                  3. Cockpit Leather (${model.availableInteriors.length})
                </button>
                <button onclick="window.BMWPages.switch360Tab('models')" id="tab-360-models" class="px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider bg-[#18181c] text-neutral-400 hover:text-white">
                  Switch Model (${data.MODELS.length})
                </button>
              </div>

              <a href="#configurator" onclick="window.BMWPages.selectModelForConfig('${model.id}')" class="btn-bmw-blue py-2 px-5 text-xs">
                <i data-lucide="sliders" class="w-3.5 h-3.5"></i>
                <span>Configure This Build</span>
              </a>
            </div>

            <!-- Tab 1: Paint -->
            <div id="content-360-exterior" class="flex flex-wrap items-center gap-3 pt-2">
              ${model.availableColours.map(c => `
                <button onclick="window.BMWPages.currentViewer?.setPaintColor('${c.hex}')" class="flex items-center gap-2.5 px-3 py-2 rounded-xs border border-[#26262a] bg-[#151518] hover:border-neutral-500 transition-all text-neutral-300 hover:text-white">
                  <span class="w-5 h-5 rounded-full border border-white/30 shrink-0" style="background-color: ${c.hex}"></span>
                  <div class="text-left">
                    <span class="text-xs font-medium block">${c.name}</span>
                    <span class="text-[10px] text-neutral-500 font-mono">${c.type}</span>
                  </div>
                </button>
              `).join('')}
            </div>

            <!-- Tab 2: Wheels -->
            <div id="content-360-wheels" class="flex flex-wrap items-center gap-3 pt-2 hidden">
              ${model.availableWheels.map(w => `
                <button onclick="window.BMWPages.currentViewer?.setRimFinish('${w.finish.toLowerCase().includes('bronze') ? 'bronze' : w.finish.toLowerCase().includes('burnished') ? 'bicolour' : 'dark'}')" class="px-4 py-2 rounded-xs border border-[#26262a] bg-[#151518] hover:border-neutral-500 transition-all text-neutral-300 hover:text-white text-left">
                  <span class="text-xs font-bold block">${w.name}</span>
                  <span class="text-[10px] text-neutral-400 font-mono">${w.finish} • ${w.sizeInches} Inch</span>
                </button>
              `).join('')}
            </div>

            <!-- Tab 3: Interior -->
            <div id="content-360-interior" class="flex flex-wrap items-center gap-3 pt-2 hidden">
              ${model.availableInteriors.map(int => `
                <button onclick="window.BMWPages.currentViewer?.setInteriorTrim('${int.colorHex}')" class="flex items-center gap-2.5 px-3.5 py-2 rounded-xs border border-[#26262a] bg-[#151518] hover:border-neutral-500 transition-all text-neutral-300 hover:text-white">
                  <span class="w-5 h-5 rounded-full border border-white/30 shrink-0" style="background-color: ${int.colorHex}"></span>
                  <div class="text-left">
                    <span class="text-xs font-medium block">${int.name}</span>
                    <span class="text-[10px] text-neutral-400 font-mono">${int.trimFinish}</span>
                  </div>
                </button>
              `).join('')}
            </div>

            <!-- Tab 4: Switch Model -->
            <div id="content-360-models" class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-2 hidden">
              ${data.MODELS.map(m => `
                <button onclick="window.BMWPages.render360('${m.id}')" class="p-2.5 rounded-xs border transition-all text-left flex flex-col justify-between ${model.id === m.id ? 'bg-[#1C69D4]/20 border-[#1C69D4] text-white' : 'bg-[#151518] border-[#26262a] text-neutral-300 hover:border-neutral-500'}">
                  <span class="text-[9px] uppercase font-mono text-[#1C69D4]">${m.category}</span>
                  <span class="text-xs font-bold mt-1 line-clamp-1">${m.name}</span>
                  <span class="text-[10px] text-neutral-400 mt-1 font-mono">${data.formatINR(m.startingPriceINR)}</span>
                </button>
              `).join('')}
            </div>

          </div>
        </div>
      </div>
    `;

    document.getElementById('page-container').innerHTML = html;
    if (window.lucide) window.lucide.createIcons();

    // Instantiate Real Car Interactive Turntable Viewer
    const container = document.getElementById('turntable-container');
    if (container && (window.BMWRealCarTurntable || window.BMW360CanvasViewer)) {
      if (this.currentViewer) this.currentViewer.destroy();
      const TurntableClass = window.BMWRealCarTurntable || window.BMW360CanvasViewer;
      const initialCol = model.id === 'm4-competition' ? '#c41820' : model.availableColours[0]?.hex;
      this.currentViewer = new TurntableClass(container, {
        model: model,
        modelId: model.id,
        category: model.category,
        initialColor: initialCol,
        initialInterior: model.availableInteriors[0]?.colorHex
      });
    }
  },

  switch360Tab: function(tabName) {
    ['exterior', 'wheels', 'interior', 'models'].forEach(t => {
      const btn = document.getElementById('tab-360-' + t);
      const content = document.getElementById('content-360-' + t);
      if (t === tabName) {
        btn?.classList.add('bg-[#1C69D4]', 'text-white', 'font-bold');
        btn?.classList.remove('bg-[#18181c]', 'text-neutral-400');
        content?.classList.remove('hidden');
      } else {
        btn?.classList.remove('bg-[#1C69D4]', 'text-white', 'font-bold');
        btn?.classList.add('bg-[#18181c]', 'text-neutral-400');
        content?.classList.add('hidden');
      }
    });
  },

  selectModelFor360: function(modelId) {
    window.location.hash = '360';
    setTimeout(() => {
      window.BMWPages.render360(modelId);
    }, 50);
  },

  // ==========================================
  // PAGE 04 — EXPLORE BMW MODELS
  // ==========================================
  renderModels: function() {
    const data = window.BMWData;
    const compareList = window.BMWStore.getCompareList();

    let html = `
      <div class="w-full bg-[#080808] text-white pt-10 pb-20">
        <section class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-[#292929] pb-8 gap-4">
            <div>
              <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-2">
                PAGE 04 • DYNAMIC VEHICLE FLEET & ATELIER
              </span>
              <h1 class="text-4xl sm:text-6xl font-heading font-black text-white uppercase tracking-tight">
                Explore BMW Models
              </h1>
              <p class="text-neutral-400 text-sm mt-3 font-light max-w-2xl">
                Verified specifications, Indian ex-showroom pricing, and interactive customization for BMW Sedan, SAV, Pure Electric, and BMW M portfolios.
              </p>
            </div>

            <div id="models-compare-btn-slot">
              ${compareList.length > 0 ? `
                <button onclick="window.BMWApp.openCompareDrawer()" class="px-5 py-2.5 rounded-xs bg-[#1C69D4] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg">
                  <i data-lucide="git-compare" class="w-4 h-4"></i>
                  <span>Compare ${compareList.length} Vehicles</span>
                </button>
              ` : ''}
            </div>
          </div>
        </section>

        <!-- Filter and Search Bar -->
        <section class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 space-y-4">
          <div class="flex flex-wrap items-center gap-2 border-b border-[#222225] pb-3" id="category-filter-bar">
            <button onclick="window.BMWPages.filterCategory('ALL')" class="cat-pill active px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider bg-[#1C69D4] text-white font-bold" data-cat="ALL">
              All Models
            </button>
            <button onclick="window.BMWPages.filterCategory('Sedan')" class="cat-pill px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider bg-[#141417] text-neutral-400 hover:text-white border border-[#26262a]" data-cat="Sedan">
              Sedan
            </button>
            <button onclick="window.BMWPages.filterCategory('SUV / SAV')" class="cat-pill px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider bg-[#141417] text-neutral-400 hover:text-white border border-[#26262a]" data-cat="SUV / SAV">
              SUV / SAV
            </button>
            <button onclick="window.BMWPages.filterCategory('Electric')" class="cat-pill px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider bg-[#141417] text-neutral-400 hover:text-white border border-[#26262a]" data-cat="Electric">
              Electric
            </button>
            <button onclick="window.BMWPages.filterCategory('M Performance')" class="cat-pill px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider bg-[#141417] text-neutral-400 hover:text-white border border-[#26262a]" data-cat="M Performance">
              M Performance
            </button>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-[#111114] p-3 rounded-xs border border-[#222225]">
            <div class="relative">
              <input type="text" id="models-search-input" oninput="window.BMWPages.searchModels()" placeholder="Search model name, series..." class="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-xs text-white outline-none" />
            </div>

            <div>
              <select id="models-fuel-select" onchange="window.BMWPages.searchModels()" class="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-xs text-white outline-none font-mono">
                <option value="ALL">All Powertrains</option>
                <option value="Petrol">Petrol</option>
                <option value="Diesel">Diesel</option>
                <option value="Electric">Pure Electric</option>
              </select>
            </div>

            <div>
              <select id="models-sort-select" onchange="window.BMWPages.searchModels()" class="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-xs text-white outline-none font-mono">
                <option value="featured">Sort by: Curated Lineup</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="power-desc">Performance: Highest Horsepower</option>
              </select>
            </div>
          </div>
        </section>

        <!-- Dynamic Grid Container -->
        <section class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div id="models-grid-container" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Rendered by window.BMWPages.renderModelsCards -->
          </div>
        </section>
      </div>
    `;

    document.getElementById('page-container').innerHTML = html;
    this.renderModelsCards(data.MODELS);
    if (window.lucide) window.lucide.createIcons();
  },

  renderModelsCards: function(modelsList) {
    const data = window.BMWData;
    const compareList = window.BMWStore.getCompareList();
    const container = document.getElementById('models-grid-container');
    if (!container) return;

    if (modelsList.length === 0) {
      container.innerHTML = `
        <div class="col-span-3 text-center py-20 bg-[#111114] border border-[#222225] rounded-sm text-neutral-400 text-sm">
          No BMW vehicles found matching current filter criteria.
        </div>
      `;
      return;
    }

    container.innerHTML = modelsList.map(m => {
      const isCompared = compareList.includes(m.id);
      return `
        <div class="group bg-[#141414] border border-[#292929] hover:border-[#1C69D4] rounded-sm overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-[0_10px_35px_rgba(28,105,212,0.15)]">
          <div>
            <div class="relative aspect-[16/10] overflow-hidden bg-[#0d0d0f]">
              <img src="${m.heroImage}" alt="${m.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div class="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30"></div>

              <div class="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                <span class="px-2.5 py-1 rounded-xs bg-[#080808]/85 text-white text-[10px] font-mono uppercase tracking-wider font-semibold border border-white/10">
                  ${m.category}
                </span>
                <span class="px-2 py-1 rounded-xs text-[10px] font-mono uppercase tracking-wider font-bold ${m.fuelType === 'Electric' ? 'bg-[#1C69D4] text-white' : 'bg-[#222222] text-neutral-300'}">
                  ${m.fuelType}
                </span>
              </div>

              <!-- Compare Toggle -->
              <button onclick="window.BMWPages.toggleCompareModel('${m.id}')" title="Compare this model" class="absolute top-3 right-3 p-2 rounded-xs backdrop-blur-md transition-all z-10 flex items-center gap-1 text-[11px] ${isCompared ? 'bg-[#1C69D4] text-white font-bold' : 'bg-[#080808]/75 text-neutral-400 hover:text-white border border-white/10'}">
                <i data-lucide="git-compare" class="w-3.5 h-3.5"></i>
                <span class="hidden sm:inline">${isCompared ? 'Compared' : 'Compare'}</span>
              </button>

              <!-- 360 Pill -->
              <a href="#360" onclick="window.BMWPages.selectModelFor360('${m.id}')" class="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/80 hover:bg-[#1C69D4] text-neutral-200 hover:text-white text-[11px] font-mono tracking-wider flex items-center gap-1.5 transition-all">
                <span class="w-1.5 h-1.5 rounded-full bg-[#1C69D4] animate-pulse"></span>
                <span>360° Studio</span>
              </a>
            </div>

            <div class="p-5 pb-3">
              <div class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-semibold mb-1">
                ${m.series} • ${m.variants[0]?.name || 'M Sport'}
              </div>
              <h3 class="font-heading font-bold text-lg text-white group-hover:text-[#1C69D4] transition-colors leading-snug">
                ${m.name}
              </h3>
              <p class="text-xs text-neutral-400 line-clamp-1 mt-1 font-light italic">"${m.tagline}"</p>

              <div class="mt-4 pt-3 border-t border-[#222222] flex items-baseline justify-between">
                <div>
                  <span class="text-[10px] uppercase tracking-wider text-neutral-500 block">Starting Ex-Showroom (India)</span>
                  <span class="text-xl font-heading font-extrabold text-white">${data.formatINR(m.startingPriceINR)}</span>
                </div>
                <span class="text-[10px] text-neutral-500 font-mono">+ State Taxes</span>
              </div>

              <div class="grid grid-cols-3 gap-2 mt-4 p-2.5 bg-[#0a0a0c] rounded-xs border border-[#1f1f22]">
                <div class="text-center">
                  <span class="text-[9px] uppercase tracking-wider text-neutral-500 block">Power</span>
                  <span class="text-xs font-bold text-white block mt-0.5">${m.performance.horsepower} HP</span>
                </div>
                <div class="text-center border-x border-[#1e1e24]">
                  <span class="text-[9px] uppercase tracking-wider text-neutral-500 block">0–100 km/h</span>
                  <span class="text-xs font-bold text-[#1C69D4] block mt-0.5">${m.performance.acceleration0to100}s</span>
                </div>
                <div class="text-center">
                  <span class="text-[9px] uppercase tracking-wider text-neutral-500 block">Top Speed</span>
                  <span class="text-xs font-bold text-white block mt-0.5">${m.performance.topSpeedKmH} km/h</span>
                </div>
              </div>
            </div>
          </div>

          <div class="p-3 sm:p-4 pt-2 grid grid-cols-3 gap-1.5 sm:gap-2 border-t border-[#222222]/80 mt-2">
            <button onclick="window.BMWPages.showModelModal('${m.id}')" class="px-2 py-2 rounded-xs bg-[#1a1a1c] hover:bg-[#252528] text-neutral-300 hover:text-white text-[11px] font-medium tracking-wider flex items-center justify-center gap-1 transition-colors border border-[#2a2a30]">
              <i data-lucide="eye" class="w-3.5 h-3.5 text-neutral-400"></i>
              <span>Details</span>
            </button>
            <a href="#360" onclick="window.BMWPages.selectModelFor360('${m.id}')" class="px-2 py-2 rounded-xs bg-[#0e1d32] hover:bg-[#1C69D4] text-[#60a5fa] hover:text-white text-[11px] font-semibold tracking-wider flex items-center justify-center gap-1 transition-all border border-[#1C69D4]/40">
              <i data-lucide="compass" class="w-3.5 h-3.5"></i>
              <span>360° View</span>
            </a>
            <a href="#configurator" onclick="window.BMWPages.selectModelForConfig('${m.id}')" class="px-2 py-2 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-[11px] font-semibold tracking-wider flex items-center justify-center gap-1 transition-all shadow-[0_0_15px_rgba(28,105,212,0.3)]">
              <i data-lucide="sliders" class="w-3.5 h-3.5"></i>
              <span>Configure</span>
            </a>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  },

  filterCategory: function(category) {
    document.querySelectorAll('.cat-pill').forEach(btn => {
      if (btn.getAttribute('data-cat') === category) {
        btn.classList.add('bg-[#1C69D4]', 'text-white', 'font-bold');
        btn.classList.remove('bg-[#141417]', 'text-neutral-400');
      } else {
        btn.classList.remove('bg-[#1C69D4]', 'text-white', 'font-bold');
        btn.classList.add('bg-[#141417]', 'text-neutral-400');
      }
    });
    this.searchModels();
  },

  searchModels: function() {
    const activePill = document.querySelector('.cat-pill.bg-\\[\\#1C69D4\\]');
    const selectedCat = activePill ? activePill.getAttribute('data-cat') : 'ALL';
    const query = (document.getElementById('models-search-input')?.value || '').toLowerCase();
    const fuel = document.getElementById('models-fuel-select')?.value || 'ALL';
    const sort = document.getElementById('models-sort-select')?.value || 'featured';

    let filtered = window.BMWData.MODELS.filter(m => {
      const matchCat = selectedCat === 'ALL' || m.category === selectedCat;
      const matchFuel = fuel === 'ALL' || m.fuelType === fuel;
      const matchQuery = m.name.toLowerCase().includes(query) || m.series.toLowerCase().includes(query);
      return matchCat && matchFuel && matchQuery;
    });

    if (sort === 'price-asc') filtered.sort((a,b) => a.startingPriceINR - b.startingPriceINR);
    if (sort === 'price-desc') filtered.sort((a,b) => b.startingPriceINR - a.startingPriceINR);
    if (sort === 'power-desc') filtered.sort((a,b) => b.performance.horsepower - a.performance.horsepower);

    this.renderModelsCards(filtered);
  },

  toggleCompareModel: function(modelId) {
    window.BMWStore.toggleCompare(modelId);
    this.searchModels();
    // Update navbar badge
    const badge = document.getElementById('nav-compare-count');
    const count = window.BMWStore.getCompareList().length;
    if (badge) {
      badge.textContent = count;
      badge.classList.toggle('hidden', count === 0);
    }
  },

  showModelModal: function(modelId) {
    const m = window.BMWData.MODELS.find(item => item.id === modelId);
    if (!m) return;
    const v = m.variants[0];

    const modalHtml = `
      <div id="model-detail-modal" class="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
        <div class="relative w-full max-w-5xl bg-[#111114] border border-[#292929] rounded-sm shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
          <div class="px-6 py-4 border-b border-[#222225] flex items-center justify-between bg-[#0a0a0c]">
            <div>
              <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold">${m.category} • ${m.series}</span>
              <h2 class="text-xl sm:text-2xl font-heading font-extrabold text-white">${m.name}</h2>
            </div>
            <button onclick="document.getElementById('model-detail-modal').remove()" class="p-2 rounded-full bg-[#18181b] hover:bg-[#25252a] text-neutral-400 hover:text-white transition-colors">
              <i data-lucide="x" class="w-5 h-5"></i>
            </button>
          </div>

          <div class="overflow-y-auto p-6 space-y-8 flex-1">
            <div class="relative aspect-[16/9] bg-black rounded-sm overflow-hidden border border-[#222225]">
              <img id="modal-car-img" src="${m.heroImage}" alt="${m.name}" class="w-full h-full object-cover" />
              <div class="absolute bottom-4 left-4 z-10">
                <span class="text-xs uppercase tracking-wider text-neutral-400 block font-mono">Ex-Showroom Price</span>
                <span class="text-2xl sm:text-3xl font-heading font-black text-white">${window.BMWData.formatINR(m.startingPriceINR)}</span>
              </div>
            </div>

            <div class="flex gap-2">
              <button onclick="document.getElementById('modal-car-img').src='${m.heroImage}'" class="px-3 py-1.5 rounded-xs text-xs font-mono uppercase bg-[#1C69D4] text-white">Studio 3/4</button>
              <button onclick="document.getElementById('modal-car-img').src='${m.sideImage}'" class="px-3 py-1.5 rounded-xs text-xs font-mono uppercase bg-[#1a1a1e] text-neutral-400 hover:text-white">Profile</button>
              <button onclick="document.getElementById('modal-car-img').src='${m.rearImage}'" class="px-3 py-1.5 rounded-xs text-xs font-mono uppercase bg-[#1a1a1e] text-neutral-400 hover:text-white">Rear</button>
              <button onclick="document.getElementById('modal-car-img').src='${m.interiorImage}'" class="px-3 py-1.5 rounded-xs text-xs font-mono uppercase bg-[#1a1a1e] text-neutral-400 hover:text-white">Cockpit</button>
            </div>

            <div>
              <h3 class="text-xs uppercase tracking-widest text-[#1C69D4] font-bold mb-2">Model Overview</h3>
              <p class="text-neutral-300 text-sm leading-relaxed">${m.overview}</p>
            </div>

            <div>
              <h3 class="text-xs uppercase tracking-widest text-[#1C69D4] font-bold mb-3">Technical Specifications & Dimensions</h3>
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div class="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]"><span class="text-neutral-500 block text-[10px]">POWERTRAIN</span><span class="text-white">${v.engine}</span></div>
                <div class="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]"><span class="text-neutral-500 block text-[10px]">POWER & TORQUE</span><span class="text-white">${v.horsepower} HP • ${v.torqueNm} Nm</span></div>
                <div class="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]"><span class="text-neutral-500 block text-[10px]">SPRINT 0–100</span><span class="text-[#1C69D4] font-bold">${v.acceleration0to100}s</span></div>
                <div class="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]"><span class="text-neutral-500 block text-[10px]">DIMENSIONS</span><span class="text-white">${m.dimensions.lengthMm} x ${m.dimensions.widthMm} x ${m.dimensions.heightMm} mm</span></div>
              </div>
            </div>
          </div>

          <div class="px-6 py-4 border-t border-[#222225] bg-[#0a0a0c] flex items-center justify-between gap-3">
            <a href="#360" onclick="document.getElementById('model-detail-modal').remove(); window.BMWPages.selectModelFor360('${m.id}')" class="px-5 py-2.5 rounded-xs bg-[#0e1d32] hover:bg-[#1C69D4] text-[#60a5fa] hover:text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 border border-[#1C69D4]/40 transition-all">
              <i data-lucide="compass" class="w-4 h-4 text-[#1C69D4] group-hover:text-white"></i>
              <span>Experience in 360° Studio</span>
            </a>
            <a href="#configurator" onclick="document.getElementById('model-detail-modal').remove(); window.BMWPages.selectModelForConfig('${m.id}')" class="btn-bmw-blue py-2.5 px-6 text-xs font-bold flex items-center gap-2">
              <span>Configure This Model</span>
              <i data-lucide="chevron-right" class="w-4 h-4"></i>
            </a>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHtml);
    if (window.lucide) window.lucide.createIcons();
  },

  selectModelForConfig: function(modelId) {
    const m = window.BMWData.MODELS.find(item => item.id === modelId) || window.BMWData.MODELS[0];
    this.activeConfiguratorModel = m;
    this.activeConfiguratorStep = 1;
    this.configuratorState = {
      model: m,
      variant: m.variants[0],
      colour: m.availableColours[0],
      wheel: m.availableWheels[0],
      interior: m.availableInteriors[0],
      packages: [],
      stateKey: 'maharashtra',
      isCorporate: false
    };
    window.location.hash = 'configurator';
    setTimeout(() => {
      window.BMWPages.renderConfigurator();
    }, 50);
  },

  // ==========================================
  // PAGE 05 — CAR CONFIGURATOR & ON-ROAD ESTIMATOR
  // ==========================================
  renderConfigurator: function() {
    const data = window.BMWData;
    if (!this.configuratorState.model) {
      const m = data.MODELS[0];
      this.configuratorState = {
        model: m,
        variant: m.variants[0],
        colour: m.availableColours[0],
        wheel: m.availableWheels[0],
        interior: m.availableInteriors[0],
        packages: [],
        stateKey: 'maharashtra',
        isCorporate: false
      };
    }

    const state = this.configuratorState;
    const model = state.model;
    const step = this.activeConfiguratorStep || 1;

    // Calculate live pricing
    const pkgCost = model.availablePackages
      .filter(p => state.packages.includes(p.id))
      .reduce((sum, p) => sum + p.priceINR, 0);

    const baseWithCustom = state.variant.exShowroomPriceINR + state.colour.priceDeltaINR + state.wheel.priceDeltaINR + state.interior.priceDeltaINR;
    const price = data.calculateOnRoadPrice(baseWithCustom, state.stateKey, state.isCorporate, pkgCost);

    const steps = [
      { n: 1, t: 'Model' },
      { n: 2, t: 'Variant' },
      { n: 3, t: 'Paint' },
      { n: 4, t: 'Interior' },
      { n: 5, t: 'Wheels' },
      { n: 6, t: 'Packages' },
      { n: 7, t: 'Summary & Book' }
    ];

    let html = `
      <div class="w-full bg-[#080808] text-white pt-10 pb-20">
        <!-- Header -->
        <section class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
          <div class="flex flex-col md:flex-row md:items-end justify-between border-b border-[#292929] pb-6 gap-4">
            <div>
              <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">
                PAGE 05 • BESPOKE SPECIFICATION ATELIER
              </span>
              <h1 class="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
                Car Configurator & On-Road Estimator
              </h1>
            </div>
            <div class="text-right">
              <span class="text-[10px] uppercase font-mono text-neutral-400 block">
                Estimated On-Road (${price.rtoStateName})
              </span>
              <span class="text-2xl sm:text-3xl font-heading font-extrabold text-[#1C69D4]">
                ${data.formatINR(price.totalEstimatedOnRoadPrice)}
              </span>
            </div>
          </div>

          <!-- Step Wizard Tabs -->
          <div class="flex items-center overflow-x-auto py-4 border-b border-[#222225] gap-2 sm:gap-4 no-scrollbar">
            ${steps.map(s => `
              <button onclick="window.BMWPages.setConfigStep(${s.n})" class="flex items-center gap-2 px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider shrink-0 transition-all ${step === s.n ? 'bg-[#1C69D4] text-white font-bold shadow-md' : step > s.n ? 'bg-[#18181c] text-white border border-[#2a2a30]' : 'bg-[#111114] text-neutral-500'}">
                <span class="w-4 h-4 rounded-full bg-black/40 flex items-center justify-center text-[10px]">${step > s.n ? '✓' : s.n}</span>
                <span>${s.t}</span>
              </button>
            `).join('')}
          </div>
        </section>

        <!-- Main Workspace -->
        <section class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- LEFT COLUMN: Live Studio Box & Pricing Breakdown (5 Cols) -->
            <div class="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
              <div class="relative aspect-[16/10] bg-[#111114] rounded-sm border border-[#292929] overflow-hidden shadow-2xl">
                <img src="${model.heroImage}" alt="${model.name}" class="w-full h-full object-cover object-center" />
                <div class="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent"></div>

                <div class="absolute top-3 left-3 flex gap-1.5">
                  <span class="px-2.5 py-1 rounded-xs bg-black/80 text-[10px] font-mono text-white border border-white/10">${model.series}</span>
                  <span class="px-2 py-1 rounded-xs bg-[#1C69D4] text-[10px] font-mono text-white font-bold">${state.variant.badge.split('/')[0]}</span>
                </div>

                <a href="#360" onclick="window.BMWPages.selectModelFor360('${model.id}')" class="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 hover:bg-[#1C69D4] text-white text-[10px] font-mono flex items-center gap-1.5 transition-all border border-white/10">
                  <i data-lucide="compass" class="w-3 h-3 text-[#1C69D4]"></i>
                  <span>360° Studio</span>
                </a>

                <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <div>
                    <h3 class="font-heading font-bold text-white text-base">${model.name}</h3>
                    <div class="text-[11px] text-neutral-300 font-mono mt-0.5 flex items-center gap-1.5">
                      <span class="w-2.5 h-2.5 rounded-full inline-block border border-white/30" style="background-color: ${state.colour.hex}"></span>
                      <span>${state.colour.name}</span>
                    </div>
                  </div>
                  <div class="text-right">
                    <span class="text-[9px] uppercase font-mono text-neutral-400 block">Ex-Showroom</span>
                    <span class="font-heading font-extrabold text-white text-sm">${data.formatINR(baseWithCustom)}</span>
                  </div>
                </div>
              </div>

              <!-- Itemized Pricing Breakdown Box -->
              <div class="p-4 bg-[#121215] rounded-xs border border-[#222225] space-y-2.5 text-xs">
                <div class="flex items-center justify-between font-mono font-bold text-neutral-300 border-b border-[#222225] pb-2">
                  <span>ON-ROAD ESTIMATE BREAKDOWN</span>
                  <span class="text-[#1C69D4]">${price.rtoStateName}</span>
                </div>
                <div class="flex justify-between text-neutral-400">
                  <span>Ex-Showroom Price (incl. GST & Cess)</span>
                  <span class="text-white font-mono">${data.formatFullINR(price.exShowroomPrice)}</span>
                </div>
                <div class="flex justify-between text-neutral-400">
                  <span>Road Tax & Registration (RTO)</span>
                  <span class="text-white font-mono">${data.formatFullINR(price.rtoCharges)}</span>
                </div>
                <div class="flex justify-between text-neutral-400">
                  <span>Comprehensive Insurance (1-Yr OD + 3-Yr TP)</span>
                  <span class="text-white font-mono">${data.formatFullINR(price.comprehensiveInsurance)}</span>
                </div>
                <div class="flex justify-between text-neutral-400">
                  <span>TCS @ 1% (Sec 206C 1F for cars > ₹10L)</span>
                  <span class="text-white font-mono">${data.formatFullINR(price.tcsCharges)}</span>
                </div>
                <div class="flex justify-between text-neutral-400">
                  <span>Fastag & Logistical Handling</span>
                  <span class="text-white font-mono">${data.formatFullINR(price.fastagAndHandling)}</span>
                </div>
                ${price.optionalPackagesTotal > 0 ? `
                  <div class="flex justify-between text-[#1C69D4]">
                    <span>Selected Optional Equipment</span>
                    <span class="font-mono">+${data.formatFullINR(price.optionalPackagesTotal)}</span>
                  </div>
                ` : ''}
                <div class="border-t border-[#292929] pt-2 flex justify-between items-baseline font-bold text-sm">
                  <span class="text-white">Estimated On-Road Total</span>
                  <span class="text-lg text-[#1C69D4] font-heading font-extrabold font-mono">${data.formatFullINR(price.totalEstimatedOnRoadPrice)}</span>
                </div>
                <p class="text-[10px] text-neutral-500 leading-tight pt-1">
                  *GST (28% + 22% cess) is already inclusive in ex-showroom price. Does not duplicate GST.
                </p>
              </div>
            </div>

            <!-- RIGHT COLUMN: Step Configuration (7 Cols) -->
            <div class="lg:col-span-7 bg-[#111114] border border-[#292929] rounded-sm p-6 shadow-xl">
              ${this.renderConfiguratorStepContent(step)}

              <div class="flex items-center justify-between pt-6 mt-6 border-t border-[#222225]">
                <button onclick="window.BMWPages.setConfigStep(${Math.max(1, step - 1)})" ${step === 1 ? 'disabled class="opacity-30 pointer-events-none"' : 'class="btn-bmw-ghost py-2 text-xs"'}>
                  Previous Step
                </button>
                ${step < 7 ? `
                  <button onclick="window.BMWPages.setConfigStep(${Math.min(7, step + 1)})" class="btn-bmw-blue py-2 text-xs">
                    Next Step: ${steps[step].t}
                  </button>
                ` : ''}
              </div>
            </div>

          </div>
        </section>
      </div>
    `;

    document.getElementById('page-container').innerHTML = html;
    if (window.lucide) window.lucide.createIcons();
  },

  renderConfiguratorStepContent: function(step) {
    const data = window.BMWData;
    const state = this.configuratorState;
    const model = state.model;

    if (step === 1) {
      return `
        <div class="space-y-4">
          <div class="border-b border-[#222225] pb-3">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">STEP 01 OF 07</span>
            <h2 class="text-2xl font-heading font-black text-white uppercase">Select Your BMW Model</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${data.MODELS.map(m => `
              <div onclick="window.BMWPages.selectModelForConfig('${m.id}')" class="p-4 rounded-xs border cursor-pointer transition-all flex gap-3 ${model.id === m.id ? 'bg-[#1C69D4]/15 border-[#1C69D4]' : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'}">
                <img src="${m.heroImage}" alt="${m.name}" class="w-20 h-16 object-cover rounded-xs" />
                <div class="flex-1">
                  <span class="text-[9px] uppercase font-mono text-[#1C69D4] font-bold">${m.category}</span>
                  <h4 class="font-heading font-bold text-white text-xs leading-snug">${m.name}</h4>
                  <span class="text-xs font-bold text-white block mt-1">${data.formatINR(m.startingPriceINR)}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (step === 2) {
      return `
        <div class="space-y-4">
          <div class="border-b border-[#222225] pb-3">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">STEP 02 OF 07</span>
            <h2 class="text-2xl font-heading font-black text-white uppercase">Choose Vehicle Variant</h2>
          </div>
          <div class="space-y-3">
            ${model.variants.map(v => `
              <div onclick="window.BMWPages.configuratorState.variant = window.BMWData.MODELS.find(m=>m.id==='${model.id}').variants.find(item=>item.id==='${v.id}'); window.BMWPages.renderConfigurator();" class="p-4 rounded-xs border cursor-pointer transition-all ${state.variant.id === v.id ? 'bg-[#1C69D4]/15 border-[#1C69D4]' : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'}">
                <div class="flex items-center justify-between">
                  <div>
                    <h4 class="font-heading font-bold text-white text-sm">${v.name}</h4>
                    <span class="text-[11px] font-mono text-[#1C69D4]">${v.badge}</span>
                  </div>
                  <span class="text-base font-heading font-extrabold text-white font-mono">${data.formatINR(v.exShowroomPriceINR)}</span>
                </div>
                <p class="text-xs text-neutral-400 mt-2">${v.engine}</p>
                <div class="grid grid-cols-4 gap-2 text-[11px] font-mono text-neutral-300 mt-3 bg-[#0c0c0e] p-2 rounded-xs">
                  <span>${v.horsepower} HP</span>
                  <span>${v.torqueNm} Nm</span>
                  <span>0-100: ${v.acceleration0to100}s</span>
                  <span>${v.drivetrain.split('(')[0]}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (step === 3) {
      return `
        <div class="space-y-4">
          <div class="border-b border-[#222225] pb-3">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">STEP 03 OF 07</span>
            <h2 class="text-2xl font-heading font-black text-white uppercase">Select Exterior Paint Colour</h2>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            ${model.availableColours.map(c => `
              <div onclick="window.BMWPages.configuratorState.colour = window.BMWData.MODELS.find(m=>m.id==='${model.id}').availableColours.find(item=>item.id==='${c.id}'); window.BMWPages.renderConfigurator();" class="p-3.5 rounded-xs border cursor-pointer transition-all flex items-center gap-3.5 ${state.colour.id === c.id ? 'bg-[#1C69D4]/15 border-[#1C69D4]' : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'}">
                <span class="w-8 h-8 rounded-full border border-white/30 shrink-0 shadow-md" style="background-color: ${c.hex}"></span>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <h4 class="font-heading font-bold text-white text-xs">${c.name}</h4>
                    <span class="text-[10px] font-mono text-neutral-400">${c.priceDeltaINR > 0 ? '+' + data.formatINR(c.priceDeltaINR) : 'Standard'}</span>
                  </div>
                  <span class="text-[10px] text-neutral-500 font-mono block">${c.type} Finish</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (step === 4) {
      return `
        <div class="space-y-4">
          <div class="border-b border-[#222225] pb-3">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">STEP 04 OF 07</span>
            <h2 class="text-2xl font-heading font-black text-white uppercase">Choose Interior Upholstery</h2>
          </div>
          <div class="space-y-3">
            ${model.availableInteriors.map(int => `
              <div onclick="window.BMWPages.configuratorState.interior = window.BMWData.MODELS.find(m=>m.id==='${model.id}').availableInteriors.find(item=>item.id==='${int.id}'); window.BMWPages.renderConfigurator();" class="p-4 rounded-xs border cursor-pointer transition-all flex items-center gap-4 ${state.interior.id === int.id ? 'bg-[#1C69D4]/15 border-[#1C69D4]' : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'}">
                <span class="w-10 h-10 rounded-full border border-white/30 shrink-0 shadow-md" style="background-color: ${int.colorHex}"></span>
                <div class="flex-1">
                  <div class="flex items-center justify-between">
                    <h4 class="font-heading font-bold text-white text-sm">${int.name}</h4>
                    <span class="text-xs font-mono text-neutral-400">${int.priceDeltaINR > 0 ? '+' + data.formatINR(int.priceDeltaINR) : 'Standard'}</span>
                  </div>
                  <span class="text-xs text-neutral-400 block mt-0.5">${int.upholstery} • Trim: ${int.trimFinish}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (step === 5) {
      return `
        <div class="space-y-4">
          <div class="border-b border-[#222225] pb-3">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">STEP 05 OF 07</span>
            <h2 class="text-2xl font-heading font-black text-white uppercase">Select Wheels & Rims</h2>
          </div>
          <div class="space-y-3">
            ${model.availableWheels.map(w => `
              <div onclick="window.BMWPages.configuratorState.wheel = window.BMWData.MODELS.find(m=>m.id==='${model.id}').availableWheels.find(item=>item.id==='${w.id}'); window.BMWPages.renderConfigurator();" class="p-4 rounded-xs border cursor-pointer transition-all flex items-center justify-between ${state.wheel.id === w.id ? 'bg-[#1C69D4]/15 border-[#1C69D4]' : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'}">
                <div>
                  <h4 class="font-heading font-bold text-white text-sm">${w.name}</h4>
                  <span class="text-xs text-neutral-400 block mt-0.5 font-mono">${w.finish} • ${w.sizeInches} Inch</span>
                </div>
                <span class="text-xs font-mono text-neutral-300">${w.priceDeltaINR > 0 ? '+' + data.formatINR(w.priceDeltaINR) : 'Standard Included'}</span>
              </div>
            `).join('')}
          </div>
        </div>
      `;
    }

    if (step === 6) {
      return `
        <div class="space-y-4">
          <div class="border-b border-[#222225] pb-3">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">STEP 06 OF 07</span>
            <h2 class="text-2xl font-heading font-black text-white uppercase">Optional Equipment Packages</h2>
          </div>
          <div class="space-y-3">
            ${model.availablePackages.map(pkg => {
              const isSelected = state.packages.includes(pkg.id);
              return `
                <div onclick="window.BMWPages.toggleConfigPackage('${pkg.id}')" class="p-4 rounded-xs border cursor-pointer transition-all ${isSelected ? 'bg-[#1C69D4]/15 border-[#1C69D4]' : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'}">
                  <div class="flex items-start justify-between gap-3">
                    <div>
                      <h4 class="font-heading font-bold text-white text-sm">${pkg.name}</h4>
                      <p class="text-xs text-neutral-400 mt-0.5">${pkg.description}</p>
                      <div class="flex flex-wrap gap-2 mt-2">
                        ${pkg.features.map(f => `<span class="text-[10px] font-mono bg-black/50 px-2 py-0.5 rounded-xs text-neutral-300">${f}</span>`).join('')}
                      </div>
                    </div>
                    <span class="text-xs font-mono font-bold text-white shrink-0">+${data.formatINR(pkg.priceINR)}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    if (step === 7) {
      return `
        <div class="space-y-6">
          <div class="border-b border-[#222225] pb-3">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">STEP 07 OF 07</span>
            <h2 class="text-2xl font-heading font-black text-white uppercase">Taxation Region & Pre-Booking</h2>
          </div>

          <!-- State & Corporate Registration -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#151518] p-4 rounded-xs border border-[#26262c]">
            <div>
              <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Registration State *</label>
              <select onchange="window.BMWPages.configuratorState.stateKey = this.value; window.BMWPages.renderConfigurator();" class="w-full bg-[#1c1c20] border border-[#2a2a30] text-xs text-white p-2.5 rounded-xs outline-none font-mono">
                ${Object.entries(data.STATE_TAXES).map(([k, d]) => `
                  <option value="${k}" ${state.stateKey === k ? 'selected' : ''}>${d.state} (${d.city}) — RTO ${(d.rtoPercentIndividual*100).toFixed(0)}%</option>
                `).join('')}
              </select>
            </div>
            <div>
              <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Registration Type</label>
              <div class="grid grid-cols-2 gap-2 mt-1">
                <button type="button" onclick="window.BMWPages.configuratorState.isCorporate = false; window.BMWPages.renderConfigurator();" class="py-2 text-xs font-mono rounded-xs ${!state.isCorporate ? 'bg-[#1C69D4] text-white font-bold' : 'bg-[#1c1c20] text-neutral-400'}">Individual</button>
                <button type="button" onclick="window.BMWPages.configuratorState.isCorporate = true; window.BMWPages.renderConfigurator();" class="py-2 text-xs font-mono rounded-xs ${state.isCorporate ? 'bg-[#1C69D4] text-white font-bold' : 'bg-[#1c1c20] text-neutral-400'}">Corporate</button>
              </div>
            </div>
          </div>

          <!-- Form Container -->
          <div id="prebook-form-container">
            <form onsubmit="window.BMWPages.submitPreBooking(event)" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Full Name *</label>
                  <input type="text" id="pb-name" required placeholder="e.g. Vikramaditya Singhania" class="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none" />
                </div>
                <div>
                  <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Mobile Number (India) *</label>
                  <input type="tel" id="pb-phone" required placeholder="+91 98200 12345" class="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none" />
                </div>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Email Address *</label>
                  <input type="email" id="pb-email" required placeholder="name@domain.com" class="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none" />
                </div>
                <div>
                  <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Preferred Showroom *</label>
                  <select id="pb-showroom" class="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none font-mono">
                    ${data.SHOWROOMS.map(loc => `<option value="${loc.name}">${loc.city} — ${loc.name.split('—')[1]?.trim() || loc.name}</option>`).join('')}
                  </select>
                </div>
              </div>

              <div>
                <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Financing Preference</label>
                <select id="pb-fin" class="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none font-mono">
                  <option value="BMW Financial Services">BMW Financial Services (Balloon / GFV)</option>
                  <option value="Corporate Lease">Corporate Operating Lease</option>
                  <option value="Cash / Direct">Direct / Outright Purchase</option>
                </select>
              </div>

              <div>
                <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">Additional Allocation Note</label>
                <textarea id="pb-notes" rows="2" placeholder="e.g. Please check delivery slot availability for upcoming auspicious date." class="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none resize-none"></textarea>
              </div>

              <div class="pt-2">
                <button type="submit" class="btn-bmw-blue w-full py-3.5">
                  Submit Bespoke Pre-Booking Enquiry
                </button>
              </div>
              <p class="text-[10px] text-neutral-500 text-center">
                *This is an official reservation enquiry. No payment or vehicle purchase contract is executed online.
              </p>
            </form>
          </div>
        </div>
      `;
    }
    return '';
  },

  setConfigStep: function(n) {
    this.activeConfiguratorStep = n;
    this.renderConfigurator();
  },

  toggleConfigPackage: function(pkgId) {
    const pkgs = this.configuratorState.packages;
    if (pkgs.includes(pkgId)) {
      this.configuratorState.packages = pkgs.filter(id => id !== pkgId);
    } else {
      this.configuratorState.packages.push(pkgId);
    }
    this.renderConfigurator();
  },

  submitPreBooking: function(e) {
    e.preventDefault();
    const data = window.BMWData;
    const state = this.configuratorState;
    const name = document.getElementById('pb-name').value;
    const phone = document.getElementById('pb-phone').value;
    const email = document.getElementById('pb-email').value;
    const loc = document.getElementById('pb-showroom').value;
    const fin = document.getElementById('pb-fin').value;
    const notes = document.getElementById('pb-notes').value;

    const pkgCost = state.model.availablePackages
      .filter(p => state.packages.includes(p.id))
      .reduce((sum, p) => sum + p.priceINR, 0);

    const baseWithCustom = state.variant.exShowroomPriceINR + state.colour.priceDeltaINR + state.wheel.priceDeltaINR + state.interior.priceDeltaINR;
    const price = data.calculateOnRoadPrice(baseWithCustom, state.stateKey, state.isCorporate, pkgCost);

    const booking = window.BMWStore.addPreBooking({
      customerName: name,
      mobileNumber: phone,
      emailAddress: email,
      selectedModelId: state.model.id,
      selectedModelName: state.model.name,
      selectedVariantName: state.variant.name,
      selectedColour: state.colour.name,
      selectedWheel: state.wheel.name,
      selectedInterior: state.interior.name,
      selectedPackages: state.packages,
      preferredShowroom: loc,
      registrationCity: loc.includes('Mumbai') ? 'Mumbai' : 'New Delhi',
      preferredFinancing: fin,
      additionalMessage: notes,
      estimatedOnRoadPriceINR: price.totalEstimatedOnRoadPrice
    });

    const confirmHtml = `
      <div class="text-center py-8 space-y-4 bg-[#141417] p-6 rounded-xs border border-[#222225] animate-scaleUp">
        <div class="w-16 h-16 rounded-full bg-[#1C69D4]/20 border border-[#1C69D4] text-[#1C69D4] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(28,105,212,0.4)]">
          <i data-lucide="check-circle" class="w-9 h-9"></i>
        </div>
        <h3 class="text-2xl font-heading font-black text-white">Bespoke Allocation Request Logged</h3>
        <p class="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
          Thank you, <strong>${name}</strong>. Your customized specification for the <strong>${state.model.name} (${state.variant.name})</strong> has been saved.
        </p>
        <div class="p-4 bg-[#18181c] rounded-xs border border-[#2a2a30] max-w-sm mx-auto">
          <span class="text-[10px] uppercase font-mono text-neutral-500 block">UNIQUE ALLOCATION REFERENCE</span>
          <span class="text-xl font-mono font-bold text-[#1C69D4]">${booking.referenceNumber}</span>
          <div class="text-[11px] text-neutral-400 mt-1">Est. On-Road: ${data.formatINR(price.totalEstimatedOnRoadPrice)}</div>
        </div>
        <div class="pt-2 flex flex-wrap justify-center gap-3">
          <button onclick="window.porscheAdmin.openAdminModal()" class="btn-bmw-ghost py-2 text-xs">
            Inspect in Admin Dashboard
          </button>
          <a href="https://wa.me/919820011223?text=Hello%20BMW%20Concierge,%20I%20have%20submitted%20allocation%20enquiry%20${booking.referenceNumber}%20for%20${encodeURIComponent(state.model.name)}." target="_blank" class="px-5 py-2.5 rounded-xs bg-[#25D366] hover:bg-[#20b858] text-black text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
            Share via WhatsApp
          </a>
        </div>
        <p class="text-[10px] text-neutral-500">
          *No financial transaction or binding contract has been executed online. Our client advisor will contact you to coordinate showroom viewing.
        </p>
      </div>
    `;

    document.getElementById('prebook-form-container').innerHTML = confirmHtml;
    if (window.lucide) window.lucide.createIcons();
  },

  // ==========================================
  // PAGE 06 — EDITORIAL GALLERY & STORIES
  // ==========================================
  renderGallery: function() {
    const data = window.BMWData;
    const categories = [
      { id: 'ALL', label: 'Complete Archive' },
      { id: 'deliveries', label: 'Ceremonial Deliveries' },
      { id: 'lifestyle', label: 'BMW Lifestyle' },
      { id: 'detailing', label: 'Atelier Detailing & PPF' },
      { id: 'm-performance', label: 'BMW M Track & Power' },
      { id: 'showroom', label: 'Showroom Interior & Architecture' }
    ];

    let html = `
      <div class="w-full bg-[#080808] text-white pt-10 pb-20">
        <section class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
          <div class="border-b border-[#292929] pb-8">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">
              PAGE 06 • EDITORIAL VISUAL ARCHIVE & OWNER STORIES
            </span>
            <h1 class="text-4xl sm:text-6xl font-heading font-black text-white uppercase tracking-tight">
              Gallery & Customer Stories
            </h1>
            <p class="text-neutral-400 text-sm mt-3 font-light max-w-2xl leading-relaxed">
              A photographic anthology of milestone vehicle handovers, track expeditions across India, clean-room paint protection detailing, and firsthand stories from BMW owners.
            </p>
          </div>

          <div class="flex flex-wrap gap-2 pt-6">
            ${categories.map(c => `
              <button onclick="window.BMWPages.filterGalleryCategory('${c.id}')" class="gal-cat-pill px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider ${c.id === 'ALL' ? 'bg-[#1C69D4] text-white font-bold' : 'bg-[#141417] text-neutral-400 hover:text-white border border-[#26262a]'}" data-cat="${c.id}">
                ${c.label}
              </button>
            `).join('')}
          </div>
        </section>

        <!-- Gallery Grid -->
        <section class="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
          <div id="gallery-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Rendered by renderGalleryItems -->
          </div>
        </section>

        <!-- Customer Testimonials Section -->
        <section class="py-20 bg-[#0d0d10] border-t border-[#292929]">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-2xl mx-auto mb-16">
              <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">PROVEN PATRONAGE</span>
              <h2 class="text-3xl sm:text-5xl font-heading font-black text-white uppercase">Customer Testimonials & Experiences</h2>
              <p class="text-xs text-neutral-400 mt-2">Verified reflections from executives, entrepreneurs, and motorsport enthusiasts across India.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              ${data.TESTIMONIALS.map(t => `
                <div class="p-6 bg-[#141417] border border-[#26262a] rounded-sm flex flex-col justify-between hover:border-[#1C69D4]/60 transition-all">
                  <div>
                    <div class="flex items-center justify-between mb-4">
                      <div class="flex items-center gap-1 text-[#1C69D4]">
                        ${Array(t.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-current"></i>').join('')}
                      </div>
                      ${t.verifiedBuyer ? `
                        <span class="inline-flex items-center gap-1 text-[10px] font-mono text-green-400 bg-green-950/60 px-2 py-0.5 rounded-xs border border-green-800">
                          <i data-lucide="shield-check" class="w-3 h-3"></i>
                          <span>Verified Owner</span>
                        </span>
                      ` : ''}
                    </div>
                    <p class="text-neutral-300 text-xs leading-relaxed italic">"${t.review}"</p>
                  </div>
                  <div class="flex items-center gap-3 pt-6 mt-6 border-t border-[#222226]">
                    <img src="${t.customerPhoto}" alt="${t.customerName}" class="w-12 h-12 rounded-full object-cover border border-[#1C69D4]/50" />
                    <div>
                      <h4 class="text-white text-sm font-bold font-heading">${t.customerName}</h4>
                      <div class="text-xs text-[#1C69D4] font-mono">${t.vehicleModel}</div>
                      <div class="text-[10px] text-neutral-500">${t.city} • Handover ${t.deliveryYear}</div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- CTA Section -->
        <section class="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div class="bg-gradient-to-r from-[#141417] to-[#111114] border border-[#292929] rounded-sm p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div class="space-y-2 max-w-xl text-center md:text-left">
              <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">PRIVATE ATELIER ACCESS</span>
              <h3 class="text-2xl sm:text-3xl font-heading font-black text-white uppercase">Schedule Your Private Showroom Reception</h3>
              <p class="text-xs text-neutral-400 leading-relaxed">Step into our flagship ateliers across Mumbai, New Delhi, Bengaluru, and Kochi for private consultation and doorstep test drives.</p>
            </div>
            <div class="flex flex-wrap gap-3">
              <button onclick="window.BMWApp.openQuickEnquiry('Gallery Consultation')" class="btn-bmw-blue">
                Book Private Consultation
              </button>
              <a href="#models" class="btn-bmw-ghost">
                Explore Models
              </a>
            </div>
          </div>
        </section>
      </div>
    `;

    document.getElementById('page-container').innerHTML = html;
    this.renderGalleryItems(data.GALLERY);
    if (window.lucide) window.lucide.createIcons();
  },

  renderGalleryItems: function(items) {
    const grid = document.getElementById('gallery-grid');
    if (!grid) return;

    grid.innerHTML = items.map((item, idx) => `
      <div onclick="window.BMWPages.openLightbox(${idx})" class="group relative bg-[#141417] border border-[#242428] rounded-sm overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:border-[#1C69D4]">
        <div class="overflow-hidden bg-black ${item.aspect === 'portrait' ? 'aspect-[3/4]' : item.aspect === 'square' ? 'aspect-square' : 'aspect-[16/10]'}">
          <img src="${item.image}" alt="${item.title}" class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" loading="lazy" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5">
          <div class="flex justify-between items-start">
            <span class="text-[9px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-xs bg-black/70 border border-white/10 text-white">${item.category}</span>
            <div class="w-8 h-8 rounded-full bg-black/60 group-hover:bg-[#1C69D4] text-white flex items-center justify-center transition-colors">
              <i data-lucide="maximize-2" class="w-3.5 h-3.5"></i>
            </div>
          </div>
          <div>
            <h3 class="text-white font-heading font-bold text-base leading-snug group-hover:text-[#1C69D4] transition-colors">${item.title}</h3>
            <p class="text-neutral-300 text-xs mt-1 line-clamp-2">${item.caption}</p>
            <div class="flex items-center gap-1.5 text-[10px] text-neutral-400 font-mono mt-2">
              <i data-lucide="map-pin" class="w-3 h-3 text-[#1C69D4]"></i>
              <span>${item.location}</span>
            </div>
          </div>
        </div>
      </div>
    `).join('');

    if (window.lucide) window.lucide.createIcons();
  },

  filterGalleryCategory: function(catId) {
    document.querySelectorAll('.gal-cat-pill').forEach(btn => {
      if (btn.getAttribute('data-cat') === catId) {
        btn.classList.add('bg-[#1C69D4]', 'text-white', 'font-bold');
        btn.classList.remove('bg-[#141417]', 'text-neutral-400');
      } else {
        btn.classList.remove('bg-[#1C69D4]', 'text-white', 'font-bold');
        btn.classList.add('bg-[#141417]', 'text-neutral-400');
      }
    });

    const items = catId === 'ALL' 
      ? window.BMWData.GALLERY 
      : window.BMWData.GALLERY.filter(item => item.category === catId);
    this.renderGalleryItems(items);
  },

  openLightbox: function(index) {
    this.lightboxCurrentIndex = index;
    const item = window.BMWData.GALLERY[index];
    if (!item) return;

    const lbHtml = `
      <div id="gallery-lightbox" class="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between animate-fadeIn">
        <div class="p-4 sm:p-6 flex items-center justify-between border-b border-white/10 z-10">
          <div class="flex items-center gap-3">
            <span class="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold">
              EDITORIAL ARCHIVE • ${index + 1} OF ${window.BMWData.GALLERY.length}
            </span>
            <span class="text-white/40">•</span>
            <span class="text-xs uppercase tracking-wider text-neutral-300 font-mono">${item.category}</span>
          </div>
          <button onclick="document.getElementById('gallery-lightbox').remove()" class="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>

        <div class="relative flex-1 flex items-center justify-center p-4 sm:p-8 min-h-0">
          <button onclick="window.BMWPages.stepLightbox(-1)" class="absolute left-4 sm:left-8 p-3 rounded-full bg-black/60 hover:bg-[#1C69D4] text-white transition-all backdrop-blur-md z-10 border border-white/10">
            <i data-lucide="chevron-left" class="w-6 h-6"></i>
          </button>
          <img id="lightbox-main-img" src="${item.image}" alt="${item.title}" class="max-h-[75vh] w-auto object-contain rounded-xs shadow-2xl border border-white/10 animate-scaleUp" />
          <button onclick="window.BMWPages.stepLightbox(1)" class="absolute right-4 sm:right-8 p-3 rounded-full bg-black/60 hover:bg-[#1C69D4] text-white transition-all backdrop-blur-md z-10 border border-white/10">
            <i data-lucide="chevron-right" class="w-6 h-6"></i>
          </button>
        </div>

        <div class="p-6 bg-[#0a0a0c] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs z-10">
          <div>
            <h3 id="lightbox-title" class="text-white font-heading font-bold text-base mb-1">${item.title}</h3>
            <p id="lightbox-caption" class="text-neutral-400 max-w-2xl text-xs">${item.caption}</p>
          </div>
          <div class="flex items-center gap-1.5 text-neutral-400 font-mono text-xs">
            <i data-lucide="map-pin" class="w-3.5 h-3.5 text-[#1C69D4]"></i>
            <span id="lightbox-loc">${item.location}</span>
          </div>
        </div>
      </div>
    `;

    document.getElementById('gallery-lightbox')?.remove();
    document.body.insertAdjacentHTML('beforeend', lbHtml);
    if (window.lucide) window.lucide.createIcons();
  },

  stepLightbox: function(dir) {
    const list = window.BMWData.GALLERY;
    let nextIdx = (this.lightboxCurrentIndex + dir + list.length) % list.length;
    this.openLightbox(nextIdx);
  }
};
