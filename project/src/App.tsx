import { motion, AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import VoiceGenerator from './components/VoiceGenerator';
import Features from './components/Features';
import About from './components/About';
import Tutorials from './components/Tutorials';
import UseCases from './components/UseCases';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Toast from './components/Toast';
import FloatingShapes from './components/FloatingShapes';
import { useEffect } from 'react';
import { showInfo } from './utils/errorHandler';

function App() {
  useEffect(() => {
    showInfo('Generated audio history is stored until page refresh');
  }, []);

  return (
    <div className="relative min-h-screen bg-white/95 overflow-hidden">
      <FloatingShapes />
      <Header />
      <Toast />
      
      <AnimatePresence>
        <main>
          <Hero />
          <VoiceGenerator />
          <Features />
          <Tutorials />
          <About />
          <UseCases />
          <FAQ />
          <Contact />
        </main>
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default App;