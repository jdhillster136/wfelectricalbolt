import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface GalleryCategory {
  id: number;
  title: string;
  description: string | null;
  display_order: number;
  created_at: string;
}

export interface GalleryImage {
  id: number;
  category_id: number;
  title: string | null;
  image_url: string;
  display_order: number;
  created_at: string;
}
