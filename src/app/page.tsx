'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  Leaf,
  Lightbulb,
  Coffee,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const galleryImages = [
  {
    src: 'https://picsum.photos/id/10/800/600',
    alt: 'Coworking Space Interior',
  },
  {
    src: 'https://picsum.photos/id/20/800/600',
    alt: 'Comfortable Chairs',
  },
  {
    src: 'https://picsum.photos/id/30/800/600',
    alt: 'Meeting Room',
  },
  {
    src: 'https://picsum.photos/id/40/800/600',
    alt: 'Kitchen Area',
  },
  {
    src: 'https://picsum.photos/id/50/800/600',
    alt: 'Gaming Area',
  },
  {
    src: 'https://picsum.photos/id/60/800/600',
    alt: 'Workspace',
  },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

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
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section
        id="home"
        className="text-center py-16"
        style={{
          background: 'linear-gradient(135deg, #e0f2f1, #f0fdfa)',
        }}
      >
        <Image
          src="https://picsum.photos/1200/400"
          width={1200}
          height={400}
          alt="Flow Coworking Space"
          className="rounded-lg shadow-md mb-8"
          style={{ objectFit: 'cover' }}
        />
        <h1 className="text-4xl font-bold mb-4 text-primary">
          Welcome to Flow Coworking Space
        </h1>
        <p className="text-lg mb-8 text-gray-700">
          Hey there! We're Flow, your friendly neighborhood coworking space in
          Soukra. We've created a cozy, nature-inspired environment where you
          can work, meet, and grow. Come join our community!
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-16 py-8">
        <h2 className="text-2xl font-semibold mb-4 text-secondary text-center">
          Why Choose Flow?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-2 text-flow-yellow flex items-center">
              <Lightbulb className="mr-2" /> Comfortable Workstations
            </h3>
            <p className="text-muted-foreground">
              Ergonomic chairs and spacious desks to maximize your productivity.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-2 text-flow-orange flex items-center">
              <Leaf className="mr-2" /> High-Speed Internet
            </h3>
            <p className="text-muted-foreground">
              Reliable and fast internet access to keep you connected.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-medium mb-2 text-flow-purple flex items-center">
              <Coffee className="mr-2" /> Meeting Rooms
            </h3>
            <p className="text-muted-foreground">
              Professional meeting rooms equipped with presentation facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="mt-16 py-8"
        style={{ background: '#f8f8f8' }}
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-flow-pink">
          Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Day Pass */}
          <div className="rounded-lg border shadow-md p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-primary">
              Day Pass
            </h2>
            <p className="text-4xl font-bold mb-4">10 TND/day</p>
            <p className="text-muted-foreground">
              Perfect for those who need a workspace for a day.
            </p>
            <Link
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full"
            >
              Book Now
            </Link>
          </div>

          {/* Monthly Membership */}
          <div className="rounded-lg border shadow-md p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-primary">
              Monthly Membership
            </h2>
            <p className="text-4xl font-bold mb-4">250 TND/month</p>
            <p className="text-muted-foreground">
              Ideal for regular coworkers seeking a consistent workspace.
            </p>
            <Link
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full"
            >
              Sign Up
            </Link>
          </div>

          {/* Meeting Room */}
          <div className="rounded-lg border shadow-md p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-primary">
              Meeting Room
            </h2>
            <p className="text-4xl font-bold mb-4">10 TND/hour</p>
            <p className="text-muted-foreground">
              Book our meeting room for team meetings or client presentations.
            </p>
            <Link
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full"
            >
              Reserve Now
            </Link>
          </div>

          {/* Call Boxes */}
          <div className="rounded-lg border shadow-md p-6 bg-white">
            <h2 className="text-xl font-semibold mb-2 text-primary">
              Call Boxes
            </h2>
            <p className="text-4xl font-bold mb-4">Free</p>
            <p className="text-muted-foreground">
              Enjoy private call boxes with free access for all members.
            </p>
            <button className="mt-4 bg-muted text-foreground py-2 px-4 rounded-md w-full disabled">
              Available
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="mt-16 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-secondary">
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md transform transition-transform hover:scale-105"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-16 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-secondary">
              Send us a message
            </h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-md py-2 px-3 mb-2"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-md py-2 px-3 mb-2"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border rounded-md py-2 px-3 mb-4"
              ></textarea>
              <button className="bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information and Map */}
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-4 text-secondary">
              Contact Information
            </h2>
            <p>
              <strong>Address:</strong> Soukra, Ariana, Tunisia
            </p>
            <p>
              <strong>Email:</strong> info@flowcowork.com
            </p>
            <p>
              <strong>Phone:</strong> +216 12 345 678
            </p>

            {/* Map */}
            <div className="mt-4 rounded-lg overflow-hidden shadow-md">
              <Image
                src="https://picsum.photos/400/300"
                width={400}
                height={300}
                alt="Map of Soukra, Ariana, Tunisia"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
