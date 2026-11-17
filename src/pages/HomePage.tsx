import React, { useState } from 'react';
import { BMW_MODELS, SHOWROOM_LOCATIONS } from '../data/bmwModels';
import { BMW_SERVICES } from '../data/services';
import { BMW_TESTIMONIALS } from '../data/testimonials';
import { BMWModel } from '../types/bmw';
import { formatINR } from '../data/pricing';
import { 
  ChevronRight, 
  Sliders, 
  Compass, 
  Zap, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Star, 
  ArrowUpRight, 
  Sparkles,
  Award,
  Layers,
  Cpu
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
  onSelectModel: (model: BMWModel) => void;
  onConfigureModel: (model: BMWModel) => void;
  onSelect360: (model: BMWModel) => void;
  onOpenEnquiry: (modelName?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectModel,
  onConfigureModel,
  onSelect360,
  onOpenEnquiry
}) => {
  const [heroIndex, setHeroIndex] = useState(0);

  const heroSlides = [
    {
      title: "THE ART OF DRIVING.",
      subtitle: "Discover the extraordinary world of BMW.",
      modelName: "BMW M Series Performance",
      tagline: "Iconic Corona LED Headlights • TwinPower Turbo • Pure Sheer Driving Pleasure",
      image: "",
      modelId: "m4-competition"
    },
    {
      title: "FORWARDISM REDEFINED.",
      subtitle: "The Zenith of Modern Automotive Splendour.",
      modelName: "BMW 7 Series Sedan",
      tagline: "31.3\" Theatre Screen • Swarovski Crystal Headlights",
      image: "https://images.unsplash.com/photo-1555353540-64580b51c258?auto=format&fit=crop&w=2000&q=90",
      modelId: "7-series-sedan"
    },
    {
      title: "ELECTRIFIED MAJESTY.",
      subtitle: "Zero Emissions. Unmatched Luxury Travel.",
      modelName: "BMW i7 All-Electric Flagship",
      tagline: "625 km WLTP Range • Dual Motors • Hans Zimmer Soundscapes",
      image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=2000&q=90",
      modelId: "i7-xdrive60"
    }
  ];

  const currentSlide = heroSlides[heroIndex];

  // Featured 4 vehicles across categories
  const featuredModels = [
    BMW_MODELS.find(m => m.id === 'm4-competition')!,
    BMW_MODELS.find(m => m.id === '7-series-sedan')!,
    BMW_MODELS.find(m => m.id === 'x7-sav')!,
    BMW_MODELS.find(m => m.id === 'i7-xdrive60')!
  ];

  return (
    <div className="w-full bg-[#080808] text-white">
      
      {/* 2. FULL-SCREEN HERO SECTION WITH CINEMATIC BMW CAR IMAGERY */}
      <section className="relative h-screen min-h-[640px] flex items-center justify-center overflow-hidden">
        
        {/* Background Image Slides with Smooth Fade */}
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              heroIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            } transform transition-transform duration-[7000ms]`}
          >
            {slide.image ? (
              <img
                src={slide.image}
                alt={slide.modelName}
                className="w-full h-full object-cover object-right md:object-center"
              />
            ) : (
              <div className="w-full h-full bg-[#080808] relative">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1C69D4]/20 via-[#080808]/80 to-[#080808]"></div>
                <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#1C69D4]/15 blur-[120px] rounded-full"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20"></div>
              </div>
            )}
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-black/60"></div>
            <div className="absolute inset-0 bg-radial-vignette opacity-70"></div>
          </div>
        ))}

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left w-full mt-16 sm:mt-24">
          
          {/* Tag badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#1C69D4]/40 text-[#1C69D4] text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_20px_rgba(28,105,212,0.3)] animate-fadeIn">
            <span className="w-2 h-2 rounded-full bg-[#1C69D4] animate-pulse"></span>
            <span>BMW INDIA SIGNATURE ATELIER</span>
          </div>

          {/* Headline 3 & Subtitle 4 */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight text-white uppercase leading-[0.95] max-w-4xl">
            {currentSlide.title}
          </h1>

          <p className="text-lg sm:text-2xl text-neutral-300 font-light mt-4 max-w-2xl tracking-wide">
            {currentSlide.subtitle}
          </p>

          <p className="text-xs sm:text-sm font-mono text-[#1C69D4] tracking-widest uppercase mt-2">
            {currentSlide.modelName} — {currentSlide.tagline}
          </p>

          {/* CTA Group 5 */}
          <div className="flex flex-wrap items-center gap-4 mt-8 sm:mt-10 justify-center sm:justify-start">
            <button
              onClick={() => onNavigate('models')}
              className="px-8 py-3.5 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-all shadow-[0_0_30px_rgba(28,105,212,0.4)] hover:shadow-[0_0_40px_rgba(28,105,212,0.7)] group"
            >
              <span>Explore All Models</span>
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => {
                const target = BMW_MODELS.find(m => m.id === currentSlide.modelId) || BMW_MODELS[0];
                onConfigureModel(target);
              }}
              className="px-8 py-3.5 rounded-xs bg-[#141414]/80 hover:bg-white hover:text-black text-white text-xs font-bold uppercase tracking-[0.2em] flex items-center gap-2 transition-all border border-white/20 backdrop-blur-md"
            >
              <Sliders className="w-4 h-4" />
              <span>Configure Now</span>
            </button>

            <button
              onClick={() => {
                const target = BMW_MODELS.find(m => m.id === currentSlide.modelId) || BMW_MODELS[0];
                onSelect360(target);
              }}
              className="px-6 py-3.5 rounded-xs bg-[#0a0a0c]/80 hover:bg-[#1C69D4]/20 text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-widest border border-white/10 flex items-center gap-2 transition-all backdrop-blur-md"
            >
              <Compass className="w-4 h-4 text-[#1C69D4]" />
              <span>Interactive 360°</span>
            </button>
          </div>

        </div>

        {/* Slide Indicators & Quick Selectors */}
        <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-3">
          {heroSlides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => setHeroIndex(idx)}
              className={`h-1.5 transition-all rounded-full ${
                heroIndex === idx ? 'w-10 bg-[#1C69D4] shadow-[0_0_12px_#1C69D4]' : 'w-4 bg-white/20 hover:bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 opacity-60">
          <span className="text-[9px] uppercase font-mono tracking-widest text-neutral-400">SCROLL DOWN</span>
          <div className="w-4 h-7 border border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-1.5 bg-[#1C69D4] rounded-full animate-bounce"></div>
          </div>
        </div>

      </section>

      {/* 7. DISCOVER THE BMW EXPERIENCE (TECHNOLOGY & HERITAGE) */}
      <section className="py-24 bg-[#0d0d10] border-y border-[#292929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-2">
              THE PURSUIT OF PERFECTION
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase">
              Discover The BMW Experience
            </h2>
            <p className="text-neutral-400 text-sm mt-3 leading-relaxed">
              Every curve, combustion chamber, and electric winding is tuned to produce visceral joy. Discover the core pillars that define the Ultimate Driving Machine in India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-[#141417] border border-[#222225] rounded-sm hover:border-[#1C69D4] transition-all group">
              <div className="w-12 h-12 rounded-sm bg-[#1C69D4]/10 border border-[#1C69D4]/30 text-[#1C69D4] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                TwinPower Turbo & 5th Gen eDrive
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                From high-revving M straight-six twin-turbocharged powerhouses to cutting-edge 625 km emission-free electric motors, each drivetrain is calibrated for instant throttle response.
              </p>
            </div>

            <div className="p-6 bg-[#141417] border border-[#222225] rounded-sm hover:border-[#1C69D4] transition-all group">
              <div className="w-12 h-12 rounded-sm bg-[#1C69D4]/10 border border-[#1C69D4]/30 text-[#1C69D4] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                Carbon Core & 50:50 Axle Balance
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Pioneering carbon-fibre passenger cell architectures combined with perfect 50:50 front-to-rear weight distribution deliver unmatched poise and stability on every Indian roadway.
              </p>
            </div>

            <div className="p-6 bg-[#141417] border border-[#222225] rounded-sm hover:border-[#1C69D4] transition-all group">
              <div className="w-12 h-12 rounded-sm bg-[#1C69D4]/10 border border-[#1C69D4]/30 text-[#1C69D4] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                BMW Operating System 8.5 & 9
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Frameless curved glass cockpits integrating QuickSelect menu logic, augmented reality heads-up displays, and intelligent voice interaction responding seamlessly in natural Indian English.
              </p>
            </div>

            <div className="p-6 bg-[#141417] border border-[#222225] rounded-sm hover:border-[#1C69D4] transition-all group">
              <div className="w-12 h-12 rounded-sm bg-[#1C69D4]/10 border border-[#1C69D4]/30 text-[#1C69D4] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-2">
                Hans Zimmer IconicSounds
              </h3>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Composed exclusively by Academy Award-winner Hans Zimmer, BMW IconicSounds Electric creates emotional, cinematic acoustic feedback for acceleration in the i4, iX, and i7.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 8. BRAND AND SHOWROOM INTRODUCTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="relative aspect-[4/3] rounded-sm overflow-hidden border border-[#292929] shadow-2xl group">
            <img
              src="assets/images/bmw_sanctuary_atelier.jpg"
              alt="Bespoke Showroom Architecture Across India"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-[10px] font-mono text-[#1C69D4] uppercase tracking-wider block mb-1">
                PRIVATE ATELIER CONSULTATION
              </span>
              <h4 className="text-xl font-heading font-bold text-white">
                Bespoke Showroom Architecture Across India
              </h4>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">
                EXCELLENCE IN AUTOMOTIVE BESPOKE
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase leading-tight">
                An Unmatched Sanctuary For Luxury Automotive Buyers
              </h2>
            </div>

            <p className="text-neutral-300 text-sm leading-relaxed">
              Our flagship showrooms in Mumbai (Worli), New Delhi (Aerocity), and Bengaluru (Lavelle Road) are not merely dealerships—they are design sanctuaries. Here, client advisors guide you through tactile material archives featuring hand-fluted Merino leathers, open-pore woods, and bespoke BMW Individual paint samples.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <Award className="w-5 h-5 text-[#1C69D4] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-bold">White-Glove Ceremonial Handover</h4>
                  <p className="text-neutral-400 text-xs mt-0.5">Every vehicle collection is accompanied by private unveiling suites, champagne reception, and personal Product Genius telemetry setup.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-[#1C69D4] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-white text-sm font-bold">Certified Master Technicians</h4>
                  <p className="text-neutral-400 text-xs mt-0.5">Condition Based Service (CBS) performed in climate-controlled clean-room bays using genuine BMW factory tools and diagnostic rigs.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex gap-4">
              <button
                onClick={() => onOpenEnquiry('Private Atelier Viewing')}
                className="px-6 py-3 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-wider transition-all"
              >
                Schedule Private Viewing
              </button>
              <button
                onClick={() => onNavigate('gallery')}
                className="px-6 py-3 rounded-xs bg-[#151518] hover:bg-[#202025] text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider border border-[#292929] transition-all"
              >
                Tour Showroom Gallery
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 9. PREMIUM SERVICES PREVIEW */}
      <section className="py-24 bg-[#0a0a0c] border-t border-[#292929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">
                COMPREHENSIVE LUXURY CARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase">
                Premium Atelier Services
              </h2>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="mt-4 md:mt-0 text-xs uppercase tracking-widest text-[#1C69D4] hover:underline flex items-center gap-1 font-mono"
            >
              <span>Explore All 8 Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {BMW_SERVICES.slice(0, 4).map((service) => (
              <div
                key={service.id}
                className="bg-[#141417] border border-[#222225] hover:border-[#1C69D4] rounded-sm overflow-hidden flex flex-col justify-between group transition-all"
              >
                <div className="aspect-[16/10] overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-white font-heading font-bold text-base group-hover:text-[#1C69D4] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-neutral-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#222225]">
                    <button
                      onClick={() => onNavigate('services')}
                      className="text-xs font-mono uppercase tracking-wider text-[#1C69D4] hover:text-white flex items-center gap-1"
                    >
                      <span>Learn More & Enquire</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. CUSTOMER TESTIMONIALS PREVIEW */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">
            CLIENT PERSPECTIVES
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white uppercase">
            Voices of Ownership
          </h2>
          <p className="text-xs text-neutral-400 mt-2">
            Reflections from luxury automobile owners across Mumbai, New Delhi, Bengaluru, and Kochi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BMW_TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#141417] border border-[#222225] rounded-sm flex flex-col justify-between relative hover:border-[#1C69D4]/60 transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-[#1C69D4] mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-neutral-300 text-xs leading-relaxed italic">
                  "{item.review}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#222225]">
                <img
                  src={item.customerPhoto}
                  alt={item.customerName}
                  className="w-10 h-10 rounded-full object-cover border border-[#1C69D4]/40"
                />
                <div>
                  <h4 className="text-white text-xs font-bold font-heading">{item.customerName}</h4>
                  <div className="text-[11px] text-[#1C69D4] font-mono">{item.vehicleModel}</div>
                  <div className="text-[10px] text-neutral-500">{item.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 11. CONTACT AND SHOWROOM LOCATIONS */}
      <section className="py-24 bg-[#0a0a0c] border-t border-[#292929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Overview & Direct Booking Callout */}
            <div className="space-y-4">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">
                FLAGSHIP NETWORK
              </span>
              <h2 className="text-3xl font-heading font-black text-white uppercase">
                Visit Our Showrooms
              </h2>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Step into our flagship ateliers for a private consultation, tailored espresso, and a private briefing with a certified BMW Product Genius.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenEnquiry('Showroom Appointment')}
                  className="px-6 py-3 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-wider transition-all"
                >
                  Book Showroom Consultation
                </button>
              </div>
            </div>

            {/* List of Showrooms */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SHOWROOM_LOCATIONS.map((loc) => (
                <div
                  key={loc.id}
                  className="p-5 bg-[#141417] border border-[#222225] rounded-sm hover:border-[#1C69D4]/60 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono uppercase font-bold text-[#1C69D4]">
                        {loc.city}
                      </span>
                      <span className="text-[10px] text-neutral-500 font-mono">
                        Open Daily
                      </span>
                    </div>

                    <h4 className="text-white font-heading font-bold text-sm mb-1">
                      {loc.name}
                    </h4>

                    <p className="text-xs text-neutral-400 leading-snug mb-3">
                      {loc.address}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#222225] flex items-center justify-between text-xs">
                    <span className="font-mono text-neutral-300">{loc.phone}</span>
                    <a
                      href={`https://wa.me/${loc.whatsapp.replace('+', '')}?text=Hello%20BMW%20${loc.city},%20I%20would%20like%20to%20schedule%20an%20atelier%20visit.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] hover:underline font-mono text-[11px]"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
