import React from 'react';
import SEO from '../components/SEO';

const projects = [
  { id: 1, title: "Modern Villa Lighting", category: "Residential", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2700&auto=format&fit=crop" },
  { id: 2, title: "Corporate Office Hub", category: "Commercial", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop" },
  { id: 3, title: "Clean DB Board Install", category: "Maintenance", img: "https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=2670&auto=format&fit=crop" },
  { id: 4, title: "Industrial Generator", category: "Installation", img: "https://images.unsplash.com/photo-1565514020125-998ac5663677?q=80&w=2670&auto=format&fit=crop" },
  { id: 5, title: "Kitchen Renovation", category: "Residential", img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2668&auto=format&fit=crop" },
  { id: 6, title: "Retail Lighting", category: "Commercial", img: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?q=80&w=2676&auto=format&fit=crop" },
];

const Gallery: React.FC = () => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative overflow-hidden rounded-2xl bg-stone-200 aspect-[4/3] shadow-md hover:shadow-xl transition-all duration-300">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/60 transition-colors duration-300 flex flex-col justify-end p-8">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="text-brand-primary text-xs font-bold uppercase tracking-widest mb-1 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-white">{project.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Gallery;