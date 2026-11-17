import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SHOWROOM_LOCATIONS } from '../data/bmwModels';

interface FooterProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenEnquiry }) => {
  return (
    <footer className="bg-[#080808] border-t border-[#292929] pt-16 pb-12 text-[#A3A3A3] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          
          {/* Col 1: Brand & Philosophy */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-black border border-white/40 flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(28,105,212,0.4)]">
                <svg viewBox="0 0 100 100" className="w-full h-full">
                  <circle cx="50" cy="50" r="48" fill="#000" stroke="#fff" strokeWidth="2" />
                  <circle cx="50" cy="50" r="42" fill="#fff" />
                  <path d="M 50,50 L 50,8 A 42,42 0 0,0 8,50 Z" fill="#1C69D4" />
                  <path d="M 50,50 L 92,50 A 42,42 0 0,0 50,8 Z" fill="#FFFFFF" />
                  <path d="M 50,50 L 50,92 A 42,42 0 0,0 92,50 Z" fill="#1C69D4" />
                  <path d="M 50,50 L 8,50 A 42,42 0 0,0 50,92 Z" fill="#FFFFFF" />
                  <line x1="50" y1="8" x2="50" y2="92" stroke="#000" strokeWidth="2.5" />
                  <line x1="8" y1="50" x2="92" y2="50" stroke="#000" strokeWidth="2.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-black text-white text-lg tracking-[0.2em]">
                  BMW LUXURY SHOWROOM
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#1C69D4]">
                  Sheer Driving Pleasure • India
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm pt-2">
              Dedicated to discerning luxury automotive connoisseurs across India. Experience the timeless union of German engineering precision, bespoke craftsmanship, and electrifying performance.
            </p>

            {/* Direct WhatsApp Concierge CTA */}
            <div className="pt-2">
              <a
                href="https://wa.me/919820011223?text=Hello%20BMW%20Showroom%20Concierge,%20I%20would%20like%20to%20enquire%20about%20a%20luxury%20vehicle%20allocation."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-sm bg-[#141414] border border-[#292929] hover:border-[#25D366] text-white hover:text-[#25D366] transition-all text-xs font-medium group"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Instant WhatsApp VIP Concierge</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Sitemap */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-heading font-bold mb-4 border-b border-[#292929] pb-2">
              Showroom Pages
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">
                  01. Home & Brand Story
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">
                  02. Atelier Services & Maintenance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('360')} className="hover:text-white transition-colors">
                  03. BMW 360° Interactive 3D
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('models')} className="hover:text-white transition-colors">
                  04. Dynamic Vehicle Catalogue
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('configurator')} className="hover:text-white transition-colors">
                  05. Configurator & On-Road Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('gallery')} className="hover:text-white transition-colors">
                  06. Editorial Gallery & Stories
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Vehicle Series */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-heading font-bold mb-4 border-b border-[#292929] pb-2">
              Automotive Portfolios
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="hover:text-white cursor-pointer" onClick={() => onNavigate('models')}>
                BMW M High Performance (M4, M8, XM)
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => onNavigate('models')}>
                BMW Luxury Class Sedans (7 Series, 3 GL)
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => onNavigate('models')}>
                BMW X Sports Activity Vehicles (X7, X5, X1)
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => onNavigate('models')}>
                BMW i All-Electric Range (i7, i4, iX)
              </li>
              <li className="hover:text-white cursor-pointer" onClick={() => onNavigate('configurator')}>
                Bespoke BMW Individual Custom Atelier
              </li>
            </ul>
          </div>

          {/* Col 4: Key Showroom Locations */}
          <div>
            <h4 className="text-white text-xs uppercase tracking-[0.2em] font-heading font-bold mb-4 border-b border-[#292929] pb-2">
              Atelier Centers
            </h4>
            <div className="space-y-3 text-xs">
              {SHOWROOM_LOCATIONS.slice(0, 3).map((loc) => (
                <div key={loc.id} className="space-y-0.5">
                  <div className="text-white font-medium flex items-center gap-1.5">
                    <MapPin className="w-3 h-3 text-[#1C69D4]" />
                    <span>{loc.city} — {loc.name.split('—')[1]?.trim() || loc.name}</span>
                  </div>
                  <p className="text-[11px] text-neutral-500 pl-4">{loc.phone}</p>
                </div>
              ))}
              <div className="pt-1">
                <button
                  onClick={onOpenEnquiry}
                  className="text-[11px] text-[#1C69D4] hover:underline flex items-center gap-1 font-medium"
                >
                  <span>Request Showroom Private Appointment</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Middle Bar: Certified Contacts */}
        <div className="border-t border-[#1a1a1a] py-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="flex items-center gap-2.5">
            <Phone className="w-4 h-4 text-[#1C69D4]" />
            <div>
              <span className="text-neutral-500 block text-[10px]">TOLL-FREE CONCIERGE (24/7)</span>
              <a href="tel:18001022269" className="text-white hover:text-[#1C69D4] font-mono">
                1800 102 2269 (BMW India)
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Mail className="w-4 h-4 text-[#1C69D4]" />
            <div>
              <span className="text-neutral-500 block text-[10px]">PRIVATE CLIENT DESK</span>
              <a href="mailto:concierge@bmw-luxury.in" className="text-white hover:text-[#1C69D4]">
                concierge@bmw-luxury.in
              </a>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Clock className="w-4 h-4 text-[#1C69D4]" />
            <div>
              <span className="text-neutral-500 block text-[10px]">ATELIER HOURS</span>
              <span className="text-white">Mon – Sun: 10:00 AM – 8:00 PM IST</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Tax Disclaimer */}
        <div className="border-t border-[#1a1a1a] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500">
          <p>
            © {new Date().getFullYear()} BMW Luxury Automotive Showroom India. All rights reserved.
          </p>
          <p className="max-w-2xl text-center md:text-right leading-tight">
            *Ex-showroom prices shown are indicative and subject to change without prior notice. Registration (RTO), TCS, and insurance are calculated as per applicable state regulations. GST and Compensation Cess are already included in ex-showroom prices.
          </p>
        </div>

      </div>
    </footer>
  );
};
