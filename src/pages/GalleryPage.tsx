import React, { useState } from 'react';
import { BMW_GALLERY_ITEMS } from '../data/gallery';
import { BMW_TESTIMONIALS } from '../data/testimonials';
import { GalleryItem } from '../types/bmw';
import { Lightbox } from '../components/Lightbox';
import { Star, MapPin, Maximize2, ShieldCheck, ArrowUpRight, Camera } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
  onOpenEnquiry: (modelName?: string) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({
  onNavigate,
  onOpenEnquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'ALL', label: 'Complete Archive' },
    { id: 'deliveries', label: 'Ceremonial Deliveries' },
    { id: 'lifestyle', label: 'BMW Lifestyle' },
    { id: 'detailing', label: 'Atelier Detailing & PPF' },
    { id: 'm-performance', label: 'BMW M Track & Power' },
    { id: 'showroom', label: 'Showroom Interior & Architecture' }
  ];

  const filteredItems = BMW_GALLERY_ITEMS.filter((item) => {
    return selectedCategory === 'ALL' || item.category === selectedCategory;
  });

  return (
    <div className="w-full bg-[#080808] text-white pt-24 pb-20">
      
      {/* Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-12">
        <div className="border-b border-[#292929] pb-8">
          <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">
            PAGE 06 • EDITORIAL VISUAL ARCHIVE & OWNER STORIES
          </span>
          <h1 className="text-4xl sm:text-6xl font-heading font-black text-white uppercase tracking-tight">
            Gallery & Customer Stories
          </h1>
          <p className="text-neutral-400 text-sm mt-3 font-light max-w-2xl leading-relaxed">
            A photographic anthology of milestone vehicle handovers, track expeditions across India, clean-room paint protection detailing, and firsthand stories from BMW owners.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap gap-2 pt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xs text-xs font-mono uppercase tracking-wider transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#1C69D4] text-white font-bold shadow-md'
                  : 'bg-[#141417] text-neutral-400 hover:text-white hover:bg-[#1f1f24] border border-[#26262a]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Editorial Visual Gallery Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className="group relative bg-[#141417] border border-[#242428] rounded-sm overflow-hidden cursor-pointer shadow-lg transition-all duration-300 hover:border-[#1C69D4]"
            >
              <div className={`overflow-hidden bg-black ${item.aspect === 'portrait' ? 'aspect-[3/4]' : item.aspect === 'square' ? 'aspect-square' : 'aspect-[16/10]'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
              </div>

              {/* Hover Dark Overlay & Caption Box */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5">
                <div className="flex justify-between items-start">
                  <span className="text-[9px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-xs bg-black/70 border border-white/10 text-white">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 group-hover:bg-[#1C69D4] text-white flex items-center justify-center transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-white font-heading font-bold text-base leading-snug group-hover:text-[#1C69D4] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-neutral-300 text-xs mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                  <div className="flex items-center gap-1.5 text-[10px] text-neutral-400 font-mono mt-2">
                    <MapPin className="w-3 h-3 text-[#1C69D4]" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Customer Testimonials & Verified Stories Section */}
      <section className="py-20 bg-[#0d0d10] border-t border-[#292929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-1">
              PROVEN PATRONAGE
            </span>
            <h2 className="text-3xl sm:text-5xl font-heading font-black text-white uppercase">
              Customer Testimonials & Experiences
            </h2>
            <p className="text-xs text-neutral-400 mt-2">
              Verified reflections from executives, entrepreneurs, and motorsport enthusiasts across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BMW_TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="p-6 bg-[#141417] border border-[#26262a] rounded-sm flex flex-col justify-between hover:border-[#1C69D4]/60 transition-all"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-[#1C69D4]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>

                    {t.verifiedBuyer && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-green-400 bg-green-950/60 px-2 py-0.5 rounded-xs border border-green-800">
                        <ShieldCheck className="w-3 h-3" />
                        <span>Verified Owner</span>
                      </span>
                    )}
                  </div>

                  <p className="text-neutral-300 text-xs leading-relaxed italic">
                    "{t.review}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#222226]">
                  <img
                    src={t.customerPhoto}
                    alt={t.customerName}
                    className="w-12 h-12 rounded-full object-cover border border-[#1C69D4]/50"
                  />
                  <div>
                    <h4 className="text-white text-sm font-bold font-heading">{t.customerName}</h4>
                    <div className="text-xs text-[#1C69D4] font-mono">{t.vehicleModel}</div>
                    <div className="text-[10px] text-neutral-500">{t.city} • Handover {t.deliveryYear}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Showroom Contact & Private Viewing CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#141417] to-[#111114] border border-[#292929] rounded-sm p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-2 max-w-xl text-center md:text-left">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block">
              PRIVATE ATELIER ACCESS
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase">
              Schedule Your Private Showroom Reception
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Step into our flagship ateliers across Mumbai, New Delhi, Bengaluru, and Kochi for private consultation and doorstep test drives.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onOpenEnquiry('Gallery Consultation')}
              className="px-6 py-3 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg"
            >
              Book Private Consultation
            </button>
            <button
              onClick={() => onNavigate('models')}
              className="px-6 py-3 rounded-xs bg-[#1a1a1e] hover:bg-[#25252b] text-neutral-300 hover:text-white text-xs font-mono uppercase tracking-wider border border-[#2e2e36] transition-colors"
            >
              Explore Models
            </button>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <Lightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onNavigateItem={(item) => setActiveLightboxItem(item)}
      />

    </div>
  );
};
