import React, { useEffect, useRef, useState } from 'react';
import { BMW360Viewer } from '../lib/threeViewer';
import { BMW_MODELS } from '../data/bmwModels';
import { BMWModel } from '../types/bmw';
import { formatINR } from '../data/pricing';
import { 
  RotateCcw, 
  ZoomIn, 
  ZoomOut, 
  Maximize2, 
  Play, 
  Pause, 
  Lightbulb, 
  Compass, 
  Sliders, 
  ChevronRight, 
  Eye, 
  Layers
} from 'lucide-react';

interface Experience360PageProps {
  initialModel?: BMWModel;
  onNavigate: (page: string) => void;
  onConfigureModel: (model: BMWModel) => void;
  onOpenEnquiry: (modelName?: string) => void;
}

export const Experience360Page: React.FC<Experience360PageProps> = ({
  initialModel,
  onNavigate,
  onConfigureModel,
  onOpenEnquiry
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const viewerRef = useRef<BMW360Viewer | null>(null);

  const [activeModel, setActiveModel] = useState<BMWModel>(initialModel || BMW_MODELS[0]);
  const [selectedColorHex, setSelectedColorHex] = useState(
    initialModel?.availableColours[0]?.hex || BMW_MODELS[0].availableColours[0].hex
  );
  const [selectedWheelId, setSelectedWheelId] = useState(
    initialModel?.availableWheels[0]?.id || BMW_MODELS[0].availableWheels[0].id
  );
  const [selectedInteriorHex, setSelectedInteriorHex] = useState(
    initialModel?.availableInteriors[0]?.colorHex || BMW_MODELS[0].availableInteriors[0].colorHex
  );

  const [isAutoRotate, setIsAutoRotate] = useState(true);
  const [isHeadlightsOn, setIsHeadlightsOn] = useState(true);
  const [currentViewMode, setCurrentViewMode] = useState<'front34' | 'side' | 'rear34' | 'top' | 'interior'>('front34');
  const [activeTab, setActiveTab] = useState<'exterior' | 'wheels' | 'interior' | 'models'>('exterior');

  // Initialize Three.js 3D Viewer
  useEffect(() => {
    if (!containerRef.current) return;

    const viewer = new BMW360Viewer({
      container: containerRef.current,
      initialColor: selectedColorHex,
      initialInterior: selectedInteriorHex
    });
    viewerRef.current = viewer;

    return () => {
      viewer.destroy();
      viewerRef.current = null;
    };
  }, []);

  // Update color when changed
  const handleColorChange = (hex: string) => {
    setSelectedColorHex(hex);
    viewerRef.current?.setPaintColor(hex);
  };

  // Update wheel when changed
  const handleWheelChange = (wheelId: string) => {
    setSelectedWheelId(wheelId);
    if (wheelId.includes('bronze') || wheelId.includes('1000m')) {
      viewerRef.current?.setRimFinish('bronze');
    } else if (wheelId.includes('bicolour') || wheelId.includes('burnished')) {
      viewerRef.current?.setRimFinish('bicolour');
    } else {
      viewerRef.current?.setRimFinish('dark');
    }
  };

  // Update interior trim when changed
  const handleInteriorChange = (hex: string) => {
    setSelectedInteriorHex(hex);
    viewerRef.current?.setInteriorTrim(hex);
  };

  // View preset change
  const handlePresetChange = (preset: 'front34' | 'side' | 'rear34' | 'top' | 'interior') => {
    setCurrentViewMode(preset);
    viewerRef.current?.setPresetView(preset);
  };

  const handleToggleAutoRotate = () => {
    const newState = viewerRef.current?.toggleAutoRotate() ?? !isAutoRotate;
    setIsAutoRotate(newState);
  };

  const handleToggleHeadlights = () => {
    const newState = viewerRef.current?.toggleHeadlights() ?? !isHeadlightsOn;
    setIsHeadlightsOn(newState);
  };

  const handleModelChange = (model: BMWModel) => {
    setActiveModel(model);
    const newColor = model.availableColours[0]?.hex || '#0a4234';
    const newInterior = model.availableInteriors[0]?.colorHex || '#e06612';
    setSelectedColorHex(newColor);
    setSelectedInteriorHex(newInterior);
    viewerRef.current?.setPaintColor(newColor);
    viewerRef.current?.setInteriorTrim(newInterior);
  };

  return (
    <div className="w-full bg-[#080808] text-white pt-20 min-h-screen flex flex-col">
      
      {/* 360 Studio Header Bar */}
      <div className="px-4 sm:px-8 py-3.5 bg-[#0a0a0c] border-b border-[#222225] flex flex-wrap items-center justify-between gap-4 z-20">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#1C69D4] animate-ping"></span>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold">
              PAGE 03 • INTERACTIVE 3D WEBGL ENGINE
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl font-heading font-extrabold text-white flex items-center gap-2">
            <span>BMW 360° Digital Atelier</span>
            <span className="text-xs font-mono font-normal text-neutral-400">
              — {activeModel.name}
            </span>
          </h1>
        </div>

        {/* View Angles Quick Selector */}
        <div className="flex items-center gap-1.5 bg-[#141417] p-1 rounded-xs border border-[#26262a]">
          {(
            [
              { id: 'front34', label: 'Front 3/4' },
              { id: 'side', label: 'Side' },
              { id: 'rear34', label: 'Rear' },
              { id: 'top', label: 'Top' },
              { id: 'interior', label: 'Cockpit 360' }
            ] as const
          ).map((p) => (
            <button
              key={p.id}
              onClick={() => handlePresetChange(p.id)}
              className={`px-3 py-1 rounded-xs text-[11px] font-mono uppercase tracking-wider transition-all ${
                currentViewMode === p.id
                  ? 'bg-[#1C69D4] text-white font-bold shadow-md'
                  : 'text-neutral-400 hover:text-white hover:bg-[#1f1f24]'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main 3D Canvas Area */}
      <div className="relative flex-1 min-h-[500px] h-[55vh] sm:h-[65vh] bg-[#0a0a0c] overflow-hidden select-none">
        
        {/* Three.js Container Mount Point */}
        <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

        {/* Left Floating Interactive Camera Toolbar */}
        <div className="absolute top-4 left-4 z-20 flex flex-col gap-2">
          
          {/* Auto-Rotate Toggle */}
          <button
            onClick={handleToggleAutoRotate}
            title={isAutoRotate ? "Pause Auto-Rotation" : "Start Auto-Rotation"}
            className={`p-2.5 rounded-sm backdrop-blur-md border transition-all ${
              isAutoRotate
                ? 'bg-[#1C69D4]/20 border-[#1C69D4] text-[#1C69D4] shadow-[0_0_15px_rgba(28,105,212,0.4)]'
                : 'bg-black/60 border-white/10 text-neutral-400 hover:text-white'
            }`}
          >
            {isAutoRotate ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          {/* Headlights Toggle */}
          <button
            onClick={handleToggleHeadlights}
            title={isHeadlightsOn ? "Turn Headlights Off" : "Turn Headlights On"}
            className={`p-2.5 rounded-sm backdrop-blur-md border transition-all ${
              isHeadlightsOn
                ? 'bg-amber-500/20 border-amber-500 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'bg-black/60 border-white/10 text-neutral-400 hover:text-white'
            }`}
          >
            <Lightbulb className="w-4 h-4" />
          </button>

          {/* Zoom In */}
          <button
            onClick={() => viewerRef.current?.zoomIn()}
            title="Zoom In"
            className="p-2.5 rounded-sm bg-black/60 hover:bg-[#1C69D4] text-neutral-300 hover:text-white border border-white/10 backdrop-blur-md transition-all"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Zoom Out */}
          <button
            onClick={() => viewerRef.current?.zoomOut()}
            title="Zoom Out"
            className="p-2.5 rounded-sm bg-black/60 hover:bg-[#1C69D4] text-neutral-300 hover:text-white border border-white/10 backdrop-blur-md transition-all"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Reset Camera */}
          <button
            onClick={() => {
              viewerRef.current?.resetCamera();
              setCurrentViewMode('front34');
            }}
            title="Reset Perspective"
            className="p-2.5 rounded-sm bg-black/60 hover:bg-[#1C69D4] text-neutral-300 hover:text-white border border-white/10 backdrop-blur-md transition-all"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Fullscreen */}
          <button
            onClick={() => viewerRef.current?.toggleFullscreen()}
            title="Fullscreen Mode"
            className="p-2.5 rounded-sm bg-black/60 hover:bg-[#1C69D4] text-neutral-300 hover:text-white border border-white/10 backdrop-blur-md transition-all"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        </div>

        {/* Center Drag Instruction Hint */}
        <div className="absolute top-4 right-4 z-20 pointer-events-none hidden sm:flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-mono text-neutral-400">
          <Compass className="w-3.5 h-3.5 text-[#1C69D4] animate-spin" />
          <span>DRAG TO ROTATE • SCROLL TO ZOOM</span>
        </div>

        {/* Bottom Vehicle Quick Stats Overlay */}
        <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-20 bg-black/75 backdrop-blur-md border border-white/10 p-3 sm:p-4 rounded-sm flex items-center gap-6 text-xs max-w-lg">
          <div>
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-mono">
              Power
            </span>
            <span className="font-heading font-extrabold text-white text-sm">
              {activeModel.performance.horsepower} HP
            </span>
          </div>

          <div className="border-l border-white/10 pl-6">
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-mono">
              0–100 km/h
            </span>
            <span className="font-heading font-extrabold text-[#1C69D4] text-sm">
              {activeModel.performance.acceleration0to100}s
            </span>
          </div>

          <div className="border-l border-white/10 pl-6">
            <span className="text-[9px] uppercase tracking-wider text-neutral-400 block font-mono">
              Ex-Showroom
            </span>
            <span className="font-heading font-extrabold text-white text-sm">
              {formatINR(activeModel.startingPriceINR)}
            </span>
          </div>
        </div>

      </div>

      {/* Interactive Customization Studio Drawer (Bottom Panel) */}
      <div className="bg-[#111114] border-t border-[#222225] p-4 sm:p-6 z-20">
        <div className="max-w-7xl mx-auto space-y-4">
          
          {/* Category Tabs (Exterior Colors, Wheels, Interior, Models) */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#222225] pb-3">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('exterior')}
                className={`px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'exterior'
                    ? 'bg-[#1C69D4] text-white font-bold shadow-md'
                    : 'bg-[#18181c] text-neutral-400 hover:text-white hover:bg-[#222227]'
                }`}
              >
                1. Exterior Paint ({activeModel.availableColours.length})
              </button>

              <button
                onClick={() => setActiveTab('wheels')}
                className={`px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'wheels'
                    ? 'bg-[#1C69D4] text-white font-bold shadow-md'
                    : 'bg-[#18181c] text-neutral-400 hover:text-white hover:bg-[#222227]'
                }`}
              >
                2. Wheels & Rims ({activeModel.availableWheels.length})
              </button>

              <button
                onClick={() => {
                  setActiveTab('interior');
                  handlePresetChange('interior');
                }}
                className={`px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'interior'
                    ? 'bg-[#1C69D4] text-white font-bold shadow-md'
                    : 'bg-[#18181c] text-neutral-400 hover:text-white hover:bg-[#222227]'
                }`}
              >
                3. Cockpit Leather ({activeModel.availableInteriors.length})
              </button>

              <button
                onClick={() => setActiveTab('models')}
                className={`px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === 'models'
                    ? 'bg-[#1C69D4] text-white font-bold shadow-md'
                    : 'bg-[#18181c] text-neutral-400 hover:text-white hover:bg-[#222227]'
                }`}
              >
                Switch Model ({BMW_MODELS.length})
              </button>
            </div>

            {/* Direct Pre-Booking Action */}
            <div className="flex gap-2">
              <button
                onClick={() => onConfigureModel(activeModel)}
                className="px-5 py-2 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(28,105,212,0.3)]"
              >
                <Sliders className="w-3.5 h-3.5" />
                <span>Configure This Build</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* TAB 1: EXTERIOR COLOURS */}
          {activeTab === 'exterior' && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {activeModel.availableColours.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleColorChange(c.hex)}
                  className={`flex items-center gap-2.5 px-3 py-2 rounded-xs border transition-all ${
                    selectedColorHex === c.hex
                      ? 'bg-[#1C69D4]/15 border-[#1C69D4] text-white shadow-[0_0_15px_rgba(28,105,212,0.3)]'
                      : 'bg-[#151518] border-[#26262a] text-neutral-300 hover:border-neutral-500'
                  }`}
                >
                  <span
                    className="w-5 h-5 rounded-full border border-white/30 shrink-0 shadow-sm"
                    style={{ backgroundColor: c.hex }}
                  />
                  <div className="text-left">
                    <span className="text-xs font-medium block">{c.name}</span>
                    <span className="text-[10px] text-neutral-500 font-mono">{c.type}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* TAB 2: WHEELS */}
          {activeTab === 'wheels' && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {activeModel.availableWheels.map((w) => (
                <button
                  key={w.id}
                  onClick={() => handleWheelChange(w.id)}
                  className={`px-4 py-2 rounded-xs border transition-all text-left ${
                    selectedWheelId === w.id
                      ? 'bg-[#1C69D4]/15 border-[#1C69D4] text-white shadow-[0_0_15px_rgba(28,105,212,0.3)]'
                      : 'bg-[#151518] border-[#26262a] text-neutral-300 hover:border-neutral-500'
                  }`}
                >
                  <span className="text-xs font-bold block">{w.name}</span>
                  <span className="text-[10px] text-neutral-400 font-mono">{w.finish} • {w.sizeInches} Inch</span>
                </button>
              ))}
            </div>
          )}

          {/* TAB 3: INTERIOR UPHOLSTERY */}
          {activeTab === 'interior' && (
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {activeModel.availableInteriors.map((int) => (
                <button
                  key={int.id}
                  onClick={() => handleInteriorChange(int.colorHex)}
                  className={`flex items-center gap-2.5 px-3.5 py-2 rounded-xs border transition-all ${
                    selectedInteriorHex === int.colorHex
                      ? 'bg-[#1C69D4]/15 border-[#1C69D4] text-white shadow-[0_0_15px_rgba(28,105,212,0.3)]'
                      : 'bg-[#151518] border-[#26262a] text-neutral-300 hover:border-neutral-500'
                  }`}
                >
                  <span
                    className="w-5 h-5 rounded-full border border-white/30 shrink-0"
                    style={{ backgroundColor: int.colorHex }}
                  />
                  <div className="text-left">
                    <span className="text-xs font-medium block">{int.name}</span>
                    <span className="text-[10px] text-neutral-400 font-mono">{int.trimFinish}</span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* TAB 4: SWITCH MODEL */}
          {activeTab === 'models' && (
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 pt-2">
              {BMW_MODELS.map((m) => (
                <button
                  key={m.id}
                  onClick={() => handleModelChange(m)}
                  className={`p-2.5 rounded-xs border transition-all text-left flex flex-col justify-between ${
                    activeModel.id === m.id
                      ? 'bg-[#1C69D4]/20 border-[#1C69D4] text-white shadow-md'
                      : 'bg-[#151518] border-[#26262a] text-neutral-300 hover:border-neutral-500'
                  }`}
                >
                  <span className="text-[9px] uppercase font-mono text-[#1C69D4]">{m.category}</span>
                  <span className="text-xs font-bold mt-1 line-clamp-1">{m.name}</span>
                  <span className="text-[10px] text-neutral-400 mt-1 font-mono">{formatINR(m.startingPriceINR)}</span>
                </button>
              ))}
            </div>
          )}

        </div>
      </div>

    </div>
  );
};
