import React, { useEffect } from 'react';
import { GalleryItem } from '../types/bmw';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigateItem: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onNavigateItem
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (!item) return;
      const currentIndex = items.findIndex(i => i.id === item.id);
      if (e.key === 'ArrowRight') {
        const next = items[(currentIndex + 1) % items.length];
        onNavigateItem(next);
      } else if (e.key === 'ArrowLeft') {
        const prev = items[(currentIndex - 1 + items.length) % items.length];
        onNavigateItem(prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [item, items, onClose, onNavigateItem]);

  if (!item) return null;

  const currentIndex = items.findIndex(i => i.id === item.id);
  const prevItem = items[(currentIndex - 1 + items.length) % items.length];
  const nextItem = items[(currentIndex + 1) % items.length];

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col justify-between animate-fadeIn">
      
      {/* Top Header */}
      <div className="p-4 sm:p-6 flex items-center justify-between border-b border-white/10 z-10">
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold">
            EDITORIAL ARCHIVE • {currentIndex + 1} OF {items.length}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-xs uppercase tracking-wider text-neutral-300 font-mono">
            {item.category}
          </span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Center Image Display with Prev/Next buttons */}
      <div className="relative flex-1 flex items-center justify-center p-4 sm:p-8 min-h-0">
        
        {/* Prev Arrow */}
        <button
          onClick={() => onNavigateItem(prevItem)}
          className="absolute left-4 sm:left-8 p-3 rounded-full bg-black/60 hover:bg-[#1C69D4] text-white transition-all backdrop-blur-md z-10 border border-white/10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* High-res Image */}
        <div className="max-w-5xl max-h-full flex items-center justify-center">
          <img
            src={item.image}
            alt={item.title}
            className="max-h-[75vh] w-auto object-contain rounded-xs shadow-2xl border border-white/10 animate-scaleUp"
          />
        </div>

        {/* Next Arrow */}
        <button
          onClick={() => onNavigateItem(nextItem)}
          className="absolute right-4 sm:right-8 p-3 rounded-full bg-black/60 hover:bg-[#1C69D4] text-white transition-all backdrop-blur-md z-10 border border-white/10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Metadata & Caption Bar */}
      <div className="p-6 bg-[#0a0a0c] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs z-10">
        <div>
          <h3 className="text-white font-heading font-bold text-base mb-1">
            {item.title}
          </h3>
          <p className="text-neutral-400 max-w-2xl text-xs">
            {item.caption}
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-neutral-400 font-mono text-xs">
          <MapPin className="w-3.5 h-3.5 text-[#1C69D4]" />
          <span>{item.location}</span>
        </div>
      </div>

    </div>
  );
};
