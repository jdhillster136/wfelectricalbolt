import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import AccreditedPartners from '../components/AccreditedPartners';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const residentialImages = [
  '/whatsapp_image_2026-01-27_at_20.40.48_(1) copy copy copy.jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.48 copy copy copy.jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.49_(1) copy copy copy.jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.50_(1) copy copy copy.jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.47 copy copy copy.jpeg',
];

const rupertMuseumImages = [
  '/whatsapp_image_2026-01-27_at_20.40.14_(2).jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.15.jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.16.jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.13_(2).jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.14_(1).jpeg',
];

const lainsbergClinicImages = [
  '/whatsapp_image_2026-01-27_at_20.40.30.jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.31_(1).jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.31_(3).jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.31.jpeg',
  '/whatsapp_image_2026-01-27_at_20.40.30_(2).jpeg',
];

const Gallery: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const allImages = [...residentialImages, ...rupertMuseumImages, ...lainsbergClinicImages];

  useEffect(() => {
    if (lightboxOpen) {
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setLightboxOpen(false);
        if (e.key === 'ArrowLeft') handleLightboxNavigate('prev');
        if (e.key === 'ArrowRight') handleLightboxNavigate('next');
      };

      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'unset';
      };
    }
  }, [lightboxOpen]);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxNavigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : allImages.length - 1));
    } else {
      setLightboxIndex((prev) => (prev < allImages.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="animate-fade-in pt-32 pb-20">
      <SEO
        title="Gallery"
        description="View our portfolio of electrical projects in Cape Town. Residential lighting, commercial installations, and neat DB board upgrades."
        keywords="Electrical Gallery, Lighting Projects, Electrical Installations Cape Town, Recent Work W&F Electrical"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6 tracking-tight">Our Portfolio</h1>
          <p className="text-brand-secondary max-w-2xl mx-auto font-light text-lg">
            Visual proof of our commitment to excellence. Clean lines, safety-first installations, and high-end finishes.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-8">Residential Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialImages.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-stone-200 aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <img
                  src={img}
                  alt={`Residential project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-8">Rupert Museum</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rupertMuseumImages.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-stone-200 aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick(residentialImages.length + index)}
              >
                <img
                  src={img}
                  alt={`Rupert Museum project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-8">Lainsberg Clinic</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {lainsbergClinicImages.map((img, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-stone-200 aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => handleImageClick(residentialImages.length + rupertMuseumImages.length + index)}
              >
                <img
                  src={img}
                  alt={`Lainsberg Clinic project ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <AccreditedPartners />
        </div>
      </div>

      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => handleLightboxNavigate('prev')}
            className="absolute left-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => handleLightboxNavigate('next')}
            className="absolute right-4 z-10 p-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div className="max-w-7xl max-h-[90vh] mx-4">
            <img
              src={allImages[lightboxIndex]}
              alt={`Project ${lightboxIndex + 1}`}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-2 text-white/70 text-sm">
              {lightboxIndex + 1} of {allImages.length}
            </div>
          </div>

          <div
            className="absolute inset-0 -z-10"
            onClick={() => setLightboxOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;