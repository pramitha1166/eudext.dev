import Layout from '@/components/Layout';
import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blog';

export default function BlogPage() {
  return (
    <Layout>
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Blog
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Thoughts, tutorials, and insights about web development, technology, and the industry. 
              Sharing knowledge and experiences from my journey as a developer.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            {blogPosts.length > 0 ? (
              <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
                {blogPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="mx-auto max-w-md">
                  <div className="text-6xl mb-6">📝</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    No Blog Posts Yet
                  </h3>
                  <p className="text-gray-600 mb-8">
                    I&apos;m working on creating valuable content for you. Check back soon for articles about web development, 
                    technology insights, and industry trends.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>New posts coming soon</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export function generateMetadata() {
  return {
    title: 'Blog - eudext.dev',
    description: 'Read my latest articles about web development, technology insights, and industry trends.',
  };
}
