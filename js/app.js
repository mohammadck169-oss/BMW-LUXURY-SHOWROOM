// BMW LUXURY AUTOMOTIVE SHOWROOM - GLOBAL APPLICATION INITIALIZER & CONTROLLER

(function() {
  window.BMWApp = {
    init: function() {
      this.bindNavigation();
      this.bindScrollEffects();
      this.bindAudioToggle();
      this.bindCompareEvents();
      this.route();
    },

    route: function() {
      const hash = window.location.hash.replace('#', '').trim() || 'home';
      this.setActiveNav(hash);

      switch (hash) {
        case 'home':
          window.BMWPages.renderHome();
          break;
        case 'services':
          window.BMWPages.renderServices();
          break;
        case '360':
          window.BMWPages.render360();
          break;
        case 'models':
          window.BMWPages.renderModels();
          break;
        case 'configurator':
          window.BMWPages.renderConfigurator();
          break;
        case 'gallery':
          window.BMWPages.renderGallery();
          break;
        default:
          window.BMWPages.renderHome();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    bindNavigation: function() {
      window.addEventListener('hashchange', () => {
        this.route();
      });

      // Mobile drawer handlers
      const mobileDrawer = document.getElementById('mobile-drawer');
      const btnMenu = document.getElementById('btn-mobile-menu');
      const btnClose = document.getElementById('btn-close-drawer');

      btnMenu?.addEventListener('click', () => {
        mobileDrawer?.classList.remove('hidden');
      });

      btnClose?.addEventListener('click', () => {
        mobileDrawer?.classList.add('hidden');
      });

      document.querySelectorAll('#mobile-drawer a').forEach(a => {
        a.addEventListener('click', () => {
          mobileDrawer?.classList.add('hidden');
        });
      });
    },

    setActiveNav: function(hash) {
      document.querySelectorAll('.nav-link').forEach(link => {
        const href = link.getAttribute('href')?.replace('#', '');
        link.classList.toggle('active', href === hash);
      });
    },

    bindScrollEffects: function() {
      const header = document.querySelector('header');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          header?.classList.add('bg-[#080808]/90', 'backdrop-blur-md', 'border-b', 'border-[#292929]', 'py-3.5', 'shadow-2xl');
          header?.classList.remove('py-5', 'bg-transparent');
        } else {
          header?.classList.remove('bg-[#080808]/90', 'backdrop-blur-md', 'border-b', 'border-[#292929]', 'py-3.5', 'shadow-2xl');
          header?.classList.add('py-5');
        }
      });
    },

    bindAudioToggle: function() {
      const btn = document.getElementById('btn-audio-toggle');
      const pulse = document.getElementById('audio-visualizer-pulse');
      btn?.addEventListener('click', () => {
        const active = window.bmwAudio.toggleEngine();
        btn.classList.toggle('text-[#1C69D4]', active);
        btn.classList.toggle('border-[#1C69D4]', active);
        pulse?.classList.toggle('hidden', !active);
      });
    },

    bindCompareEvents: function() {
      window.addEventListener('bmw:compare-changed', (e) => {
        const list = e.detail || [];
        const badge = document.getElementById('nav-compare-count');
        if (badge) {
          badge.textContent = list.length;
          badge.classList.toggle('hidden', list.length === 0);
        }
      });
    },

    openCompareDrawer: function() {
      const ids = window.BMWStore.getCompareList();
      const compared = window.BMWData.MODELS.filter(m => ids.includes(m.id));

      const modalHtml = `
        <div id="compare-modal" class="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div class="relative w-full max-w-6xl bg-[#111114] border border-[#292929] rounded-sm shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
            <div class="px-6 py-4 border-b border-[#222225] flex items-center justify-between bg-[#0a0a0c]">
              <div class="flex items-center gap-2">
                <h2 class="text-xl font-heading font-extrabold text-white">BMW Comparative Engineering Matrix</h2>
                <span class="text-xs font-mono px-2 py-0.5 rounded-full bg-[#1C69D4]/20 text-[#1C69D4] border border-[#1C69D4]/40">
                  ${compared.length} of 3 Models
                </span>
              </div>
              <button onclick="document.getElementById('compare-modal').remove()" class="p-2 rounded-full bg-[#18181b] hover:bg-[#25252a] text-neutral-400 hover:text-white transition-colors">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>

            <div class="overflow-x-auto overflow-y-auto p-6 flex-1">
              ${compared.length === 0 ? `
                <div class="text-center py-16 text-neutral-400 text-sm">
                  No BMW vehicles selected for comparison. Click "Compare" on up to 3 models in the catalogue.
                </div>
              ` : `
                <div class="min-w-[700px]">
                  <div class="grid grid-cols-4 gap-4 pb-6 border-b border-[#222225]">
                    <div class="flex flex-col justify-end text-neutral-500 text-xs font-mono uppercase">
                      <span>SPECIFICATION</span>
                    </div>
                    ${compared.map(m => `
                      <div class="p-3 bg-[#151518] rounded-xs border border-[#26262c] relative">
                        <button onclick="window.BMWPages.toggleCompareModel('${m.id}'); document.getElementById('compare-modal').remove(); window.BMWApp.openCompareDrawer();" title="Remove" class="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-red-900/60 text-neutral-400 hover:text-red-400 transition-colors">
                          <i data-lucide="trash-2" class="w-3.5 h-3.5"></i>
                        </button>
                        <img src="${m.heroImage}" alt="${m.name}" class="w-full h-24 object-cover rounded-xs mb-2" />
                        <span class="text-[9px] uppercase font-mono text-[#1C69D4] block">${m.category}</span>
                        <h4 class="font-heading font-bold text-white text-sm line-clamp-1">${m.name}</h4>
                        <div class="text-sm font-extrabold text-white mt-1">${window.BMWData.formatINR(m.startingPriceINR)}</div>
                        <div class="grid grid-cols-2 gap-1.5 mt-3">
                          <a href="#360" onclick="document.getElementById('compare-modal').remove(); window.BMWPages.selectModelFor360('${m.id}')" class="p-1.5 rounded-xs bg-[#1f1f24] hover:bg-[#2c2c34] text-[10px] text-neutral-200 uppercase font-mono text-center">360°</a>
                          <a href="#configurator" onclick="document.getElementById('compare-modal').remove(); window.BMWPages.selectModelForConfig('${m.id}')" class="p-1.5 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-[10px] text-white uppercase font-mono font-bold text-center">Config</a>
                        </div>
                      </div>
                    `).join('')}
                  </div>

                  <div class="divide-y divide-[#1c1c20] text-xs">
                    <div class="grid grid-cols-4 gap-4 py-3"><div class="text-neutral-400 font-medium">Standard Powertrain</div>${compared.map(m => `<div class="text-white">${m.variants[0]?.engine}</div>`).join('')}</div>
                    <div class="grid grid-cols-4 gap-4 py-3 bg-[#131316]/50"><div class="text-neutral-400 font-medium">Power Output</div>${compared.map(m => `<div class="text-white font-bold font-mono">${m.performance.horsepower} HP</div>`).join('')}</div>
                    <div class="grid grid-cols-4 gap-4 py-3"><div class="text-neutral-400 font-medium">Torque</div>${compared.map(m => `<div class="text-white font-mono">${m.performance.torqueNm} Nm</div>`).join('')}</div>
                    <div class="grid grid-cols-4 gap-4 py-3 bg-[#131316]/50"><div class="text-neutral-400 font-medium">0–100 km/h Sprint</div>${compared.map(m => `<div class="text-[#1C69D4] font-bold font-mono">${m.performance.acceleration0to100}s</div>`).join('')}</div>
                    <div class="grid grid-cols-4 gap-4 py-3"><div class="text-neutral-400 font-medium">Top Speed</div>${compared.map(m => `<div class="text-white font-mono">${m.performance.topSpeedKmH} km/h</div>`).join('')}</div>
                    <div class="grid grid-cols-4 gap-4 py-3 bg-[#131316]/50"><div class="text-neutral-400 font-medium">Transmission / Drive</div>${compared.map(m => `<div class="text-white">${m.variants[0]?.drivetrain}</div>`).join('')}</div>
                    <div class="grid grid-cols-4 gap-4 py-3"><div class="text-neutral-400 font-medium">Efficiency / Range</div>${compared.map(m => `<div class="text-white font-mono">${m.performance.efficiencyRating}</div>`).join('')}</div>
                    <div class="grid grid-cols-4 gap-4 py-3 bg-[#131316]/50"><div class="text-neutral-400 font-medium">Dimensions (L x W x H)</div>${compared.map(m => `<div class="text-neutral-300 font-mono">${m.dimensions.lengthMm} x ${m.dimensions.widthMm} x ${m.dimensions.heightMm} mm</div>`).join('')}</div>
                    <div class="grid grid-cols-4 gap-4 py-3"><div class="text-neutral-400 font-medium">Boot Space</div>${compared.map(m => `<div class="text-white font-mono">${m.dimensions.bootCapacityLiters} Litres</div>`).join('')}</div>
                  </div>
                </div>
              `}
            </div>

            <div class="px-6 py-3 border-t border-[#222225] bg-[#0a0a0c] text-right">
              <button onclick="document.getElementById('compare-modal').remove()" class="px-5 py-2 rounded-xs bg-[#18181b] hover:bg-[#25252b] text-white text-xs uppercase font-mono tracking-wider">Close Matrix</button>
            </div>
          </div>
        </div>
      `;

      document.getElementById('compare-modal')?.remove();
      document.body.insertAdjacentHTML('beforeend', modalHtml);
      if (window.lucide) window.lucide.createIcons();
    },

    openQuickEnquiry: function(defaultModel) {
      const data = window.BMWData;
      const modalHtml = `
        <div id="quick-enquiry-modal" class="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div class="relative w-full max-w-xl bg-[#111114] border border-[#292929] rounded-sm shadow-2xl overflow-hidden my-auto">
            <div class="px-6 py-4 border-b border-[#222225] flex items-center justify-between bg-[#0a0a0c]">
              <div class="flex items-center gap-2">
                <div class="w-2.5 h-2.5 rounded-full bg-[#1C69D4] animate-pulse"></div>
                <h2 class="text-lg font-heading font-extrabold text-white">Bespoke Test Drive & Atelier Consultation</h2>
              </div>
              <button onclick="document.getElementById('quick-enquiry-modal').remove()" class="p-1.5 rounded-full bg-[#18181b] hover:bg-[#25252a] text-neutral-400 hover:text-white transition-colors">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>

            <div class="p-6" id="quick-enquiry-body">
              <form onsubmit="window.BMWApp.submitQuickEnquiry(event)" class="space-y-4">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">Full Name *</label>
                    <input type="text" id="qe-name" required placeholder="e.g. Vikramaditya Singhania" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none" />
                  </div>
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">Mobile Number (India) *</label>
                    <input type="tel" id="qe-phone" required placeholder="+91 98200 12345" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none" />
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">Email Address *</label>
                    <input type="email" id="qe-email" required placeholder="name@domain.com" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none" />
                  </div>
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">Preferred Model *</label>
                    <select id="qe-model" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none">
                      ${data.MODELS.map(m => `<option value="${m.name}" ${defaultModel && defaultModel.includes(m.name) ? 'selected' : ''}>${m.name}</option>`).join('')}
                    </select>
                  </div>
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">Preferred Showroom *</label>
                    <select id="qe-showroom" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none">
                      ${data.SHOWROOMS.map(loc => `<option value="${loc.name}">${loc.city} — ${loc.name.split('—')[1]?.trim() || loc.name}</option>`).join('')}
                    </select>
                  </div>
                  <div>
                    <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">Preferred Date</label>
                    <input type="date" id="qe-date" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none" />
                  </div>
                </div>

                <div>
                  <label class="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">Special Doorstep Route Request</label>
                  <textarea id="qe-notes" rows="2" placeholder="e.g. Please bring test drive car to residence." class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none resize-none"></textarea>
                </div>

                <div class="pt-2">
                  <button type="submit" class="btn-bmw-blue w-full py-3">Confirm Test Drive Appointment</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      `;

      document.getElementById('quick-enquiry-modal')?.remove();
      document.body.insertAdjacentHTML('beforeend', modalHtml);
      if (window.lucide) window.lucide.createIcons();
    },

    submitQuickEnquiry: function(e) {
      e.preventDefault();
      const name = document.getElementById('qe-name').value;
      const phone = document.getElementById('qe-phone').value;
      const email = document.getElementById('qe-email').value;
      const modelName = document.getElementById('qe-model').value;
      const loc = document.getElementById('qe-showroom').value;
      const date = document.getElementById('qe-date').value;
      const notes = document.getElementById('qe-notes').value;

      const m = window.BMWData.MODELS.find(item => item.name === modelName) || window.BMWData.MODELS[0];

      const newBooking = window.BMWStore.addPreBooking({
        customerName: name,
        mobileNumber: phone,
        emailAddress: email,
        selectedModelId: m.id,
        selectedModelName: m.name,
        selectedVariantName: m.variants[0]?.name || 'Standard',
        selectedColour: m.availableColours[0]?.name || 'Signature',
        selectedWheel: m.availableWheels[0]?.name || 'Standard',
        selectedInterior: m.availableInteriors[0]?.name || 'Merino Leather',
        selectedPackages: ['Test Drive Reservation'],
        preferredShowroom: loc,
        registrationCity: loc.includes('Mumbai') ? 'Mumbai' : 'New Delhi',
        preferredFinancing: 'BMW Financial Services',
        additionalMessage: `Preferred Date: ${date || 'Earliest'}. ${notes}`,
        estimatedOnRoadPriceINR: m.startingPriceINR * 1.15
      });

      const body = document.getElementById('quick-enquiry-body');
      if (body) {
        body.innerHTML = `
          <div class="text-center py-6 space-y-4 animate-scaleUp">
            <div class="w-14 h-14 rounded-full bg-[#1C69D4]/20 border border-[#1C69D4] text-[#1C69D4] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(28,105,212,0.4)]">
              <i data-lucide="check-circle" class="w-8 h-8"></i>
            </div>
            <h3 class="text-xl font-heading font-bold text-white">Thank You, ${name}</h3>
            <p class="text-neutral-400 text-xs mt-2 max-w-md mx-auto">Your VIP private viewing request has been logged with our senior client advisor team.</p>
            <div class="p-4 bg-[#161619] rounded-xs border border-[#2a2a30] max-w-sm mx-auto">
              <span class="text-[10px] uppercase text-neutral-500 block font-mono">OFFICIAL REFERENCE TOKEN</span>
              <span class="text-lg font-mono font-bold text-[#1C69D4] tracking-wider">${newBooking.referenceNumber}</span>
              <div class="text-[11px] text-neutral-400 mt-1">Showroom: ${loc.split('—')[0]}</div>
            </div>
            <div class="pt-2">
              <button onclick="document.getElementById('quick-enquiry-modal').remove()" class="btn-bmw-blue py-2.5 px-8 text-xs">Done</button>
            </div>
          </div>
        `;
        if (window.lucide) window.lucide.createIcons();
      }
    }
  };

  // Auto-init on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', () => {
    window.BMWApp.init();
  });
})();
