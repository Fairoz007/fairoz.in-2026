import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import { experiences } from '@/data/experiences';

const sectionThemes = [
  { backgroundColor: '#1a1a1a', color: '#d4d4d4', borderColor: 'rgba(212, 212, 212, 0.35)' },
  { backgroundColor: '#d4d4d4', color: '#1a1a1a', borderColor: 'rgba(26, 26, 26, 0.35)' },
  { backgroundColor: '#2a2a2a', color: '#d4d4d4', borderColor: 'rgba(212, 212, 212, 0.35)' },
] as const;

const ProfessionalExperienceScroll = () => {
  return (
    <FlowArt aria-label="Professional experience">
      {experiences.map((experience, index) => {
        const theme = sectionThemes[index % sectionThemes.length];
        const sectionNumber = String(index + 1).padStart(2, '0');

        return (
          <FlowSection
            key={experience.id}
            aria-label={`${experience.title} ${experience.titleScript}`}
            style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
          >
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <img
                src={experience.image}
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover opacity-20 grayscale"
              />
              <div
                className="absolute inset-0"
                style={{ backgroundColor: theme.backgroundColor, opacity: 0.75 }}
              />
            </div>

            <div className="relative z-10 flex min-h-[calc(100vh-clamp(2rem,8vw,4vw)-4vw)] flex-col justify-between gap-6">
              <p className="text-label opacity-80">
                {sectionNumber} — {experience.role}
              </p>

              <hr
                className="my-[2vw] border-none border-t opacity-100"
                style={{ borderTopColor: theme.borderColor, borderTopWidth: 1 }}
              />

              <div>
                <h3 className="text-display font-bold uppercase tracking-tight">
                  {experience.title}
                </h3>
                <span className="text-script -mt-2 block text-4xl md:text-6xl lg:text-7xl">
                  {experience.titleScript}
                </span>
              </div>

              <hr
                className="my-[2vw] border-none border-t opacity-100"
                style={{ borderTopColor: theme.borderColor, borderTopWidth: 1 }}
              />

              <p className="max-w-[50ch] text-[clamp(1rem,2.5vw,1.75rem)] leading-relaxed opacity-90">
                {experience.description}
              </p>

              <hr
                className="my-[2vw] border-none border-t opacity-100"
                style={{ borderTopColor: theme.borderColor, borderTopWidth: 1 }}
              />

              <div className="flex flex-wrap items-end justify-between gap-6">
                <p className="text-label opacity-70">{experience.duration}</p>
                <Link
                  to={`/experience/${experience.slug}`}
                  className="group inline-flex items-center gap-2 text-label transition-opacity hover:opacity-70"
                >
                  View
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
            </div>
          </FlowSection>
        );
      })}
    </FlowArt>
  );
};

export default ProfessionalExperienceScroll;
