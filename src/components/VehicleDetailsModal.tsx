import React, { useState } from 'react';
import { BMWModel } from '../types/bmw';
import { formatINR, formatFullINR } from '../data/pricing';
import { X, Sliders, ChevronRight, Gauge, Zap, CheckCircle2, Shield, Calendar } from 'lucide-react';

interface VehicleDetailsModalProps {
  model: BMWModel | null;
  onClose: () => void;
  onConfigure: (model: BMWModel) => void;
  onSelect360: (model: BMWModel) => void;
  onOpenEnquiry: (modelName: string) => void;
}

export const VehicleDetailsModal: React.FC<VehicleDetailsModalProps> = ({
  model,
  onClose,
  onConfigure,
  onSelect360,
  onOpenEnquiry
}) => {
  if (!model) return null;

  const [activeImageTab, setActiveImageTab] = useState<'hero' | 'side' | 'rear' | 'interior'>('hero');
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);

  const activeVariant = model.variants[selectedVariantIndex] || model.variants[0];

  const currentImage = 
    activeImageTab === 'side' ? model.sideImage :
    activeImageTab === 'rear' ? model.rearImage :
    activeImageTab === 'interior' ? model.interiorImage :
    model.heroImage;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#111114] border border-[#292929] rounded-sm shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Modal Top Header */}
        <div className="px-6 py-4 border-b border-[#222225] flex items-center justify-between bg-[#0a0a0c]">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold">
              {model.category} • {model.series}
            </span>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-white">
              {model.name}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#18181b] hover:bg-[#25252a] text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 space-y-8 flex-1">
          
          {/* Main Visual Showcase with Tabbed Angles */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] bg-black rounded-sm overflow-hidden border border-[#222225]">
              <img
                src={currentImage}
                alt={`${model.name} ${activeImageTab}`}
                className="w-full h-full object-cover object-center transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

              {/* Price badge over image */}
              <div className="absolute bottom-4 left-4 z-10">
                <span className="text-xs uppercase tracking-wider text-neutral-400 block font-mono">
                  Variant Ex-Showroom
                </span>
                <span className="text-2xl sm:text-3xl font-heading font-black text-white">
                  {formatINR(activeVariant.exShowroomPriceINR)}
                </span>
                <span className="text-xs text-neutral-400 ml-2 font-mono">
                  ({formatFullINR(activeVariant.exShowroomPriceINR)})
                </span>
              </div>
            </div>

            {/* Angle Switcher Buttons */}
            <div className="flex gap-2">
              {(['hero', 'side', 'rear', 'interior'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveImageTab(tab)}
                  className={`px-3 py-1.5 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
                    activeImageTab === tab
                      ? 'bg-[#1C69D4] text-white font-bold'
                      : 'bg-[#1a1a1e] text-neutral-400 hover:text-white hover:bg-[#242429]'
                  }`}
                >
                  {tab === 'hero' ? 'Studio 3/4' : tab === 'side' ? 'Profile' : tab === 'rear' ? 'Rear' : 'Cockpit'}
                </button>
              ))}
            </div>
          </div>

          {/* Overview Prose */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#1C69D4] font-bold mb-2">
              Model Overview
            </h3>
            <p className="text-neutral-300 text-sm leading-relaxed">
              {model.overview}
            </p>
          </div>

          {/* Variants Selector */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#1C69D4] font-bold mb-3">
              Available Indian Variants
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {model.variants.map((v, idx) => (
                <div
                  key={v.id}
                  onClick={() => setSelectedVariantIndex(idx)}
                  className={`p-4 rounded-sm border cursor-pointer transition-all ${
                    selectedVariantIndex === idx
                      ? 'bg-[#1C69D4]/10 border-[#1C69D4] shadow-[0_0_15px_rgba(28,105,212,0.2)]'
                      : 'bg-[#141417] border-[#222225] hover:border-neutral-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-white text-sm">
                      {v.name}
                    </span>
                    <span className="font-mono text-xs text-[#1C69D4] font-bold">
                      {formatINR(v.exShowroomPriceINR)}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1">{v.engine}</p>
                  <div className="flex gap-4 mt-2 text-[11px] font-mono text-neutral-300">
                    <span>{v.horsepower} HP</span>
                    <span>•</span>
                    <span>{v.torqueNm} Nm</span>
                    <span>•</span>
                    <span>0-100: {v.acceleration0to100}s</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications Grid */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#1C69D4] font-bold mb-3">
              Technical Specifications & Dimensions
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]">
                <span className="text-neutral-500 block text-[10px] uppercase">Engine / Motor</span>
                <span className="text-white font-medium mt-0.5 block">{activeVariant.engine}</span>
              </div>
              <div className="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]">
                <span className="text-neutral-500 block text-[10px] uppercase">Transmission</span>
                <span className="text-white font-medium mt-0.5 block">{activeVariant.transmission}</span>
              </div>
              <div className="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]">
                <span className="text-neutral-500 block text-[10px] uppercase">Drivetrain</span>
                <span className="text-white font-medium mt-0.5 block">{activeVariant.drivetrain}</span>
              </div>
              <div className="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]">
                <span className="text-neutral-500 block text-[10px] uppercase">Fuel Efficiency / Range</span>
                <span className="text-white font-medium mt-0.5 block">{model.performance.efficiencyRating}</span>
              </div>

              <div className="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]">
                <span className="text-neutral-500 block text-[10px] uppercase">Length x Width x Height</span>
                <span className="text-white font-medium mt-0.5 block">
                  {model.dimensions.lengthMm} x {model.dimensions.widthMm} x {model.dimensions.heightMm} mm
                </span>
              </div>
              <div className="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]">
                <span className="text-neutral-500 block text-[10px] uppercase">Wheelbase</span>
                <span className="text-white font-medium mt-0.5 block">{model.dimensions.wheelbaseMm} mm</span>
              </div>
              <div className="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]">
                <span className="text-neutral-500 block text-[10px] uppercase">Luggage Capacity</span>
                <span className="text-white font-medium mt-0.5 block">{model.dimensions.bootCapacityLiters} Litres</span>
              </div>
              <div className="p-3 bg-[#0d0d0f] rounded-xs border border-[#202024]">
                <span className="text-neutral-500 block text-[10px] uppercase">Ground Clearance</span>
                <span className="text-white font-medium mt-0.5 block">{model.dimensions.groundClearanceMm} mm</span>
              </div>
            </div>
          </div>

          {/* Key Engineering Highlights */}
          <div>
            <h3 className="text-xs uppercase tracking-widest text-[#1C69D4] font-bold mb-3">
              Standard Equipment & Engineering Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {model.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 p-2.5 bg-[#141417] rounded-xs">
                  <CheckCircle2 className="w-4 h-4 text-[#1C69D4] shrink-0 mt-0.5" />
                  <span className="text-neutral-300">{h}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom Action Bar */}
        <div className="px-6 py-4 border-t border-[#222225] bg-[#0a0a0c] flex flex-wrap items-center justify-between gap-3">
          <div className="flex gap-2">
            <button
              onClick={() => {
                onClose();
                onSelect360(model);
              }}
              className="px-4 py-2.5 rounded-xs bg-[#19191d] hover:bg-[#25252c] text-white text-xs font-mono uppercase tracking-wider border border-[#2c2c34] flex items-center gap-2 transition-colors"
            >
              <span>Launch 360° Studio</span>
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenEnquiry(model.name);
              }}
              className="px-4 py-2.5 rounded-xs bg-[#19191d] hover:bg-[#25252c] text-white text-xs font-mono uppercase tracking-wider border border-[#2c2c34] flex items-center gap-2 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-[#1C69D4]" />
              <span>Book Private Viewing</span>
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onConfigure(model);
            }}
            className="px-6 py-2.5 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(28,105,212,0.4)]"
          >
            <Sliders className="w-4 h-4" />
            <span>Open in Configurator</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
