export interface Experience {
    id: number;
    slug: string;
    title: string;
    titleScript: string;
    companyName: string;
    role: string;
    duration: string;
    image: string;
    description: string;
    responsibilities: string[];
    keyProjects: {
        title: string;
        description: string;
        outcome: string;
    }[];
    techStack: string[];
    gallery?: string[];
}

export const experiences: Experience[] = [
    {
        id: 1,
        slug: 'global-education',
        title: 'GLOBAL',
        titleScript: 'Education',
        companyName: 'Global Education Services',
        role: 'DevOps & Software Developer',
        duration: 'Jan 2026 – Present',
        image: '/images/GES.png',
        description: 'Leading DevOps and software development initiatives in Oman to support scalable, secure, and highly available applications.',
        responsibilities: [
            'Designing, developing, and maintaining websites and internal web applications, including frontend, backend, and deployment architecture.',
            'Managing production and staging infrastructure for websites and applications, covering hosting, DNS, SSL, backups, and uptime monitoring.',
            'Designing and optimizing CI/CD pipelines for automated build, testing, and deployment using GitHub Actions and related tooling.',
            'Supporting cloud and on-prem infrastructure, ensuring system reliability, performance, and disaster recovery readiness.',
            'Automating deployments, environment provisioning, and routine operational tasks to reduce manual intervention and errors.',
            'Implementing infrastructure security best practices, including access control, secrets management, patching, and vulnerability mitigation.',
            'Monitoring system health, logs, and performance metrics to proactively detect and resolve incidents.',
            'Working closely with cross-functional teams (product, design, QA, operations) to improve release cycles and delivery efficiency.',
            'Maintaining technical documentation for infrastructure, deployment processes, and operational workflows.'
        ],
        keyProjects: [
            {
                title: 'CI/CD Optimization',
                description: 'Designed and optimized pipelines using GitHub Actions.',
                outcome: 'Improved release cycles and delivery efficiency.'
            },
            {
                title: 'Infrastructure Security',
                description: 'Implemented best practices including access control and patching.',
                outcome: 'Enhanced system security and vulnerability mitigation.'
            }
        ],
        techStack: ['GitHub Actions', 'Cloud', 'On-prem', 'Frontend', 'Backend', 'DNS', 'SSL', 'Monitoring'],
        gallery: []
    },
    {
        id: 2,
        slug: 'air-kerala',
        title: 'AIR',
        titleScript: 'Kerala',
        companyName: 'Air Kerala',
        role: 'ICT Executive / Information Technology Executive',
        duration: 'Nov 2024 – Jan 2026',
        image: '/images/Airkerala.jpg',
        description: 'Designed, deployed, and managed enterprise IT infrastructure in Kerala, India, ensuring secure and efficient global operations.',
        responsibilities: [
            'Joined as the first IT employee (Employee ID: 1001), setting up the entire IT foundation from scratch.',
            'Designed, deployed, and managed enterprise IT infrastructure, including servers, storage, LAN/WAN architecture, and global VPN connectivity.',
            'Planned and implemented secure network architecture with firewalls, segmentation, and remote access for corporate users.',
            'Developed, hosted, and maintained the corporate website and internal web systems, ensuring performance, scalability, and security.',
            'Managed Microsoft 365 environment for 100+ users, including Exchange Online, Teams, SharePoint, identity management, and security policies.',
            'Implemented ISO 27001-aligned backup policies, disaster recovery plans, and IAM workflows.',
            'Managed AWS and Azure cloud environments, including monitoring, system hardening, cost optimization, and access control.',
            'Built and maintained CI/CD pipelines using GitHub Actions for automated application and infrastructure deployments.',
            'Oversaw endpoint security, patch management, asset management, and IT operations across departments.',
            'Provided technical leadership, troubleshooting, and strategic guidance for business-critical IT initiatives.',
            'Coordinated with vendors and internal teams to deliver infrastructure and software projects on time.'
        ],
        keyProjects: [
            {
                title: 'Cyber Risk Reduction',
                description: 'Configured Sophos XGS UTM, MFA, IPS, web filtering, and site-to-site/remote VPNs.',
                outcome: 'Reduced cyber risk by approximately 80%.'
            },
            {
                title: 'Operational Automation',
                description: 'Automated IT and cloud operations using PowerShell, AWS CLI, and scripting.',
                outcome: 'Improved operational efficiency by around 35%.'
            }
        ],
        techStack: ['Microsoft 365', 'Sophos XGS', 'AWS', 'Azure', 'PowerShell', 'GitHub Actions', 'ISO 27001'],
        gallery: []
    },
    {
        id: 3,
        slug: 'phases-india',
        title: 'PHASES',
        titleScript: 'India',
        companyName: 'Phases India Technology Solutions',
        role: 'System Administrator',
        duration: 'Dec 2022 – Nov 2024',
        image: '/images/Phases.jpg',
        description: 'Managed AWS and Azure cloud platforms for multiple client environments, providing L2/L3 support and ensuring high availability.',
        responsibilities: [
            'Managed AWS and Azure cloud platforms for multiple client environments, including compute, storage, networking, and security services.',
            'Administered Windows Server and Linux production systems, handling user management, updates, hardening, and performance tuning.',
            'Planned, deployed, and supported on-prem and cloud infrastructure, ensuring high availability and scalability.',
            'Managed website and application hosting infrastructure, including domain management, DNS, SSL certificates, backups, and monitoring.',
            'Implemented backup, disaster recovery, and business continuity solutions, including offsite backups and recovery testing.',
            'Conducted penetration testing, vulnerability assessments, and security hardening to strengthen infrastructure defenses.',
            'Configured and maintained firewalls, VPNs, and network security controls for enterprise and client environments.',
            'Supported virtualization platforms and optimized resource usage to reduce costs and improve system performance.',
            'Monitored systems using logs, alerts, and performance metrics to proactively resolve incidents.',
            'Provided L2/L3 infrastructure support, ensuring minimal downtime and strong SLA adherence.',
            'Created and maintained detailed technical documentation for infrastructure, security, and operational processes.'
        ],
        keyProjects: [
            {
                title: 'Client Migrations',
                description: 'Migrated, optimized, and maintained 100+ client websites and applications.',
                outcome: 'Improved reliability, performance, and security.'
            },
            {
                title: 'Infrastructure Automation',
                description: 'Automated infrastructure provisioning and operations using PowerShell, Terraform, and scripting.',
                outcome: 'Reduced manual effort and deployment errors.'
            }
        ],
        techStack: ['AWS', 'Azure', 'Windows Server', 'Linux', 'Terraform', 'PowerShell', 'Firewalls'],
        gallery: []
    },
];
