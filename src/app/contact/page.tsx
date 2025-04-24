
import Image from 'next/image';

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
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

        {/* Contact Information and Map */}
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

          {/* Map */}
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
    </div>
  );
}
