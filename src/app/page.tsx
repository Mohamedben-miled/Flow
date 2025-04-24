
import Image from 'next/image';
import Link from 'next/link';

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
          href="/booking"
          className="bg-accent text-accent-foreground py-2 px-4 rounded-md hover:bg-accent/80 transition-colors"
        >
          Book Your Spot
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
    </div>
  );
}

