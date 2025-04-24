
import Image from 'next/image';

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

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Photo Gallery</h1>
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
    </div>
  );
}
