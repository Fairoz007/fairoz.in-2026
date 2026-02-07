import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';
import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface ProjectCardProps {
  experience: typeof experiences[0];
  index: number;
}

const ProjectCard = ({ experience, index }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(cardRef, { once: true, margin: '-100px' });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <Link to={`/experience/${experience.slug}`} className="block">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.4, 0, 0.2, 1],
          delay: index * 0.15,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="project-card relative h-[70vh] md:h-[80vh] w-full overflow-hidden cursor-none"
      >
        {/* Background Image */}
        <motion.div
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          <img
            src={experience.image}
            alt={experience.title}
            className={`project-image w-full h-full object-cover transition-all duration-700 ${isHovered ? 'grayscale-0' : 'grayscale'}`}
          />
        </motion.div>

        {/* Overlay */}
        <motion.div
          animate={{ opacity: isHovered ? 0.4 : 0.6 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-dark"
        />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-light z-10 p-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
            className="text-display font-bold tracking-tight"
          >
            {experience.title}
          </motion.h3>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 + index * 0.15 }}
            className="text-script text-4xl md:text-6xl lg:text-7xl -mt-2 md:-mt-4"
          >
            {experience.titleScript}
          </motion.span>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 + index * 0.15 }}
            className="mt-6 text-label text-light/70"
          >
            {experience.role} ({experience.duration})
          </motion.p>
        </div>

        {/* Cursor Following View Button */}
        <motion.div
          style={{
            x: springX,
            y: springY,
            translateX: '-50%',
            translateY: '-50%',
            left: 0,
            top: 0
          }}
          animate={{
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{
            scale: { duration: 0.2 },
            opacity: { duration: 0.2 },
          }}
          className="absolute w-20 h-20 rounded-full bg-light/90 flex items-center justify-center pointer-events-none z-20"
        >
          <span className="text-xs font-medium text-dark uppercase tracking-widest">
            View
          </span>
        </motion.div>
      </motion.div>
    </Link>
  );
};

const Projects = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="work" className="relative bg-light">
      {/* Section Header */}
      <div
        ref={headerRef}
        className="py-20 md:py-32 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="text-script text-4xl md:text-5xl text-dark/80">
            Experience
          </span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
          className="text-display font-bold text-dark -mt-2"
        >
          Professional
        </motion.h2>
      </div>

      {/* Project Cards */}
      <div className="space-y-0">
        {experiences.map((experience, index) => (
          <ProjectCard key={experience.id} experience={experience} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
