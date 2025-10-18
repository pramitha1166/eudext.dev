import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import ProjectCard from '@/components/ProjectCard';
import BlogCard from '@/components/BlogCard';
import ServiceCard from '@/components/ServiceCard';
import { projects } from '@/data/projects';
import { blogPosts } from '@/data/blog';
import { services } from '@/data/services';
import Link from 'next/link';

export default function Home() {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 3);
  const recentBlogPosts = blogPosts.slice(0, 3);
  const featuredServices = services.slice(0, 6);

  return (
    <Layout>
      <Hero />
      
      {/* Services Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Our Services</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              What We Do Best
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We offer comprehensive software development services to help your business thrive in the digital world.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition-colors"
            >
              View all services
            </Link>
          </div>
        </div>
      </div>
      
      {/* Recent Works Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-600">Recent Works</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Latest Projects
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Explore our recent client projects that showcase our expertise in delivering innovative software solutions.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              View all projects
            </Link>
          </div>
        </div>
      </div>
      
      {/* Recent Blog Posts Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-blue-600">Latest Articles</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              From the Blog
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Sharing insights, tutorials, and thoughts about web development and technology.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {recentBlogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link
              href="/blog"
              className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
            >
              Read more articles
            </Link>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let&apos;s work together
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Have a project in mind? I&apos;d love to hear about it and see how we can bring your ideas to life.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 transition-colors"
              >
                Get in touch
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-blue-600 transition-colors"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}