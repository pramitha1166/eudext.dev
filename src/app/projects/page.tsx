import Layout from '@/components/Layout';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            A showcase of innovative projects by Eudext.dev, reflecting our expertise in web and mobile development, design, and scalable software solutions. Each project highlights our commitment to solving real-world problems through creativity, technology, and smart engineering.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function generateMetadata() {
  return {
    title: 'Projects - eudext.dev',
    description: 'Explore my portfolio of web development projects, featuring modern applications built with React, Next.js, TypeScript, and more.',
  };
}
