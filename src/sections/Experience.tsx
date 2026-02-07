import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  isInView: boolean;
}

const Counter = ({ end, duration = 2, suffix = '', isInView }: CounterProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      // Ease out expo
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const stats = [
  {
    number: 3,
    suffix: '+',
    label: 'YEARS OF',
    script: 'Experience',
  },
  {
    number: 50,
    suffix: '+',
    label: 'OVER',
    label2: 'CERTIFICATIONS',
    script: 'Earned',
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-20%' });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-dark flex items-center justify-center py-20 md:py-32 overflow-hidden"
    >
      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: index * 0.3,
            }}
            className={`${index > 0 ? 'mt-16 md:mt-24' : ''}`}
          >
            {/* Main Number */}
            <div className="flex flex-wrap items-baseline justify-center gap-x-4">
              {stat.label === 'OVER' && (
                <span className="text-display text-light/80 font-bold">
                  OVER
                </span>
              )}
              <span className="text-hero text-light font-bold tracking-tighter">
                <Counter
                  end={stat.number}
                  suffix={stat.suffix}
                  isInView={isInView}
                />
              </span>
            </div>

            {/* Secondary Text */}
            <div className="text-display text-light/80 font-bold -mt-2 md:-mt-4">
              {stat.label !== 'OVER' && stat.label}
              {stat.label2 && stat.label2}
            </div>

            {/* Script Accent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1],
                delay: 0.5 + index * 0.3,
              }}
              className="mt-2 md:mt-4"
            >
              <span className="text-script text-5xl md:text-7xl lg:text-8xl text-light/70">
                {stat.script}
              </span>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={isInView ? { scaleY: 1 } : {}}
        transition={{
          duration: 1,
          ease: [0.4, 0, 0.2, 1],
          delay: 0.8,
        }}
        className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 w-px h-32 bg-light/20 origin-top"
      />
    </section>
  );
};

export default Experience;
