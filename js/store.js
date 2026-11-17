// BMW LUXURY SHOWROOM - CLIENT-SIDE DATA STORE & STATE MANAGEMENT

(function() {
  const PREBOOK_KEY = 'bmw_luxury_prebookings';
  const SERVICE_KEY = 'bmw_luxury_services';
  const COMPARE_KEY = 'bmw_compare_list';

  const INITIAL_PREBOOKINGS = [
    {
      id: 'pb-001',
      referenceNumber: 'BMW-IN-2026-88192',
      customerName: 'Aditya Birla',
      mobileNumber: '+91 98200 44122',
      emailAddress: 'aditya.b@signatureventures.in',
      selectedModelId: '7-series-sedan',
      selectedModelName: 'BMW 7 Series Sedan',
      selectedVariantName: '740i M Sport',
      selectedColour: 'BMW Individual Two-Tone Sapphire Black / Cashmere Silver',
      selectedWheel: '21" BMW Individual Aerodynamic 910 Multispoke',
      selectedInterior: 'Merino Leather & Cashmere Wool Blend Smoke White',
      selectedPackages: ['BMW Theatre Screen 31.3"', 'Executive Lounge Seating'],
      preferredShowroom: 'Worli Signature Atelier, Mumbai',
      registrationCity: 'Mumbai',
      preferredFinancing: 'Corporate Lease',
      additionalMessage: 'Requires private handover and allocation priority for May 2026.',
      estimatedOnRoadPriceINR: 23640000,
      submittedAt: '2026-11-10T14:30:00Z',
      status: 'Allocation Confirmed'
    },
    {
      id: 'pb-002',
      referenceNumber: 'BMW-IN-2026-91404',
      customerName: 'Rohit Kulkarni',
      mobileNumber: '+91 98110 55432',
      emailAddress: 'rohit.k@apextech.co',
      selectedModelId: 'm4-competition',
      selectedModelName: 'BMW M4 Competition Coupé',
      selectedVariantName: 'M4 Competition Coupé with M xDrive',
      selectedColour: 'Isle of Man Green Metallic',
      selectedWheel: '20"/21" M Performance 1000 M Frozen Gold Bronze',
      selectedInterior: 'Kyalami Orange / Black Full Merino Leather',
      selectedPackages: ['M Carbon Exterior Package', "M Driver's Package"],
      preferredShowroom: 'BMW Bird Prestige Lounge — Aerocity, New Delhi',
      registrationCity: 'New Delhi',
      preferredFinancing: 'BMW Financial Services',
      additionalMessage: 'Test drive scheduled at Buddh International Circuit.',
      estimatedOnRoadPriceINR: 18120000,
      submittedAt: '2026-11-14T09:15:00Z',
      status: 'Test Drive Scheduled'
    }
  ];

  const INITIAL_SERVICES = [
    {
      id: 'se-001',
      referenceNumber: 'SRV-IN-2026-3109',
      customerName: 'Sunil Mittal',
      mobileNumber: '+91 98490 12345',
      emailAddress: 's.mittal@telecom.in',
      serviceType: 'BMW Condition Based Service (CBS) & Maintenance',
      preferredDate: '2026-11-20',
      preferredTime: '10:30 AM',
      vehicleModel: 'BMW X7 xDrive40i',
      registrationNumber: 'MH 01 DX 0007',
      preferredShowroom: 'Worli Signature Atelier, Mumbai',
      additionalNotes: 'Requires pickup from Nariman Point residence.',
      submittedAt: '2026-11-12T11:00:00Z',
      status: 'Confirmed'
    }
  ];

  window.BMWStore = {
    getPreBookings: function() {
      try {
        const raw = localStorage.getItem(PREBOOK_KEY);
        if (!raw) {
          localStorage.setItem(PREBOOK_KEY, JSON.stringify(INITIAL_PREBOOKINGS));
          return INITIAL_PREBOOKINGS;
        }
        return JSON.parse(raw);
      } catch (e) {
        return INITIAL_PREBOOKINGS;
      }
    },

    addPreBooking: function(enquiry) {
      const randomDigits = Math.floor(10000 + Math.random() * 90000);
      const newEntry = Object.assign({}, enquiry, {
        id: 'pb-' + Date.now(),
        referenceNumber: 'BMW-IN-2026-' + randomDigits,
        submittedAt: new Date().toISOString(),
        status: 'New'
      });
      const list = this.getPreBookings();
      list.unshift(newEntry);
      try {
        localStorage.setItem(PREBOOK_KEY, JSON.stringify(list));
      } catch (e) {}
      window.dispatchEvent(new CustomEvent('bmw:booking-added', { detail: newEntry }));
      return newEntry;
    },

    updatePreBookingStatus: function(id, status) {
      const list = this.getPreBookings();
      const idx = list.findIndex(i => i.id === id);
      if (idx !== -1) {
        list[idx].status = status;
        try {
          localStorage.setItem(PREBOOK_KEY, JSON.stringify(list));
        } catch (e) {}
        return true;
      }
      return false;
    },

    getServices: function() {
      try {
        const raw = localStorage.getItem(SERVICE_KEY);
        if (!raw) {
          localStorage.setItem(SERVICE_KEY, JSON.stringify(INITIAL_SERVICES));
          return INITIAL_SERVICES;
        }
        return JSON.parse(raw);
      } catch (e) {
        return INITIAL_SERVICES;
      }
    },

    addService: function(service) {
      const randomDigits = Math.floor(1000 + Math.random() * 9000);
      const newEntry = Object.assign({}, service, {
        id: 'se-' + Date.now(),
        referenceNumber: 'SRV-IN-2026-' + randomDigits,
        submittedAt: new Date().toISOString(),
        status: 'Received'
      });
      const list = this.getServices();
      list.unshift(newEntry);
      try {
        localStorage.setItem(SERVICE_KEY, JSON.stringify(list));
      } catch (e) {}
      window.dispatchEvent(new CustomEvent('bmw:service-added', { detail: newEntry }));
      return newEntry;
    },

    getCompareList: function() {
      try {
        const raw = localStorage.getItem(COMPARE_KEY);
        return raw ? JSON.parse(raw) : ['m4-competition', '7-series-sedan'];
      } catch (e) {
        return ['m4-competition', '7-series-sedan'];
      }
    },

    toggleCompare: function(modelId) {
      let list = this.getCompareList();
      if (list.includes(modelId)) {
        list = list.filter(id => id !== modelId);
      } else {
        if (list.length >= 3) {
          list.shift(); // keep max 3
        }
        list.push(modelId);
      }
      try {
        localStorage.setItem(COMPARE_KEY, JSON.stringify(list));
      } catch (e) {}
      window.dispatchEvent(new CustomEvent('bmw:compare-changed', { detail: list }));
      return list;
    }
  };
})();
