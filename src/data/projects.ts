import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'SalonMe.lk',
    description: 'Sri Lanka\'s largest salon booking platform for seamless salon management and customer bookings.',
    longDescription: 'SalonMe.lk is a comprehensive salon booking platform designed to digitalize the beauty industry in Sri Lanka. It enables salon owners to register their businesses, manage services, appointments, and payments through the DirectPay gateway. Customers can explore salons across the country, book services instantly, and complete secure online payments. The platform includes powerful salon owner dashboards, real-time booking management, customer analytics, and automated payment reconciliation. Built with a scalable architecture to support thousands of users across Android, iOS, and web.',
    image: '/api/placeholder/600/400',
    technologies: ['React Native', 'iOS', 'Android', 'Node.js', 'NestJS', 'PostgreSQL', 'Prisma', 'DirectPay Payment Gateway'],
    githubUrl: 'https://github.com/username/salonme',
    liveUrl: 'https://salonme.lk',
    featured: true,
    date: '2024-09-10'
  },
  {
    id: '2',
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
  }
];
