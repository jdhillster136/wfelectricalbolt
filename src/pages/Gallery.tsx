import React, { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import AccreditedPartners from '../components/AccreditedPartners';
import CategoryFilter from '../components/CategoryFilter';
import GalleryGrid from '../components/GalleryGrid';
import GalleryLightbox from '../components/GalleryLightbox';
import { supabase, GalleryCategory, GalleryImage } from '../lib/supabase';

const Gallery: React.FC = () => {
  const [categories, setCategories] = useState<GalleryCategory[]>([]);
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    fetchGalleryData();
  }, []);

  useEffect(() => {
    if (activeCategory === null) {
      setFilteredImages(images);
    } else {
      setFilteredImages(images.filter(img => img.category_id === activeCategory));
    }
  }, [activeCategory, images]);

  const fetchGalleryData = async () => {
    try {
      setLoading(true);
      setError(null);

      const { data: categoriesData, error: categoriesError } = await supabase
        .from('gallery_categories')
        .select('*')
        .order('display_order', { ascending: true });

      if (categoriesError) throw categoriesError;

      const { data: imagesData, error: imagesError } = await supabase
        .from('gallery_images')
        .select('*')
        .order('display_order', { ascending: true });

      if (imagesError) throw imagesError;

      setCategories(categoriesData || []);
      setImages(imagesData || []);
    } catch (err) {
      console.error('Error fetching gallery data:', err);
      setError('Failed to load gallery. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handleLightboxNavigate = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setLightboxIndex((prev) => (prev > 0 ? prev - 1 : filteredImages.length - 1));
    } else {
      setLightboxIndex((prev) => (prev < filteredImages.length - 1 ? prev + 1 : 0));
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

        {loading && (
          <div className="text-center py-20">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-brand-primary border-r-transparent"></div>
            <p className="mt-4 text-brand-secondary">Loading gallery...</p>
          </div>
        )}

        {error && (
          <div className="text-center py-20">
            <p className="text-red-600 text-lg">{error}</p>
            <button
              onClick={fetchGalleryData}
              className="mt-4 px-6 py-3 bg-brand-primary text-white rounded-full hover:bg-brand-accent transition-colors"
            >
              Try Again
            </button>
          </div>
        )}

        {!loading && !error && (
          <>
            {categories.length > 0 && (
              <CategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onCategoryChange={setActiveCategory}
              />
            )}

            {filteredImages.length === 0 && !loading && (
              <div className="text-center py-20">
                <p className="text-brand-secondary text-lg">
                  No projects to display yet. Check back soon for updates!
                </p>
              </div>
            )}

            {filteredImages.length > 0 && (
              <GalleryGrid
                images={filteredImages}
                onImageClick={handleImageClick}
              />
            )}
          </>
        )}

        <div className="mt-24">
          <AccreditedPartners />
        </div>
      </div>

      {lightboxOpen && (
        <GalleryLightbox
          images={filteredImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={handleLightboxNavigate}
        />
      )}
    </div>
  );
};

export default Gallery;