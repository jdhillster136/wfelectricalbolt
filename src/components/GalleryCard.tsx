import React from 'react';
import { GalleryImage } from '../lib/supabase';

interface GalleryCardProps {
  image: GalleryImage;
  onClick: () => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ image, onClick }) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-stone-200 aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      <img
        src={image.image_url}
        alt={image.title || 'Gallery image'}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        loading="lazy"
      />
      {image.title && (
        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/60 transition-colors duration-300 flex flex-col justify-end p-6">
          <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
            <h3 className="text-lg font-display font-bold text-white">{image.title}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryCard;
