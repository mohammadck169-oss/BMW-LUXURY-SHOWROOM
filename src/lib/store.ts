import { PreBookingEnquiry, ServiceEnquiry, BMWModel } from '../types/bmw';
import { BMW_MODELS } from '../data/bmwModels';

const PREBOOKING_STORAGE_KEY = 'bmw_luxury_prebookings';
const SERVICE_STORAGE_KEY = 'bmw_luxury_service_enquiries';

// Initial sample data if storage is empty
const INITIAL_PREBOOKINGS: PreBookingEnquiry[] = [
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

const INITIAL_SERVICES: ServiceEnquiry[] = [
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

export class BMWStore {
  // Enquiries
  static getPreBookings(): PreBookingEnquiry[] {
    try {
      const data = localStorage.getItem(PREBOOKING_STORAGE_KEY);
      if (!data) {
        localStorage.setItem(PREBOOKING_STORAGE_KEY, JSON.stringify(INITIAL_PREBOOKINGS));
        return INITIAL_PREBOOKINGS;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_PREBOOKINGS;
    }
  }

  static addPreBooking(enquiry: Omit<PreBookingEnquiry, 'id' | 'referenceNumber' | 'submittedAt' | 'status'>): PreBookingEnquiry {
    const randomDigits = Math.floor(10000 + Math.random() * 90000);
    const newEnquiry: PreBookingEnquiry = {
      ...enquiry,
      id: 'pb-' + Date.now(),
      referenceNumber: `BMW-IN-2026-${randomDigits}`,
      submittedAt: new Date().toISOString(),
      status: 'New'
    };

    const existing = this.getPreBookings();
    const updated = [newEnquiry, ...existing];
    try {
      localStorage.setItem(PREBOOKING_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save to localStorage', e);
    }
    return newEnquiry;
  }

  static updatePreBookingStatus(id: string, status: PreBookingEnquiry['status']): boolean {
    const list = this.getPreBookings();
    const index = list.findIndex(item => item.id === id);
    if (index !== -1) {
      list[index].status = status;
      localStorage.setItem(PREBOOKING_STORAGE_KEY, JSON.stringify(list));
      return true;
    }
    return false;
  }

  static getServiceEnquiries(): ServiceEnquiry[] {
    try {
      const data = localStorage.getItem(SERVICE_STORAGE_KEY);
      if (!data) {
        localStorage.setItem(SERVICE_STORAGE_KEY, JSON.stringify(INITIAL_SERVICES));
        return INITIAL_SERVICES;
      }
      return JSON.parse(data);
    } catch {
      return INITIAL_SERVICES;
    }
  }

  static addServiceEnquiry(enquiry: Omit<ServiceEnquiry, 'id' | 'referenceNumber' | 'submittedAt' | 'status'>): ServiceEnquiry {
    const randomDigits = Math.floor(1000 + Math.random() * 9000);
    const newEnquiry: ServiceEnquiry = {
      ...enquiry,
      id: 'se-' + Date.now(),
      referenceNumber: `SRV-IN-2026-${randomDigits}`,
      submittedAt: new Date().toISOString(),
      status: 'Received'
    };

    const existing = this.getServiceEnquiries();
    const updated = [newEnquiry, ...existing];
    try {
      localStorage.setItem(SERVICE_STORAGE_KEY, JSON.stringify(updated));
    } catch (e) {
      console.error('Failed to save service enquiry', e);
    }
    return newEnquiry;
  }

  // Model comparison storage
  static getCompareList(): string[] {
    try {
      const data = localStorage.getItem('bmw_compare_list');
      return data ? JSON.parse(data) : ['m4-competition', '7-series-sedan'];
    } catch {
      return ['m4-competition', '7-series-sedan'];
    }
  }

  static toggleCompare(modelId: string): string[] {
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
      localStorage.setItem('bmw_compare_list', JSON.stringify(list));
    } catch {}
    return list;
  }

  static getComparedModels(): BMWModel[] {
    const ids = this.getCompareList();
    return BMW_MODELS.filter(m => ids.includes(m.id));
  }
}
