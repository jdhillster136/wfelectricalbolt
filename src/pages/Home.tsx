import React, { useEffect, useRef } from 'react';
import { Shield, CheckCircle, Zap, Clock, ArrowRight, Star } from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { WHATSAPP_LINK } from '../constants';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let request_id: number;
    
    const onScroll = () => {
       request_id = requestAnimationFrame(() => {
         if (parallaxRef.current) {
           const scrolled = window.scrollY;
           // Using translate3d forces hardware acceleration for smoother animation
           parallaxRef.current.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0)`;
         }
       });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (request_id) cancelAnimationFrame(request_id);
    };
  }, []);

  return (
    <div className="animate-fade-in">
      <SEO 
        title="Home" 
        description="W&F Electrical Contractors: Cape Town's trusted Level 2 B-BBEE electricians. Specializing in residential repairs, commercial installations, and COC certificates. Call +27 21 761 3956."
        keywords="Electrician Cape Town, W&F Electrical, COC Certificates, Electrical Contractors Ottery, B-BBEE Electricians"
      />

      {/* HERO SECTION - Centered Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <div className="absolute inset-0 z-0">
           {/* 
              Parallax Container:
              - Width set to 110vw and positioned -5vw left to create a safety bleed on edges.
              - This prevents any blank lines on the sides during resizing or on specific aspect ratios.
           */}
           <div 
             ref={parallaxRef}
             className="absolute -top-[20%] -left-[5vw] w-[110vw] h-[140%] will-change-transform"
           >
             <div className="absolute inset-0 bg-stone-900/50 z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2700&auto=format&fit=crop" 
               alt="Modern luxury home lighting" 
               className="w-full h-full object-cover object-center"
               loading="eager"
             />
           </div>
        </div>
        
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center text-white space-y-8 animate-slide-up mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
             {/* CHANGED: Yellow pulse for electricity feel */}
             <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
             <span className="text-xs font-semibold tracking-widest uppercase">Certified Electrical Excellence</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
            W& F Electrical <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-stone-300">Contractors</span>
          </h1>
          
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed">
            W&F Electrical brings safety, precision, and light to South Africa's finest homes and businesses. 
            Level 2 B-BBEE Compliant.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button variant="primary" to="/contact" className="shadow-lg shadow-brand-primary/20">
              Request a Quote
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark" to={WHATSAPP_LINK}>
              Chat on WhatsApp
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-10 flex flex-col items-center animate-bounce opacity-70">
            <span className="text-[10px] uppercase tracking-widest mb-2 block text-center font-bold">Scroll</span>
            <div className="w-[2px] h-12 bg-gradient-to-b from-white to-transparent mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* INTRO / NATURAL VALUE PROP */}
      <section className="py-24 bg-brand-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute top-0 right-0 w-2/3 h-full bg-stone-200/50 -translate-y-6 translate-x-6 z-0 rounded-2xl"></div>
              <img
                src="/women_standing_working_about_page.jpg"
                alt="Electrician working on electrical panel"
                className="relative z-10 w-full h-[500px] object-cover shadow-xl rounded-2xl grayscale-[20%]"
                loading="lazy"
              />
              {/* CHANGED: Yellow Accent Border */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl z-20 max-w-xs rounded-xl border-l-4 border-brand-accent">
                <p className="text-brand-dark font-display font-medium text-lg italic">"Reliability is the foundation of our craft."</p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-brand-dark tracking-tight">Grounded in Quality. <br/>Powered by Integrity.</h2>
              <p className="text-brand-secondary text-lg leading-relaxed font-light">
                We believe electrical infrastructure should be invisible yet impactful. Our approach combines technical precision with an appreciation for your space's aesthetic and functional needs.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Safety First", desc: "Strict adherence to SANS 10142-1 standards." },
                  { title: "Eco-Conscious", desc: "Energy-efficient lighting and power solutions." },
                  { title: "Master Craftsmanship", desc: "Neat, organized, and durable wiring." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark font-display">{item.title}</h4>
                      <p className="text-brand-secondary text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link to="/about" className="text-brand-primary font-bold uppercase tracking-widest text-xs border-b-2 border-brand-primary pb-1 hover:text-brand-dark hover:border-brand-dark transition-all">
                  Read Our Story
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* CHANGED: Yellow Uppercase Label */}
            <span className="text-brand-accent font-bold tracking-widest uppercase text-xs">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-dark mt-3 mb-6">Holistic Electrical Services</h2>
            <p className="text-brand-secondary max-w-2xl mx-auto font-light">From residential sanctuaries to industrial powerhouses, we provide tailored solutions.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Residential & Commercial",
                desc: "Complete wiring, lighting design, and power distribution for homes and offices.",
                bg: "bg-stone-50"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Compliance & Safety",
                desc: "Authorized COC issuance and comprehensive safety inspections for peace of mind.",
                bg: "bg-stone-100"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Maintenance & Repairs",
                desc: "24/7 rapid response for faults, tripping, and emergency power restoration.",
                bg: "bg-stone-50"
              }
            ].map((item, idx) => (
              <div key={idx} className={`${item.bg} p-10 rounded-2xl hover:shadow-xl transition-shadow duration-300 group`}>
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-brand-primary mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-3 font-display">{item.title}</h3>
                <p className="text-brand-secondary leading-relaxed font-light mb-6">{item.desc}</p>
                <Link to="/services" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-brand-dark hover:text-brand-primary transition-colors">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION - Parallax Strip */}
      <section className="relative py-32 bg-brand-dark flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1558402529-d2638a7023e9?q=80&w=2670&auto=format&fit=crop" 
            alt="Copper wiring texture" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Let's Connect.</h2>
          <p className="text-stone-300 text-lg mb-10 font-light max-w-xl mx-auto">
            Whether you're building a new home or need urgent assistance, our team is ready to help.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" to="/contact">
              Get in Touch
            </Button>
            <Button variant="outline" className="border-stone-500 text-stone-300 hover:border-brand-accent hover:text-brand-accent" to={WHATSAPP_LINK}>
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;