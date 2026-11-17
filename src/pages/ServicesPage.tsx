import React, { useState } from 'react';
import { BMW_SERVICES } from '../data/services';
import { SHOWROOM_LOCATIONS } from '../data/bmwModels';
import { BMWStore } from '../lib/store';
import { ServiceItem } from '../types/bmw';
import { 
  Wrench, 
  Car, 
  Compass, 
  BadgePercent, 
  ShieldCheck, 
  Sliders, 
  Sparkles, 
  Headphones, 
  CheckCircle, 
  ArrowUpRight, 
  Calendar, 
  Clock, 
  X,
  PhoneCall
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
  onOpenQuickEnquiry: (modelName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onNavigate,
  onOpenQuickEnquiry
}) => {
  // Service modal details state
  const [selectedServiceForModal, setSelectedServiceForModal] = useState<ServiceItem | null>(null);

  // Form states
  const [serviceType, setServiceType] = useState(BMW_SERVICES[4].title); // Default Condition Based Service
  const [customerName, setCustomerName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('10:30 AM');
  const [vehicleModel, setVehicleModel] = useState('BMW 7 Series');
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [preferredShowroom, setPreferredShowroom] = useState(SHOWROOM_LOCATIONS[0].name);
  const [additionalNotes, setAdditionalNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmationToken, setConfirmationToken] = useState<string | null>(null);
  const [formError, setFormError] = useState('');

  const handleServiceSelect = (title: string) => {
    setServiceType(title);
    // Smooth scroll to appointment form
    const formEl = document.getElementById('service-form-section');
    formEl?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!customerName.trim() || !mobileNumber.trim() || !emailAddress.trim() || !preferredDate) {
      setFormError('Please complete all required fields including preferred date.');
      return;
    }

    const cleanPhone = mobileNumber.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setFormError('Please enter a valid 10-digit Indian mobile number.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newService = BMWStore.addServiceEnquiry({
        customerName: customerName.trim(),
        mobileNumber: mobileNumber.trim(),
        emailAddress: emailAddress.trim(),
        serviceType,
        preferredDate,
        preferredTime,
        vehicleModel,
        registrationNumber: registrationNumber.trim(),
        preferredShowroom,
        additionalNotes: additionalNotes.trim()
      });

      setIsSubmitting(false);
      setConfirmationToken(newService.referenceNumber);
    }, 700);
  };

  const resetForm = () => {
    setConfirmationToken(null);
    setCustomerName('');
    setMobileNumber('');
    setEmailAddress('');
    setRegistrationNumber('');
    setAdditionalNotes('');
  };

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Car': return <Car className="w-5 h-5 text-[#1C69D4]" />;
      case 'Compass': return <Compass className="w-5 h-5 text-[#1C69D4]" />;
      case 'BadgePercent': return <BadgePercent className="w-5 h-5 text-[#1C69D4]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#1C69D4]" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-[#1C69D4]" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-[#1C69D4]" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-[#1C69D4]" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-[#1C69D4]" />;
      default: return <Wrench className="w-5 h-5 text-[#1C69D4]" />;
    }
  };

  return (
    <div className="w-full bg-[#080808] text-white pt-24 pb-20">
      
      {/* Services Page Hero Banner */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#292929] mb-16">
        <div className="max-w-3xl">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-2">
            PAGE 02 • COMPREHENSIVE AUTOMOTIVE ATELIER
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-black text-white uppercase tracking-tight leading-none">
            BMW Atelier & Owner Services
          </h1>
          <p className="text-neutral-400 text-sm sm:text-base mt-4 font-light leading-relaxed">
            From tailored corporate lease consultation to condition-based servicing and XPEL self-healing ceramic protection, discover our suite of 8 certified luxury automotive services.
          </p>
        </div>
      </section>

      {/* 8 Official Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BMW_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="bg-[#141417] border border-[#26262b] hover:border-[#1C69D4] rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_10px_35px_rgba(28,105,212,0.15)]"
            >
              {/* Image with overlay */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={srv.image}
                  alt={srv.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#141417] via-transparent to-black/40"></div>
                
                <div className="absolute top-3 left-3 p-2 rounded-xs bg-black/80 border border-white/10 backdrop-blur-md">
                  {getServiceIcon(srv.iconName)}
                </div>
              </div>

              {/* Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-bold text-base text-white group-hover:text-[#1C69D4] transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#1C69D4] mt-1 mb-2 font-medium">
                    {srv.tagline}
                  </p>
                  <p className="text-xs text-neutral-400 line-clamp-3 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Key Bullet Features Preview */}
                <div className="space-y-1.5 mt-4 pt-3 border-t border-[#222225]">
                  {srv.features.slice(0, 2).map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] text-neutral-300">
                      <span className="w-1 h-1 rounded-full bg-[#1C69D4]"></span>
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Buttons (Learn More + Enquiry CTA) */}
                <div className="grid grid-cols-2 gap-2 mt-5 pt-3 border-t border-[#222225]">
                  <button
                    onClick={() => setSelectedServiceForModal(srv)}
                    className="py-2 rounded-xs bg-[#1f1f23] hover:bg-[#28282f] text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider text-center transition-colors border border-[#2a2a32]"
                  >
                    Learn More
                  </button>

                  <button
                    onClick={() => handleServiceSelect(srv.title)}
                    className="py-2 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-mono font-bold uppercase tracking-wider text-center transition-all shadow-md"
                  >
                    Enquire
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Service Appointment Enquiry Form Section */}
      <section id="service-form-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#111114] border border-[#292929] rounded-sm p-6 sm:p-10 shadow-2xl relative">
          
          <div className="mb-8 border-b border-[#222225] pb-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">
              DIRECT BOOKING PORTAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase">
              Schedule An Atelier Service Appointment
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Select your required service category, vehicle model, and preferred showroom atelier. Our service advisors will confirm the booking within 60 minutes.
            </p>
          </div>

          {confirmationToken ? (
            <div className="text-center py-10 space-y-4 animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-[#1C69D4]/20 border border-[#1C69D4] text-[#1C69D4] flex items-center justify-center mx-auto shadow-[0_0_30px_rgba(28,105,212,0.4)]">
                <CheckCircle className="w-9 h-9" />
              </div>

              <h3 className="text-2xl font-heading font-bold text-white">
                Service Appointment Scheduled
              </h3>
              <p className="text-xs text-neutral-400 max-w-md mx-auto">
                Thank you, <strong>{customerName}</strong>. Your service appointment for <strong>{serviceType}</strong> on <strong>{preferredDate} ({preferredTime})</strong> has been registered.
              </p>

              <div className="p-4 bg-[#161619] rounded-xs border border-[#2a2a30] max-w-sm mx-auto">
                <span className="text-[10px] uppercase text-neutral-500 block font-mono">
                  SERVICE APPOINTMENT TOKEN
                </span>
                <span className="text-xl font-mono font-bold text-[#1C69D4]">
                  {confirmationToken}
                </span>
                <div className="text-xs text-neutral-400 mt-1">
                  Atelier: {preferredShowroom.split('—')[0]}
                </div>
              </div>

              <div className="pt-3">
                <button
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-5">
              
              {formError && (
                <div className="p-3 bg-red-950/60 border border-red-800 text-red-300 text-xs rounded-xs">
                  {formError}
                </div>
              )}

              {/* Service Selection Dropdown */}
              <div>
                <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                  Selected Service Category *
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-4 py-2.5 rounded-xs text-white text-xs outline-none font-medium"
                >
                  {BMW_SERVICES.map((srv) => (
                    <option key={srv.id} value={srv.title}>
                      {srv.title}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                    Owner Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Vikramaditya Singhania"
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none"
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
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none"
                  />
                </div>
              </div>

              {/* Email & Showroom */}
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
                    placeholder="owner@domain.com"
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                    Preferred BMW Atelier Workshop *
                  </label>
                  <select
                    value={preferredShowroom}
                    onChange={(e) => setPreferredShowroom(e.target.value)}
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none font-medium"
                  >
                    {SHOWROOM_LOCATIONS.map((loc) => (
                      <option key={loc.id} value={loc.name}>
                        {loc.city} — {loc.name.split('—')[1]?.trim() || loc.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Vehicle Model & Registration Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                    Vehicle Model
                  </label>
                  <input
                    type="text"
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    placeholder="e.g. BMW 740i M Sport / X7 / i4"
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                    Registration Plate Number (Optional)
                  </label>
                  <input
                    type="text"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    placeholder="e.g. MH 01 DX 0007 / DL 1C AB 1234"
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none uppercase font-mono"
                  />
                </div>
              </div>

              {/* Date & Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                    Preferred Appointment Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                    Preferred Time Window
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none"
                  >
                    <option value="10:00 AM">10:00 AM (Morning Slot)</option>
                    <option value="11:30 AM">11:30 AM</option>
                    <option value="02:00 PM">02:00 PM (Afternoon Slot)</option>
                    <option value="04:00 PM">04:00 PM</option>
                    <option value="06:00 PM">06:00 PM (Evening Fast Lane)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="text-[10px] uppercase tracking-wider text-neutral-400 block mb-1 font-mono">
                  Specific Requirements / Chauffeur Drop-off Instructions
                </label>
                <textarea
                  rows={2}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="e.g. Please arrange hydraulic flatbed pickup from Worli Sea Face."
                  className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-3.5 py-2.5 rounded-xs text-white text-xs outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-[0_0_20px_rgba(28,105,212,0.4)] disabled:opacity-50"
                >
                  {isSubmitting ? 'Confirming Appointment...' : 'Submit Service Appointment'}
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* Learn More Service Modal */}
      {selectedServiceForModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-[#111114] border border-[#292929] rounded-sm shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
            
            <div className="relative aspect-[16/9] bg-black">
              <img
                src={selectedServiceForModal.image}
                alt={selectedServiceForModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111114] via-transparent to-transparent"></div>
              
              <button
                onClick={() => setSelectedServiceForModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/70 hover:bg-black text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-4 left-6">
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">
                  OFFICIAL BMW SERVICE
                </span>
                <h3 className="text-xl font-heading font-bold text-white">
                  {selectedServiceForModal.title}
                </h3>
              </div>
            </div>

            <div className="p-6 space-y-4 overflow-y-auto">
              <p className="text-neutral-300 text-xs leading-relaxed">
                {selectedServiceForModal.description}
              </p>

              <div>
                <h4 className="text-xs uppercase font-mono tracking-wider text-white font-bold mb-2">
                  Service Standards & Capabilities
                </h4>
                <div className="space-y-2">
                  {selectedServiceForModal.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-[#1C69D4] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-[#222225] bg-[#0a0a0c] flex justify-end gap-3">
              <button
                onClick={() => setSelectedServiceForModal(null)}
                className="px-4 py-2 rounded-xs bg-[#1f1f23] text-neutral-300 text-xs font-mono uppercase"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedServiceForModal.title;
                  setSelectedServiceForModal(null);
                  handleServiceSelect(title);
                }}
                className="px-6 py-2 rounded-xs bg-[#1C69D4] text-white text-xs font-bold uppercase tracking-wider"
              >
                Book This Service
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
