import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send } from 'lucide-react';

interface ContactCTAProps {
  onOpenContact: () => void;
}

const ContactCTA = ({ onOpenContact }: ContactCTAProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative min-h-screen bg-light flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
        {/* Typography Composition */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="text-display font-bold text-dark block">
            LET'S START
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
        >
          <span className="text-script text-5xl md:text-7xl lg:text-8xl text-dark/90 block -mt-2 md:-mt-6">
            Something Great
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
        >
          <span className="text-display font-bold text-dark block -mt-2 md:-mt-6">
            TOGETHER
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
          className="mt-16 md:mt-24"
        >
          <motion.button
            onClick={onOpenContact}
            whileHover="hover"
            whileTap={{ scale: 0.98 }}
            variants={{
              hover: { scale: 1.05 }
            }}
            className="relative w-36 h-36 md:w-44 md:h-44 rounded-full border border-dark/30 flex flex-col items-center justify-center gap-2 transition-all duration-500 hover:bg-dark hover:text-light hover:border-dark group"
          >
            <motion.div
              variants={{
                hover: { rotate: 45 },
              }}
              transition={{ duration: 0.3 }}
            >
              <Send
                size={20}
                className="transition-colors duration-300"
              />
            </motion.div>
            <span className="text-xs uppercase tracking-widest font-medium">
              Open Contact
            </span>
            <span className="text-xs uppercase tracking-widest font-medium -mt-1">
              Form
            </span>
          </motion.button>
        </motion.div>
      </div>

      {/* Footer Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center justify-center gap-2 text-sm text-dark/50"
      >
        <div className="flex gap-6">
          <a href="/privacy-policy" className="hover:text-dark transition-colors duration-300">
            Privacy Policy
          </a>
        </div>
        <div className="text-xs">
          &copy; 2026 Fairoz Faisal
        </div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
