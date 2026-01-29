import { NavItem } from './types';
import { Phone, Mail, MapPin, Printer } from 'lucide-react';
import React from 'react';

export const COMPANY_NAME = "W&F Electrical Contractors";
export const PHONE_LANDLINE = "+27 21 761 3956";
export const PHONE_CELL = "084 703 9449";
export const FAX = "+27 21 761 3941";
export const EMAIL_INFO = "info@wfelectrical.co.za";
export const EMAIL_SALES = "sales@wfelectrical.co.za";
export const EMAIL = EMAIL_INFO;

export const EMAIL_LINK = `mailto:${EMAIL_INFO}`; 

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const CONTACT_DETAILS = [
  { 
    icon: <Phone className="w-5 h-5 text-brand-primary" />, 
    label: "Landline", 
    value: PHONE_LANDLINE, 
    href: `tel:${PHONE_LANDLINE.replace(/\s/g, '')}` 
  },
  { 
    icon: <Phone className="w-5 h-5 text-brand-primary" />, 
    label: "Cell / WhatsApp", 
    value: PHONE_CELL, 
    href: `tel:${PHONE_CELL.replace(/\s/g, '')}` 
  },
  { 
    icon: <Mail className="w-5 h-5 text-brand-primary" />, 
    label: "Email", 
    value: EMAIL, 
    href: `mailto:${EMAIL}` 
  },
  {
    icon: <MapPin className="w-5 h-5 text-brand-primary" />,
    label: "Address",
    value: "Unit 14, Plantation Centre, Plantation Road, Ottery, 7800",
    href: "https://www.google.com/maps/search/?api=1&query=Unit+14,+Plantation+Centre,+Plantation+Road,+Ottery,+7800"
  },
  {
    icon: <Printer className="w-5 h-5 text-brand-primary" />,
    label: "Fax",
    value: FAX,
    href: null
  }
];