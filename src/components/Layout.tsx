import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Facebook } from 'lucide-react';
import { NAV_ITEMS, COMPANY_NAME, CONTACT_DETAILS } from '../constants';
import Button from './Button';
import FloatingWhatsApp from './FloatingWhatsApp';
import Certifications from './Certifications';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Determine if we need dark text for navigation based on scroll state
  const isTransparent = !isScrolled && location.pathname === '/';
  const navTextColor = isTransparent ? 'text-white' : 'text-brand-dark';
  
  // Use border-transparent instead of removing the border class to prevent visual artifacts (white line) during transition
  const navBaseClasses = "fixed w-full z-40 transition-all duration-500 py-4 border-b";
  const navStateClasses = isScrolled 
    ? 'bg-white/95 backdrop-blur-md shadow-sm border-stone-200' 
    : 'bg-transparent border-transparent';


  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden bg-brand-light font-sans text-brand-dark">
      {/* Navigation */}
      <nav 
        className={`${navBaseClasses} ${navStateClasses}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img src="/logo copy.png" alt="W&F Electrical" className="h-14 w-auto object-contain" />
              <div className="flex flex-col hidden sm:block">
                <span className="text-xl font-display font-bold tracking-tight leading-none text-brand-dark">W&F</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-brand-primary">Electrical</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className={`text-sm font-semibold tracking-wide transition-colors hover:text-brand-primary ${
                    location.pathname === item.path ? 'text-brand-primary' : navTextColor
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button to="/contact" variant={isTransparent ? "outline" : "primary"} className={isTransparent ? "border-white text-white hover:bg-white hover:text-brand-dark hover:border-white" : "py-2 px-6"}>
                Request Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden ${navTextColor}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-stone-100 border-t border-stone-200 shadow-xl">
            <div className="flex flex-col p-6 space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link 
                  key={item.path} 
                  to={item.path}
                  className="text-lg font-display font-semibold text-brand-dark hover:text-brand-primary py-2 border-b border-stone-200"
                >
                  {item.label}
                </Link>
              ))}
              <Button to="/contact" variant="primary" fullWidth>
                Request Quote
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      <Certifications />

      {/* Footer */}
      <footer
        className="bg-brand-dark text-stone-300 pt-20 pb-10 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/pexels-cottonbro-5090652.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-brand-dark/85 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src="/logo copy.png" alt="W&F Electrical" className="h-16 w-auto object-contain" />
                <div className="flex flex-col">
                  <span className="text-2xl font-display font-bold text-white">W&F</span>
                  <span className="text-xs font-bold tracking-widest uppercase text-brand-primary">Electrical</span>
                </div>
              </div>
              <p className="text-stone-400 text-sm leading-relaxed font-light">
                Crafting connections that power your world. We bring a natural balance of safety, efficiency, and premium service to every electrical project.
              </p>
              {/* CHANGED: Yellow Badge for high visibility on dark footer */}
              <div className="inline-block px-3 py-1 border border-brand-accent text-brand-accent text-xs font-bold uppercase tracking-widest rounded-md">
                Level 2 B-BBEE
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-display font-bold text-lg mb-6">Explore</h4>
              <ul className="space-y-3">
                {NAV_ITEMS.map(item => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-stone-400 hover:text-brand-primary transition-colors text-sm font-light">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-white font-display font-bold text-lg mb-6">Expertise</h4>
              <ul className="space-y-3">
                {['Residential Maintenance', 'Commercial Installations', 'Compliance Certificates', 'Fault Finding', 'Power Backups'].map((service, index) => (
                  <li key={index}>
                    <Link to="/services" className="text-stone-400 hover:text-brand-primary transition-colors text-sm font-light">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-display font-bold text-lg mb-6">Contact</h4>
              <ul className="space-y-4">
                {/* CHANGED: Slice increased to 4 to include Address */}
                {CONTACT_DETAILS.slice(0, 4).map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    {/* CHANGED: Yellow icons to pop against black footer */}
                    <div className="mt-0.5 text-brand-accent">{detail.icon}</div>
                    <div className="flex flex-col">
                      <span className="text-xs text-stone-500 uppercase tracking-wider">{detail.label}</span>
                      {detail.href ? (
                        <a href={detail.href} className="text-stone-300 hover:text-white transition-colors text-sm font-medium">
                          {detail.value}
                        </a>
                      ) : (
                        <span className="text-stone-300 text-sm font-medium">{detail.value}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>

              <a 
                href="https://www.facebook.com/profile.php?id=100072688710536" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 px-5 py-2.5 rounded-lg bg-stone-800 hover:bg-[#1877F2] text-stone-300 hover:text-white transition-all duration-300 border border-stone-700 hover:border-[#1877F2] group"
              >
                <Facebook className="w-5 h-5 text-brand-primary group-hover:text-white transition-colors" />
                <span className="text-sm font-medium">Follow on Facebook</span>
              </a>
            </div>
          </div>

          <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-xs font-light">
              © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <span className="text-stone-500 hover:text-stone-400 text-xs cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-stone-500 hover:text-stone-400 text-xs cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>

      <FloatingWhatsApp />
    </div>
  );
};

export default Layout;