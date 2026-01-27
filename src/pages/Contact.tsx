import React from 'react';
import { CONTACT_DETAILS } from '../constants';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import AccreditedPartners from '../components/AccreditedPartners';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in pt-32 pb-20">
      <SEO 
        title="Contact Us" 
        description="Contact W&F Electrical in Cape Town. Call +27 21 761 3956 for quotes, emergency repairs, or COC inspections. Based in Ottery, servicing the Western Cape."
        keywords="Contact Electrician Cape Town, Electrical Quote Cape Town, Emergency Electrician Number, W&F Electrical Address"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-dark mb-6 tracking-tight">Contact Us</h1>
          <p className="text-brand-secondary max-w-2xl mx-auto text-lg font-light">
            Need an electrician in Cape Town? Get in touch for a fast, free quote or emergency assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-2xl border border-stone-200 shadow-sm">
              <h2 className="text-2xl font-display font-bold text-brand-dark mb-8">Get In Touch</h2>
              <div className="space-y-8">
                {CONTACT_DETAILS.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors border border-stone-100">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{detail.label}</span>
                      {detail.href ? (
                        <a href={detail.href} className="text-lg text-brand-dark font-medium hover:text-brand-primary transition-colors">
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-lg text-brand-dark font-medium">{detail.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-white p-2 rounded-2xl h-80 relative overflow-hidden shadow-sm border border-stone-200">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '0.75rem' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Unit+14,+Plantation+Centre,+Plantation+Road,+Ottery,+7800&output=embed"
                title="W&F Electrical Location"
              ></iframe>
            </div>
          </div>

          {/* Form */}
          <div className="bg-stone-50 p-10 rounded-2xl border border-stone-200">
            <h2 className="text-2xl font-display font-bold text-brand-dark mb-8">Send a Message</h2>
            <ContactForm />
          </div>
        </div>

        <div className="mt-24">
          <AccreditedPartners />
        </div>
      </div>
    </div>
  );
};

export default Contact;