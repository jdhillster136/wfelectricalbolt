/*
  # Create Gallery Tables

  1. New Tables
    - `gallery_categories`
      - `id` (bigint, primary key, auto-increment)
      - `title` (text, not null) - Album/category name
      - `description` (text, nullable) - Optional description of the category
      - `display_order` (integer, default 0) - For sorting categories
      - `created_at` (timestamptz, default now())
    
    - `gallery_images`
      - `id` (bigint, primary key, auto-increment)
      - `category_id` (bigint, foreign key to gallery_categories)
      - `title` (text, nullable) - Optional image title
      - `image_url` (text, not null) - URL to the image
      - `display_order` (integer, default 0) - For sorting images within a category
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (anyone can view gallery)
    - No write/update/delete policies (admin-only access through service role)

  3. Indexes
    - Index on category_id for efficient image lookups
    - Index on display_order for both tables for efficient sorting
*/

-- Create gallery_categories table
CREATE TABLE IF NOT EXISTS gallery_categories (
  id bigserial PRIMARY KEY,
  title text NOT NULL,
  description text,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id bigserial PRIMARY KEY,
  category_id bigint NOT NULL REFERENCES gallery_categories(id) ON DELETE CASCADE,
  title text,
  image_url text NOT NULL,
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_gallery_images_category_id ON gallery_images(category_id);
CREATE INDEX IF NOT EXISTS idx_gallery_images_display_order ON gallery_images(display_order);
CREATE INDEX IF NOT EXISTS idx_gallery_categories_display_order ON gallery_categories(display_order);

-- Enable Row Level Security
ALTER TABLE gallery_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Anyone can view gallery categories"
  ON gallery_categories
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can view gallery images"
  ON gallery_images
  FOR SELECT
  TO public
  USING (true);
