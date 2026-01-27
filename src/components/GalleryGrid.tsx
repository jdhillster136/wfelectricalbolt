import React from 'react';
import { GalleryImage } from '../lib/supabase';
import GalleryCard from './GalleryCard';

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ images, onImageClick }) => {
  if (images.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="text-brand-secondary text-lg">No images in this category yet.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <GalleryCard
          key={image.id}
          image={image}
          onClick={() => onImageClick(index)}
        />
      ))}
    </div>
  );
};

export default GalleryGrid;
