
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} Flow Workspace. All rights reserved.</p>
        <p>Soukra, Ariana, Tunisia</p>
      </div>
    </footer>
  );
};

export default Footer;
