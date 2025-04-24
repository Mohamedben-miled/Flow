'use client';

import Link from 'next/link';
import { useRef, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/flow-logo.png"
            alt="Flow Workspace Logo"
            width={50}
            height={50}
            className="mr-2"
          />
          <span className="text-xl font-bold">
            Flow Workspace
          </span>
        </Link>
        <div className="flex space-x-4">
          <Link href="#home" onClick={() => scrollToSection(homeRef)} className="hover:text-accent">
            Home
          </Link>
          <Link href="#features" onClick={() => scrollToSection(featuresRef)} className="hover:text-accent">
            Features
          </Link>
          <Link href="#pricing" onClick={() => scrollToSection(pricingRef)} className="hover:text-accent">
            Pricing
          </Link>
          <Link href="#gallery" onClick={() => scrollToSection(galleryRef)} className="hover:text-accent">
            Gallery
          </Link>
          <Link href="#contact" onClick={() => scrollToSection(contactRef)} className="hover:text-accent">
            Contact
          </Link>
        </div>
      </div>
      <div ref={homeRef} style={{ position: 'absolute', top: '-100px' }} />
      <div ref={featuresRef} style={{ position: 'absolute', top: '-100px' }} />
      <div ref={pricingRef} style={{ position: 'absolute', top: '-100px' }} />
      <div ref={galleryRef} style={{ position: 'absolute', top: '-100px' }} />
      <div ref={contactRef} style={{ position: 'absolute', top: '-100px' }} />
    </nav>
  );
}
