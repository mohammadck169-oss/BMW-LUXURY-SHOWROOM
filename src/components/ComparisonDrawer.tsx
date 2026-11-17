import React from 'react';
import { BMWModel } from '../types/bmw';
import { formatINR } from '../data/pricing';
import { X, Sliders, Trash2 } from 'lucide-react';

interface ComparisonDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  comparedModels: BMWModel[];
  onRemoveModel: (modelId: string) => void;
  onConfigure: (model: BMWModel) => void;
  onSelect360: (model: BMWModel) => void;
}

export const ComparisonDrawer: React.FC<ComparisonDrawerProps> = ({
  isOpen,
  onClose,
  comparedModels,
  onRemoveModel,
  onConfigure,
  onSelect360
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-6xl bg-[#111114] border border-[#292929] rounded-sm shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#222225] flex items-center justify-between bg-[#0a0a0c]">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-heading font-extrabold text-white">
              BMW Comparative Engineering Matrix
            </h2>
            <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#1C69D4]/20 text-[#1C69D4] border border-[#1C69D4]/40">
              {comparedModels.length} of 3 Models
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#18181b] hover:bg-[#25252a] text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Table */}
        <div className="overflow-x-auto overflow-y-auto p-6 flex-1">
          {comparedModels.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <p className="text-neutral-400 text-sm">
                No BMW vehicles selected for comparison.
              </p>
              <p className="text-xs text-neutral-500">
                Browse the Models catalogue and click "Compare" on up to 3 vehicles to review side-by-side specifications.
              </p>
            </div>
          ) : (
            <div className="min-w-[700px]">
              
              {/* Top Row: Vehicle Cards */}
              <div className="grid grid-cols-4 gap-4 pb-6 border-b border-[#222225]">
                <div className="flex flex-col justify-end text-neutral-500 text-xs font-mono uppercase">
                  <span>SPECIFICATION / FEATURE</span>
                </div>

                {comparedModels.map((model) => (
                  <div key={model.id} className="p-3 bg-[#151518] rounded-xs border border-[#26262c] relative">
                    <button
                      onClick={() => onRemoveModel(model.id)}
                      title="Remove vehicle"
                      className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-red-900/60 text-neutral-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>

                    <img
                      src={model.heroImage}
                      alt={model.name}
                      className="w-full h-24 object-cover rounded-xs mb-2"
                    />

                    <span className="text-[9px] uppercase font-mono text-[#1C69D4] block">
                      {model.category}
                    </span>
                    <h4 className="font-heading font-bold text-white text-sm line-clamp-1">
                      {model.name}
                    </h4>
                    <div className="text-sm font-extrabold text-white mt-1">
                      {formatINR(model.startingPriceINR)}
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 mt-3">
                      <button
                        onClick={() => {
                          onClose();
                          onSelect360(model);
                        }}
                        className="p-1.5 rounded-xs bg-[#1f1f24] hover:bg-[#2c2c34] text-[10px] text-neutral-200 uppercase font-mono tracking-wider text-center"
                      >
                        360° View
                      </button>
                      <button
                        onClick={() => {
                          onClose();
                          onConfigure(model);
                        }}
                        className="p-1.5 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-[10px] text-white uppercase font-mono font-bold tracking-wider text-center flex items-center justify-center gap-0.5"
                      >
                        <Sliders className="w-2.5 h-2.5" />
                        <span>Config</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rows Comparison Data */}
              <div className="divide-y divide-[#1c1c20] text-xs">
                
                {/* Variant & Engine */}
                <div className="grid grid-cols-4 gap-4 py-3">
                  <div className="text-neutral-400 font-medium">Standard Powertrain</div>
                  {comparedModels.map((m) => (
                    <div key={m.id} className="text-white">
                      {m.variants[0]?.engine}
                    </div>
                  ))}
                </div>

                {/* Horsepower */}
                <div className="grid grid-cols-4 gap-4 py-3 bg-[#131316]/50">
                  <div className="text-neutral-400 font-medium">Power Output</div>
                  {comparedModels.map((m) => (
                    <div key={m.id} className="text-white font-bold font-mono">
                      {m.performance.horsepower} HP
                    </div>
                  ))}
                </div>

                {/* Torque */}
                <div className="grid grid-cols-4 gap-4 py-3">
                  <div className="text-neutral-400 font-medium">Maximum Torque</div>
                  {comparedModels.map((m) => (
                    <div key={m.id} className="text-white font-mono">
                      {m.performance.torqueNm} Nm
                    </div>
                  ))}
                </div>

                {/* Acceleration 0-100 */}
                <div className="grid grid-cols-4 gap-4 py-3 bg-[#131316]/50">
                  <div className="text-neutral-400 font-medium">0–100 km/h Sprint</div>
                  {comparedModels.map((m) => (
                    <div key={m.id} className="text-[#1C69D4] font-bold font-mono">
                      {m.performance.acceleration0to100} seconds
                    </div>
                  ))}
                </div>

                {/* Top Speed */}
                <div className="grid grid-cols-4 gap-4 py-3">
                  <div className="text-neutral-400 font-medium">Top Speed</div>
                  {comparedModels.map((m) => (
                    <div key={m.id} className="text-white font-mono">
                      {m.performance.topSpeedKmH} km/h
                    </div>
                  ))}
                </div>

                {/* Transmission & Drivetrain */}
                <div className="grid grid-cols-4 gap-4 py-3 bg-[#131316]/50">
                  <div className="text-neutral-400 font-medium">Transmission / Drive</div>
                  {comparedModels.map((m) => (
                    <div key={m.id} className="text-white">
                      {m.variants[0]?.drivetrain} • {m.variants[0]?.transmission}
                    </div>
                  ))}
                </div>

                {/* Fuel Efficiency / Range */}
                <div className="grid grid-cols-4 gap-4 py-3">
                  <div className="text-neutral-400 font-medium">Efficiency / Range</div>
                  {comparedModels.map((m) => (
                    <div key={m.id} className="text-white font-mono">
                      {m.performance.efficiencyRating}
                    </div>
                  ))}
                </div>

                {/* Dimensions */}
                <div className="grid grid-cols-4 gap-4 py-3 bg-[#131316]/50">
                  <div className="text-neutral-400 font-medium">Length x Width x Height</div>
                  {comparedModels.map((m) => (
                    <div key={m.id} className="text-neutral-300 font-mono">
                      {m.dimensions.lengthMm} x {m.dimensions.widthMm} x {m.dimensions.heightMm} mm
                    </div>
                  ))}
                </div>

                {/* Boot Capacity */}
                <div className="grid grid-cols-4 gap-4 py-3">
                  <div className="text-neutral-400 font-medium">Luggage Capacity</div>
                  {comparedModels.map((m) => (
                    <div key={m.id} className="text-white font-mono">
                      {m.dimensions.bootCapacityLiters} Litres
                    </div>
                  ))}
                </div>

                {/* Ground Clearance */}
                <div className="grid grid-cols-4 gap-4 py-3 bg-[#131316]/50">
                  <div className="text-neutral-400 font-medium">Ground Clearance</div>
                  {comparedModels.map((m) => (
                    <div key={m.id} className="text-white font-mono">
                      {m.dimensions.groundClearanceMm} mm
                    </div>
                  ))}
                </div>

              </div>

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#222225] bg-[#0a0a0c] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xs bg-[#18181b] hover:bg-[#25252b] text-white text-xs uppercase font-mono tracking-wider transition-colors"
          >
            Close Matrix
          </button>
        </div>

      </div>
    </div>
  );
};
