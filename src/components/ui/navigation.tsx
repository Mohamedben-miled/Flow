'use client';

import Link from 'next/link';

export default function Navigation() {
  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetId = (event.currentTarget as HTMLAnchorElement).getAttribute('href');
    if (targetId) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold" onClick={handleNavClick}>
          Flow Workspace
        </Link>
        <div className="flex space-x-4">
          <Link href="#home" onClick={handleNavClick} className="hover:text-accent">
            Home
          </Link>
          <Link href="#features" onClick={handleNavClick} className="hover:text-accent">
            Features
          </Link>
          <Link href="#pricing" onClick={handleNavClick} className="hover:text-accent">
            Pricing
          </Link>
          <Link href="#gallery" onClick={handleNavClick} className="hover:text-accent">
            Gallery
          </Link>
          <Link href="#contact" onClick={handleNavClick} className="hover:text-accent">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
