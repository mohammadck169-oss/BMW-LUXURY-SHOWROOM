import React, { useState } from 'react';
import { BMW_MODELS, SHOWROOM_LOCATIONS } from '../data/bmwModels';
import { INDIAN_STATE_TAXES, calculateOnRoadPrice, formatINR, formatFullINR } from '../data/pricing';
import { BMWStore } from '../lib/store';
import { BMWModel, VehicleVariant, VehicleColour, WheelDesign, InteriorTrim, OptionalPackage } from '../types/bmw';
import { 
  Check, 
  ChevronRight, 
  ChevronLeft, 
  Sparkles, 
  Sliders, 
  ShieldCheck, 
  Info, 
  FileText, 
  Printer, 
  Share2, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';

interface ConfiguratorPageProps {
  initialModel?: BMWModel;
  onNavigate: (page: string) => void;
  onSelect360: (model: BMWModel) => void;
  onOpenAdmin: () => void;
}

export const ConfiguratorPage: React.FC<ConfiguratorPageProps> = ({
  initialModel,
  onNavigate,
  onSelect360,
  onOpenAdmin
}) => {
  // STEP 1-7 Flow State
  const [currentStep, setCurrentStep] = useState<number>(1);

  // Selected vehicle configuration
  const [selectedModel, setSelectedModel] = useState<BMWModel>(initialModel || BMW_MODELS[0]);
  const [selectedVariant, setSelectedVariant] = useState<VehicleVariant>(
    initialModel?.variants[0] || BMW_MODELS[0].variants[0]
  );
  const [selectedColour, setSelectedColour] = useState<VehicleColour>(
    initialModel?.availableColours[0] || BMW_MODELS[0].availableColours[0]
  );
  const [selectedWheel, setSelectedWheel] = useState<WheelDesign>(
    initialModel?.availableWheels[0] || BMW_MODELS[0].availableWheels[0]
  );
  const [selectedInterior, setSelectedInterior] = useState<InteriorTrim>(
    initialModel?.availableInteriors[0] || BMW_MODELS[0].availableInteriors[0]
  );
  const [selectedPackageIds, setSelectedPackageIds] = useState<string[]>([]);

  // Indian Taxation & State Calculator state
  const [selectedStateKey, setSelectedStateKey] = useState<string>('maharashtra');
  const [isCorporateRegistration, setIsCorporateRegistration] = useState<boolean>(false);

  // Pre-Booking Form State (Step 7)
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [preferredShowroom, setPreferredShowroom] = useState(SHOWROOM_LOCATIONS[0].name);
  const [preferredFinancing, setPreferredFinancing] = useState<'Cash / Direct' | 'BMW Financial Services' | 'Corporate Lease'>('BMW Financial Services');
  const [additionalMessage, setAdditionalMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmation, setBookingConfirmation] = useState<{
    referenceNumber: string;
    submittedAt: string;
  } | null>(null);
  const [formError, setFormError] = useState('');

  // Handle Model Change
  const handleModelChange = (model: BMWModel) => {
    setSelectedModel(model);
    setSelectedVariant(model.variants[0]);
    setSelectedColour(model.availableColours[0]);
    setSelectedWheel(model.availableWheels[0]);
    setSelectedInterior(model.availableInteriors[0]);
    setSelectedPackageIds([]);
  };

  // Toggle Packages
  const handleTogglePackage = (pkgId: string) => {
    if (selectedPackageIds.includes(pkgId)) {
      setSelectedPackageIds(selectedPackageIds.filter(id => id !== pkgId));
    } else {
      setSelectedPackageIds([...selectedPackageIds, pkgId]);
    }
  };

  // Calculate pricing breakdown
  const optionalPackagesCost = selectedModel.availablePackages
    .filter(pkg => selectedPackageIds.includes(pkg.id))
    .reduce((sum, pkg) => sum + pkg.priceINR, 0);

  const totalExShowroomWithCustomization = 
    selectedVariant.exShowroomPriceINR + 
    selectedColour.priceDeltaINR + 
    selectedWheel.priceDeltaINR + 
    selectedInterior.priceDeltaINR;

  const priceBreakdown = calculateOnRoadPrice(
    totalExShowroomWithCustomization,
    selectedStateKey,
    isCorporateRegistration,
    optionalPackagesCost
  );

  // Form submission
  const handlePreBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim() || !mobileNumber.trim() || !emailAddress.trim()) {
      setFormError('Please complete all required fields.');
      return;
    }

    const cleanPhone = mobileNumber.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const selectedPkgNames = selectedModel.availablePackages
        .filter(p => selectedPackageIds.includes(p.id))
        .map(p => p.name);

      const stateData = INDIAN_STATE_TAXES[selectedStateKey];

      const newBooking = BMWStore.addPreBooking({
        customerName: customerName.trim(),
        mobileNumber: mobileNumber.trim(),
        emailAddress: emailAddress.trim(),
        selectedModelId: selectedModel.id,
        selectedModelName: selectedModel.name,
        selectedVariantName: selectedVariant.name,
        selectedColour: selectedColour.name,
        selectedWheel: selectedWheel.name,
        selectedInterior: selectedInterior.name,
        selectedPackages: selectedPkgNames,
        preferredShowroom,
        registrationCity: stateData.city,
        preferredFinancing,
        additionalMessage: additionalMessage.trim(),
        estimatedOnRoadPriceINR: priceBreakdown.totalEstimatedOnRoadPrice
      });

      setIsSubmitting(false);
      setBookingConfirmation({
        referenceNumber: newBooking.referenceNumber,
        submittedAt: newBooking.submittedAt
      });
    }, 800);
  };

  const stepsList = [
    { num: 1, title: 'Model' },
    { num: 2, title: 'Variant' },
    { num: 3, title: 'Paint' },
    { num: 4, title: 'Interior' },
    { num: 5, title: 'Wheels' },
    { num: 6, title: 'Packages' },
    { num: 7, title: 'Summary & Book' }
  ];

  return (
    <div className="w-full bg-[#080808] text-white pt-24 pb-20">
      
      {/* Header & Step Wizard Bar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#292929] pb-6 gap-4">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">
              PAGE 05 • BESPOKE SPECIFICATION ATELIER
            </span>
            <h1 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase tracking-tight">
              Car Configurator & On-Road Estimator
            </h1>
          </div>

          <div className="text-right">
            <span className="text-[10px] uppercase font-mono text-neutral-400 block">
              Estimated Total On-Road Price ({priceBreakdown.rtoStateName})
            </span>
            <span className="text-2xl sm:text-3xl font-heading font-extrabold text-[#1C69D4]">
              {formatINR(priceBreakdown.totalEstimatedOnRoadPrice)}
            </span>
          </div>
        </div>

        {/* Step Wizard Buttons */}
        <div className="flex items-center overflow-x-auto py-4 border-b border-[#222225] gap-2 sm:gap-4 no-scrollbar">
          {stepsList.map((step) => {
            const isActive = currentStep === step.num;
            const isCompleted = currentStep > step.num;
            return (
              <button
                key={step.num}
                onClick={() => setCurrentStep(step.num)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider shrink-0 transition-all ${
                  isActive
                    ? 'bg-[#1C69D4] text-white font-bold shadow-md'
                    : isCompleted
                    ? 'bg-[#18181c] text-white hover:bg-[#222228] border border-[#2a2a30]'
                    : 'bg-[#111114] text-neutral-500 hover:text-neutral-300'
                }`}
              >
                <span className="w-4 h-4 rounded-full bg-black/40 flex items-center justify-center text-[10px]">
                  {isCompleted ? '✓' : step.num}
                </span>
                <span>{step.title}</span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Main Configurator Layout (Left: Visual Studio, Right: Selection Panel) */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Vehicle Visual Canvas & Live Highlights (5 Cols) */}
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            
            {/* Visual Preview Box */}
            <div className="relative aspect-[16/10] bg-[#111114] rounded-sm border border-[#292929] overflow-hidden shadow-2xl">
              <img
                src={selectedModel.heroImage}
                alt={selectedModel.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-transparent pointer-events-none"></div>

              {/* Badges on Visual Box */}
              <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                <span className="px-2.5 py-1 rounded-xs bg-black/80 backdrop-blur-md text-[10px] font-mono text-white border border-white/10">
                  {selectedModel.series}
                </span>
                <span className="px-2 py-1 rounded-xs bg-[#1C69D4] text-[10px] font-mono text-white font-bold">
                  {selectedVariant.badge.split('/')[0]}
                </span>
              </div>

              {/* 360 Studio Shortcut */}
              <button
                onClick={() => onSelect360(selectedModel)}
                className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-black/80 hover:bg-[#1C69D4] text-white text-[10px] font-mono flex items-center gap-1.5 transition-all border border-white/10 backdrop-blur-md"
              >
                <Sparkles className="w-3 h-3 text-[#1C69D4]" />
                <span>360° Studio</span>
              </button>

              {/* Bottom Selected Details Bar */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                <div>
                  <h3 className="font-heading font-bold text-white text-base leading-tight">
                    {selectedModel.name}
                  </h3>
                  <div className="text-[11px] text-neutral-300 font-mono mt-0.5 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full inline-block border border-white/30" style={{ backgroundColor: selectedColour.hex }}></span>
                    <span>{selectedColour.name}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-[9px] uppercase font-mono text-neutral-400 block">Ex-Showroom</span>
                  <span className="font-heading font-extrabold text-white text-sm">
                    {formatINR(totalExShowroomWithCustomization)}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Live Spec Strip */}
            <div className="grid grid-cols-4 gap-2 bg-[#121215] p-3 rounded-xs border border-[#222225] text-center text-xs">
              <div>
                <span className="text-[9px] uppercase font-mono text-neutral-500 block">Power</span>
                <span className="font-bold text-white font-mono">{selectedVariant.horsepower} HP</span>
              </div>
              <div className="border-l border-[#222225]">
                <span className="text-[9px] uppercase font-mono text-neutral-500 block">Torque</span>
                <span className="font-bold text-white font-mono">{selectedVariant.torqueNm} Nm</span>
              </div>
              <div className="border-l border-[#222225]">
                <span className="text-[9px] uppercase font-mono text-neutral-500 block">0–100</span>
                <span className="font-bold text-[#1C69D4] font-mono">{selectedVariant.acceleration0to100}s</span>
              </div>
              <div className="border-l border-[#222225]">
                <span className="text-[9px] uppercase font-mono text-neutral-500 block">Top Speed</span>
                <span className="font-bold text-white font-mono">{selectedVariant.topSpeedKmH} km/h</span>
              </div>
            </div>

            {/* Itemized Price Summary Box */}
            <div className="p-4 bg-[#121215] rounded-xs border border-[#222225] space-y-2.5 text-xs">
              <div className="flex items-center justify-between font-mono font-bold text-neutral-300 border-b border-[#222225] pb-2">
                <span>ON-ROAD ESTIMATE BREAKDOWN</span>
                <span className="text-[#1C69D4]">{priceBreakdown.rtoStateName}</span>
              </div>

              <div className="flex justify-between text-neutral-400">
                <span>Ex-Showroom Price (incl. GST & Cess)</span>
                <span className="text-white font-mono">{formatFullINR(priceBreakdown.exShowroomPrice)}</span>
              </div>

              <div className="flex justify-between text-neutral-400">
                <span>Road Tax & Registration (RTO)</span>
                <span className="text-white font-mono">{formatFullINR(priceBreakdown.rtoCharges)}</span>
              </div>

              <div className="flex justify-between text-neutral-400">
                <span>Comprehensive Insurance (1-Yr OD + 3-Yr TP)</span>
                <span className="text-white font-mono">{formatFullINR(priceBreakdown.comprehensiveInsurance)}</span>
              </div>

              <div className="flex justify-between text-neutral-400">
                <span>TCS @ 1% (Sec 206C 1F for cars &gt; ₹10L)</span>
                <span className="text-white font-mono">{formatFullINR(priceBreakdown.tcsCharges)}</span>
              </div>

              <div className="flex justify-between text-neutral-400">
                <span>Fastag & Logistical Handling</span>
                <span className="text-white font-mono">{formatFullINR(priceBreakdown.fastagAndHandling)}</span>
              </div>

              {priceBreakdown.optionalPackagesTotal > 0 && (
                <div className="flex justify-between text-[#1C69D4]">
                  <span>Selected Optional Equipment</span>
                  <span className="font-mono">+{formatFullINR(priceBreakdown.optionalPackagesTotal)}</span>
                </div>
              )}

              <div className="border-t border-[#292929] pt-2 flex justify-between items-baseline font-bold text-sm">
                <span className="text-white">Estimated On-Road Total</span>
                <span className="text-lg text-[#1C69D4] font-heading font-extrabold font-mono">
                  {formatFullINR(priceBreakdown.totalEstimatedOnRoadPrice)}
                </span>
              </div>

              <p className="text-[10px] text-neutral-500 leading-tight pt-1">
                *Estimated indicative price. Final on-road value may differ based on specific district RTO municipal cesses, temporary registration, and customized insurance riders.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Step Options (7 Cols) */}
          <div className="lg:col-span-7 bg-[#111114] border border-[#292929] rounded-sm p-6 shadow-xl">
            
            {/* STEP 1: SELECT BMW MODEL */}
            {currentStep === 1 && (
              <div className="space-y-4">
                <div className="border-b border-[#222225] pb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">
                    STEP 01 OF 07
                  </span>
                  <h2 className="text-2xl font-heading font-black text-white uppercase">
                    Select Your BMW Model
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BMW_MODELS.map((model) => (
                    <div
                      key={model.id}
                      onClick={() => handleModelChange(model)}
                      className={`p-4 rounded-xs border cursor-pointer transition-all flex gap-3 ${
                        selectedModel.id === model.id
                          ? 'bg-[#1C69D4]/15 border-[#1C69D4] shadow-[0_0_15px_rgba(28,105,212,0.25)]'
                          : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'
                      }`}
                    >
                      <img
                        src={model.heroImage}
                        alt={model.name}
                        className="w-20 h-16 object-cover rounded-xs"
                      />
                      <div className="flex-1">
                        <span className="text-[9px] uppercase font-mono text-[#1C69D4] font-bold">
                          {model.category}
                        </span>
                        <h4 className="font-heading font-bold text-white text-xs leading-snug">
                          {model.name}
                        </h4>
                        <span className="text-xs font-bold text-white block mt-1">
                          {formatINR(model.startingPriceINR)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: SELECT VARIANT */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="border-b border-[#222225] pb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">
                    STEP 02 OF 07
                  </span>
                  <h2 className="text-2xl font-heading font-black text-white uppercase">
                    Choose Vehicle Variant
                  </h2>
                  <p className="text-xs text-neutral-400 mt-1">
                    Available official variants for {selectedModel.name} in India.
                  </p>
                </div>

                <div className="space-y-3">
                  {selectedModel.variants.map((v) => (
                    <div
                      key={v.id}
                      onClick={() => setSelectedVariant(v)}
                      className={`p-4 rounded-xs border cursor-pointer transition-all ${
                        selectedVariant.id === v.id
                          ? 'bg-[#1C69D4]/15 border-[#1C69D4] shadow-[0_0_15px_rgba(28,105,212,0.25)]'
                          : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-heading font-bold text-white text-sm">
                            {v.name}
                          </h4>
                          <span className="text-[11px] font-mono text-[#1C69D4]">
                            {v.badge}
                          </span>
                        </div>
                        <span className="text-base font-heading font-extrabold text-white font-mono">
                          {formatINR(v.exShowroomPriceINR)}
                        </span>
                      </div>

                      <p className="text-xs text-neutral-400 mt-2">{v.engine}</p>

                      <div className="grid grid-cols-4 gap-2 text-[11px] font-mono text-neutral-300 mt-3 bg-[#0c0c0e] p-2 rounded-xs">
                        <span>{v.horsepower} HP</span>
                        <span>{v.torqueNm} Nm</span>
                        <span>0-100: {v.acceleration0to100}s</span>
                        <span>{v.drivetrain.split('(')[0]}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 3: EXTERIOR PAINT COLOUR */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="border-b border-[#222225] pb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">
                    STEP 03 OF 07
                  </span>
                  <h2 className="text-2xl font-heading font-black text-white uppercase">
                    Select Exterior Paint Colour
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedModel.availableColours.map((colour) => (
                    <div
                      key={colour.id}
                      onClick={() => setSelectedColour(colour)}
                      className={`p-3.5 rounded-xs border cursor-pointer transition-all flex items-center gap-3.5 ${
                        selectedColour.id === colour.id
                          ? 'bg-[#1C69D4]/15 border-[#1C69D4] shadow-[0_0_15px_rgba(28,105,212,0.25)]'
                          : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'
                      }`}
                    >
                      <span
                        className="w-8 h-8 rounded-full border border-white/30 shrink-0 shadow-md"
                        style={{ backgroundColor: colour.hex }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-heading font-bold text-white text-xs">
                            {colour.name}
                          </h4>
                          <span className="text-[10px] font-mono text-neutral-400">
                            {colour.priceDeltaINR > 0 ? `+${formatINR(colour.priceDeltaINR)}` : 'Standard'}
                          </span>
                        </div>
                        <span className="text-[10px] text-neutral-500 font-mono block">
                          {colour.type} Finish
                        </span>
                        <p className="text-[11px] text-neutral-400 mt-1 line-clamp-1">
                          {colour.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 4: INTERIOR UPHOLSTERY */}
            {currentStep === 4 && (
              <div className="space-y-4">
                <div className="border-b border-[#222225] pb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">
                    STEP 04 OF 07
                  </span>
                  <h2 className="text-2xl font-heading font-black text-white uppercase">
                    Choose Interior Upholstery & Trim
                  </h2>
                </div>

                <div className="space-y-3">
                  {selectedModel.availableInteriors.map((int) => (
                    <div
                      key={int.id}
                      onClick={() => setSelectedInterior(int)}
                      className={`p-4 rounded-xs border cursor-pointer transition-all flex items-center gap-4 ${
                        selectedInterior.id === int.id
                          ? 'bg-[#1C69D4]/15 border-[#1C69D4] shadow-[0_0_15px_rgba(28,105,212,0.25)]'
                          : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'
                      }`}
                    >
                      <span
                        className="w-10 h-10 rounded-full border border-white/30 shrink-0 shadow-md"
                        style={{ backgroundColor: int.colorHex }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-heading font-bold text-white text-sm">
                            {int.name}
                          </h4>
                          <span className="text-xs font-mono text-neutral-400">
                            {int.priceDeltaINR > 0 ? `+${formatINR(int.priceDeltaINR)}` : 'Standard'}
                          </span>
                        </div>
                        <span className="text-xs text-neutral-400 block mt-0.5">
                          {int.upholstery} • Trim: {int.trimFinish}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 5: SELECT WHEEL DESIGNS */}
            {currentStep === 5 && (
              <div className="space-y-4">
                <div className="border-b border-[#222225] pb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">
                    STEP 05 OF 07
                  </span>
                  <h2 className="text-2xl font-heading font-black text-white uppercase">
                    Select Wheel & Rim Designs
                  </h2>
                </div>

                <div className="space-y-3">
                  {selectedModel.availableWheels.map((w) => (
                    <div
                      key={w.id}
                      onClick={() => setSelectedWheel(w)}
                      className={`p-4 rounded-xs border cursor-pointer transition-all flex items-center justify-between ${
                        selectedWheel.id === w.id
                          ? 'bg-[#1C69D4]/15 border-[#1C69D4] shadow-[0_0_15px_rgba(28,105,212,0.25)]'
                          : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'
                      }`}
                    >
                      <div>
                        <h4 className="font-heading font-bold text-white text-sm">
                          {w.name}
                        </h4>
                        <span className="text-xs text-neutral-400 block mt-0.5 font-mono">
                          {w.finish} • {w.sizeInches} Inch Diameter
                        </span>
                      </div>

                      <span className="text-xs font-mono text-neutral-300">
                        {w.priceDeltaINR > 0 ? `+${formatINR(w.priceDeltaINR)}` : 'Standard Included'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 6: OPTIONAL EQUIPMENT PACKAGES */}
            {currentStep === 6 && (
              <div className="space-y-4">
                <div className="border-b border-[#222225] pb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">
                    STEP 06 OF 07
                  </span>
                  <h2 className="text-2xl font-heading font-black text-white uppercase">
                    Select Optional Equipment Packages
                  </h2>
                </div>

                <div className="space-y-3">
                  {selectedModel.availablePackages.map((pkg) => {
                    const isSelected = selectedPackageIds.includes(pkg.id);
                    return (
                      <div
                        key={pkg.id}
                        onClick={() => handleTogglePackage(pkg.id)}
                        className={`p-4 rounded-xs border cursor-pointer transition-all ${
                          isSelected
                            ? 'bg-[#1C69D4]/15 border-[#1C69D4] shadow-[0_0_15px_rgba(28,105,212,0.25)]'
                            : 'bg-[#151518] border-[#26262a] hover:border-neutral-500'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-xs border flex items-center justify-center mt-0.5 ${
                              isSelected ? 'bg-[#1C69D4] border-[#1C69D4] text-white' : 'border-[#383838] bg-black/40'
                            }`}>
                              {isSelected && <Check className="w-3.5 h-3.5" />}
                            </div>
                            <div>
                              <h4 className="font-heading font-bold text-white text-sm">
                                {pkg.name}
                              </h4>
                              <p className="text-xs text-neutral-400 mt-0.5 leading-relaxed">
                                {pkg.description}
                              </p>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {pkg.features.map((f, i) => (
                                  <span key={i} className="text-[10px] font-mono bg-black/50 px-2 py-0.5 rounded-xs text-neutral-300 border border-white/5">
                                    {f}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <span className="text-xs font-mono font-bold text-white shrink-0">
                            +{formatINR(pkg.priceINR)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* STEP 7: STATE TAX SELECTOR & PRE-BOOKING SUBMISSION */}
            {currentStep === 7 && (
              <div className="space-y-6">
                <div className="border-b border-[#222225] pb-3">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">
                    STEP 07 OF 07
                  </span>
                  <h2 className="text-2xl font-heading font-black text-white uppercase">
                    Taxation Region & Pre-Booking Registration
                  </h2>
                </div>

                {/* State RTO & Corporate registration selectors */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#151518] p-4 rounded-xs border border-[#26262c]">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                      State / City of Vehicle Registration *
                    </label>
                    <select
                      value={selectedStateKey}
                      onChange={(e) => setSelectedStateKey(e.target.value)}
                      className="w-full bg-[#1c1c20] border border-[#2a2a30] text-xs text-white p-2.5 rounded-xs outline-none font-mono"
                    >
                      {Object.entries(INDIAN_STATE_TAXES).map(([key, data]) => (
                        <option key={key} value={key}>
                          {data.state} ({data.city}) — RTO ~{(data.rtoPercentIndividual * 100).toFixed(0)}%
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                      Registration Type
                    </label>
                    <div className="grid grid-cols-2 gap-2 mt-1">
                      <button
                        type="button"
                        onClick={() => setIsCorporateRegistration(false)}
                        className={`py-2 text-xs font-mono rounded-xs transition-all ${
                          !isCorporateRegistration
                            ? 'bg-[#1C69D4] text-white font-bold'
                            : 'bg-[#1c1c20] text-neutral-400 hover:text-white'
                        }`}
                      >
                        Individual
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsCorporateRegistration(true)}
                        className={`py-2 text-xs font-mono rounded-xs transition-all ${
                          isCorporateRegistration
                            ? 'bg-[#1C69D4] text-white font-bold'
                            : 'bg-[#1c1c20] text-neutral-400 hover:text-white'
                        }`}
                      >
                        Corporate (Company)
                      </button>
                    </div>
                  </div>
                </div>

                {/* Pre-Booking Confirmation or Form */}
                {bookingConfirmation ? (
                  <div className="text-center py-8 space-y-4 bg-[#141417] p-6 rounded-xs border border-[#222225] animate-scaleUp">
                    <div className="w-16 h-16 rounded-full bg-[#1C69D4]/20 border border-[#1C69D4] text-[#1C69D4] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(28,105,212,0.4)]">
                      <CheckCircle className="w-9 h-9" />
                    </div>

                    <h3 className="text-2xl font-heading font-black text-white">
                      Bespoke Allocation Request Logged
                    </h3>

                    <p className="text-xs text-neutral-400 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong>{customerName}</strong>. Your customized specification for the <strong>{selectedModel.name} ({selectedVariant.name})</strong> has been saved.
                    </p>

                    <div className="p-4 bg-[#18181c] rounded-xs border border-[#2a2a30] max-w-sm mx-auto">
                      <span className="text-[10px] uppercase font-mono text-neutral-500 block">
                        UNIQUE ALLOCATION REFERENCE
                      </span>
                      <span className="text-xl font-mono font-bold text-[#1C69D4]">
                        {bookingConfirmation.referenceNumber}
                      </span>
                      <div className="text-[11px] text-neutral-400 mt-1">
                        Est. On-Road: {formatINR(priceBreakdown.totalEstimatedOnRoadPrice)}
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap justify-center gap-3">
                      <button
                        onClick={onOpenAdmin}
                        className="px-5 py-2.5 rounded-xs bg-[#1f1f23] hover:bg-[#2a2a30] text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider border border-[#2f2f35]"
                      >
                        Inspect in Admin Dashboard
                      </button>

                      <a
                        href={`https://wa.me/919820011223?text=Hello%20BMW%20Concierge,%20I%20have%20submitted%20allocation%20enquiry%20${bookingConfirmation.referenceNumber}%20for%20${encodeURIComponent(selectedModel.name)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xs bg-[#25D366] hover:bg-[#20b858] text-black text-xs font-bold uppercase tracking-wider"
                      >
                        Share via WhatsApp
                      </a>
                    </div>

                    <p className="text-[10px] text-neutral-500">
                      *No financial transaction or binding contract has been executed. Our client advisor will contact you to coordinate showroom viewing and allocation slot.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handlePreBookingSubmit} className="space-y-4">
                    <p className="text-xs text-neutral-400">
                      Please enter your contact information to submit this build directly to our senior dealership client advisors.
                    </p>

                    {formError && (
                      <div className="p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs rounded-xs">
                        {formError}
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                          Customer Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="e.g. Vikramaditya Singhania"
                          className="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                          Mobile Number (India) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          placeholder="+91 98200 12345"
                          className="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={emailAddress}
                          onChange={(e) => setEmailAddress(e.target.value)}
                          placeholder="name@domain.com"
                          className="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none"
                        />
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                          Preferred Showroom Atelier *
                        </label>
                        <select
                          value={preferredShowroom}
                          onChange={(e) => setPreferredShowroom(e.target.value)}
                          className="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none font-mono"
                        >
                          {SHOWROOM_LOCATIONS.map((loc) => (
                            <option key={loc.id} value={loc.name}>
                              {loc.city} — {loc.name.split('—')[1]?.trim() || loc.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                          Financing Preference
                        </label>
                        <select
                          value={preferredFinancing}
                          onChange={(e) => setPreferredFinancing(e.target.value as any)}
                          className="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none font-mono"
                        >
                          <option value="BMW Financial Services">BMW Financial Services (Balloon / GFV)</option>
                          <option value="Corporate Lease">Corporate Operating Lease</option>
                          <option value="Cash / Direct">Direct / Outright Purchase</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                          Preferred Delivery Window
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Immediate / Q1 2027"
                          className="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                        Additional Notes / Special Allocation Requests
                      </label>
                      <textarea
                        rows={2}
                        value={additionalMessage}
                        onChange={(e) => setAdditionalMessage(e.target.value)}
                        placeholder="e.g. Please check availability of Dingolfing priority build slot."
                        className="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3.5 py-2 rounded-xs text-white text-xs outline-none resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3.5 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(28,105,212,0.4)] disabled:opacity-50"
                      >
                        {isSubmitting ? 'Registering Pre-Booking...' : 'Submit Bespoke Pre-Booking Enquiry'}
                      </button>
                    </div>

                    <p className="text-[10px] text-neutral-500 text-center">
                      *This is an official reservation enquiry. No payment or vehicle purchase contract is executed online.
                    </p>
                  </form>
                )}

              </div>
            )}

            {/* Wizard Navigation Footer (Back & Next Buttons) */}
            <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#222225]">
              <button
                type="button"
                disabled={currentStep === 1}
                onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                className="px-4 py-2 rounded-xs bg-[#18181c] hover:bg-[#222226] text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors disabled:opacity-30 disabled:pointer-events-none"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>

              {currentStep < 7 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(Math.min(7, currentStep + 1))}
                  className="px-6 py-2 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-md"
                >
                  <span>Next Step: {stepsList[currentStep]?.title}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : null}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
