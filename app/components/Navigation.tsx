'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const detectActiveSection = () => {
      // Check if on projects page
      if (pathname === '/projects') {
        setActiveSection('projects');
        return;
      }

      // On home page, detect which section is in view
      const aboutSection = document.getElementById('about');

      if (aboutSection) {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        
        // If about section is in upper half of viewport
        if (aboutTop < window.innerHeight / 2) {
          setActiveSection('about');
        } else {
          setActiveSection('home');
        }
      } else {
        setActiveSection('home');
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      detectActiveSection();
    };

    // Call once on mount to set initial state
    detectActiveSection();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const links = [
    { name: 'Home', path: '/', id: 'home' },
    { name: 'About', path: '/#about', id: 'about' },
    { name: 'Projects', path: '/projects', id: 'projects' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <nav
        className={`transition-all duration-500 ease-in-out flex items-center justify-between border border-transparent px-8 py-3 w-full max-w-5xl ${
          isScrolled 
            ? 'bg-zinc-900/80 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]' 
            : 'bg-transparent'
        }`}
      >
        {/* Logo / Name */}
        <Link 
          href="/" 
          className="group relative flex items-center gap-2"
        >
          <span className="text-xl font-bold tracking-tighter text-white">
            Gabriel <span className="text-[#ea580c]">Caribé</span>
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`relative text-sm font-medium transition-colors hover:text-[#ea580c] ${
                activeSection === link.id ? 'text-white' : 'text-zinc-400'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#ea580c] rounded-full" />
              )}
            </Link>
          ))}
          
          {/* Action Button */}
          <Link
            href="/#contact"
            className="ml-4 px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-[#ea580c] hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Indicator (Small screen) */}
        <div className="md:hidden text-zinc-400">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
           </svg>
        </div>
      </nav>
    </div>
  );
}