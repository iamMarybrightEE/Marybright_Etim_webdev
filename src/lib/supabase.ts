import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface Contact {
  id: string;
  name: string;
  email: string;
  subject?: string;
  message: string;
  status: string;
  created_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
  is_active: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  message: string;
  rating: number;
  image_url?: string;
  is_approved: boolean;
  created_at: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
}
