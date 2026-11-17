import React, { useState } from 'react';
import { BMW_MODELS, SHOWROOM_LOCATIONS } from '../data/bmwModels';
import { BMWStore } from '../lib/store';
import { X, CheckCircle, PhoneCall, Calendar, MapPin, Sparkles } from 'lucide-react';

interface QuickEnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialModelName?: string;
}

export const QuickEnquiryModal: React.FC<QuickEnquiryModalProps> = ({
  isOpen,
  onClose,
  initialModelName = ''
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [selectedModel, setSelectedModel] = useState(initialModelName || BMW_MODELS[0].name);
  const [preferredShowroom, setPreferredShowroom] = useState(SHOWROOM_LOCATIONS[0].name);
  const [preferredDate, setPreferredDate] = useState('');
  const [comments, setComments] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedToken, setSubmittedToken] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!customerName.trim() || !mobileNumber.trim() || !emailAddress.trim()) {
      setErrorMsg('Please complete all required fields.');
      return;
    }

    // Validate 10-digit Indian phone
    const cleanPhone = mobileNumber.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Find model details
      const foundModel = BMW_MODELS.find(m => m.name === selectedModel) || BMW_MODELS[0];
      
      const newBooking = BMWStore.addPreBooking({
        customerName: customerName.trim(),
        mobileNumber: mobileNumber.trim(),
        emailAddress: emailAddress.trim(),
        selectedModelId: foundModel.id,
        selectedModelName: foundModel.name,
        selectedVariantName: foundModel.variants[0]?.name || 'Standard',
        selectedColour: foundModel.availableColours[0]?.name || 'Signature',
        selectedWheel: foundModel.availableWheels[0]?.name || 'Standard Alloy',
        selectedInterior: foundModel.availableInteriors[0]?.name || 'Merino Leather',
        selectedPackages: ['Bespoke Concierge Allocation'],
        preferredShowroom,
        registrationCity: preferredShowroom.includes('Mumbai') ? 'Mumbai' : 'New Delhi',
        preferredFinancing: 'BMW Financial Services',
        additionalMessage: `Preferred Date: ${preferredDate || 'Earliest available'}. Note: ${comments}`,
        estimatedOnRoadPriceINR: foundModel.startingPriceINR * 1.15
      });

      setIsSubmitting(false);
      setSubmittedToken(newBooking.referenceNumber);
    }, 700);
  };

  const resetForm = () => {
    setSubmittedToken(null);
    setCustomerName('');
    setMobileNumber('');
    setEmailAddress('');
    setComments('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-xl bg-[#111114] border border-[#292929] rounded-sm shadow-2xl overflow-hidden my-auto">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#222225] flex items-center justify-between bg-[#0a0a0c]">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-[#1C69D4] animate-pulse"></div>
            <h2 className="text-lg font-heading font-extrabold text-white">
              Bespoke Test Drive & Atelier Consultation
            </h2>
          </div>

          <button
            onClick={resetForm}
            className="p-1.5 rounded-full bg-[#18181b] hover:bg-[#25252a] text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submittedToken ? (
            <div className="text-center py-6 space-y-4 animate-scaleUp">
              <div className="w-14 h-14 rounded-full bg-[#1C69D4]/20 border border-[#1C69D4] text-[#1C69D4] flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(28,105,212,0.4)]">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">
                  APPOINTMENT REGISTERED
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  Thank You, {customerName}
                </h3>
                <p className="text-neutral-400 text-xs mt-2 max-w-md mx-auto">
                  Your VIP private viewing & test drive priority request has been logged with our senior client advisor team.
                </p>
              </div>

              {/* Reference Box */}
              <div className="p-4 bg-[#161619] rounded-xs border border-[#2a2a30] max-w-sm mx-auto">
                <span className="text-[10px] uppercase text-neutral-500 block font-mono">
                  OFFICIAL REFERENCE TOKEN
                </span>
                <span className="text-lg font-mono font-bold text-[#1C69D4] tracking-wider">
                  {submittedToken}
                </span>
                <div className="text-[11px] text-neutral-400 mt-1">
                  Showroom: {preferredShowroom.split('—')[0]}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-xs text-neutral-400">
                Please provide your contact details. A dedicated BMW Product Genius will coordinate your preferred vehicle model and route.
              </p>

              {errorMsg && (
                <div className="p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs rounded-xs">
                  {errorMsg}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Vikramaditya Singhania"
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                    Mobile Number (India) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    placeholder="+91 98200 12345"
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="name@domain.com"
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                    Preferred BMW Model *
                  </label>
                  <select
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none transition-colors"
                  >
                    {BMW_MODELS.map((m) => (
                      <option key={m.id} value={m.name}>
                        {m.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                    Preferred Atelier Showroom *
                  </label>
                  <select
                    value={preferredShowroom}
                    onChange={(e) => setPreferredShowroom(e.target.value)}
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none transition-colors"
                  >
                    {SHOWROOM_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.city} — {loc.name.split('—')[1]?.trim() || loc.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                    Preferred Date & Window
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Special Route / Doorstep Delivery Request (Optional)
                </label>
                <textarea
                  rows={2}
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  placeholder="e.g. Please deliver test drive car to residence in Bandra West."
                  className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-white text-xs outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(28,105,212,0.4)] disabled:opacity-50"
                >
                  {isSubmitting ? 'Registering Priority Reservation...' : 'Confirm Test Drive Appointment'}
                </button>
              </div>

              <p className="text-[10px] text-neutral-500 text-center">
                *No booking charges or financial commitments are collected on this form.
              </p>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
