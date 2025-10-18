'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
import { navigationItems } from '@/data/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show full header when at top or scrolling up
      if (currentScrollY < 10) {
        setIsScrolled(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show full header
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past threshold - show minimal header
        setIsScrolled(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Pill-shaped navigation container */}
      <div className="mx-auto max-w-7xl px-6 pt-4">
        <nav className="mx-auto flex items-center justify-between px-8 py-4 bg-white/80 backdrop-blur-md rounded-full shadow-lg border border-white/20" aria-label="Global">
          {/* Logo - Left aligned */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="eudext.dev"
                width={180}
                height={60}
                className="h-12 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          {/* Desktop navigation - centered */}
          <div className={`hidden lg:flex lg:items-center lg:justify-center lg:flex-1 lg:gap-x-10 transition-opacity duration-300 ${
            isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}>
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium leading-6 transition-colors relative ${
                    isActive 
                      ? 'text-purple-600' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-purple-600 rounded-full"></div>
                  )}
                </Link>
              );
            })}
          </div>
          
          {/* Contact button - right aligned */}
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className={`rounded-lg bg-gray-900 text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-300 shadow-sm flex items-center ${
                isScrolled 
                  ? 'px-3 py-3' 
                  : 'px-6 py-2.5 gap-2'
              }`}
            >
              {!isScrolled && <span className="text-sm font-semibold">Contact</span>}
              <PaperAirplaneIcon className="h-4 w-4" />
            </Link>
          </div>
        </nav>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="fixed inset-0 z-50" />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/logo.png"
                alt="eudext.dev"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigationItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                        isActive 
                          ? 'text-purple-600 bg-purple-50' 
                          : 'text-gray-900 hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
