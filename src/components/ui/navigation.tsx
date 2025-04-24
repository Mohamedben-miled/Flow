'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import Image from 'next/image'; // Import the Image component

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'features', 'pricing', 'gallery', 'contact'];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center" onClick={() => handleNavClick('home')}>
            <Image
              src="/flow-logo.png" // Path to your logo
              alt="Flow Workspace Logo"
              width={50} // Adjust size as needed
              height={50} // Adjust size as needed
              className="mr-2"
            />
          <span className="text-xl font-bold">
            Flow Workspace
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link
            href="#home"
            onClick={() => handleNavClick('home')}
            className={`hover:text-accent ${activeSection === 'home' ? 'text-accent' : ''}`}
          >
            Home
          </Link>
          <Link
            href="#features"
            onClick={() => handleNavClick('features')}
            className={`hover:text-accent ${activeSection === 'features' ? 'text-accent' : ''}`}
          >
            Features
          </Link>
          <Link
            href="#pricing"
            onClick={() => handleNavClick('pricing')}
            className={`hover:text-accent ${activeSection === 'pricing' ? 'text-accent' : ''}`}
          >
            Pricing
          </Link>
          <Link
            href="#gallery"
            onClick={() => handleNavClick('gallery')}
            className={`hover:text-accent ${activeSection === 'gallery' ? 'text-accent' : ''}`}
          >
            Gallery
          </Link>
          <Link
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className={`hover:text-accent ${activeSection === 'contact' ? 'text-accent' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
