import React, { useState } from 'react';
import { BMWStore } from '../lib/store';
import { PreBookingEnquiry, ServiceEnquiry } from '../types/bmw';
import { BMW_MODELS } from '../data/bmwModels';
import { formatINR, formatFullINR } from '../data/pricing';
import { X, Lock, Unlock, Shield, Download, Search, CheckCircle, Clock } from 'lucide-react';

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ isOpen, onClose }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);

  const [activeTab, setActiveTab] = useState<'prebookings' | 'services' | 'catalogue'>('prebookings');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('ALL');

  const [preBookings, setPreBookings] = useState<PreBookingEnquiry[]>(() => BMWStore.getPreBookings());
  const [services, setServices] = useState<ServiceEnquiry[]>(() => BMWStore.getServiceEnquiries());

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Authorized showroom passcode
    if (passcode.trim().toLowerCase() === 'bmw2026' || passcode.trim() === '1234') {
      setIsAuthenticated(true);
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const updateBookingStatus = (id: string, newStatus: PreBookingEnquiry['status']) => {
    BMWStore.updatePreBookingStatus(id, newStatus);
    setPreBookings(BMWStore.getPreBookings());
  };

  const totalPipelineINR = preBookings.reduce((sum, item) => sum + (item.estimatedOnRoadPriceINR || 0), 0);

  const filteredPreBookings = preBookings.filter(item => {
    const matchesSearch = 
      item.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.referenceNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.selectedModelName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'ALL' || item.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const exportData = () => {
    const dataStr = JSON.stringify({ preBookings, services }, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `BMW_Showroom_Enquiries_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-6xl bg-[#111114] border border-[#292929] rounded-sm shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header */}
        <div className="px-6 py-4 border-b border-[#222225] flex items-center justify-between bg-[#0a0a0c]">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-[#1C69D4]" />
            <h2 className="text-lg font-heading font-extrabold text-white">
              BMW Showroom Directors Portal — India
            </h2>
            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded-full bg-[#1C69D4]/20 text-[#1C69D4] border border-[#1C69D4]/30">
              Confidential Client Registry
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-[#18181b] hover:bg-[#25252a] text-neutral-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1 overflow-y-auto">
          {!isAuthenticated ? (
            /* PIN / Password Screen */
            <div className="max-w-md mx-auto py-12 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#161619] border border-[#292929] text-[#1C69D4] flex items-center justify-center mx-auto shadow-lg">
                <Lock className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-xl font-heading font-bold text-white">
                  Showroom Executive Authentication
                </h3>
                <p className="text-neutral-400 text-xs mt-1">
                  Restricted portal for BMW General Managers, Client Advisors, and Service Directors.
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    value={passcode}
                    onChange={(e) => setPasscode(e.target.value)}
                    placeholder="Enter Passcode (default: bmw2026)"
                    className="w-full bg-[#161619] border border-[#292929] focus:border-[#1C69D4] px-4 py-2.5 rounded-xs text-white text-center text-sm outline-none font-mono"
                  />
                  {authError && (
                    <p className="text-red-400 text-xs mt-1">Incorrect passcode. Hint: bmw2026</p>
                  )}
                </div>

                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 py-2.5 bg-[#1C69D4] hover:bg-[#1656b0] text-white text-xs font-bold uppercase tracking-wider rounded-xs transition-all"
                  >
                    Unlock Portal
                  </button>
                  <button
                    type="button"
                    onClick={() => { setPasscode('bmw2026'); setIsAuthenticated(true); }}
                    className="px-4 py-2.5 bg-[#1f1f23] hover:bg-[#28282e] text-neutral-300 text-xs uppercase font-mono rounded-xs"
                  >
                    Quick Demo Unlock
                  </button>
                </div>
              </form>
            </div>
          ) : (
            /* Authenticated Portal */
            <div className="space-y-6">
              
              {/* Executive KPI Overview Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 bg-[#151518] rounded-xs border border-[#26262c]">
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block">Total Pre-Bookings</span>
                  <div className="text-2xl font-heading font-extrabold text-white mt-1">
                    {preBookings.length}
                  </div>
                  <span className="text-[11px] text-[#1C69D4]">Active Allocations</span>
                </div>

                <div className="p-4 bg-[#151518] rounded-xs border border-[#26262c]">
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block">Pipeline Order Value</span>
                  <div className="text-2xl font-heading font-extrabold text-white mt-1">
                    {formatINR(totalPipelineINR)}
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono">Gross On-Road</span>
                </div>

                <div className="p-4 bg-[#151518] rounded-xs border border-[#26262c]">
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block">Service Appointments</span>
                  <div className="text-2xl font-heading font-extrabold text-white mt-1">
                    {services.length}
                  </div>
                  <span className="text-[11px] text-green-400">CBS Scheduled</span>
                </div>

                <div className="p-4 bg-[#151518] rounded-xs border border-[#26262c] flex flex-col justify-between">
                  <span className="text-[10px] uppercase font-mono text-neutral-400 block">Data Actions</span>
                  <button
                    onClick={exportData}
                    className="mt-2 py-2 px-3 rounded-xs bg-[#1C69D4]/20 hover:bg-[#1C69D4] border border-[#1C69D4] text-white text-xs font-mono flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Export JSON Archive</span>
                  </button>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-[#222225] gap-4">
                <button
                  onClick={() => setActiveTab('prebookings')}
                  className={`py-2 px-1 text-xs uppercase font-mono tracking-wider border-b-2 transition-all ${
                    activeTab === 'prebookings'
                      ? 'border-[#1C69D4] text-white font-bold'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  Pre-Bookings ({preBookings.length})
                </button>
                <button
                  onClick={() => setActiveTab('services')}
                  className={`py-2 px-1 text-xs uppercase font-mono tracking-wider border-b-2 transition-all ${
                    activeTab === 'services'
                      ? 'border-[#1C69D4] text-white font-bold'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  Service Requests ({services.length})
                </button>
                <button
                  onClick={() => setActiveTab('catalogue')}
                  className={`py-2 px-1 text-xs uppercase font-mono tracking-wider border-b-2 transition-all ${
                    activeTab === 'catalogue'
                      ? 'border-[#1C69D4] text-white font-bold'
                      : 'border-transparent text-neutral-400 hover:text-white'
                  }`}
                >
                  Vehicle Master Registry ({BMW_MODELS.length})
                </button>
              </div>

              {/* TAB 1: Pre-Bookings */}
              {activeTab === 'prebookings' && (
                <div className="space-y-4">
                  {/* Search and Filter */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-between">
                    <div className="relative flex-1 max-w-sm">
                      <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
                      <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search by client, token, model..."
                        className="w-full bg-[#151518] border border-[#26262c] pl-9 pr-3 py-2 rounded-xs text-xs text-white outline-none focus:border-[#1C69D4]"
                      />
                    </div>

                    <div className="flex gap-2">
                      {['ALL', 'New', 'Test Drive Scheduled', 'Allocation Confirmed'].map(st => (
                        <button
                          key={st}
                          onClick={() => setStatusFilter(st)}
                          className={`px-3 py-1.5 rounded-xs text-[11px] font-mono transition-all ${
                            statusFilter === st
                              ? 'bg-[#1C69D4] text-white font-bold'
                              : 'bg-[#151518] text-neutral-400 hover:text-white border border-[#26262c]'
                          }`}
                        >
                          {st}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Pre-Bookings List */}
                  <div className="space-y-3">
                    {filteredPreBookings.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 bg-[#151518] rounded-xs border border-[#26262c] flex flex-col md:flex-row md:items-center justify-between gap-4"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-[#1C69D4]">
                              {item.referenceNumber}
                            </span>
                            <span className="text-[10px] text-neutral-500 font-mono">
                              {new Date(item.submittedAt).toLocaleDateString()}
                            </span>
                            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-xs font-semibold ${
                              item.status === 'Allocation Confirmed' ? 'bg-green-950 text-green-300 border border-green-800' :
                              item.status === 'Test Drive Scheduled' ? 'bg-blue-950 text-blue-300 border border-blue-800' :
                              'bg-amber-950 text-amber-300 border border-amber-800'
                            }`}>
                              {item.status}
                            </span>
                          </div>

                          <div className="text-white font-heading font-bold text-sm">
                            {item.customerName} • <span className="text-neutral-400 font-normal text-xs">{item.mobileNumber}</span> • <span className="text-neutral-400 font-normal text-xs">{item.emailAddress}</span>
                          </div>

                          <div className="text-xs text-neutral-300">
                            Model: <strong className="text-white">{item.selectedModelName}</strong> ({item.selectedVariantName})
                            {item.selectedColour && ` • Paint: ${item.selectedColour}`}
                          </div>

                          <div className="text-[11px] text-neutral-500 font-mono">
                            Showroom: {item.preferredShowroom} • Fin: {item.preferredFinancing} • Est. On-Road: {formatINR(item.estimatedOnRoadPriceINR)}
                          </div>
                          {item.additionalMessage && (
                            <p className="text-[11px] text-neutral-400 italic mt-1 bg-black/40 p-2 rounded-xs">
                              "{item.additionalMessage}"
                            </p>
                          )}
                        </div>

                        {/* Status Change Selector */}
                        <div className="shrink-0 flex items-center gap-2">
                          <select
                            value={item.status}
                            onChange={(e) => updateBookingStatus(item.id, e.target.value as PreBookingEnquiry['status'])}
                            className="bg-[#0e0e11] border border-[#2a2a30] text-xs text-white px-3 py-1.5 rounded-xs outline-none focus:border-[#1C69D4]"
                          >
                            <option value="New">Status: New</option>
                            <option value="Contacted">Status: Contacted</option>
                            <option value="Test Drive Scheduled">Status: Test Drive Scheduled</option>
                            <option value="Allocation Confirmed">Status: Allocation Confirmed</option>
                          </select>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB 2: Service Appointments */}
              {activeTab === 'services' && (
                <div className="space-y-3">
                  {services.map((srv) => (
                    <div
                      key={srv.id}
                      className="p-4 bg-[#151518] rounded-xs border border-[#26262c] flex flex-col md:flex-row md:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-[#1C69D4]">{srv.referenceNumber}</span>
                          <span className="text-[10px] text-neutral-500 font-mono">{srv.preferredDate} at {srv.preferredTime}</span>
                          <span className="text-[10px] bg-green-950 text-green-300 px-2 py-0.5 rounded-xs">{srv.status}</span>
                        </div>
                        <h4 className="text-white font-heading font-bold text-sm mt-1">{srv.customerName} ({srv.mobileNumber})</h4>
                        <div className="text-xs text-neutral-300 mt-0.5">{srv.serviceType}</div>
                        <div className="text-[11px] text-neutral-500 mt-1">Car: {srv.vehicleModel} • Reg: {srv.registrationNumber || 'N/A'} • Showroom: {srv.preferredShowroom}</div>
                        {srv.additionalNotes && (
                          <div className="text-[11px] text-neutral-400 italic mt-1 bg-black/40 p-2 rounded-xs">"{srv.additionalNotes}"</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB 3: Vehicle Master Catalogue */}
              {activeTab === 'catalogue' && (
                <div className="space-y-3">
                  <div className="text-xs text-neutral-400">
                    Centralized vehicle database. All model specifications and prices in INR (₹) are loaded dynamically.
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {BMW_MODELS.map((m) => (
                      <div key={m.id} className="p-3 bg-[#151518] rounded-xs border border-[#26262c] flex gap-3">
                        <img src={m.heroImage} alt={m.name} className="w-20 h-16 object-cover rounded-xs" />
                        <div className="flex-1">
                          <span className="text-[9px] uppercase font-mono text-[#1C69D4]">{m.category}</span>
                          <h4 className="font-heading font-bold text-white text-xs">{m.name}</h4>
                          <span className="text-xs font-bold text-neutral-300 block">{formatINR(m.startingPriceINR)}</span>
                          <span className="text-[10px] text-neutral-500">{m.variants.length} Variants • {m.availableColours.length} Colours</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#222225] bg-[#0a0a0c] flex items-center justify-between text-xs text-neutral-500">
          <span>BMW Group India Executive Dealer Portal</span>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="hover:text-white transition-colors"
          >
            Lock Portal
          </button>
        </div>

      </div>
    </div>
  );
};
