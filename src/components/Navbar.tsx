import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Shield, GitCompare, Menu, X, PhoneCall } from 'lucide-react';
import { bmwAudio } from '../lib/audio';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  compareCount: number;
  onOpenCompare: () => void;
  onOpenAdmin: () => void;
  onOpenEnquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  compareCount,
  onOpenCompare,
  onOpenAdmin,
  onOpenEnquiry
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioOn, setIsAudioOn] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const active = bmwAudio.toggleEngine();
    setIsAudioOn(active);
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'models', label: 'Explore Models' },
    { id: '360', label: '360° Experience' },
    { id: 'services', label: 'Services' },
    { id: 'configurator', label: 'Configurator & Pricing' },
    { id: 'gallery', label: 'Gallery' }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-md border-b border-[#292929] py-3.5 shadow-2xl'
            : 'bg-gradient-to-b from-[#080808]/90 via-[#080808]/40 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* BMW Showroom Brand Logo */}
          <button
            onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            {/* Iconic BMW Roundel Crest SVG */}
            <div className="relative w-10 h-10 rounded-full bg-black border-2 border-white/30 flex items-center justify-center p-0.5 shadow-[0_0_15px_rgba(28,105,212,0.3)] group-hover:border-[#1C69D4] transition-all">
              <svg viewBox="0 0 100 100" className="w-full h-full transform group-hover:rotate-45 transition-transform duration-700">
                <circle cx="50" cy="50" r="48" fill="#000" stroke="#fff" strokeWidth="2" />
                <circle cx="50" cy="50" r="42" fill="#fff" />
                {/* 4 Quadrants: Top-Left Blue, Top-Right White, Bottom-Right Blue, Bottom-Left White */}
                <path d="M 50,50 L 50,8 A 42,42 0 0,0 8,50 Z" fill="#1C69D4" />
                <path d="M 50,50 L 92,50 A 42,42 0 0,0 50,8 Z" fill="#FFFFFF" />
                <path d="M 50,50 L 50,92 A 42,42 0 0,0 92,50 Z" fill="#1C69D4" />
                <path d="M 50,50 L 8,50 A 42,42 0 0,0 50,92 Z" fill="#FFFFFF" />
                {/* Center dividing cross */}
                <line x1="50" y1="8" x2="50" y2="92" stroke="#000" strokeWidth="2.5" />
                <line x1="8" y1="50" x2="92" y2="50" stroke="#000" strokeWidth="2.5" />
                <circle cx="50" cy="50" r="48" fill="none" stroke="#666" strokeWidth="1" />
              </svg>
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl tracking-[0.25em] text-white group-hover:text-[#1C69D4] transition-colors">
                  BMW
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[#1C69D4] shadow-[0_0_8px_#1C69D4]"></span>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold">
                  INDIA
                </span>
              </div>
              <span className="text-[9px] uppercase tracking-[0.28em] text-[#A3A3A3] font-medium">
                Luxury Signature Atelier
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-xs uppercase tracking-[0.18em] transition-all relative py-1 focus:outline-none ${
                    isActive
                      ? 'text-white font-bold'
                      : 'text-[#A3A3A3] hover:text-white font-medium'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1C69D4] shadow-[0_0_10px_#1C69D4] rounded-full"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action Toolbar */}
          <div className="flex items-center gap-3">
            {/* Book Test Drive CTA */}
            <button
              onClick={onOpenEnquiry}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-semibold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(28,105,212,0.3)] hover:shadow-[0_0_25px_rgba(28,105,212,0.6)]"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Book Test Drive</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-sm bg-[#141414] border border-[#292929] text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080808]/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 border-b border-[#292929] animate-fadeIn">
          <div className="flex flex-col gap-4 text-center my-auto">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-lg uppercase tracking-[0.2em] py-3 border-b border-[#1f1f1f] ${
                    isActive ? 'text-[#1C69D4] font-bold' : 'text-neutral-300'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-6 flex flex-col gap-3">
              <button
                onClick={() => {
                  onOpenEnquiry();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3.5 rounded-sm bg-[#1C69D4] text-white font-semibold uppercase tracking-wider text-sm shadow-[0_0_20px_rgba(28,105,212,0.4)]"
              >
                Book Test Drive / Enquiry
              </button>
              <button
                onClick={() => {
                  onOpenAdmin();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-3 rounded-sm bg-[#141414] border border-[#292929] text-neutral-300 text-xs uppercase tracking-wider"
              >
                Executive Admin Portal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
