'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  Coffee,
  Wifi,
  Users,
  Calendar,
  Leaf,
  Lightbulb,
  Flower2,
  Monitor,
  ScrollText,
} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';
import {cn} from '@/lib/utils';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1612832021644-776277799697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Coworking Space Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    alt: 'Comfortable Chairs',
  },
  {
    src: 'https://images.unsplash.com/photo-1587392548910-5e0379971a00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Meeting Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1521730306744-b369354336c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Kitchen Area',
  },
  {
    src: 'https://images.unsplash.com/photo-1531297489050-5e015efca896?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    alt: 'Gaming Area',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744166-e5914c36a581?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Workspace',
  },
];

export default function Home() {
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const targetId = entry.target.id;
            setActiveSection(targetId);
          }
        });
      },
      {
        rootMargin: '-80px 0px', // Adjust as needed
        threshold: 0.5,
      }
    );

    const sections = [
      featuresRef,
      pricingRef,
      galleryRef,
      contactRef,
    ].filter(ref => ref.current);

    sections.forEach(section => observer.observe(section.current));

    return () => {
      sections.forEach(section => observer.unobserve(section.current));
    };
  }, []);

  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="container mx-auto px-4 py-16">
  {/* Hero Section */}
  <section
      id="home"
      className="text-center mb-16 relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 group"
  >
        <Image
          src="/Assets/6af0d27f-ff20-4c68-9675-680c98520a3d.jpg"
          width={1200}
          height={400}
          alt="Flow Coworking Space"
          className="object-cover w-full h-full rounded-lg transition-transform duration-500 transform hover:scale-105"
        />
        <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg animate-fade-in">
            Welcome to Flow Coworking Space
          </h1>
          <p className="text-lg mb-8 drop-shadow-lg animate-fade-in">
            Your creative hub in Soukra – work, meet, and grow in a cozy,
            nature-inspired environment. <Leaf className="inline-block" />
          </p>
          <Link
            href="#contact"
            className="bg-primary text-primary-foreground py-2 px-6 rounded-full hover:bg-primary/80 transition-colors flex items-center animate-bounce"
          >
            Book Your Spot
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className="mt-16 scroll-mt-20 animate-slide-in"
      >
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
          <Lightbulb className="mr-2 text-primary" /> Why Choose Flow?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
            <h3 className="text-xl font-medium mb-2 flex items-center">
              <Flower2 className="mr-2 text-primary" /> Inspiring Green Spaces
            </h3>
            <p className="text-muted-foreground">
              Surround yourself with lush greenery and natural light, creating a
              refreshing and energizing workspace.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
            <h3 className="text-xl font-medium mb-2 flex items-center">
              <Users className="mr-2 text-primary" /> Community &amp;
              Collaboration
            </h3>
            <p className="text-muted-foreground">
              Connect with like-minded professionals, share ideas, and
              collaborate in a supportive atmosphere.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-border">
            <h3 className="text-xl font-medium mb-2 flex items-center">
              <Wifi className="mr-2 text-primary" /> High-Speed Internet
            </h3>
            <p className="text-muted-foreground">
              Stay connected with reliable and fast internet access.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        ref={pricingRef}
        className="mt-24 scroll-mt-20 animate-slide-in"
      >
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
          <Calendar className="mr-2 text-primary" /> Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="rounded-lg border shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-border">
            <h2 className="text-xl font-semibold mb-2">Day Pass</h2>
            <p className="text-4xl font-bold mb-4">10 TND/day</p>
            <p className="text-muted-foreground">
              Experience Flow for a day and enjoy all our amenities.
            </p>
            <Link
              href="#contact"
              className="mt-4 bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/80 transition-colors w-full flex items-center justify-center"
            >
              Book Now <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          <div className="rounded-lg border shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-border">
            <h2 className="text-xl font-semibold mb-2">Monthly Membership</h2>
            <p className="text-4xl font-bold mb-4">250 TND/month</p>
            <p className="text-muted-foreground">
              Become a part of our thriving community with a monthly
              membership.
            </p>
            <Link
              href="#contact"
              className="mt-4 bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/80 transition-colors w-full flex items-center justify-center"
            >
              Sign Up <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          <div className="rounded-lg border shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-border">
            <h2 className="text-xl font-semibold mb-2">Meeting Room</h2>
            <p className="text-4xl font-bold mb-4">10 TND/hour</p>
            <p className="text-muted-foreground">
              Host your meetings in our well-equipped meeting room.
            </p>
            <Link
              href="#contact"
              className="mt-4 bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/80 transition-colors w-full flex items-center justify-center"
            >
              Reserve Now <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          <div className="rounded-lg border shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border-border">
            <h2 className="text-xl font-semibold mb-2">Call Boxes</h2>
            <p className="text-4xl font-bold mb-4">Free</p>
            <p className="text-muted-foreground">
              Enjoy private, soundproof call boxes.
            </p>
            <button className="mt-4 bg-primary text-primary-foreground py-2 px-4 rounded-md w-full">
              Available
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        ref={galleryRef}
        className="mt-24 scroll-mt-20 animate-slide-in"
      >
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
          <Leaf className="mr-2 text-primary" /> Photo Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-border"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        ref={contactRef}
        className="mt-24 scroll-mt-20 animate-slide-in"
      >
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
          <MapPin className="mr-2 text-primary" /> Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-md py-2 px-3 mb-2 focus:ring-primary focus:border-primary transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-md py-2 px-3 mb-2 focus:ring-primary focus:border-primary transition-colors duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border rounded-md py-2 px-3 mb-4 focus:ring-primary focus:border-primary transition-colors duration-300"
              ></textarea>
              <button className="bg-primary text-primary-foreground py-2 px-4 rounded-md hover:bg-primary/80 transition-colors flex items-center">
                Send Message
                <Mail className="ml-2" size={16} />
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="flex items-center mb-2">
              <MapPin className="mr-2 text-primary" />
              <strong>Address:</strong> Soukra, Ariana, Tunisia
            </p>
            <p className="flex items-center mb-2">
              <Mail className="mr-2 text-primary" />
              <strong>Email:</strong> info@flowcowork.com
            </p>
            <p className="flex items-center mb-2">
              <Phone className="mr-2 text-primary" />
              <strong>Phone:</strong> +216 12 345 678
            </p>
            <div className="mt-4 rounded-lg overflow-hidden shadow-md border border-border">
              <Image
                src="https://picsum.photos/400/300"
                width={400}
                height={300}
                alt="Map of Soukra, Ariana, Tunisia"
                className="transition-transform duration-500 transform hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


