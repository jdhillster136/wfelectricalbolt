import React, { useState } from 'react';
import { Home, Factory, Wrench, FileCheck, Zap, ArrowRight, Plus, Minus, HelpCircle } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import AccreditedPartners from '../components/AccreditedPartners';

const services = [
  {
    id: 'compliance',
    icon: <FileCheck className="w-10 h-10 text-brand-primary" />,
    title: "Certificates of Compliance (COC)",
    desc: "As Department of Labour registered electricians, we conduct rigorous inspections to issue valid Electrical Certificates of Compliance. Whether you are selling your property, transferring a bond, or need insurance validation, we ensure your installation meets SANS 10142-1 standards.",
    features: ["Property Transfer COCs", "Bond Registration", "Rectification of Electrical Faults", "Electric Fence COCs", "Insurance Verification"],
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop"
  },
  {
    id: 'residential',
    icon: <Home className="w-10 h-10 text-brand-primary" />,
    title: "Residential Electrical",
    desc: "From minor repairs to major renovations, we handle all domestic electrical needs. Our team respects your home, ensuring neat workmanship and safety for your family. We specialize in diagnosing nuisance tripping and upgrading old distribution boards.",
    features: ["Fault Finding & Repairs", "Stove, Oven & Geyser Connections", "DB Board Upgrades", "Plug Points & Switches", "LED Lighting Conversions"],
    img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2668&auto=format&fit=crop"
  },
  {
    id: 'commercial',
    icon: <Factory className="w-10 h-10 text-brand-primary" />,
    title: "Commercial & Industrial",
    desc: "We provide robust electrical solutions for offices, factories, and retail spaces. Our commercial services focus on minimizing downtime and ensuring your infrastructure can handle high power loads safely.",
    features: ["3-Phase Power Installations", "Office Reticulation & Trunking", "Motor Controls & Isolators", "Warehouse Lighting", "Data & Telephone Points"],
    img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2301&auto=format&fit=crop"
  },
  {
    id: 'backup',
    icon: <Zap className="w-10 h-10 text-brand-primary" />,
    title: "Inverters & Power Backup",
    desc: "Don't let load shedding stop your life or business. We install professional backup solutions, from generator change-over switches to integrated inverter systems, keeping your essential appliances running.",
    features: ["Inverter Installations", "Generator Change-over Switches", "UPS Integration", "Surge Protection", "Battery Backup Wiring"],
    img: "/20230905_114417-scaled copy.jpg"
  }
];

const faqs = [
  {
    question: "What is an Electrical Certificate of Compliance (COC)?",
    answer: "An Electrical Certificate of Compliance (COC) is a legal document verifying that an electrical installation adheres to the South African National Standards (SANS 10142-1). You typically need this when selling a property, making major electrical alterations, or for insurance purposes."
  },
  {
    question: "Do you offer emergency electrical repairs in Cape Town?",
    answer: "Yes, W&F Electrical offers rapid response services for electrical emergencies across Cape Town and surrounding suburbs. This includes power failures, earth leakage tripping, and dangerous electrical faults."
  },
  {
    question: "How long is an electrical COC valid for?",
    answer: "For property transfers, a COC is valid for 2 years from the date of issue, provided no major alterations have been made to the installation in that time. It effectively guarantees the safety of the electrical work at the time of inspection."
  },
  {
    question: "Can you install an inverter for load shedding?",
    answer: "Absolutely. We specialize in installing backup power solutions, including inverters, batteries, and generator change-over switches. We ensure these are wired safely into your distribution board (DB) to power essential appliances during load shedding."
  },
  {
    question: "What areas in Cape Town do you service?",
    answer: "We service the greater Cape Town area, including the Southern Suburbs (Ottery, Claremont, Wynberg), Northern Suburbs, Atlantic Seaboard, and Cape Flats. We are based in Ottery but have teams available for projects throughout the Western Cape."
  },
  {
    question: "Why does my electricity keep tripping?",
    answer: "Frequent tripping is usually caused by a faulty appliance, overloaded circuits, or a sensitive earth leakage unit. Our fault-finding service isolates the specific issue to restore your power safely and prevent future interruptions."
  }
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-5 text-left group hover:bg-stone-50 transition-colors px-4 rounded-lg"
      >
        <span className="font-display font-bold text-brand-dark text-lg group-hover:text-brand-primary transition-colors">
          {question}
        </span>
        <span className={`ml-4 p-1 rounded-full border transition-all duration-300 ${isOpen ? 'bg-brand-primary border-brand-primary text-white rotate-180' : 'border-stone-300 text-stone-400'}`}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out px-4 ${isOpen ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-brand-secondary font-light leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-20">
      <SEO 
        title="Services" 
        description="Comprehensive electrical services: COC compliance certificates, fault finding, residential wiring, commercial maintenance, and inverter installations in Cape Town."
        keywords="Electrical Services, COC Certificate Cape Town, Fault Finding Electrician, Inverter Installation Cape Town, Residential Electrical"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <span className="inline-block py-1 px-3 border border-brand-primary/30 rounded-full text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
            Comprehensive Solutions
          </span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6 tracking-tight">Our Services</h1>
          <p className="text-brand-secondary max-w-2xl mx-auto text-lg font-light">
            We deliver a full spectrum of electrical services, ensuring every connection in your home or business is safe, compliant, and efficient.
          </p>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-stone-100 group hover:shadow-lg transition-all duration-500`}
            >
              <div className="flex-1 space-y-6">
                <div className="w-16 h-16 bg-stone-50 rounded-2xl flex items-center justify-center mb-2 border border-stone-100 text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-display font-bold text-brand-dark">{service.title}</h2>
                <p className="text-brand-secondary text-lg leading-relaxed font-light">{service.desc}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 pt-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-stone-600 font-medium text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary mt-1.5 shrink-0"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-8">
                  <Button variant="outline" to="/contact" className="hover:bg-brand-primary hover:border-brand-primary hover:text-white rounded-lg">
                    Get a Quote
                  </Button>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img 
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Decorative corner accent */}
                  <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-brand-light/30 rounded-full blur-2xl z-20 pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section - SEO Optimized */}
        <div className="mt-32 max-w-4xl mx-auto">
          <div className="text-center mb-12">
             <div className="inline-flex items-center justify-center p-3 bg-brand-accent/10 rounded-full mb-4">
               <HelpCircle className="w-6 h-6 text-brand-accent" />
             </div>
             <h2 className="text-3xl font-display font-bold text-brand-dark mb-4">Frequently Asked Questions</h2>
             <p className="text-brand-secondary font-light">Common questions about electrical compliance, safety, and our services.</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm border border-stone-200 overflow-hidden p-2">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>

        <AccreditedPartners />

        {/* Call to Action Bar */}
        <div className="mt-24 bg-brand-dark rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

          <div className="relative z-10">
            <h2 className="text-3xl font-display font-bold text-white mb-6">Need an Urgent Repair?</h2>
            <p className="text-stone-400 max-w-xl mx-auto mb-8 font-light">
              We offer rapid response for electrical faults and emergencies in the Cape Town area.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
               <Button variant="primary" to="tel:+27217613956">
                 Call +27 21 761 3956
               </Button>
               <Button variant="outline" className="text-white border-stone-600 hover:bg-stone-800 hover:border-stone-800" to="/contact">
                 Book Online
               </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;