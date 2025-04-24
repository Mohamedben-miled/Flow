'use client';

import Link from 'next/link';
import {useRef, useEffect, useState} from 'react';
import Image from 'next/image';
import {cn} from '@/lib/utils';

export default function Navigation() {
  const [activeSection, setActiveSection] = useState('home');
  const sections = ['home', 'features', 'pricing', 'gallery', 'contact'];
  const sectionRefs = {
    home: useRef(null),
    features: useRef(null),
    pricing: useRef(null),
    gallery: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
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
      sections.forEach(section => {
        if (sectionRefs[section].current) {
          observer.unobserve(sectionRefs[section].current);
        }
      });
    };
  }, []);

  return (
    <nav className="bg-background shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/flow-logo-no-background.png"
            alt="Flow Workspace Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-xl font-bold">Flow Workspace</span>
        </Link>
        <div className="flex space-x-4">
          {sections.map(section => (
            <Link
              key={section}
              href={`#${section}`}
              className={cn(
                'hover:text-green-500 transition-colors duration-300',
                activeSection === section
                  ? 'text-green-500 font-semibold'
                  : 'text-foreground'
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
