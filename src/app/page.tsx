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
  Wifi,
  Users,
  Calendar,
  Phone,
  Mail,
  ArrowRight,
} from 'lucide-react';
import {useEffect, useRef, useState} from 'react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1497366754035-01bca917ab9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Coworking Space Interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47a04ca0ecd8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Comfortable Chairs',
  },
  {
    src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
    alt: 'Meeting Room',
  },
  {
    src: 'https://images.unsplash.com/photo-1505028615767-21bb645cc2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
    alt: 'Kitchen Area',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744166-e35939358c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Gaming Area',
  },
  {
    src: 'https://images.unsplash.com/photo-1576224035434-557e4a979c51?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    alt: 'Workspace',
  },
];

export default function Home() {
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const galleryRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = ref => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section id="home" className="text-center mb-24">
        <div className="relative rounded-lg overflow-hidden shadow-md mb-8">
          <Image
            src="https://images.unsplash.com/photo-1612832021644-776277799697?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            width={1200}
            height={500}
            alt="Flow Coworking Space"
            className="object-cover w-full h-full rounded-lg transition-transform duration-500 transform hover:scale-105"
          />
          <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
            <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
              Welcome to Flow Coworking Space
            </h1>
            <p className="text-lg mb-8 drop-shadow-lg">
              Step into a vibrant, plant-filled environment where productivity
              blossoms.
            </p>
            <Link
              href="#contact"
              className="bg-green-500 text-white py-2 px-6 rounded-full hover:bg-green-700 transition-colors flex items-center"
            >
              Book Your Spot
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        ref={featuresRef}
        className="mt-16 scroll-mt-20"
      >
        <h2 className="text-2xl font-semibold mb-8 flex items-center justify-center text-center">
          <Lightbulb className="mr-2 text-green-500" /> Why Choose Flow?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-2 flex items-center">
              <Leaf className="mr-2 text-green-500" /> Inspiring Green Spaces
            </h3>
            <p className="text-muted-foreground">
              Surround yourself with lush greenery and natural light, creating a
              refreshing and energizing workspace.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-2 flex items-center">
              <Users className="mr-2 text-green-500" /> Community &
              Collaboration
            </h3>
            <p className="text-muted-foreground">
              Connect with like-minded professionals, share ideas, and
              collaborate in a supportive and inspiring atmosphere.
            </p>
          </div>
          <div className="p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-xl font-medium mb-2 flex items-center">
              <Wifi className="mr-2 text-green-500" /> High-Speed Internet
            </h3>
            <p className="text-muted-foreground">
              Stay connected with reliable and fast internet access.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" ref={pricingRef} className="mt-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
          <Calendar className="mr-2 text-green-500" /> Pricing Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="rounded-lg border shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Day Pass</h2>
            <p className="text-4xl font-bold mb-4">10 TND/day</p>
            <p className="text-muted-foreground">
              Experience Flow for a day and enjoy all our amenities.
            </p>
            <Link
              href="#contact"
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors w-full flex items-center justify-center"
            >
              Book Now <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          <div className="rounded-lg border shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Monthly Membership</h2>
            <p className="text-4xl font-bold mb-4">250 TND/month</p>
            <p className="text-muted-foreground">
              Become a part of our thriving community with a monthly
              membership.
            </p>
            <Link
              href="#contact"
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors w-full flex items-center justify-center"
            >
              Sign Up <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          <div className="rounded-lg border shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Meeting Room</h2>
            <p className="text-4xl font-bold mb-4">10 TND/hour</p>
            <p className="text-muted-foreground">
              Host your meetings in our well-equipped meeting room.
            </p>
            <Link
              href="#contact"
              className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors w-full flex items-center justify-center"
            >
              Reserve Now <ArrowRight className="ml-2" size={16} />
            </Link>
          </div>
          <div className="rounded-lg border shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl font-semibold mb-2">Call Boxes</h2>
            <p className="text-4xl font-bold mb-4">Free</p>
            <p className="text-muted-foreground">
              Enjoy private, soundproof call boxes.
            </p>
            <button className="mt-4 bg-muted text-foreground py-2 px-4 rounded-md w-full disabled">
              Available
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" ref={galleryRef} className="mt-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
          <Image
            src="/flow-logo-no-background.png"
            alt="Flow Workspace Logo"
            width={30}
            height={30}
            className="mr-2"
          />{' '}
          Photo Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
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
      <section id="contact" ref={contactRef} className="mt-24 scroll-mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
          <MapPin className="mr-2 text-green-500" /> Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <form>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-md py-2 px-3 mb-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-md py-2 px-3 mb-2 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full border rounded-md py-2 px-3 mb-4 focus:ring-green-500 focus:border-green-500 transition-colors duration-300"
              ></textarea>
              <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors flex items-center">
                Send Message
                <Mail className="ml-2" size={16} />
              </button>
            </form>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p className="flex items-center mb-2">
              <MapPin className="mr-2 text-green-500" />
              <strong>Address:</strong> Soukra, Ariana, Tunisia
            </p>
            <p className="flex items-center mb-2">
              <Mail className="mr-2 text-green-500" />
              <strong>Email:</strong> info@flowcowork.com
            </p>
            <p className="flex items-center mb-2">
              <Phone className="mr-2 text-green-500" />
              <strong>Phone:</strong> +216 12 345 678
            </p>
            <div className="mt-4 rounded-lg overflow-hidden shadow-md">
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
