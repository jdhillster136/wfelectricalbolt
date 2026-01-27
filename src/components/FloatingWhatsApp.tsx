import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white py-3 px-5 rounded-full shadow-2xl hover:scale-105 hover:bg-[#20bd5a] transition-all duration-300 animate-slide-up group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
      <span className="font-bold hidden sm:block group-hover:block">Chat on WhatsApp</span>
    </a>
  );
};

export default FloatingWhatsApp;