import React from 'react';
import { BMWModel } from '../types/bmw';
import { formatINR } from '../data/pricing';
import { Gauge, Zap, GitCompare, Eye, Sliders, ChevronRight } from 'lucide-react';

interface VehicleCardProps {
  model: BMWModel;
  isCompared: boolean;
  onToggleCompare: (modelId: string) => void;
  onViewDetails: (model: BMWModel) => void;
  onSelect360: (model: BMWModel) => void;
  onConfigure: (model: BMWModel) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({
  model,
  isCompared,
  onToggleCompare,
  onViewDetails,
  onSelect360,
  onConfigure
}) => {
  return (
    <div className="group relative bg-[#141414] border border-[#292929] hover:border-[#1C69D4]/80 rounded-sm overflow-hidden transition-all duration-500 hover:shadow-[0_10px_35px_rgba(28,105,212,0.15)] flex flex-col justify-between">
      
      {/* Top Media & Badges */}
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#0d0d0f]">
          <img
            src={model.heroImage}
            alt={model.name}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-black/30 pointer-events-none"></div>

          {/* Category & Fuel Tag */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
            <span className="px-2.5 py-1 rounded-xs bg-[#080808]/85 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
              {model.category}
            </span>
            <span className={`px-2 py-1 rounded-xs text-[10px] font-mono uppercase tracking-wider font-bold ${
              model.fuelType === 'Electric'
                ? 'bg-[#1C69D4] text-white shadow-md'
                : 'bg-[#222222]/90 text-neutral-300'
            }`}>
              {model.fuelType}
            </span>
          </div>

          {/* Compare Checkbox Icon Button */}
          <button
            onClick={() => onToggleCompare(model.id)}
            title={isCompared ? "Remove from comparison" : "Add to vehicle comparison"}
            className={`absolute top-3 right-3 p-2 rounded-xs backdrop-blur-md transition-all z-10 flex items-center gap-1 text-[11px] ${
              isCompared
                ? 'bg-[#1C69D4] text-white shadow-[0_0_12px_rgba(28,105,212,0.6)] font-bold'
                : 'bg-[#080808]/75 text-neutral-400 hover:text-white border border-white/10'
            }`}
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isCompared ? 'Compared' : 'Compare'}</span>
          </button>

          {/* Quick 360 Overlay Icon Pill */}
          <button
            onClick={() => onSelect360(model)}
            className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-black/80 hover:bg-[#1C69D4] text-neutral-200 hover:text-white backdrop-blur-md border border-white/15 text-[11px] font-mono tracking-wider flex items-center gap-1.5 transition-all shadow-md group/btn"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#1C69D4] group-hover/btn:bg-white animate-pulse"></span>
            <span>360° Studio</span>
          </button>
        </div>

        {/* Card Header & Content */}
        <div className="p-5 pb-3">
          <div className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-semibold mb-1">
            {model.series} • {model.variants[0]?.name || 'M Sport'}
          </div>

          <h3 className="font-heading font-bold text-lg text-white group-hover:text-[#1C69D4] transition-colors leading-snug">
            {model.name}
          </h3>

          <p className="text-xs text-neutral-400 line-clamp-1 mt-1 font-light italic">
            "{model.tagline}"
          </p>

          {/* Price Header */}
          <div className="mt-4 pt-3 border-t border-[#222222] flex items-baseline justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-neutral-500 block">
                Starting Ex-Showroom (India)
              </span>
              <span className="text-xl font-heading font-extrabold text-white">
                {formatINR(model.startingPriceINR)}
              </span>
            </div>
            <span className="text-[10px] text-neutral-500 font-mono">
              + State Taxes
            </span>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-3 gap-2 mt-4 p-2.5 bg-[#0a0a0c] rounded-xs border border-[#1f1f22]">
            <div className="text-center">
              <span className="text-[9px] uppercase tracking-wider text-neutral-500 block">Power</span>
              <div className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                <Zap className="w-3 h-3 text-[#1C69D4]" />
                <span>{model.performance.horsepower} HP</span>
              </div>
            </div>

            <div className="text-center border-x border-[#1e1e24]">
              <span className="text-[9px] uppercase tracking-wider text-neutral-500 block">0–100 km/h</span>
              <div className="text-xs font-bold text-white flex items-center justify-center gap-1 mt-0.5">
                <Gauge className="w-3 h-3 text-[#1C69D4]" />
                <span>{model.performance.acceleration0to100}s</span>
              </div>
            </div>

            <div className="text-center">
              <span className="text-[9px] uppercase tracking-wider text-neutral-500 block">Top Speed</span>
              <div className="text-xs font-bold text-white mt-0.5">
                {model.performance.topSpeedKmH} km/h
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Buttons (3 required buttons) */}
      <div className="p-5 pt-2 grid grid-cols-2 gap-2 border-t border-[#222222]/80 mt-2">
        <button
          onClick={() => onViewDetails(model)}
          className="px-3 py-2.5 rounded-xs bg-[#1a1a1c] hover:bg-[#252528] text-neutral-300 hover:text-white text-xs font-medium tracking-wider flex items-center justify-center gap-1.5 transition-colors border border-[#2a2a30]"
        >
          <Eye className="w-3.5 h-3.5 text-neutral-400" />
          <span>Details</span>
        </button>

        <button
          onClick={() => onConfigure(model)}
          className="px-3 py-2.5 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-semibold tracking-wider flex items-center justify-center gap-1 transition-all shadow-[0_0_15px_rgba(28,105,212,0.3)] hover:shadow-[0_0_20px_rgba(28,105,212,0.5)]"
        >
          <Sliders className="w-3.5 h-3.5" />
          <span>Configure</span>
          <ChevronRight className="w-3 h-3" />
        </button>
      </div>

    </div>
  );
};
