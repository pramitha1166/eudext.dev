import Layout from '@/components/Layout';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services - eudext.dev',
  description: 'Comprehensive software development services including web development, mobile apps, cloud solutions, AI/ML, and digital transformation.',
};

export default function ServicesPage() {

  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Services
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer comprehensive software development services to help your business thrive in the digital world. 
              From web applications to AI solutions, we have the expertise to bring your vision to life.
            </p>
          </div>

          {/* Services in Tiles View */}
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          {/* Process Section */}
          <div className="mt-32">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Our Process
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                We follow a proven methodology to ensure your project&apos;s success
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-4">
                {[
                  {
                    step: '01',
                    title: 'Discovery',
                    description: 'We understand your requirements, goals, and challenges through detailed consultation.'
                  },
                  {
                    step: '02',
                    title: 'Planning',
                    description: 'We create a comprehensive project roadmap with clear milestones and deliverables.'
                  },
                  {
                    step: '03',
                    title: 'Development',
                    description: 'Our team builds your solution using modern technologies and best practices.'
                  },
                  {
                    step: '04',
                    title: 'Launch',
                    description: 'We deploy your solution and provide ongoing support and maintenance.'
                  }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 mb-4">
                      <span className="text-lg font-semibold text-purple-600">{item.step}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-32 bg-gray-50 rounded-2xl p-8 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Ready to start your project?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Let&apos;s discuss how we can help bring your ideas to life with our expert development services.
              </p>
              <div className="mt-8">
                <a
                  href="/contact"
                  className="rounded-md bg-purple-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors"
                >
                  Get a free consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
