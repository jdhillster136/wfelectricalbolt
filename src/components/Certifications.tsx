import React from 'react';

const Certifications: React.FC = () => {
  const certs = [
    {
      name: "Labour Department",
      image: "/e46ad208-77c2-44a4-bf69-0887ff384a03.jpg",
      alt: "South African Department of Labour"
    },
    {
      name: "CIDB",
      image: "/3d3997ab-2f49-4e30-8752-bcfe52198c58.png",
      alt: "Construction Industry Development Board"
    },
    {
      name: "Central Supplier Database",
      image: "/9f611420-e264-4cc2-b42a-9ff992e97127.jpg",
      alt: "Central Supplier Database"
    },
    {
      name: "NBCEI",
      image: "/783733bb-708b-4d0a-bbc3-ebd4d0102f47.jpg",
      alt: "National Building and Construction Industry"
    },
    {
      name: "ECA",
      image: "/a8954f86-cfd5-4e8f-b523-a4b8eb32beb5.jpg",
      alt: "Electrical Contractors Association"
    }
  ];

  return (
    <div className="w-full bg-white py-16 border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-stone-400 font-bold uppercase tracking-widest text-xs">Accredited & Certified Partner</h3>
          <div className="w-12 h-0.5 bg-stone-200 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-items-center">
          {certs.map((cert, index) => (
            <div
              key={index}
              className="w-full max-w-[160px] h-24 flex items-center justify-center p-3 group hover:scale-105 transition-transform duration-300"
              title={cert.name}
            >
              <img
                src={cert.image}
                alt={cert.alt}
                className="w-full h-full object-contain drop-shadow-sm hover:drop-shadow-md transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;