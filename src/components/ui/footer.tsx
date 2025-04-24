import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-4 mb-2">
          <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <Facebook className="h-6 w-6" />
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6" />
          </Link>
        </div>
        <p>&copy; {new Date().getFullYear()} Flow Workspace. All rights reserved.</p>
        <div className="flex items-center justify-center mt-2">
          <MapPin className="mr-1" />
          <p>Soukra, Ariana, Tunisia</p>
        </div>
        <div className="flex items-center justify-center mt-2">
          <Clock className="mr-1" />
          <p>Open 24/7</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
