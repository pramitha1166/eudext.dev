import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from 'lucide-react';
import Layout from '@/components/Layout';
import { projects } from '@/data/projects';
import { Metadata } from 'next';

interface ProjectDetailPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    return {
      title: 'Project Not Found - eudext.dev',
    };
  }

  return {
    title: `${project.title} - eudext.dev`,
    description: project.description,
  };
}

export default function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              href="/projects"
              className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeftIcon className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                {project.title}
              </h1>
              {project.featured && (
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Featured
                </span>
              )}
            </div>
            <p className="text-xl text-gray-600 mb-6">
              {project.description}
            </p>
            
            <div className="flex items-center gap-6">
              <span className="text-sm text-gray-500">
                Completed: {new Date(project.date).toLocaleDateString()}
              </span>
              <div className="flex space-x-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                  >
                    <GithubIcon className="h-4 w-4 mr-2" />
                    Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Project Images */}
          <div className="mb-12">
            {project.images && project.images.length > 1 ? (
              <div className="space-y-6">
                {/* Main Image */}
                <div className="aspect-video relative overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Image Gallery */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="aspect-video relative overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={image}
                        alt={`${project.title} - Screenshot ${index + 2}`}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="aspect-video relative overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>

          {/* Project Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
                <p className="text-gray-600 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-2xl p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Technologies Used</h3>
                <div className="space-y-3">
                  {project.technologies.map((tech) => (
                    <div
                      key={tech}
                      className="inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium bg-white text-gray-900 shadow-sm border border-gray-200 w-full justify-center"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Project Info</h4>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex justify-between">
                      <span>Status:</span>
                      <span className="font-medium text-green-600">Completed</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Date:</span>
                      <span className="font-medium">{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Type:</span>
                      <span className="font-medium">{project.featured ? 'Featured Project' : 'Standard Project'}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors text-center block"
                  >
                    Start Similar Project
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Related Projects */}
          <div className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects
                .filter(p => p.id !== project.id)
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group block bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={relatedProject.image}
                        alt={relatedProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                        {relatedProject.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedProject.description}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
