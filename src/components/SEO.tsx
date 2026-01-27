import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    document.title = `${title} | W&F Electrical Contractors Cape Town`;

    // 2. Helper to update or create meta tags
    const updateMeta = (name: string, content: string) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 3. Update Standard Meta
    updateMeta('description', description);
    if (keywords) updateMeta('keywords', keywords);

    // 4. Update Open Graph (Basic)
    const updateOg = (property: string, content: string) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };
    
    updateOg('og:title', `${title} | W&F Electrical`);
    updateOg('og:description', description);
    updateOg('og:url', window.location.href);

  }, [title, description, keywords, location]);

  return null;
};

export default SEO;