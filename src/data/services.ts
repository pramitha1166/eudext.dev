export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  category: 'ux' | 'mobile' | 'fullstack' | 'qa' | 'freelance';
}

export const services: Service[] = [
  {
    id: '1',
    title: 'User Experience',
    description: 'Comprehensive UX design services to create intuitive and engaging user experiences.',
    icon: '🎨',
    features: [
      'Requirements Elaboration',
      'Prototyping & Wireframing',
      'User Interface Design'
    ],
    category: 'ux'
  },
  {
    id: '2',
    title: 'Mobile App Development',
    description: 'Complete mobile application development across all platforms and technologies.',
    icon: '📱',
    features: [
      'Native Development',
      'Cross Platform Development',
      'Hybrid Development'
    ],
    category: 'mobile'
  },
  {
    id: '3',
    title: 'Full Stack Development',
    description: 'End-to-end web application development with modern technologies and architectures.',
    icon: '⚡',
    features: [
      'Single Page Applications (SPA)',
      'API Development & Integration',
      'Cloud Solutions & Deployment'
    ],
    category: 'fullstack'
  },
  {
    id: '4',
    title: 'Quality Assurance',
    description: 'Comprehensive testing and quality assurance services to ensure software reliability.',
    icon: '🔍',
    features: [
      'QA Automation',
      'QA Manual Testing'
    ],
    category: 'qa'
  },
  {
    id: '5',
    title: 'Freelance & Contract Projects',
    description: 'We take on freelance projects with flexible engagement models and clear deliverables.',
    icon: '🧑‍💻',
    features: [
      'Fixed-price or hourly engagement',
      'End-to-end delivery or feature-based',
      'Agile collaboration & regular demos',
      'Code handover & documentation'
    ],
    category: 'freelance'
  }
];
