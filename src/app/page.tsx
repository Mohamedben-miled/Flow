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
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <section id="home" className="text-center">
        <Image
          src="https://picsum.photos/1200/400"
          width={1200}
          height={400}
          alt="Flow Coworking Space"
          className="rounded-lg shadow-md mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Flow Coworking Space
        </h1>
        <p className="text-lg mb-8">
          Step into Flow, where productivity blossoms in a vibrant, plant-filled
          environment. Our coworking space in Soukra is designed to inspire
          creativity and foster a sense of community. Join us and watch your
          ideas grow!
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Flow?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-2">
              Inspiring Green Spaces
            </h3>
            <p className="text-muted-foreground">
              Surround yourself with lush greenery and natural light, creating a
              refreshing and energizing workspace.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">
              Ergonomic Comfort
            </h3>
            <p className="text-muted-foreground">
              Enjoy comfortable, ergonomic workstations designed to support your
              well-being and boost productivity.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">
              Community & Collaboration
            </h3>
            <p className="text-muted-foreground">
              Connect with like-minded professionals, share ideas, and
              collaborate in a supportive and inspiring atmosphere.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="rounded-lg border shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Day Pass</h2>
            <p className="text-4xl font-bold mb-4">10 TND/day</p>
            <p className="text-muted-foreground">
              Experience Flow for a day and enjoy all our amenities.
            </p>
            <Link
              href="#contact"
              className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full"
            >
              Book Now
            </Link>
          </div>
          <div className="rounded-lg border shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Monthly Membership</h2>
            <p className="text-4xl font-bold mb-4">250 TND/month</p>
            <p className="text-muted-foreground">
              Become a part of our thriving community with a monthly
              membership.
            </p>
            <Link
              href="#contact"
              className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full"
            >
              Sign Up
            </Link>
          </div>
          <div className="rounded-lg border shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Meeting Room</h2>
            <p className="text-4xl font-bold mb-4">10 TND/hour</p>
            <p className="text-muted-foreground">
              Host your meetings in our well-equipped, plant-adorned meeting
              room.
            </p>
            <Link
              href="#contact"
              className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full"
            >
              Reserve Now
            </Link>
          </div>
          <div className="rounded-lg border shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Call Boxes</h2>
            <p className="text-4xl font-bold mb-4">Free</p>
            <p className="text-muted-foreground">
              Enjoy private, soundproof call boxes surrounded by calming
              greenery.
            </p>
            <button className="mt-4 bg-muted text-foreground py-2 px-4 rounded-md w-full disabled">
              Available
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
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
      <section id="contact" className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
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
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <p>
              <strong>Address:</strong> Soukra, Ariana, Tunisia
            </p>
            <p>
              <strong>Email:</strong> info@flowcowork.com
            </p>
            <p>
              <strong>Phone:</strong> +216 12 345 678
            </p>
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

