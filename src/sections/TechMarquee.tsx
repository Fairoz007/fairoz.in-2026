import {
  Cloud,
  Container,
  Github,
  Lock,
  Server,
  Terminal,
  Workflow,
} from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';

const technologies = [
  { icon: Cloud, label: 'AWS' },
  { icon: Cloud, label: 'Azure' },
  { icon: Github, label: 'GitHub Actions' },
  { icon: Workflow, label: 'CI/CD' },
  { icon: Container, label: 'Docker' },
  { icon: Terminal, label: 'Linux' },
  { icon: Server, label: 'Terraform' },
  { icon: Lock, label: 'Security' },
] as const;

const TechMarquee = () => {
  return (
    <section
      aria-label="Technologies"
      className="relative border-t border-dark/10 bg-light py-6 md:py-8"
    >
      <Marquee pauseOnHover speed={35} className="mx-auto mt-0 max-w-none sm:mt-0">
        {technologies.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="relative mx-12 flex h-full w-fit items-center justify-start gap-3 text-dark md:mx-16"
          >
            <Icon size={22} strokeWidth={1.5} className="text-dark/70" />
            <span className="text-label text-dark/80">{label}</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default TechMarquee;
