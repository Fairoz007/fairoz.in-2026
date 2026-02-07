import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

const Tagline = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-light flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="w-full max-w-6xl mx-auto px-6 md:px-12"
      >
        <div className="flex flex-col items-center gap-2 md:gap-4">
          {/* WEBSITES - Top Left */}
          <motion.div
            variants={wordVariants}
            className="w-full"
          >
            <span className="text-display text-dark font-bold">
              SYSTEMS
            </span>
          </motion.div>

          {/* That Work - Script, overlapping */}
          <motion.div
            variants={wordVariants}
            className="w-full -mt-4 md:-mt-8 ml-8 md:ml-24"
          >
            <span className="text-script text-4xl md:text-6xl lg:text-7xl text-dark/90">
              That Scale
            </span>
          </motion.div>

          {/* HARDER - Massive, right aligned */}
          <motion.div
            variants={wordVariants}
            className="w-full text-right -mt-2 md:-mt-4"
          >
            <span className="text-display text-dark font-bold">
              SECURELY
            </span>
          </motion.div>

          {/* THAN YOUR - Center */}
          <motion.div
            variants={wordVariants}
            className="w-full text-center -mt-2 md:-mt-4"
          >
            <span className="text-display text-dark font-bold">
              FOR YOUR
            </span>
          </motion.div>

          {/* Competition - Script, flowing underneath */}
          <motion.div
            variants={wordVariants}
            className="w-full text-right -mt-4 md:-mt-8 mr-8 md:mr-24"
          >
            <span className="text-script text-4xl md:text-6xl lg:text-7xl text-dark/90">
              Enterprise
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Tagline;
