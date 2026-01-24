import { Project } from '@/types';

export const projects: Project[] = [
 
  {
    id: '1',
    title: 'Organica Lounge Kandy',
    description: 'Hotel Menu Management System for Organica Lounge Kandy with comprehensive restaurant operations.',
    longDescription: 'A comprehensive hotel menu management system designed specifically for Organica Lounge Kandy. The system streamlines restaurant operations including menu management, order processing, inventory tracking, and customer service. Features include real-time menu updates, table management, payment processing, and detailed analytics for restaurant performance. The system is built to handle high-volume operations while maintaining efficiency and providing excellent customer experience.',
    image: '/images/1_1.png',
    images: [
      '/images/1_1.png',
      '/images/1_2.png',
      '/images/1_3.png',
      '/images/1_4.png',
      '/images/1_5.png'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Material-UI'],
    // githubUrl: 'https://github.com/username/organica-lounge',
    liveUrl: 'https://organica-lounge-demo.vercel.app',
    featured: true,
    date: '2024-12-01'
  },
  {
    id: '2',
    title: 'ELITEHR',
    description: 'Comprehensive HR Management System for streamlined human resources operations and employee management.',
    longDescription: 'ELITEHR is a powerful human resources management system designed to automate and streamline HR operations. The platform provides comprehensive employee management including employee profiles, attendance tracking, leave management, payroll processing, performance evaluations, and recruitment workflows. Features include role-based access control, automated notifications, detailed reporting and analytics, document management, and integration capabilities. Built to handle organizations of all sizes with scalable architecture and intuitive user interface.',
    image: '/images/2_1.png',
    images: [
      '/images/2_1.png',
      '/images/2_2.png',
      '/images/2_3.png',
      '/images/2_4.png',
      '/images/2_5.png'
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    featured: true,
    date: '2024-11-15'
  },
  {
    id: '3',
    title: 'Salon One',
    description: 'Complete salon management solution for booking, scheduling, and customer relationship management.',
    longDescription: 'Salon One is a comprehensive salon management system that helps salon owners manage their business operations efficiently. The platform includes appointment scheduling, customer management, service catalog, staff management, inventory tracking, and payment processing. Features include automated reminders, customer history tracking, revenue analytics, multi-location support, and mobile-responsive design. The system is designed to improve customer experience while helping salon owners grow their business through better organization and data-driven insights.',
    image: '/images/3_1.png',
    images: [
      '/images/3_1.png',
      '/images/3_2.png',
      '/images/3_4.png',
      '/images/3_5.png',
      '/images/3_6.png',
      '/images/3_7.png'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Material-UI'],
    featured: true,
    date: '2024-10-20'
  }
];
