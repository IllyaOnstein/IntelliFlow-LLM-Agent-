/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ReactFlowDemo from './components/ReactFlowDemo';
import Safety from './components/Safety';
import ContentVisual from './components/ContentVisual';
import CoreCapabilities from './components/CoreCapabilities';
import Alignment from './components/Alignment';
import Vision from './components/Vision';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import Docs from './pages/Docs';
import { LanguageProvider } from './contexts/LanguageContext';
import { ModalProvider, useModals } from './contexts/ModalContext';
import LoginModal from './components/LoginModal';
import WaitlistModal from './components/WaitlistModal';
import StealthModal from './components/StealthModal';
import PrivacyModal from './components/PrivacyModal';

function GlobalModals() {
  const { 
    isWaitlistModalOpen, closeWaitlistModal, waitlistTitle,
    isStealthModalOpen, closeStealthModal,
    isPrivacyModalOpen, closePrivacyModal
  } = useModals();
  return (
    <>
      <LoginModal />
      <WaitlistModal 
        isOpen={isWaitlistModalOpen} 
        onClose={closeWaitlistModal} 
        onSuccess={() => {}} 
        title={waitlistTitle}
      />
      <StealthModal isOpen={isStealthModalOpen} onClose={closeStealthModal} />
      <PrivacyModal isOpen={isPrivacyModalOpen} onClose={closePrivacyModal} />
    </>
  );
}

function Home() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Hero />
      <ReactFlowDemo />
      <Features />
      <ContentVisual />
      <CoreCapabilities />
      <Alignment />
      <Safety />
      <Vision />
      <Pricing />
    </motion.main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <Docs />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ModalProvider>
        <BrowserRouter>
          <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary">
            <Navbar />
            <AnimatedRoutes />
            <Footer />
            <GlobalModals />
          </div>
        </BrowserRouter>
      </ModalProvider>
    </LanguageProvider>
  );
}
