import { Project } from '@/types';

export const projects: Project[] = [

  {
    id: '1',
    title: 'SalonMe.lk',
    description: 'SaaS salon booking platform that lets customers discover and book salons, spas, and barbershops with instant confirmation.',
    longDescription: 'SalonMe.lk is a multi-tenant SaaS booking platform for the beauty and wellness industry. Customers can search salons, spas, and barbershops by service, category, and location, browse curated listings, and book appointments with instant confirmation. Salon owners get a dedicated dashboard to manage their service catalog, staff schedules, availability, appointments, and customer records. The platform includes multi-language support, automated booking reminders, customer reviews and ratings, revenue and performance analytics, and a subscription-based plan model for salon partners. Built mobile-first so both customers and salon staff can manage bookings from any device.',
    image: '/images/salonme.lk.png',
    images: [
      '/images/salonme.lk.png'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma'],
    liveUrl: 'https://salonme.lk',
    featured: true,
    date: '2026-01-15'
  },
  {
    id: '2',
    title: 'WolfCart.shop',
    description: 'Multi-vendor e-commerce platform and store builder that gets Sri Lankan merchants selling online in minutes.',
    longDescription: 'WolfCart.shop is a multi-vendor e-commerce platform and store builder designed for Sri Lankan merchants. Sellers sign up and get a complete ecommerce storefront generated automatically — no monthly fees and no technical skills required. The platform handles product and inventory management, customizable storefront themes, order and delivery workflows, and local payment acceptance through DirectPay. Merchants manage their entire store from their phone, while the marketplace layer provides vendor onboarding, commission handling, and a shared customer-facing catalog. The commission-based model means WolfCart only earns when merchants earn.',
    image: '/images/wolfcart.shop.png',
    images: [
      '/images/wolfcart.shop.png'
    ],
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Prisma', 'DirectPay'],
    liveUrl: 'https://wolfcart.shop',
    featured: true,
    date: '2026-03-10'
  }
];
