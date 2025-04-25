'use client';

import Link from 'next/link';
import {useRef, useEffect, useState} from 'react';
import Image from 'next/image';
import {cn} from '@/lib/utils';
import {Leaf} from 'lucide-react';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const sections = ['home', 'features', 'pricing', 'gallery', 'contact'];
  const sectionRefs = {
    home: useRef(null),
    features: useRef(null),
    pricing: useRef(null),
    gallery: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-50px 0px -50px 0px', // Offset to trigger earlier
        threshold: 0.5, // At least 50% of the section visible
      }
    );

    sections.forEach(section => {
      if (sectionRefs[section].current) {
        observer.observe(sectionRefs[section].current);
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => {
        if (sectionRefs[section].current) {
          observer.unobserve(sectionRefs[section].current);
        }
      });
    };
  }, []);

  return (
    <nav className={cn(
      "bg-background sticky top-0 z-10 transition-all duration-300",
      scrolled ? "shadow-lg py-2" : "shadow-md py-3"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center group">
          <Image
            src="/Assets/logo.png"
            alt="Flow Workspace Logo"
            width={150}
            height={50}
            className="mr-2 transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {sections.map(section => (
            <Link
              key={section}
              href={`#${section}`}
              className={cn(
                'transition-all duration-300 relative px-2 py-1 text-sm font-medium uppercase tracking-wider',
                activeSection === section
                  ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary after:transition-all after:duration-300'
                  : 'text-foreground hover:text-primary after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full'
              )}
              onClick={e => {
                e.preventDefault();
                if (sectionRefs[section].current) {
                  sectionRefs[section].current.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex space-x-3">
            {sections.map(section => (
              <Link
                key={section}
                href={`#${section}`}
                className={cn(
                  'transition-colors duration-300 flex items-center text-xs',
                  activeSection === section
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                )}
                onClick={e => {
                  e.preventDefault();
                  if (sectionRefs[section].current) {
                    sectionRefs[section].current.scrollIntoView({
                      behavior: 'smooth',
                    });
                  }
                }}
              >
                {section.charAt(0).toUpperCase().slice(0, 1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
      {sections.map(section => (
        <div
          key={section}
          ref={sectionRefs[section]}
          id={section}
          style={{position: 'absolute', top: '-150px'}}
        />
      ))}
    </nav>
  );
}