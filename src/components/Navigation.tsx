import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  onMenuOpen: () => void;
}

const Navigation = ({ onMenuOpen }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-light/90 backdrop-blur-md' : 'bg-transparent'
        }`}
    >
      <div className="w-full px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#hero"
            className="relative z-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={`transition-colors duration-300 ${isScrolled ? 'text-dark' : 'text-light'
                }`}
            >
              <path
                d="M20 80 L50 20 L80 80 L65 80 L50 50 L35 80 Z"
                fill="currentColor"
              />
            </svg>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className={`text-sm font-medium tracking-wide link-underline transition-colors duration-300 ${isScrolled ? 'text-dark' : 'text-light'
                  }`}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Hamburger Menu Button */}
          <motion.button
            onClick={onMenuOpen}
            className={`relative z-10 flex flex-col items-end gap-1.5 p-2 transition-colors duration-300 ${isScrolled ? 'text-dark' : 'text-light'
              }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Open menu"
          >
            <span className="w-8 h-px bg-current" />
            <span className="w-6 h-px bg-current" />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navigation;
