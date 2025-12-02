/*
  # Portfolio Website Database Schema

  ## Overview
  This migration creates the complete database schema for Marybright Etim's portfolio website,
  including tables for contact management, newsletter subscriptions, testimonials, FAQs, and admin authentication.

  ## New Tables
  
  ### 1. contacts
  - `id` (uuid, primary key) - Unique identifier for each contact submission
  - `name` (text, required) - Contact's full name
  - `email` (text, required) - Contact's email address
  - `subject` (text, optional) - Message subject
  - `message` (text, required) - Message content
  - `status` (text, default: 'new') - Status: new, read, replied
  - `created_at` (timestamptz) - Submission timestamp
  
  ### 2. newsletter_subscribers
  - `id` (uuid, primary key) - Unique identifier
  - `email` (text, unique, required) - Subscriber email
  - `subscribed_at` (timestamptz) - Subscription timestamp
  - `is_active` (boolean, default: true) - Subscription status
  
  ### 3. testimonials
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text, required) - Student's name
  - `role` (text, required) - Student's role/title
  - `message` (text, required) - Testimonial content
  - `rating` (integer, 1-5) - Rating score
  - `image_url` (text, optional) - Student's photo URL
  - `is_approved` (boolean, default: false) - Approval status
  - `created_at` (timestamptz) - Submission timestamp
  
  ### 4. faqs
  - `id` (uuid, primary key) - Unique identifier
  - `question` (text, required) - FAQ question
  - `answer` (text, required) - FAQ answer
  - `category` (text, required) - Category: general, training, services
  - `order_index` (integer) - Display order
  - `is_active` (boolean, default: true) - Visibility status
  
  ### 5. admin_users
  - `id` (uuid, primary key, references auth.users) - Admin user ID
  - `email` (text, required) - Admin email
  - `created_at` (timestamptz) - Account creation timestamp

  ## Security
  - Row Level Security (RLS) enabled on all tables
  - Public users can INSERT into contacts, newsletter_subscribers, testimonials
  - Only authenticated admin can SELECT, UPDATE, DELETE
  - Admin users table is fully restricted to authenticated users only
*/

-- Create contacts table
CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

-- Create newsletter subscribers table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  message text NOT NULL,
  rating integer CHECK (rating >= 1 AND rating <= 5),
  image_url text,
  is_approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create FAQs table
CREATE TABLE IF NOT EXISTS faqs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  question text NOT NULL,
  answer text NOT NULL,
  category text NOT NULL,
  order_index integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create admin users table
CREATE TABLE IF NOT EXISTS admin_users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Contacts policies
CREATE POLICY "Anyone can submit contact form"
  ON contacts FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Admin can view all contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can update contacts"
  ON contacts FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can delete contacts"
  ON contacts FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

-- Newsletter subscribers policies
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscribers FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Admin can view all subscribers"
  ON newsletter_subscribers FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can update subscribers"
  ON newsletter_subscribers FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can delete subscribers"
  ON newsletter_subscribers FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

-- Testimonials policies
CREATE POLICY "Anyone can submit testimonials"
  ON testimonials FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view approved testimonials"
  ON testimonials FOR SELECT
  TO anon
  USING (is_approved = true);

CREATE POLICY "Admin can view all testimonials"
  ON testimonials FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can update testimonials"
  ON testimonials FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can delete testimonials"
  ON testimonials FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

-- FAQs policies
CREATE POLICY "Anyone can view active FAQs"
  ON faqs FOR SELECT
  TO anon
  USING (is_active = true);

CREATE POLICY "Admin can view all FAQs"
  ON faqs FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can insert FAQs"
  ON faqs FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can update FAQs"
  ON faqs FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

CREATE POLICY "Admin can delete FAQs"
  ON faqs FOR DELETE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

-- Admin users policies
CREATE POLICY "Admin can view admin users"
  ON admin_users FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM admin_users WHERE admin_users.id = auth.uid()
    )
  );

-- Insert default FAQs
INSERT INTO faqs (question, answer, category, order_index) VALUES
('What services do you offer?', 'I specialize in building modern, responsive websites and web applications using cutting-edge technologies like React, Next.js, and Node.js. I offer frontend development, full-stack web development, UI/UX implementation, website optimization, and web development training.', 'services', 1),
('Do you offer web development training?', 'Yes! I provide comprehensive web development training for students who want to learn HTML, CSS, JavaScript, React, and other modern web technologies. My training programs are hands-on and project-based, ensuring students gain practical experience.', 'training', 2),
('What technologies do you specialize in?', 'I specialize in JavaScript, React.js, Next.js, TypeScript, Tailwind CSS, Node.js, MongoDB, Firebase, Supabase, and various other modern web technologies. I also have experience with UI/UX design using Figma.', 'general', 3),
('How can I get started with your training program?', 'Getting started is easy! Simply contact me through the contact form or reach out via WhatsApp or email. We will discuss your learning goals, schedule, and create a customized training plan that fits your needs.', 'training', 4),
('What is your development process?', 'My development process includes: 1) Understanding your requirements, 2) Planning and design, 3) Development with regular updates, 4) Testing and quality assurance, 5) Deployment and launch, 6) Post-launch support and maintenance.', 'services', 5),
('How long does it take to build a website?', 'Project timelines vary depending on complexity and requirements. A simple website might take 1-2 weeks, while a complex web application could take 1-3 months. I provide detailed timelines during the initial consultation.', 'services', 6);

-- Insert some sample approved testimonials
INSERT INTO testimonials (name, role, message, rating, is_approved) VALUES
('Emmanuel Okon', 'Web Developer', 'Marybright is an exceptional trainer! Her teaching style made complex concepts easy to understand. Within 3 months, I went from knowing nothing about web development to building my own projects. Highly recommended!', 5, true),
('Grace Udoh', 'Frontend Developer', 'The best decision I made was enrolling in Marybright''s training program. She is patient, knowledgeable, and genuinely cares about her students'' success. I now work as a professional frontend developer thanks to her guidance.', 5, true),
('David Bassey', 'Student', 'Marybright''s expertise in React and modern web technologies is outstanding. Her hands-on approach to teaching helped me land my first freelance project even before completing the course. Thank you!', 5, true),
('Blessing Etim', 'Junior Developer', 'I was struggling with JavaScript until I joined Marybright''s training. She breaks down complex topics into digestible lessons and provides real-world examples. My coding skills improved dramatically!', 5, true);