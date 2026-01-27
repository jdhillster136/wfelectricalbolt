import React from 'react';

const AccreditedPartners: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-accent font-bold tracking-widest uppercase text-xs">Industry Recognition</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mt-3 mb-6">Accredited & Certified</h2>
          <p className="text-brand-secondary max-w-2xl mx-auto font-light">We are proud members and accredited partners with leading industry bodies.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-center justify-center">
          <div className="h-20 flex items-center justify-center">
            <img
              src="/783733bb-708b-4d0a-bbc3-ebd4d0102f47 copy copy.jpg"
              alt="NBCEI - National Black Contractors & Engineers Initiative"
              className="max-h-20 max-w-full object-contain filter hover:drop-shadow-lg transition-all"
              loading="lazy"
            />
          </div>
          <div className="h-20 flex items-center justify-center">
            <img
              src="/a8954f86-cfd5-4e8f-b523-a4b8eb32beb5 copy copy.jpg"
              alt="ECA - Electrical Contractors Association"
              className="max-h-20 max-w-full object-contain filter hover:drop-shadow-lg transition-all"
              loading="lazy"
            />
          </div>
          <div className="h-20 flex items-center justify-center">
            <img
              src="/e46ad208-77c2-44a4-bf69-0887ff384a03 copy copy.jpg"
              alt="Department of Labour - Republic of South Africa"
              className="max-h-20 max-w-full object-contain filter hover:drop-shadow-lg transition-all"
              loading="lazy"
            />
          </div>
          <div className="h-20 flex items-center justify-center">
            <img
              src="/3d3997ab-2f49-4e30-8752-bcfe52198c58 copy copy.png"
              alt="CIDB - Construction Industry Development Board"
              className="max-h-20 max-w-full object-contain filter hover:drop-shadow-lg transition-all"
              loading="lazy"
            />
          </div>
          <div className="h-20 flex items-center justify-center">
            <img
              src="/9f611420-e264-4cc2-b42a-9ff992e97127.jpg"
              alt="Central Supplier Database"
              className="max-h-20 max-w-full object-contain filter hover:drop-shadow-lg transition-all"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccreditedPartners;
