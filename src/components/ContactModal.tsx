import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { X, Linkedin, Globe } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    privacy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '', privacy: false });
      onClose();
    }, 2000);
  };

  const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.3 },
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
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden bg-dark flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-light/20 transition-colors duration-300"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Form Side */}
            <div className="flex-1 p-8 md:p-12 lg:p-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-light mb-2"
              >
                GET IN
              </motion.h2>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-script text-4xl md:text-5xl lg:text-6xl text-light/80 block mb-12"
              >
                Touch
              </motion.span>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <p className="text-light text-lg">Message sent successfully!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      <input
                        type="text"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={e =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        required
                        className="w-full bg-transparent border border-light/30 px-4 py-3 text-light placeholder:text-light/40 focus:border-light/60 focus:outline-none transition-colors duration-300"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <input
                        type="email"
                        placeholder="Your email address"
                        value={formData.email}
                        onChange={e =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        required
                        className="w-full bg-transparent border border-light/30 px-4 py-3 text-light placeholder:text-light/40 focus:border-light/60 focus:outline-none transition-colors duration-300"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <textarea
                      placeholder="What can I help you with?"
                      value={formData.message}
                      onChange={e =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                      className="w-full bg-transparent border border-light/30 px-4 py-3 text-light placeholder:text-light/40 focus:border-light/60 focus:outline-none transition-colors duration-300 resize-none"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex items-center gap-3"
                  >
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.privacy}
                      onChange={e =>
                        setFormData({ ...formData, privacy: e.target.checked })
                      }
                      required
                      className="w-4 h-4 border border-light/30 bg-transparent rounded-none accent-light"
                    />
                    <label htmlFor="privacy" className="text-sm text-light/60">
                      I've accepted the{' '}
                      <a href="#" className="text-light underline hover:no-underline">
                        privacy policy
                      </a>
                      .
                    </label>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-4 border border-light/30 text-light text-sm uppercase tracking-widest hover:bg-light hover:text-dark transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Submit Message'}
                    </button>
                  </motion.div>
                </form>
              )}
            </div>

            {/* Image Side */}
            <div className="hidden md:block w-1/3 relative">
              <img
                src="/images/about-portrait.png"
                alt="Contact"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              <div className="absolute inset-0 bg-dark/20" />

              {/* Social Links */}
              <div className="absolute bottom-8 right-8 flex flex-col items-end gap-4">
                <a
                  href="https://fairoz.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-light/20 transition-colors duration-300"
                >
                  <Globe size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/fairoz-faisal-3233a7229/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-light/10 flex items-center justify-center text-light hover:bg-light/20 transition-colors duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <div className="text-light/60 text-sm text-right">
                  Muscat, Oman
                  <br />
                  <a href="tel:+96876331481" className="hover:text-light transition-colors">
                    +968 7633 1481
                  </a>
                  <br />
                  <a href="mailto:hey@fairoz.in" className="text-light underline hover:no-underline">
                    hey@fairoz.in
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
