import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import FullScreenMenu from './components/FullScreenMenu';
import ContactModal from './components/ContactModal';
import Home from './pages/Home';
import ExperienceDetail from './pages/ExperienceDetail';
import PrivacyPolicy from './pages/PrivacyPolicy';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showHeroAnimation, setShowHeroAnimation] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait" onExitComplete={() => setShowHeroAnimation(true)}>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{
              y: "-100%",
              transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1] // Premium ease
              }
            }}
            className="fixed inset-0 z-[300] bg-dark flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              className="text-center"
            >
              <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-light mx-auto"
              >
                <motion.path
                  d="M20 80 L50 20 L80 80 L65 80 L50 50 L35 80 Z"
                  fill="currentColor"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
              </svg>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5, ease: 'easeInOut' }}
                className="h-px bg-light/30 mt-6 mx-auto"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Navigation */}
      <Navigation onMenuOpen={() => setIsMenuOpen(true)} />

      {/* Full Screen Menu */}
      <FullScreenMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Contact Modal */}
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Main Content with Page Transitions */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home startHeroAnimation={showHeroAnimation} onOpenContact={() => setIsContactOpen(true)} />} />
          <Route path="/experience/:slug" element={<ExperienceDetail />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </AnimatePresence>

      {/* Back to Top Button */}
      <BackToTop />
    </>
  );
}

// Back to Top Component
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-dark text-light flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 z-40"
          aria-label="Back to top"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M18 15l-6-6-6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default App;
