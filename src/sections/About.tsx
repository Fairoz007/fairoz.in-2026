import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative min-h-screen bg-light py-20 md:py-32 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            ref={imageRef}
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
            animate={isInView ? { clipPath: 'inset(0 0% 0 0)', opacity: 1 } : {}}
            transition={{
              duration: 1,
              ease: [0.77, 0, 0.175, 1],
            }}
            className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden"
          >
            <motion.div
              style={{ y: imageY }}
              className="absolute inset-0 scale-110"
            >
              <img
                src="/images/about-portrait.png"
                alt="Fairoz Faisal - System, Cloud & Security Engineer"
                className="w-full h-full object-cover grayscale"
              />
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.3,
              }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark mb-8"
            >
              System, Cloud & Security Engineer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.5,
              }}
              className="text-base md:text-lg text-dark/70 leading-relaxed max-w-lg"
            >
              I am a System, Cloud, and Security Engineer with over 3 years of hands-on experience
              managing secure enterprise infrastructure across cloud and on-prem environments.
              My work spans Linux administration, cloud platforms, cybersecurity, ELV/security systems,
              network security, and DevOps automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.7,
              }}
              className="mt-12"
            >
              <a
                href="#work"
                className="inline-flex items-center gap-3 text-sm font-medium text-dark link-underline group"
              >
                <span>View my work</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
