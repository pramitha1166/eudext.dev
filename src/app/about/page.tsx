import Layout from '@/components/Layout';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              About eudext
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are a passionate team of developers, designers, and innovators dedicated to building the world&apos;s finest custom software solutions.
            </p>
          </div>
          
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-10 lg:max-w-none lg:grid-cols-12">
            <div className="max-w-xl lg:col-span-7">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Our Story</h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Founded with a vision to democratize access to high-quality software development, eudext has grown from a small startup 
                to a trusted partner for businesses worldwide. We believe that every company, regardless of size, deserves access to 
                world-class technology solutions.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Our team combines deep technical expertise with a passion for innovation, helping our clients transform their ideas 
                into powerful digital solutions. From startups launching their first product to enterprises scaling globally, 
                we provide the technology foundation that drives success.
              </p>
              
              <h3 className="mt-8 text-xl font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                To empower businesses with cutting-edge software solutions that drive growth, efficiency, and innovation. 
                We are committed to delivering exceptional value through technology that makes a real difference.
              </p>
              
              <h3 className="mt-8 text-xl font-semibold text-gray-900">Core Values</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-medium text-gray-900">Innovation First</h4>
                  <p className="text-sm text-gray-600">We stay at the forefront of technology, constantly exploring new tools and methodologies.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Client Success</h4>
                  <p className="text-sm text-gray-600">Your success is our success. We measure our achievements by the value we deliver to our clients.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Quality & Excellence</h4>
                  <p className="text-sm text-gray-600">We maintain the highest standards in everything we do, from code quality to project delivery.</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Collaboration</h4>
                  <p className="text-sm text-gray-600">We work as partners with our clients, fostering open communication and shared ownership of success.</p>
                </div>
              </div>
            </div>
            
            <div className="max-w-xl lg:col-span-5 lg:max-w-none">
              <div className="relative">
                <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/api/placeholder/400/600"
                    alt="eudext team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              
              {/* Company Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5">
                  <div className="text-2xl font-bold text-purple-600">100+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5">
                  <div className="text-2xl font-bold text-purple-600">50+</div>
                  <div className="text-sm text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5">
                  <div className="text-2xl font-bold text-purple-600">25+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm ring-1 ring-gray-900/5">
                  <div className="text-2xl font-bold text-purple-600">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Team Section */}
          <div className="mt-32">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Our Team
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Meet the talented individuals who make eudext what it is today
              </p>
            </div>
            
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                {[
                  {
                    name: 'Development Team',
                    role: 'Full-Stack Engineers',
                    description: 'Our developers bring years of experience in modern web technologies and are passionate about creating scalable, maintainable solutions.'
                  },
                  {
                    name: 'Design Team',
                    role: 'UI/UX Designers',
                    description: 'Our designers focus on creating intuitive, beautiful user experiences that delight users and drive business results.'
                  },
                  {
                    name: 'Operations Team',
                    role: 'Project Managers',
                    description: 'Our project managers ensure smooth delivery and maintain clear communication throughout every project lifecycle.'
                  }
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-purple-100 mb-6">
                      <div className="text-3xl">👥</div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                    <p className="text-purple-600 font-medium">{member.role}</p>
                    <p className="mt-2 text-sm text-gray-600">{member.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function generateMetadata() {
  return {
    title: 'About - eudext.dev',
    description: 'Learn more about eudext, our mission, values, and the talented team behind our innovative software solutions.',
  };
}
