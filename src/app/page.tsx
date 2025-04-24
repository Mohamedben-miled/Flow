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
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="relative text-center text-white py-24"
        style={{
          backgroundImage: `url('https://picsum.photos/1200/800?blur=5')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">A Really Good Place to Be</h1>
          <p className="text-lg mb-8">
            Your working solutions for productivity, mental comfort, and
            success.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            The Green Box - Where Productivity Meets Comfort.
          </h2>
          <div className="flex justify-center">
            <Image
              src="https://picsum.photos/600/400"
              alt="Features Diagram"
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
          <p className="text-gray-600 text-center mt-8">
            Located in the heart of El Menzah 6 and Le Kram, The Green Box is
            your ideal coworking space, a harmonious blend of urban energy and
            natural tranquility. We cater to creatives, entrepreneurs, and
            visionaries, offering a 24-hour coworking environment with great
            WI-FI, free food, and a student-friendly atmosphere.
          </p>
          <p className="text-gray-600 text-center mt-4">
            Whether you need a quiet shared office space or a private office,
            we've got you covered. Our community-centric approach fosters a
            vibrant, productive, and team-comradery workspace. Join us for an
            accessible and ultimate coworking experience rooted in support and
            community.
          </p>
          <div className="text-center mt-8">
            <Link
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="inline-block bg-accent text-accent-foreground py-2 px-6 rounded-full hover:bg-accent/80 transition-colors"
            >
              Next level up
            </Link>
          </div>
        </div>
      </section>

      {/* Space for Green Innovation */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            A space for green innovation
          </h2>
          <p className="text-gray-600">
            Inspire creativity and productivity with a harmonious coworking
            space.
          </p>
        </div>
      </section>

      {/* Our Happy Clients */}
      <section id="testimonials" className="py-16 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
            Our Happy Clients!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "Amazing coworking space! Great vibe, productive atmosphere."
              </p>
              <p className="text-gray-800 font-semibold mt-4">Nadia Hassen</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "A wonderful space and a wonderful team !! I highly recommend
                it. Liquidity, comfort, and impeccable service. Thank you
                Green Box team !! See you soon :-)."
              </p>
              <p className="text-gray-800 font-semibold mt-4">
                Heni Ksontini Inga
              </p>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "Best co-working space in town."
              </p>
              <p className="text-gray-800 font-semibold mt-4">Firas Sassi</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reservation */}
      <section id="reservation" className="py-16 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Reservation
          </h2>
          <p className="text-gray-600">
            To make a reservation or learn more about our services, contact us
            today!
          </p>
          <Link
            href="#contact"
            onClick={() => handleNavClick('contact')}
            className="inline-block bg-accent text-accent-foreground py-2 px-6 rounded-full hover:bg-accent/80 transition-colors mt-4"
          >
            Make a space
          </Link>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Full-time resources
          </h2>
          <p className="text-gray-600">Menzah 6 +216 92 203 556</p>
          <p className="text-gray-600">La Marsa +216 92 203 117</p>
          <p className="text-gray-600">For any claim +216 90 203 724</p>
        </div>
      </section>
    </div>
  );
}
