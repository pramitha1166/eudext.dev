import Layout from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers - eudext.dev',
  description: 'Join our team of talented developers and engineers. Explore career opportunities at eudext and be part of building innovative software solutions.',
};

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
  benefits: string[];
}

const jobPositions: JobPosition[] = [
  // {
  //   id: '1',
  //   title: 'Senior Full-Stack Developer',
  //   department: 'Engineering',
  //   location: 'Remote',
  //   type: 'Full-time',
  //   description: 'We are looking for an experienced full-stack developer to join our team and work on exciting projects for our clients.',
  //   requirements: [
  //     '5+ years of experience in web development',
  //     'Proficiency in React, Next.js, and Node.js',
  //     'Experience with TypeScript and modern JavaScript',
  //     'Knowledge of cloud platforms (AWS, Azure, or GCP)',
  //     'Strong problem-solving and communication skills'
  //   ],
  //   benefits: [
  //     'Competitive salary and equity',
  //     'Flexible working hours',
  //     'Remote work opportunities',
  //     'Professional development budget',
  //     'Health and dental insurance',
  //     'Unlimited vacation policy'
  //   ]
  // },
];

export default function CareersPage() {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Join Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re building the future of software development, and we need talented individuals to join us on this journey. 
              If you&apos;re passionate about technology and want to work on exciting projects, we&apos;d love to hear from you.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="mt-20">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Why Work at eudext?
              </h2>
            </div>
            
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  icon: '🚀',
                  title: 'Innovation First',
                  description: 'Work on cutting-edge projects using the latest technologies and methodologies.'
                },
                {
                  icon: '🌍',
                  title: 'Global Impact',
                  description: 'Build solutions that make a real difference for clients around the world.'
                },
                {
                  icon: '👥',
                  title: 'Collaborative Culture',
                  description: 'Join a team of passionate professionals who support and learn from each other.'
                },
                {
                  icon: '📈',
                  title: 'Growth Opportunities',
                  description: 'Continuous learning and career development opportunities with mentorship programs.'
                },
                {
                  icon: '⚖️',
                  title: 'Work-Life Balance',
                  description: 'Flexible schedules and remote work options to maintain a healthy work-life balance.'
                },
                {
                  icon: '🎯',
                  title: 'Purpose-Driven',
                  description: 'Work on meaningful projects that solve real-world problems and create value.'
                }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mt-32">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Open Positions
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                Explore our current openings and find the perfect role for you
              </p>
            </div>
            
            {jobPositions.length > 0 ? (
              <div className="space-y-8">
                {jobPositions.map((job) => (
                  <div key={job.id} className="bg-white rounded-2xl shadow-sm ring-1 ring-gray-900/5 p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <span className="font-medium">Department:</span>
                            <span className="ml-1">{job.department}</span>
                          </span>
                          <span className="flex items-center">
                            <span className="font-medium">Location:</span>
                            <span className="ml-1">{job.location}</span>
                          </span>
                          <span className="flex items-center">
                            <span className="font-medium">Type:</span>
                            <span className="ml-1">{job.type}</span>
                          </span>
                        </div>
                      </div>
                      <div className="mt-4 lg:mt-0">
                        <button className="rounded-md bg-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors">
                          Apply Now
                        </button>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{job.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {job.requirements.map((req, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <svg className="w-4 h-4 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {job.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start text-sm text-gray-600">
                              <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="mx-auto max-w-md">
                  <div className="text-6xl mb-6">🔍</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    No Open Positions
                  </h3>
                  <p className="text-gray-600 mb-8">
                    We don&apos;t have any open positions at the moment, but we&apos;re always interested in hearing from talented individuals. 
                    Feel free to send us your resume using the form below.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>Check back soon for new opportunities</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Application Form */}
          <div className="mt-32 bg-gray-50 rounded-2xl p-8 sm:p-12">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                Don&apos;t see the right role?
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-600">
                We&apos;re always looking for talented individuals. Send us your resume and tell us how you&apos;d like to contribute to our team.
              </p>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
