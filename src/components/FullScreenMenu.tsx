import { useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Instagram, Linkedin } from 'lucide-react';

interface FullScreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const FullScreenMenu = ({ isOpen, onClose }: FullScreenMenuProps) => {
  const menuLinks = [
    { name: 'HOME', number: '01', href: '#hero' },
    { name: 'ABOUT', number: '02', href: '#about' },
    { name: 'WORK', number: '03', href: '#work' },
    { name: 'CONTACT', number: '04', href: '#contact' },
  ];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleLinkClick = (href: string) => {
    onClose();
    setTimeout(() => {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      x: -30,
      transition: {
        duration: 0.3,
      },
    },
  };

  const overlayVariants: Variants = {
    hidden: { clipPath: 'inset(0 0 100% 0)' },
    visible: {
      clipPath: 'inset(0 0 0% 0)',
      transition: {
        duration: 0.6,
        ease: 'easeInOut',
      },
    },
    exit: {
      clipPath: 'inset(0 0 100% 0)',
      transition: {
        duration: 0.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-[100] bg-dark"
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            onClick={onClose}
            className="absolute top-6 right-6 md:top-8 md:right-12 w-14 h-14 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-light/20 transition-colors duration-300"
            aria-label="Close menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Menu Content */}
          <div className="h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="space-y-4 md:space-y-6"
            >
              {menuLinks.map((link) => (
                <motion.div key={link.name} variants={itemVariants}>
                  <button
                    onClick={() => handleLinkClick(link.href)}
                    className="group flex items-baseline gap-4 text-light hover:opacity-70 transition-opacity duration-300"
                  >
                    <span className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                      {link.name}
                    </span>
                    <span className="text-script text-xl md:text-2xl text-light/60">
                      {link.number}
                    </span>
                  </button>
                </motion.div>
              ))}
            </motion.nav>
          </div>

          {/* Footer Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="absolute bottom-8 right-8 md:bottom-12 md:right-16 text-right"
          >
            <a
              href="mailto:hey@fairoz.in"
              className="text-light/80 text-sm hover:text-light transition-colors duration-300"
            >
              hey@fairoz.in
            </a>
            <div className="flex items-center justify-end gap-4 mt-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-light/20 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://webflow.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-light/20 transition-colors duration-300"
                aria-label="Webflow"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.802 8.56s-1.946 6.103-2.105 6.607a3.03 3.03 0 0 1-.078.175c-.133.272-.4.407-.8.407h-2.91c.133-.467.267-.933.4-1.383l2.49-7.69c.044-.133.088-.267.088-.4 0-.222-.133-.355-.355-.355H10.5c-.044 0-.089.01-.133.01a.315.315 0 0 0-.311.311c0 .067.012.123.023.19.044.155.667 2.104 1.022 3.226.378-1.122 1.267-3.693 1.267-3.693a.927.927 0 0 0 .067-.267c0-.222-.133-.355-.355-.355H6.222c-.044 0-.089.01-.133.01a.315.315 0 0 0-.311.311c0 .067.012.123.023.19.044.155.667 2.104 1.022 3.226.378-1.122 1.267-3.693 1.267-3.693a.927.927 0 0 0 .067-.267c0-.222-.133-.355-.355-.355H2.578c-.222 0-.355.133-.355.355 0 .089.022.178.067.267l3.782 11.387c.089.267.267.4.533.4h3.782c.222 0 .355-.133.355-.355 0-.089-.022-.178-.067-.267l-.489-1.467c-.222-.667-.355-1.067-.355-1.2 0-.044.011-.089.022-.133.133-.4.533-.622.978-.622h2.489c.445 0 .845.222.978.622.011.044.022.089.022.133 0 .133-.133.533-.355 1.2l-.489 1.467c-.045.089-.067.178-.067.267 0 .222.133.355.355.355h3.782c.267 0 .445-.133.533-.4l3.782-11.387c.045-.089.067-.178.067-.267 0-.222-.133-.355-.355-.355h-2.845c-.222 0-.355.133-.355.355 0 .089.022.178.067.267l1.267 3.693z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/fairoz-faisal-3233a7229/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-light/20 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FullScreenMenu;
