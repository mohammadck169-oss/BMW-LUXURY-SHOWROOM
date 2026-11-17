import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { Experience360Page } from './pages/Experience360Page';
import { ModelsPage } from './pages/ModelsPage';
import { ConfiguratorPage } from './pages/ConfiguratorPage';
import { GalleryPage } from './pages/GalleryPage';

import { ComparisonDrawer } from './components/ComparisonDrawer';
import { QuickEnquiryModal } from './components/QuickEnquiryModal';
import { AdminPortal } from './components/AdminPortal';

import { BMWModel } from './types/bmw';
import { BMW_MODELS } from './data/bmwModels';
import { BMWStore } from './lib/store';

export const App: React.FC = () => {
  // Hash-based internal routing
  const getInitialPage = () => {
    const hash = window.location.hash.replace('#', '').trim();
    if (['home', 'services', '360', 'models', 'configurator', 'gallery'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [activePage, setActivePage] = useState<string>(getInitialPage);
  const [selectedModel, setSelectedModel] = useState<BMWModel>(BMW_MODELS[0]);
  
  // Modals & Overlays
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryModelName, setEnquiryModelName] = useState<string>('');

  // Compare List
  const [compareList, setCompareList] = useState<string[]>(() => BMWStore.getCompareList());

  // Listen to hash changes (back/forward browser buttons)
  useEffect(() => {
    const handleHashChange = () => {
      const page = window.location.hash.replace('#', '').trim();
      if (['home', 'services', '360', 'models', 'configurator', 'gallery'].includes(page)) {
        setActivePage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    setActivePage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleCompare = (modelId: string) => {
    const updated = BMWStore.toggleCompare(modelId);
    setCompareList([...updated]);
  };

  const handleRemoveCompare = (modelId: string) => {
    const updated = BMWStore.toggleCompare(modelId);
    setCompareList([...updated]);
  };

  const handleConfigureModel = (model: BMWModel) => {
    setSelectedModel(model);
    navigateTo('configurator');
  };

  const handleSelect360 = (model: BMWModel) => {
    setSelectedModel(model);
    navigateTo('360');
  };

  const handleOpenEnquiryModal = (modelName?: string) => {
    setEnquiryModelName(modelName || selectedModel.name);
    setIsEnquiryOpen(true);
  };

  const comparedModels = BMW_MODELS.filter(m => compareList.includes(m.id));

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col selection:bg-[#1C69D4] selection:text-white">
      
      {/* 1. Global Navigation Bar */}
      <Navbar
        activePage={activePage}
        onNavigate={navigateTo}
        compareCount={compareList.length}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenEnquiry={() => handleOpenEnquiryModal()}
      />

      {/* Main Page Body (6 Pages) */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            onNavigate={navigateTo}
            onSelectModel={(m) => { setSelectedModel(m); navigateTo('models'); }}
            onConfigureModel={handleConfigureModel}
            onSelect360={handleSelect360}
            onOpenEnquiry={handleOpenEnquiryModal}
          />
        )}

        {activePage === 'services' && (
          <ServicesPage
            onNavigate={navigateTo}
            onOpenQuickEnquiry={handleOpenEnquiryModal}
          />
        )}

        {activePage === '360' && (
          <Experience360Page
            key={selectedModel.id}
            initialModel={selectedModel}
            onNavigate={navigateTo}
            onConfigureModel={handleConfigureModel}
            onOpenEnquiry={handleOpenEnquiryModal}
          />
        )}

        {activePage === 'models' && (
          <ModelsPage
            onNavigate={navigateTo}
            onSelect360={handleSelect360}
            onConfigureModel={handleConfigureModel}
            compareList={compareList}
            onToggleCompare={handleToggleCompare}
            onOpenCompare={() => setIsCompareOpen(true)}
            onOpenEnquiry={handleOpenEnquiryModal}
          />
        )}

        {activePage === 'configurator' && (
          <ConfiguratorPage
            key={selectedModel.id}
            initialModel={selectedModel}
            onNavigate={navigateTo}
            onSelect360={handleSelect360}
            onOpenAdmin={() => setIsAdminOpen(true)}
          />
        )}

        {activePage === 'gallery' && (
          <GalleryPage
            onNavigate={navigateTo}
            onOpenEnquiry={handleOpenEnquiryModal}
          />
        )}
      </main>

      {/* Global Vehicle Comparison Drawer */}
      <ComparisonDrawer
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        comparedModels={comparedModels}
        onRemoveModel={handleRemoveCompare}
        onConfigure={(m) => { setIsCompareOpen(false); handleConfigureModel(m); }}
        onSelect360={(m) => { setIsCompareOpen(false); handleSelect360(m); }}
      />

      {/* Global Test Drive & Consultation Booking Modal */}
      <QuickEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
        initialModelName={enquiryModelName}
      />

      {/* Showroom Executive Portal Modal */}
      <AdminPortal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* Global Luxury Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenEnquiry={() => handleOpenEnquiryModal()}
      />

    </div>
  );
};

export default App;
