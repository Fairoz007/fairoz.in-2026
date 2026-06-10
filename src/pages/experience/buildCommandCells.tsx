import type { CommandCell } from '@/components/ui/experience-hero';
import type { Experience } from '@/data/experiences';

export function buildCommandCells(experience: Experience): CommandCell[] {
  const isCurrent = experience.duration.toLowerCase().includes('present');

  return [
    {
      id: '001',
      title: 'ROLE',
      type: 'progress',
      val: experience.role.split('/')[0].trim(),
      progress: isCurrent ? 85 : 100,
    },
    {
      id: '002',
      title: 'TIMELINE',
      type: 'data',
      dataRows: [
        { label: 'Company', value: experience.companyName },
        { label: 'Duration', value: experience.duration },
        { label: 'Projects', value: `${experience.keyProjects.length} Delivered` },
      ],
    },
    {
      id: '003',
      title: 'EXPERTISE',
      type: 'text',
      textContent: (
        <>
          Core stack:{' '}
          <span className="italic text-white">
            {experience.techStack.slice(0, 3).join(' · ')}
          </span>
          {experience.techStack.length > 3 ? ' and more.' : '.'}
        </>
      ),
    },
  ];
}
