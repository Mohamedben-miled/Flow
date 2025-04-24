
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-background shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Flow Workspace
        </Link>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-accent">
            Home
          </Link>
          <Link href="/contact" className="hover:text-accent">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
