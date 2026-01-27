import React from 'react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import { Award, ShieldCheck, Zap, Users, CheckCircle2, HardHat, Ruler, Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SEO 
        title="About Us" 
        description="Learn about W&F Electrical Contractors. Established in 2012, we are a Level 2 B-BBEE company committed to safety, compliance, and excellence in Cape Town."
        keywords="About W&F Electrical, Level 2 B-BBEE Electrician, Registered Electrician Cape Town, ECA Member"
      />
      
      {/* 1. Hero Section - Minimalist & Bold */}
      <section className="pt-40 pb-20 bg-brand-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100/50 -skew-x-12 translate-x-1/4 z-0 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* CHANGED: Yellow accent badge */}
          <span className="inline-block py-1 px-3 border border-brand-accent rounded-full text-brand-dark bg-brand-accent/10 text-xs font-bold uppercase tracking-widest mb-6">
            Since 2012 • Cape Town
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-dark mb-8 tracking-tight leading-[1.1]">
            We Power Your <br />
            <span className="text-brand-primary">Peace of Mind.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-brand-secondary font-light leading-relaxed">
            W&F Electrical Contractors isn't just about connecting wires. We are about ensuring safety, compliance, and reliability for every home and business we touch.
          </p>
        </div>
      </section>

      {/* 1.5 Our Story Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Image Composition */}
            <div className="w-full md:w-1/2 relative">
               <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-primary/10 rounded-full z-0"></div>
               <img 
                 src="https://images.unsplash.com/photo-1544724569-5f546fd6dd2d?q=80&w=2000&auto=format&fit=crop" 
                 alt="W&F Electrical Team Discussion" 
                 className="relative z-10 w-full h-[400px] object-cover rounded-2xl shadow-xl grayscale-[10%]"
                 loading="lazy"
               />
               <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-stone-100 max-w-[200px] z-20 hidden md:block">
                  <span className="block text-4xl font-display font-bold text-brand-primary">12+</span>
                  <span className="text-xs text-stone-500 uppercase tracking-widest">Years of Service</span>
               </div>
            </div>

            {/* Narrative */}
            <div className="w-full md:w-1/2 space-y-6">
               <h2 className="text-3xl font-display font-bold text-brand-dark">A Legacy of Light in Cape Town</h2>
               <div className="prose prose-stone text-brand-secondary font-light text-lg leading-relaxed">
                 <p>
                   Established in 2005 by Deon Fraser and Ralph Small, W&F Electrical Contractors was born from a vision to deliver exceptional electrical service in Cape Town. What began as two founders and a general worker has grown into a thriving team of fifteen professionals, backed by over 30 years of combined industry experience. Every project is personally overseen by Deon and Ralph, ensuring the same dedication that launched the company continues today.
                 </p>
                 <p>
                   We've built our reputation on three pillars: <strong className="text-brand-dark font-semibold">Integrity, Honesty, and Reliability</strong>. In an industry where quality is often a rumor, we've invested in the right tools, machinery, and knowledge to set a genuinely high standard. From residential fault-finding to complex industrial installations, our workmanship speaks for itself.
                 </p>
                 <p>
                   Today, as a <strong className="text-brand-dark font-semibold">Level 2 B-BBEE Contributor</strong>, we are proud to play a role in our country's economic growth while delivering world-class service. Whether it's a complex industrial installation or a residential compliance check, our story is written in every successful connection we make.
                 </p>
               </div>
               
               <div className="pt-4 flex items-center gap-4">
                 <div className="w-12 h-1 bg-brand-primary rounded-full"></div>
                 <span className="text-sm font-bold text-brand-dark uppercase tracking-widest">Deon Fraser & Ralph Small</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Visual Story Grid (Bento Style) */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-display font-bold text-brand-dark">At a Glance</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* Main Image */}
            <div className="md:col-span-2 row-span-2 relative rounded-3xl overflow-hidden group shadow-lg">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <img
                src="https://images.pexels.com/photos/5090652/pexels-photo-5090652.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Electrician at work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute bottom-8 left-8 z-20 text-white max-w-md">
                <h3 className="text-3xl font-display font-bold mb-2">Master Craftsmanship</h3>
                <p className="text-stone-200 font-light">
                  Every connection we make is tested, verified, and built to last. We don't take shortcuts with your safety.
                </p>
              </div>
            </div>

            {/* Stat Card 1 */}
            <div className="bg-brand-dark rounded-3xl p-8 flex flex-col justify-center items-start shadow-lg text-white group hover:bg-stone-900 transition-colors">
              {/* CHANGED: Yellow Icon on Dark Card */}
              <Award className="w-12 h-12 text-brand-accent mb-6" />
              <div className="text-4xl font-display font-bold mb-1">Level 2</div>
              <div className="text-stone-400 font-medium uppercase tracking-wider text-sm">B-BBEE Contributor</div>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-white rounded-3xl p-8 flex flex-col justify-center items-start shadow-sm border border-stone-200">
               <ShieldCheck className="w-12 h-12 text-brand-primary mb-6" />
               <div className="text-4xl font-display font-bold text-brand-dark mb-1">100%</div>
               <div className="text-stone-500 font-medium uppercase tracking-wider text-sm">SANS Compliance</div>
            </div>

            {/* Feature Card */}
            <div className="md:col-span-3 bg-brand-primary/5 rounded-3xl p-8 md:p-12 border border-brand-primary/10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-brand-dark mb-4">Registered & Recognized</h3>
                <p className="text-brand-secondary leading-relaxed mb-6">
                  We are proud members of the Electrical Contractors Association (ECA) and registered with the Department of Labour. When you hire W&F, you are hiring verified professionals who adhere to the strictest industry standards.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Department of Labour", "ECA Member", "NBCEI Registered"].map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-stone-200 rounded-md text-xs font-bold text-stone-600 uppercase tracking-wide">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-1/3 aspect-video md:aspect-square bg-white rounded-2xl p-6 shadow-sm flex items-center justify-center border border-stone-100">
                <div className="text-center">
                   <CheckCircle2 className="w-16 h-16 text-green-600 mx-auto mb-4" />
                   <div className="font-bold text-brand-dark">Authorized COC Issuer</div>
                   <div className="text-xs text-stone-500 mt-1">Cape Town & Surrounds</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Core Values (Dark Section) */}
      <section className="py-24 bg-brand-dark text-white relative overflow-hidden">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                {/* CHANGED: Yellow Label */}
                <span className="text-brand-accent font-bold uppercase tracking-widest text-xs mb-2 block">Our DNA</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-8">What Sets Us Apart</h2>
                <div className="space-y-8">
                  {[
                    { 
                      icon: <Users className="w-6 h-6 text-brand-dark" />, 
                      title: "Client-Centric Approach", 
                      text: "We understand that electrical work can be disruptive. We respect your time and property, ensuring neat workmanship and clear communication." 
                    },
                    { 
                      icon: <HardHat className="w-6 h-6 text-brand-dark" />, 
                      title: "Safety Obsessed", 
                      text: "There is no compromise when it comes to electricity. We follow SANS 10142-1 regulations strictly to protect your family and employees." 
                    },
                    { 
                      icon: <Ruler className="w-6 h-6 text-brand-dark" />, 
                      title: "Precision Engineering", 
                      text: "From complex industrial DB boards to residential lighting layouts, we apply mathematical precision to every circuit we design." 
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5">
                      <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                        <p className="text-stone-400 font-light leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-primary/20 rounded-full blur-3xl"></div>
                <img
                  src="/pexels-kelly-33622084.jpg"
                  alt="Cape Town at Night"
                  className="relative rounded-2xl shadow-2xl border border-stone-700 h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 right-6 bg-stone-800 p-6 rounded-xl border border-stone-700 shadow-xl max-w-xs z-20">
                  <div className="flex gap-1 mb-2">
                    {[1,2,3,4,5].map(i => <Quote key={i} className="w-3 h-3 text-brand-accent fill-current" />)}
                  </div>
                  <p className="text-sm font-light italic text-stone-300">"W&F Electrical transformed our factory's power efficiency. Highly recommended."</p>
                  <p className="text-xs font-bold text-brand-primary mt-3 uppercase tracking-wider">— Commercial Client</p>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* 4. Expertise Areas */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold text-brand-dark mb-16">Our Scope of Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Residential", desc: "Fault finding, renovations, and compliance certificates for homeowners." },
              { title: "Commercial", desc: "Office lighting, power skirting, and data points for businesses." },
              { title: "Industrial", desc: "3-Phase power, motor controls, and heavy-duty installations." },
              { title: "Maintenance", desc: "Ongoing contracts to keep your electrical systems healthy." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 border-brand-primary">
                 <h3 className="text-xl font-bold text-brand-dark mb-3">{item.title}</h3>
                 <p className="text-stone-500 font-light text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16">
            <h3 className="text-lg font-bold text-brand-dark mb-6">Ready to work with a Level 2 B-BBEE Partner?</h3>
            <Button variant="primary" to="/contact">Contact Us Today</Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;