import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full bg-dark overflow-hidden"
    >
      {/* Background Portrait */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <img
            src="/images/hero-portrait.png"
            alt="Fairoz Faisal"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/60" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4"
      >
        {/* Main Headline */}
        <div className="relative text-center">
          <motion.h1
            initial={{ clipPath: 'inset(100% 0 0 0)', opacity: 0 }}
            animate={{ clipPath: 'inset(0% 0 0 0)', opacity: 1 }}
            transition={{
              duration: 1.2,
              ease: [0.77, 0, 0.175, 1],
              delay: 0.3,
            }}
            className="text-hero text-light font-bold tracking-tighter"
          >
            Fairoz,
          </motion.h1>

          {/* Script Name */}
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 0.8,
            }}
            className="absolute -bottom-4 right-0 md:right-8 text-script text-4xl md:text-6xl lg:text-7xl text-light/90"
          >
            FAISAL
          </motion.span>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1],
            delay: 1.2,
          }}
          className="mt-16 text-label text-light/70 tracking-widest"
        >
          DevOps
          <br />
          & Software Developer
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="w-px h-12 bg-gradient-to-b from-light/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
