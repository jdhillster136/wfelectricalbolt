import React from 'react';
import { Mail } from 'lucide-react';
import { EMAIL_LINK } from '../constants';

const FloatingEmail: React.FC = () => {
  return (
    <a
      href={EMAIL_LINK}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-brand-primary text-white py-3 px-5 rounded-full shadow-2xl hover:scale-105 hover:bg-red-700 transition-all duration-300 animate-slide-up group"
      aria-label="Email us"
    >
      <Mail className="w-6 h-6" />
      <span className="font-bold hidden sm:block group-hover:block">Email Us</span>
    </a>
  );
};

export default FloatingEmail;