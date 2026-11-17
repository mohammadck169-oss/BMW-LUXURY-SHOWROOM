export type VehicleCategory = 'Sedan' | 'SUV / SAV' | 'Electric' | 'M Performance';

export type FuelType = 'Petrol' | 'Diesel' | 'Electric' | 'Plug-in Hybrid';

export interface VehicleVariant {
  id: string;
  name: string;
  badge: string;
  engine: string;
  horsepower: number; // in HP
  torqueNm: number;
  acceleration0to100: number; // in seconds
  topSpeedKmH: number;
  transmission: string;
  drivetrain: 'Rear-Wheel Drive (sDrive)' | 'All-Wheel Drive (xDrive)' | 'M xDrive';
  batteryCapacityKWh?: number;
  rangeKm?: number;
  fuelEconomyKmpl?: number;
  exShowroomPriceINR: number; // in INR
}

export interface VehicleColour {
  id: string;
  name: string;
  hex: string;
  type: 'Metallic' | 'Frozen' | 'Individual' | 'Solid';
  priceDeltaINR: number;
  description: string;
}

export interface WheelDesign {
  id: string;
  name: string;
  sizeInches: number;
  style: string;
  finish: string;
  priceDeltaINR: number;
}

export interface InteriorTrim {
  id: string;
  name: string;
  upholstery: string;
  colorName: string;
  colorHex: string;
  trimFinish: string;
  priceDeltaINR: number;
}

export interface OptionalPackage {
  id: string;
  name: string;
  description: string;
  category: 'Performance' | 'Comfort' | 'Technology' | 'Aesthetics';
  priceINR: number;
  features: string[];
}

export interface BMWModel {
  id: string;
  name: string;
  series: string;
  tagline: string;
  category: VehicleCategory;
  fuelType: FuelType;
  startingPriceINR: number;
  heroImage: string;
  sideImage: string;
  rearImage: string;
  interiorImage: string;
  dimensions: {
    lengthMm: number;
    widthMm: number;
    heightMm: number;
    wheelbaseMm: number;
    bootCapacityLiters: number;
    groundClearanceMm: number;
  };
  performance: {
    acceleration0to100: number;
    horsepower: number;
    topSpeedKmH: number;
    torqueNm: number;
    efficiencyRating: string;
  };
  variants: VehicleVariant[];
  availableColours: VehicleColour[];
  availableWheels: WheelDesign[];
  availableInteriors: InteriorTrim[];
  availablePackages: OptionalPackage[];
  highlights: string[];
  overview: string;
}

export interface PreBookingEnquiry {
  id: string;
  referenceNumber: string;
  customerName: string;
  mobileNumber: string;
  emailAddress: string;
  selectedModelId: string;
  selectedModelName: string;
  selectedVariantName: string;
  selectedColour: string;
  selectedWheel: string;
  selectedInterior: string;
  selectedPackages: string[];
  preferredShowroom: string;
  registrationCity: string;
  preferredFinancing: 'Cash / Direct' | 'BMW Financial Services' | 'Corporate Lease';
  additionalMessage?: string;
  estimatedOnRoadPriceINR: number;
  submittedAt: string;
  status: 'New' | 'Contacted' | 'Test Drive Scheduled' | 'Allocation Confirmed';
}

export interface ServiceEnquiry {
  id: string;
  referenceNumber: string;
  customerName: string;
  mobileNumber: string;
  emailAddress: string;
  serviceType: string;
  preferredDate: string;
  preferredTime: string;
  vehicleModel: string;
  registrationNumber?: string;
  preferredShowroom: string;
  additionalNotes?: string;
  submittedAt: string;
  status: 'Received' | 'Confirmed' | 'In Progress' | 'Completed';
}

export interface Testimonial {
  id: string;
  customerName: string;
  city: string;
  vehicleModel: string;
  deliveryYear: number;
  review: string;
  rating: number;
  customerPhoto: string;
  verifiedBuyer: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'deliveries' | 'lifestyle' | 'detailing' | 'm-performance' | 'showroom';
  image: string;
  caption: string;
  location: string;
  aspect?: 'portrait' | 'landscape' | 'square';
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  image: string;
  iconName: string;
}

export interface IndianStateTax {
  state: string;
  city: string;
  rtoPercentIndividual: number;
  rtoPercentCorporate: number;
  hypothecationCharges: number;
  mcdParkingCess?: number;
}
