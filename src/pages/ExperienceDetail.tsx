import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { experiences } from '../data/experiences';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ExperienceDetail = () => {
    const { slug } = useParams();


    const experienceIndex = experiences.findIndex((e) => e.slug === slug);
    const experience = experiences[experienceIndex];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!experience) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-dark text-light">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Experience Not Found</h1>
                    <Link to="/" className="text-accent hover:underline">
                        Back to Home
                    </Link>
                </div>
            </div>
        );
    }

    const prevExperience = experienceIndex > 0 ? experiences[experienceIndex - 1] : null;
    const nextExperience = experienceIndex < experiences.length - 1 ? experiences[experienceIndex + 1] : null;

    return (
        <div className="bg-light min-h-screen text-dark">
            {/* Navigation - Back Button */}
            <div className="fixed top-24 left-0 z-40 px-6 md:px-12 pointer-events-none">
                <Link
                    to="/"
                    className="pointer-events-auto inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-white mix-blend-difference hover:text-accent transition-colors group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Back
                </Link>
            </div>

            {/* Hero Section */}
            <section className="relative h-[35vh] w-full overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={experience.image}
                        alt={experience.companyName}
                        className="w-full h-full object-cover grayscale"
                    />
                    <div className="absolute inset-0 bg-dark/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-80" />
                </div>

                <div className="relative z-10 h-full flex flex-col justify-end pb-8 px-6 md:px-12 max-w-7xl mx-auto text-light">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                    >
                        <div className="flex items-end gap-x-6 gap-y-2 flex-wrap">
                            <h1 className="text-display text-4xl md:text-6xl font-bold leading-none">
                                {experience.title}
                            </h1>
                            <span className="text-script text-3xl md:text-5xl text-accent/90 mb-1">
                                {experience.titleScript}
                            </span>
                        </div>
                        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 text-base md:text-lg font-light text-light/80 mt-2">
                            <span className="font-medium text-white">{experience.role}</span>
                            <span className="hidden md:block">•</span>
                            <span>{experience.duration}</span>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-8 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">

                    {/* Sidebar / Overview */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h3 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-6">Overview</h3>
                            <p className="text-lg leading-relaxed text-dark/80">
                                {experience.description}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                        >
                            <h3 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-6">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {experience.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-dark/5 text-dark/70 rounded-full text-sm font-medium border border-dark/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Key Projects & Impact */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h3 className="text-xs font-bold uppercase tracking-widest text-dark/50 mb-6">Key Projects & Impact</h3>
                            <div className="grid gap-6">
                                {experience.keyProjects.map((project, index) => (
                                    <div
                                        key={index}
                                        className="group relative p-6 bg-white/60 backdrop-blur-md border border-white/60 rounded-3xl shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 ease-out"
                                    >
                                        {/* Glass highlight effect */}
                                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                        <h4 className="text-xl font-bold mb-3 text-dark group-hover:text-dark/90 transition-colors">
                                            {project.title}
                                        </h4>
                                        <p className="text-sm text-dark/70 mb-5 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark/5 border border-dark/5 group-hover:bg-accent/10 group-hover:border-accent/10 transition-colors duration-300">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            <span className="text-xs font-bold uppercase tracking-wider text-dark/60 group-hover:text-accent/80 transition-colors">
                                                Outcome
                                            </span>
                                            <span className="w-px h-3 bg-dark/10" />
                                            <span className="text-xs font-medium text-dark/80">
                                                {project.outcome}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>



                    {/* Main Content */}
                    <div className="lg:col-span-8 space-y-8">

                        {/* Responsibilities */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-bold mb-8 text-dark">Responsibilities</h2>
                            <ul className="space-y-4">
                                {experience.responsibilities.map((item, index) => (
                                    <li key={index} className="flex gap-4 items-start group">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-accent flex-shrink-0 group-hover:scale-125 transition-transform" />
                                        <span className="text-lg text-dark/80 leading-relaxed">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Gallery (placeholder if empty) */}
                        {experience.gallery && experience.gallery.length > 0 && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                            >
                                <h2 className="text-3xl font-bold mb-8 text-dark">Gallery</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {experience.gallery.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            alt="Gallery"
                                            className="rounded-lg shadow-md hover:scale-[1.02] transition-transform duration-300"
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                    </div>
                </div>
            </section>

            {/* Next/Prev Navigation */}
            <section className="bg-white border-t border-dark/5">
                <div className="max-w-7xl mx-auto grid grid-cols-2">
                    {prevExperience ? (
                        <Link
                            to={`/experience/${prevExperience.slug}`}
                            className="p-12 border-r border-dark/5 flex flex-col items-start gap-2 hover:bg-dark/5 transition-colors group text-left"
                        >
                            <span className="text-xs uppercase tracking-widest text-dark/40 flex items-center gap-2">
                                <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                                Previous
                            </span>
                            <span className="text-xl md:text-3xl font-bold text-dark">{prevExperience.companyName}</span>
                        </Link>
                    ) : (
                        <div />
                    )}

                    {nextExperience ? (
                        <Link
                            to={`/experience/${nextExperience.slug}`}
                            className="p-12 flex flex-col items-end gap-2 hover:bg-dark/5 transition-colors group text-right"
                        >
                            <span className="text-xs uppercase tracking-widest text-dark/40 flex items-center gap-2">
                                Next
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <span className="text-xl md:text-3xl font-bold text-dark">{nextExperience.companyName}</span>
                        </Link>
                    ) : (
                        <div />
                    )}
                </div>
            </section>
        </div>
    );
};

export default ExperienceDetail;
