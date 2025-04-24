
import Image from 'next/image';
import Link from 'next/link';

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
      <section className="text-center">
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
          Flow Coworking Space is your creative hub in Soukra – work, meet, and
          grow in a cozy, nature-inspired environment.
        </p>
        <Link
          href="/contact"
          className="bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors"
        >
          Contact Us
        </Link>
      </section>

      {/* Features Section (Example) */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-2">Comfortable Workstations</h3>
            <p className="text-muted-foreground">
              Ergonomic chairs and spacious desks to maximize your productivity.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">High-Speed Internet</h3>
            <p className="text-muted-foreground">
              Reliable and fast internet access to keep you connected.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-2">Meeting Rooms</h3>
            <p className="text-muted-foreground">
              Professional meeting rooms equipped with presentation facilities.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Day Pass */}
          <div className="rounded-lg border shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Day Pass</h2>
            <p className="text-4xl font-bold mb-4">10 TND/day</p>
            <p className="text-muted-foreground">
              Perfect for those who need a workspace for a day.
            </p>
            <Link
              href="/contact"
              className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full"
            >
              Book Now
            </Link>
          </div>

          {/* Monthly Membership */}
          <div className="rounded-lg border shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Monthly Membership</h2>
            <p className="text-4xl font-bold mb-4">250 TND/month</p>
            <p className="text-muted-foreground">
              Ideal for regular coworkers seeking a consistent workspace.
            </p>
            <Link
              href="/contact"
              className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full"
            >
              Sign Up
            </Link>
          </div>

          {/* Meeting Room */}
          <div className="rounded-lg border shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Meeting Room</h2>
            <p className="text-4xl font-bold mb-4">10 TND/hour</p>
            <p className="text-muted-foreground">
              Book our meeting room for team meetings or client presentations.
            </p>
            <Link
              href="/contact"
              className="mt-4 bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors w-full"
            >
              Reserve Now
            </Link>
          </div>

          {/* Call Boxes */}
          <div className="rounded-lg border shadow-md p-6">
            <h2 className="text-xl font-semibold mb-2">Call Boxes</h2>
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
      <section className="mt-16">
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
    </div>
  );
}
