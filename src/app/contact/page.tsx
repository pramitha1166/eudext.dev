import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

export default function ContactPage() {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Connect With Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ready to start your next project? We&apos;d love to hear about your ideas and discuss how we can help bring them to life. 
              Let&apos;s create something amazing together.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900">Let&apos;s discuss your project</h2>
                  <p className="mt-4 text-lg leading-8 text-gray-600">
                    We&apos;re always excited to work on new projects and help businesses achieve their digital goals. 
                    Whether you need a web application, mobile app, or custom software solution, 
                    we&apos;re here to turn your vision into reality.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-6 w-6 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">Email</h3>
                      <a href="mailto:eudextdev@gmail.com" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                        eudextdev@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                      <a href="tel:+94785770425" className="text-sm text-gray-600 hover:text-purple-600 transition-colors">
                        +94 78 577 0425
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <ChatBubbleLeftRightIcon className="h-6 w-6 text-green-600" />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">WhatsApp</h3>
                      <a href="https://wa.me/94701949599" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                        +94 70 194 9599
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-blue-600" />
                    <div className="ml-4">
                      <h3 className="text-sm font-medium text-gray-900">Location</h3>
                      <p className="text-sm text-gray-600">
                        Global Remote Team
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div>
                <ContactForm />
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
    title: 'Connect - eudext.dev',
    description: 'Get in touch with eudext for your next software project. We build custom web applications, mobile apps, and digital solutions.',
  };
}
