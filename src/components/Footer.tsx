import Link from 'next/link';
import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div>
              <span className="text-2xl font-bold text-white">eudext.dev</span>
              <p className="mt-4 text-sm leading-6 text-gray-300">
                Building innovative web solutions and sharing knowledge through development.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com" className="text-gray-400 hover:text-gray-300 transition-colors">
                <span className="sr-only">GitHub</span>
                <GithubIcon className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-gray-300 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <LinkedinIcon className="h-6 w-6" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-gray-300 transition-colors">
                <span className="sr-only">Twitter</span>
                <TwitterIcon className="h-6 w-6" />
              </a>
              <a href="mailto:contact@eudext.dev" className="text-gray-400 hover:text-gray-300 transition-colors">
                <span className="sr-only">Email</span>
                <MailIcon className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Navigation</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      About
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Connect</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <a href="https://github.com" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="/resume.pdf" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} eudext.dev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
