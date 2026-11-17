import { IndianStateTax } from '../types/bmw';

export const INDIAN_STATE_TAXES: Record<string, IndianStateTax> = {
  'delhi': {
    state: 'Delhi (NCT)',
    city: 'New Delhi',
    rtoPercentIndividual: 0.10, // 10% for luxury cars > 10L
    rtoPercentCorporate: 0.125, // 12.5% for company registration
    hypothecationCharges: 1500,
    mcdParkingCess: 4000
  },
  'maharashtra': {
    state: 'Maharashtra',
    city: 'Mumbai / Pune',
    rtoPercentIndividual: 0.13, // 13% for cars > 20L
    rtoPercentCorporate: 0.20, // 20% for company registration
    hypothecationCharges: 1500,
    mcdParkingCess: 0
  },
  'karnataka': {
    state: 'Karnataka',
    city: 'Bengaluru',
    rtoPercentIndividual: 0.18, // 18% highest slab in India
    rtoPercentCorporate: 0.20,
    hypothecationCharges: 1500,
    mcdParkingCess: 1000
  },
  'kerala': {
    state: 'Kerala',
    city: 'Kochi / Trivandrum',
    rtoPercentIndividual: 0.15, // 15% for cars > 20L
    rtoPercentCorporate: 0.20,
    hypothecationCharges: 1500,
    mcdParkingCess: 0
  },
  'tamil-nadu': {
    state: 'Tamil Nadu',
    city: 'Chennai / Coimbatore',
    rtoPercentIndividual: 0.15, // 15%
    rtoPercentCorporate: 0.18,
    hypothecationCharges: 1500,
    mcdParkingCess: 0
  },
  'telangana': {
    state: 'Telangana',
    city: 'Hyderabad',
    rtoPercentIndividual: 0.14, // 14% life tax
    rtoPercentCorporate: 0.17,
    hypothecationCharges: 1500,
    mcdParkingCess: 0
  },
  'haryana': {
    state: 'Haryana',
    city: 'Gurugram / Faridabad',
    rtoPercentIndividual: 0.10, // 10%
    rtoPercentCorporate: 0.12,
    hypothecationCharges: 1500,
    mcdParkingCess: 2000
  },
  'gujarat': {
    state: 'Gujarat',
    city: 'Ahmedabad / Surat',
    rtoPercentIndividual: 0.06, // 6%
    rtoPercentCorporate: 0.12,
    hypothecationCharges: 1500,
    mcdParkingCess: 0
  }
};

export interface PriceBreakdownResult {
  exShowroomPrice: number;
  rtoStateName: string;
  rtoCharges: number;
  registrationType: 'Individual' | 'Corporate';
  comprehensiveInsurance: number;
  tcsCharges: number; // 1% for luxury cars over ₹10 Lakhs
  fastagAndHandling: number;
  optionalPackagesTotal: number;
  totalEstimatedOnRoadPrice: number;
}

export function calculateOnRoadPrice(
  exShowroomBasePrice: number,
  stateKey: string,
  isCorporate: boolean,
  optionalPackagesCost: number = 0
): PriceBreakdownResult {
  const taxData = INDIAN_STATE_TAXES[stateKey] || INDIAN_STATE_TAXES['maharashtra'];
  
  // Ex-showroom base price already INCLUDES GST (28%) and applicable Compensation Cess (22%).
  // We do NOT add GST twice.
  const rtoRate = isCorporate ? taxData.rtoPercentCorporate : taxData.rtoPercentIndividual;
  const rtoCharges = Math.round(exShowroomBasePrice * rtoRate) + (taxData.mcdParkingCess || 0);
  
  // Comprehensive Luxury Insurance (1-Year Own Damage + 3-Year Third Party + Zero Dep + Engine Protect) ~3.25%
  const comprehensiveInsurance = Math.round(exShowroomBasePrice * 0.0325);
  
  // TCS (Tax Collected at Source): 1% as per Section 206C(1F) of Indian Income Tax Act for luxury motor vehicles > ₹10 Lakhs
  const tcsCharges = Math.round(exShowroomBasePrice * 0.01);
  
  // Fastag, high-security registration plates (HSRP), and logistical handling
  const fastagAndHandling = 3500;
  
  const totalEstimatedOnRoadPrice = 
    exShowroomBasePrice + 
    rtoCharges + 
    comprehensiveInsurance + 
    tcsCharges + 
    fastagAndHandling + 
    optionalPackagesCost;

  return {
    exShowroomPrice: exShowroomBasePrice,
    rtoStateName: taxData.state,
    rtoCharges,
    registrationType: isCorporate ? 'Corporate' : 'Individual',
    comprehensiveInsurance,
    tcsCharges,
    fastagAndHandling,
    optionalPackagesTotal: optionalPackagesCost,
    totalEstimatedOnRoadPrice
  };
}

export function formatINR(amount: number): string {
  if (amount >= 10000000) {
    const crores = amount / 10000000;
    return `₹${crores.toFixed(2)} Crore`;
  } else if (amount >= 100000) {
    const lakhs = amount / 100000;
    return `₹${lakhs.toFixed(2)} Lakh`;
  }
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}

export function formatFullINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(amount);
}
