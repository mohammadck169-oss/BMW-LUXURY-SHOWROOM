import React, { useState } from 'react';
import { BMW_MODELS } from '../data/bmwModels';
import { BMWModel, VehicleCategory, FuelType } from '../types/bmw';
import { VehicleCard } from '../components/VehicleCard';
import { VehicleDetailsModal } from '../components/VehicleDetailsModal';
import { Search, Filter, GitCompare, SlidersHorizontal, Sparkles } from 'lucide-react';

interface ModelsPageProps {
  onNavigate: (page: string) => void;
  onSelect360: (model: BMWModel) => void;
  onConfigureModel: (model: BMWModel) => void;
  compareList: string[];
  onToggleCompare: (modelId: string) => void;
  onOpenCompare: () => void;
  onOpenEnquiry: (modelName?: string) => void;
}

export const ModelsPage: React.FC<ModelsPageProps> = ({
  onNavigate,
  onSelect360,
  onConfigureModel,
  compareList,
  onToggleCompare,
  onOpenCompare,
  onOpenEnquiry
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [selectedFuelType, setSelectedFuelType] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'power-desc'>('featured');
  
  // Modal state
  const [activeModalModel, setActiveModalModel] = useState<BMWModel | null>(null);

  const categories: { id: string; label: string }[] = [
    { id: 'ALL', label: 'All Models' },
    { id: 'Sedan', label: 'Sedan' },
    { id: 'SUV / SAV', label: 'SUV / SAV' },
    { id: 'Electric', label: 'Electric' },
    { id: 'M Performance', label: 'M Performance' }
  ];

  const fuelTypes: { id: string; label: string }[] = [
    { id: 'ALL', label: 'All Powertrains' },
    { id: 'Petrol', label: 'Petrol' },
    { id: 'Diesel', label: 'Diesel' },
    { id: 'Electric', label: 'Pure Electric' }
  ];

  // Filtering logic
  const filteredModels = BMW_MODELS.filter((model) => {
    const matchesCategory = selectedCategory === 'ALL' || model.category === selectedCategory;
    const matchesFuel = selectedFuelType === 'ALL' || model.fuelType === selectedFuelType;
    const matchesSearch = 
      model.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.series.toLowerCase().includes(searchQuery.toLowerCase()) ||
      model.variants.some(v => v.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesFuel && matchesSearch;
  });

  // Sorting logic
  const sortedModels = [...filteredModels].sort((a, b) => {
    if (sortBy === 'price-asc') return a.startingPriceINR - b.startingPriceINR;
    if (sortBy === 'price-desc') return b.startingPriceINR - a.startingPriceINR;
    if (sortBy === 'power-desc') return b.performance.horsepower - a.performance.horsepower;
    return 0; // featured default order
  });

  return (
    <div className="w-full bg-[#080808] text-white pt-24 pb-20">
      
      {/* Page Header */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#292929] pb-8 gap-4">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#1C69D4] font-bold block mb-2">
              PAGE 04 • DYNAMIC VEHICLE FLEET & ATELIER
            </span>
            <h1 className="text-4xl sm:text-6xl font-heading font-black text-white uppercase tracking-tight">
              Explore BMW Models
            </h1>
            <p className="text-neutral-400 text-sm mt-3 font-light max-w-2xl">
              Verified specifications, Indian ex-showroom pricing, and interactive customization for BMW Sedan, SAV, Pure Electric, and BMW M portfolios.
            </p>
          </div>

          {/* Quick Floating Compare Pill */}
          {compareList.length > 0 && (
            <div className="flex items-center gap-3">
              <button
                onClick={onOpenCompare}
                className="px-5 py-2.5 rounded-xs bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(28,105,212,0.4)] transition-all"
              >
                <GitCompare className="w-4 h-4" />
                <span>Compare {compareList.length} Vehicles</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-10 space-y-4">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-[#222225] pb-3">
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

        {/* Search, Fuel filter, and Sort */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-[#111114] p-3 rounded-xs border border-[#222225]">
          
          {/* Search Box */}
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search model, series, engine..."
              className="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] pl-9 pr-3 py-2 rounded-xs text-xs text-white outline-none"
            />
          </div>

          {/* Powertrain Filter */}
          <div>
            <select
              value={selectedFuelType}
              onChange={(e) => setSelectedFuelType(e.target.value)}
              className="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-xs text-white outline-none font-mono"
            >
              {fuelTypes.map((f) => (
                <option key={f.id} value={f.id}>
                  Powertrain: {f.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sorting */}
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="w-full bg-[#18181c] border border-[#2a2a30] focus:border-[#1C69D4] px-3 py-2 rounded-xs text-xs text-white outline-none font-mono"
            >
              <option value="featured">Sort by: Curated Lineup</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="power-desc">Performance: Highest Horsepower</option>
            </select>
          </div>

          {/* Result Counter */}
          <div className="flex items-center justify-between sm:justify-end px-2 text-xs font-mono text-neutral-400">
            <span>Showing {sortedModels.length} of {BMW_MODELS.length} Models</span>
          </div>

        </div>

      </section>

      {/* Dynamic Model Cards Grid */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {sortedModels.length === 0 ? (
          <div className="text-center py-20 bg-[#111114] border border-[#222225] rounded-sm space-y-3">
            <p className="text-neutral-400 text-sm">
              No BMW models found matching your current filter criteria.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSelectedFuelType('ALL');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xs bg-[#1C69D4] text-white text-xs font-mono uppercase"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedModels.map((model) => (
              <VehicleCard
                key={model.id}
                model={model}
                isCompared={compareList.includes(model.id)}
                onToggleCompare={onToggleCompare}
                onViewDetails={(m) => setActiveModalModel(m)}
                onSelect360={onSelect360}
                onConfigure={onConfigureModel}
              />
            ))}
          </div>
        )}
      </section>

      {/* Individual Vehicle Details Modal */}
      <VehicleDetailsModal
        model={activeModalModel}
        onClose={() => setActiveModalModel(null)}
        onConfigure={onConfigureModel}
        onSelect360={onSelect360}
        onOpenEnquiry={(name) => onOpenEnquiry(name)}
      />

    </div>
  );
};
