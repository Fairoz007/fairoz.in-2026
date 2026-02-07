import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface HeroProps {
  startAnimation?: boolean;
}

const Hero = ({ startAnimation = true }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Smooth spring physics for parallax
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

  // Parallax effects - Optimized for subtle depth (2-4px range)
  const imageYRaw = useTransform(scrollYProgress, [0, 1], [0, 4]); // Reduced range to 4px
  const imageY = useSpring(imageYRaw, springConfig);

  const textYRaw = useTransform(scrollYProgress, [0, 1], [0, 8]); // Slightly more movement for text (8px)
  const textY = useSpring(textYRaw, springConfig);

  const contentOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  // Premium easing curve (smooth ease-out/natural spring feel)
  const premiumEase = [0.25, 1, 0.5, 1] as const; // Cubic bezier for "soft arrival"

  const headingVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85, // 700-900ms range
        ease: premiumEase,
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 10 }, // 6-10px
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: premiumEase,
        delay: 0.15, // 120-180ms delay after heading starts (relative to parent stagger if used, but here absolute)
        // Note: effectively we want it to start 150ms after heading.
      },
    },
  };

  // Buttons/Actions animate last
  const actionVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: premiumEase,
        delay: 0.4, // delayed further
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full bg-dark overflow-hidden"
    >
      {/* Background - Instant load, no entrance animation */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div className="relative w-full h-full">
          <img
            src="/images/hero-portrait.png"
            alt="Fairoz Faisal"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-60"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/60" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity: contentOpacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center px-4"
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"}
      >
        {/* Main Headline */}
        <div className="relative text-center">
          <motion.h1
            variants={headingVariants}
            className="text-hero text-light font-bold tracking-tighter"
          >
            Fairoz,
          </motion.h1>

          {/* Script Name */}
          <motion.span
            variants={headingVariants}
            className="absolute -bottom-4 right-0 md:right-8 text-script text-3xl md:text-5xl lg:text-6xl text-light/90 pb-[140px]"
          >
            FAISAL
          </motion.span>
        </div>

        {/* Subtitle */}
        <motion.p
          variants={subtitleVariants}
          className="mt-16 text-label text-light/70 tracking-widest text-center"
        >
          DevOps & Software Developer
        </motion.p>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"}
        variants={actionVariants}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 2,
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
