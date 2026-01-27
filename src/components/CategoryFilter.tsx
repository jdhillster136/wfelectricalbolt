import React from 'react';
import { GalleryCategory } from '../lib/supabase';

interface CategoryFilterProps {
  categories: GalleryCategory[];
  activeCategory: number | null;
  onCategoryChange: (categoryId: number | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
          activeCategory === null
            ? 'bg-brand-primary text-white shadow-lg scale-105'
            : 'bg-stone-100 text-brand-secondary hover:bg-stone-200'
        }`}
      >
        All Projects
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 ${
            activeCategory === category.id
              ? 'bg-brand-primary text-white shadow-lg scale-105'
              : 'bg-stone-100 text-brand-secondary hover:bg-stone-200'
          }`}
        >
          {category.title}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
