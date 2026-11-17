// BMW LUXURY SHOWROOM - EXECUTIVE DIRECTORS ADMIN PORTAL

(function() {
  class BMWAdminPortal {
    constructor() {
      this.isAuthenticated = false;
      this.activeTab = 'prebookings';
    }

    openAdminModal() {
      this.render();
    }

    render() {
      const existing = document.getElementById('bmw-admin-modal');
      if (existing) existing.remove();

      const modalHtml = `
        <div id="bmw-admin-modal" class="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
          <div class="relative w-full max-w-6xl bg-[#111114] border border-[#292929] rounded-sm shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
            
            <div class="px-6 py-4 border-b border-[#222225] flex items-center justify-between bg-[#0a0a0c]">
              <div class="flex items-center gap-2.5">
                <i data-lucide="shield" class="w-5 h-5 text-[#1C69D4]"></i>
                <h2 class="text-lg font-heading font-extrabold text-white">
                  BMW Showroom Directors Portal — India
                </h2>
                <span class="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#1C69D4]/20 text-[#1C69D4] border border-[#1C69D4]/30">
                  Confidential
                </span>
              </div>
              <button onclick="document.getElementById('bmw-admin-modal').remove()" class="p-1.5 rounded-full bg-[#18181b] hover:bg-[#25252a] text-neutral-400 hover:text-white transition-colors">
                <i data-lucide="x" class="w-5 h-5"></i>
              </button>
            </div>

            <div class="p-6 flex-1 overflow-y-auto" id="admin-modal-body">
              ${this.renderBodyContent()}
            </div>

            <div class="px-6 py-3 border-t border-[#222225] bg-[#0a0a0c] flex items-center justify-between text-xs text-neutral-500">
              <span>BMW Group India Dealer Network Administration</span>
              ${this.isAuthenticated ? `
                <button onclick="window.porscheAdmin.logout()" class="hover:text-white transition-colors font-mono">
                  Lock Portal
                </button>
              ` : ''}
            </div>
          </div>
        </div>
      `;

      document.body.insertAdjacentHTML('beforeend', modalHtml);
      if (window.lucide) window.lucide.createIcons();
    }

    renderBodyContent() {
      if (!this.isAuthenticated) {
        return `
          <div class="max-w-md mx-auto py-12 text-center space-y-6">
            <div class="w-16 h-16 rounded-full bg-[#161619] border border-[#292929] text-[#1C69D4] flex items-center justify-center mx-auto shadow-lg">
              <i data-lucide="lock" class="w-8 h-8"></i>
            </div>
            <div>
              <h3 class="text-xl font-heading font-bold text-white">Showroom Executive Authentication</h3>
              <p class="text-neutral-400 text-xs mt-1">Restricted portal for BMW General Managers, Client Advisors, and Service Directors.</p>
            </div>
            <form onsubmit="window.porscheAdmin.handleLogin(event)" class="space-y-4">
              <div>
                <input type="password" id="admin-passcode-input" placeholder="Enter Passcode (default: bmw2026)" class="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-4 py-2.5 rounded-xs text-white text-center text-sm outline-none font-mono" />
                <p id="admin-auth-err" class="text-red-400 text-xs mt-1 hidden">Incorrect passcode. Try: bmw2026</p>
              </div>
              <div class="flex gap-2">
                <button type="submit" class="btn-bmw-blue flex-1 py-2.5 text-xs">
                  Unlock Portal
                </button>
                <button type="button" onclick="window.porscheAdmin.quickUnlock()" class="px-4 py-2.5 bg-[#1f1f23] hover:bg-[#28282e] text-neutral-300 text-xs uppercase font-mono rounded-xs">
                  Demo Unlock
                </button>
              </div>
            </form>
          </div>
        `;
      }

      const prebookings = window.BMWStore.getPreBookings();
      const services = window.BMWStore.getServices();
      const totalPipeline = prebookings.reduce((sum, item) => sum + (item.estimatedOnRoadPriceINR || 0), 0);

      return `
        <div class="space-y-6">
          <!-- KPI Summary Strip -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div class="p-4 bg-[#151518] rounded-xs border border-[#26262c]">
              <span class="text-[10px] uppercase font-mono text-neutral-400 block">Total Pre-Bookings</span>
              <div class="text-2xl font-heading font-extrabold text-white mt-1">${prebookings.length}</div>
              <span class="text-[11px] text-[#1C69D4]">Active Allocations</span>
            </div>
            <div class="p-4 bg-[#151518] rounded-xs border border-[#26262c]">
              <span class="text-[10px] uppercase font-mono text-neutral-400 block">Order Pipeline</span>
              <div class="text-2xl font-heading font-extrabold text-white mt-1">${window.BMWData.formatINR(totalPipeline)}</div>
              <span class="text-[11px] text-neutral-500 font-mono">Gross On-Road</span>
            </div>
            <div class="p-4 bg-[#151518] rounded-xs border border-[#26262c]">
              <span class="text-[10px] uppercase font-mono text-neutral-400 block">Service Appointments</span>
              <div class="text-2xl font-heading font-extrabold text-white mt-1">${services.length}</div>
              <span class="text-[11px] text-green-400">CBS Scheduled</span>
            </div>
            <div class="p-4 bg-[#151518] rounded-xs border border-[#26262c] flex flex-col justify-between">
              <span class="text-[10px] uppercase font-mono text-neutral-400 block">Data Actions</span>
              <button onclick="window.porscheAdmin.exportData()" class="mt-2 py-2 px-3 rounded-xs bg-[#1C69D4]/20 hover:bg-[#1C69D4] border border-[#1C69D4] text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-all">
                <i data-lucide="download" class="w-3.5 h-3.5"></i>
                <span>Export JSON Archive</span>
              </button>
            </div>
          </div>

          <!-- Tabs -->
          <div class="flex border-b border-[#222225] gap-4">
            <button onclick="window.porscheAdmin.setTab('prebookings')" class="py-2 px-1 text-xs uppercase font-mono tracking-wider border-b-2 transition-all ${this.activeTab === 'prebookings' ? 'border-[#1C69D4] text-white font-bold' : 'border-transparent text-neutral-400'}">
              Pre-Bookings (${prebookings.length})
            </button>
            <button onclick="window.porscheAdmin.setTab('services')" class="py-2 px-1 text-xs uppercase font-mono tracking-wider border-b-2 transition-all ${this.activeTab === 'services' ? 'border-[#1C69D4] text-white font-bold' : 'border-transparent text-neutral-400'}">
              Service Requests (${services.length})
            </button>
            <button onclick="window.porscheAdmin.setTab('catalogue')" class="py-2 px-1 text-xs uppercase font-mono tracking-wider border-b-2 transition-all ${this.activeTab === 'catalogue' ? 'border-[#1C69D4] text-white font-bold' : 'border-transparent text-neutral-400'}">
              Vehicle Catalogue (${window.BMWData.MODELS.length})
            </button>
          </div>

          <!-- Tab Contents -->
          ${this.activeTab === 'prebookings' ? `
            <div class="space-y-3">
              ${prebookings.map(item => `
                <div class="p-4 bg-[#151518] rounded-xs border border-[#26262c] flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div class="space-y-1">
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-xs font-bold text-[#1C69D4]">${item.referenceNumber}</span>
                      <span class="text-[10px] text-neutral-500 font-mono">${new Date(item.submittedAt).toLocaleDateString()}</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded-xs font-semibold ${item.status === 'Allocation Confirmed' ? 'bg-green-950 text-green-300 border border-green-800' : 'bg-blue-950 text-blue-300 border border-blue-800'}">
                        ${item.status}
                      </span>
                    </div>
                    <div class="text-white font-heading font-bold text-sm">
                      ${item.customerName} • <span class="text-neutral-400 font-normal text-xs">${item.mobileNumber}</span> • <span class="text-neutral-400 font-normal text-xs">${item.emailAddress}</span>
                    </div>
                    <div class="text-xs text-neutral-300">
                      Model: <strong class="text-white">${item.selectedModelName}</strong> (${item.selectedVariantName})
                      ${item.selectedColour ? ` • Paint: ${item.selectedColour}` : ''}
                    </div>
                    <div class="text-[11px] text-neutral-500 font-mono">
                      Showroom: ${item.preferredShowroom} • Fin: ${item.preferredFinancing} • Est: ${window.BMWData.formatINR(item.estimatedOnRoadPriceINR)}
                    </div>
                    ${item.additionalMessage ? `
                      <p class="text-[11px] text-neutral-400 italic mt-1 bg-black/40 p-2 rounded-xs">"${item.additionalMessage}"</p>
                    ` : ''}
                  </div>
                  <div class="shrink-0 flex items-center gap-2">
                    <select onchange="window.BMWStore.updatePreBookingStatus('${item.id}', this.value); window.porscheAdmin.render();" class="bg-[#0e0e11] border border-[#2a2a30] text-xs text-white px-3 py-1.5 rounded-xs outline-none">
                      <option value="New" ${item.status === 'New' ? 'selected' : ''}>Status: New</option>
                      <option value="Contacted" ${item.status === 'Contacted' ? 'selected' : ''}>Status: Contacted</option>
                      <option value="Test Drive Scheduled" ${item.status === 'Test Drive Scheduled' ? 'selected' : ''}>Status: Test Drive</option>
                      <option value="Allocation Confirmed" ${item.status === 'Allocation Confirmed' ? 'selected' : ''}>Status: Confirmed</option>
                    </select>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${this.activeTab === 'services' ? `
            <div class="space-y-3">
              ${services.map(srv => `
                <div class="p-4 bg-[#151518] rounded-xs border border-[#26262c] flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <div class="flex items-center gap-2">
                      <span class="font-mono text-xs font-bold text-[#1C69D4]">${srv.referenceNumber}</span>
                      <span class="text-[10px] text-neutral-500 font-mono">${srv.preferredDate} at ${srv.preferredTime}</span>
                      <span class="text-[10px] bg-green-950 text-green-300 px-2 py-0.5 rounded-xs">${srv.status}</span>
                    </div>
                    <h4 class="text-white font-heading font-bold text-sm mt-1">${srv.customerName} (${srv.mobileNumber})</h4>
                    <div class="text-xs text-neutral-300 mt-0.5">${srv.serviceType}</div>
                    <div class="text-[11px] text-neutral-500 mt-1">Car: ${srv.vehicleModel} • Reg: ${srv.registrationNumber || 'N/A'} • Showroom: ${srv.preferredShowroom}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}

          ${this.activeTab === 'catalogue' ? `
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${window.BMWData.MODELS.map(m => `
                <div class="p-3 bg-[#151518] rounded-xs border border-[#26262c] flex gap-3">
                  <img src="${m.heroImage}" alt="${m.name}" class="w-20 h-16 object-cover rounded-xs" />
                  <div class="flex-1">
                    <span class="text-[9px] uppercase font-mono text-[#1C69D4]">${m.category}</span>
                    <h4 class="font-heading font-bold text-white text-xs">${m.name}</h4>
                    <span class="text-xs font-bold text-neutral-300 block">${window.BMWData.formatINR(m.startingPriceINR)}</span>
                    <span class="text-[10px] text-neutral-500">${m.variants.length} Variants • ${m.availableColours.length} Colours</span>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }

    handleLogin(e) {
      e.preventDefault();
      const code = document.getElementById('admin-passcode-input')?.value;
      if (code?.trim().toLowerCase() === 'bmw2026' || code?.trim() === '1234') {
        this.isAuthenticated = true;
        this.render();
      } else {
        const err = document.getElementById('admin-auth-err');
        if (err) err.classList.remove('hidden');
      }
    }

    quickUnlock() {
      this.isAuthenticated = true;
      this.render();
    }

    logout() {
      this.isAuthenticated = false;
      this.render();
    }

    setTab(tab) {
      this.activeTab = tab;
      const body = document.getElementById('admin-modal-body');
      if (body) body.innerHTML = this.renderBodyContent();
      if (window.lucide) window.lucide.createIcons();
    }

    exportData() {
      const dataStr = JSON.stringify({
        preBookings: window.BMWStore.getPreBookings(),
        services: window.BMWStore.getServices()
      }, null, 2);
      const blob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `BMW_Showroom_Enquiries_${new Date().toISOString().split('T')[0]}.json`;
      a.click();
    }
  }

  window.porscheAdmin = new BMWAdminPortal();
})();
