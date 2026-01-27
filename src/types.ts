import { ReactNode } from "react";

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  features: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  beforeImg: string;
  afterImg: string;
}

export enum ContactMethod {
  PHONE = 'phone',
  WHATSAPP = 'whatsapp',
  EMAIL = 'email'
}