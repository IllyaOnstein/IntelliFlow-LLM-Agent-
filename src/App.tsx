/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary">
        <Navbar />
        <main>
          <Hero />
          <ReactFlowDemo />
          <Features />
          <ContentVisual />
          <CoreCapabilities />
          <Alignment />
          <Safety />
          <Vision />
          <Pricing />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
