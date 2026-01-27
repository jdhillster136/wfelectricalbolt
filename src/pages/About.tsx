import React from 'react';
import Button from '../components/Button';
import SEO from '../components/SEO';
import AccreditedPartners from '../components/AccreditedPartners';
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
      <section className="pt-40 pb-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/pexels-cristian-rojas-8853536 copy.jpg"
            alt="Electrical professionals at work"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* CHANGED: Yellow accent badge */}
          <span className="inline-block py-1 px-3 border border-brand-accent rounded-full text-brand-dark bg-brand-accent/10 text-xs font-bold uppercase tracking-widest mb-6">
            Since 2005 • Cape Town
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
                 src="/filler_image copy.jpg"
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
               <div className="prose prose-stone text-brand-secondary font-light text-lg leading-relaxed space-y-6">
                 <p>
                   W&F Electrical was founded in 2005 by industry professionals who had built extensive experience working for established electrical firms. After developing strong relationships with architects and main contractors, the founders established the company to offer dedicated service. They began with a small team and quickly grew by delivering solid performance on every contract, building trust with institutional, commercial, and government clients. Over the years, the business has expanded its capabilities while maintaining a commitment to technical excellence, safety, and strong client relationships.
                 </p>
                 <p>
                   From early beginnings, W&F Electrical has established itself as a trusted specialist in electrical installations, maintenance, inspections, and compliance services — with a focus on delivering technically excellent work on every project. The company's commitment to safety, quality, and professional execution has enabled it to build long-term relationships with architects, main contractors, consultants, and major clients.
                 </p>

                 <div className="pt-4">
                   <h3 className="text-xl font-bold text-brand-dark mb-4 uppercase tracking-wide">Our Experience & Completed Government / Institutional Projects</h3>
                   <p className="mb-4">
                     W&F Electrical has successfully executed a portfolio of noteworthy electrical projects through main contractors for government departments and institutional clients. The company's project experience highlights its ability to deliver on large-scale, complex assignments:
                   </p>

                   <div className="space-y-4 text-base">
                     <div>
                       <h4 className="font-bold text-brand-dark mb-2">DEPARTMENT OF HEALTH PROJECTS</h4>
                       <ul className="list-disc list-inside space-y-1 ml-2">
                         <li>Zolani Clinic – Electrical installations and services</li>
                         <li>Mowbray Maternity Clinic – Current electrical works</li>
                       </ul>
                     </div>

                     <div>
                       <h4 className="font-bold text-brand-dark mb-2">DEPARTMENT OF EDUCATION</h4>
                       <p className="mb-2">W&F Electrical has completed multiple educational infrastructure projects, including:</p>
                       <ul className="list-disc list-inside space-y-1 ml-2">
                         <li>Witzenberg Primary School</li>
                         <li>Langa High School</li>
                         <li>Nomlinganiselo Primary School</li>
                         <li>Northpine Primary School</li>
                         <li>Steenberg Secondary Music Classroom</li>
                         <li>Tafelsig Secondary School</li>
                         <li>Lwazi Primary School</li>
                         <li>Van Der Ross Primary School</li>
                         <li>Sir Lowry's Pass Primary School</li>
                         <li>Pelican Primary School</li>
                         <li>Poly Oak New Tool Room</li>
                         <li>Pinehurst Club House, Swimming Centre & Wash Bay</li>
                         <li>Many additional primary and secondary school electrical projects</li>
                       </ul>
                     </div>

                     <div>
                       <h4 className="font-bold text-brand-dark mb-2">INSTITUTIONAL WORK</h4>
                       <ul className="list-disc list-inside space-y-1 ml-2">
                         <li>UCT Classroom Renewal Project – University of Cape Town</li>
                         <li>UCT GSH Lecture Rooms – University of Cape Town</li>
                         <li>UCT Oceanography – University of Cape Town</li>
                         <li>Kaplan Centre UCT – Ongoing project</li>
                       </ul>
                     </div>

                     <div>
                       <h4 className="font-bold text-brand-dark mb-2">COMMERCIAL & URBAN</h4>
                       <ul className="list-disc list-inside space-y-1 ml-2">
                         <li>V&A Waterfront – South Facility</li>
                         <li>V&A Waterfront – North Facility</li>
                         <li>V&A Waterfront – Lookout Open Parking</li>
                         <li>Belvedere Square Electrical Reticulation</li>
                         <li>Paarl Refuse Transfer Station & Mess Building</li>
                         <li>Various commercial and mixed-use electrical works</li>
                       </ul>
                     </div>
                   </div>
                 </div>

                 <p className="pt-4">
                   Today, as a <strong className="text-brand-dark font-semibold">Level 2 B-BBEE Contributor</strong>, we are proud to play a role in our country's economic growth while delivering world-class service. Whether it's a complex industrial installation or a residential compliance check, our story is written in every successful connection we make.
                 </p>
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
            <div className="max-w-4xl mx-auto">
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

      <AccreditedPartners />

    </div>
  );
};

export default About;