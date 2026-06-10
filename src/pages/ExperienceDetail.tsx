import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { experiences } from '../data/experiences';
import { ExperienceHero } from '@/components/ui/experience-hero';
import { buildCommandCells } from './experience/buildCommandCells';
import lenis from '../smoothScroll';

const ExperienceDetail = () => {
  const { slug } = useParams();

  const experienceIndex = experiences.findIndex((e) => e.slug === slug);
  const experience = experiences[experienceIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!experience) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#020202] text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Experience Not Found</h1>
          <Link to="/" className="text-white/60 hover:text-white hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const prevExperience = experienceIndex > 0 ? experiences[experienceIndex - 1] : null;
  const nextExperience =
    experienceIndex < experiences.length - 1 ? experiences[experienceIndex + 1] : null;

  const scrollToContent = () => {
    const target = document.getElementById('experience-content');
    if (target) {
      lenis.scrollTo(target, { offset: -80, duration: 1.2 });
    }
  };

  return (
    <div className="dark min-h-screen bg-[#020202] selection:bg-white selection:text-black">
      <main className="relative w-full overflow-x-hidden">
        <div className="fixed top-24 left-0 z-40 px-6 md:px-12 pointer-events-none">
          <Link
            to="/"
            className="pointer-events-auto inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back
          </Link>
        </div>

        <ExperienceHero
          brandLabel={experience.companyName.toUpperCase()}
          title={experience.title}
          titleOutline={experience.titleScript}
          description={experience.description}
          ctaLabel="Explore Role"
          onCtaClick={scrollToContent}
          commandCells={buildCommandCells(experience)}
        />

        <section
          id="experience-content"
          className="relative z-10 py-16 md:py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-panel p-8"
              >
                <h3 className="font-mono text-[9px] text-white/25 uppercase tracking-widest mb-6">
                  004 // Overview
                </h3>
                <p className="text-base leading-relaxed text-white/70">{experience.description}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="glass-panel p-8"
              >
                <h3 className="font-mono text-[9px] text-white/25 uppercase tracking-widest mb-6">
                  005 // Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {experience.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 text-white/70 rounded-full text-xs font-mono border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                <h3 className="font-mono text-[9px] text-white/25 uppercase tracking-widest px-2">
                  006 // Key Projects
                </h3>
                <div className="grid gap-4">
                  {experience.keyProjects.map((project, index) => (
                    <div key={index} className="glass-panel p-6 sm:p-7">
                      <h4 className="text-lg font-bold mb-3 text-white">{project.title}</h4>
                      <p className="text-sm text-white/60 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-[10px] font-mono uppercase tracking-wider text-white/50">
                          Outcome
                        </span>
                        <span className="w-px h-3 bg-white/10" />
                        <span className="text-[10px] font-mono text-white/70">
                          {project.outcome}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-panel p-8 md:p-10"
              >
                <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">Responsibilities</h2>
                <ul className="space-y-4">
                  {experience.responsibilities.map((item, index) => (
                    <li key={index} className="flex gap-4 items-start group">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0 group-hover:bg-white transition-colors" />
                      <span className="text-base text-white/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-panel overflow-hidden"
              >
                <img
                  src={experience.image}
                  alt={experience.companyName}
                  className="w-full h-56 md:h-72 object-cover grayscale opacity-80"
                />
                <div className="p-6 md:p-8">
                  <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
                    {experience.companyName} — {experience.duration}
                  </p>
                </div>
              </motion.div>

              {experience.gallery && experience.gallery.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h2 className="font-mono text-[9px] text-white/25 uppercase tracking-widest mb-6 px-2">
                    007 // Gallery
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {experience.gallery.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt="Gallery"
                        className="rounded-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </section>

        <section className="relative z-10 border-t border-white/10">
          <div className="max-w-7xl mx-auto grid grid-cols-2">
            {prevExperience ? (
              <Link
                to={`/experience/${prevExperience.slug}`}
                className="p-6 md:p-12 border-r border-white/10 flex flex-col items-start gap-2 hover:bg-white/5 transition-colors group text-left"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-2">
                  <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                  Previous
                </span>
                <span className="text-xl md:text-2xl font-bold text-white">
                  {prevExperience.companyName}
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextExperience ? (
              <Link
                to={`/experience/${nextExperience.slug}`}
                className="p-6 md:p-12 flex flex-col items-end gap-2 hover:bg-white/5 transition-colors group text-right"
              >
                <span className="font-mono text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-2">
                  Next
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="text-xl md:text-2xl font-bold text-white">
                  {nextExperience.companyName}
                </span>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>

        <div className="fixed inset-0 pointer-events-none bento-mask opacity-10 z-[100]" />
      </main>
    </div>
  );
};

export default ExperienceDetail;
