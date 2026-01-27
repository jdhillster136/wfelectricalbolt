import { supabase } from './supabase';

export interface ImageUpload {
  file: File;
  title?: string;
  displayOrder: number;
}

export async function uploadImageToStorage(file: File, categoryName: string, fileName: string): Promise<string> {
  const filePath = `${categoryName}/${fileName}`;

  const { data, error } = await supabase.storage
    .from('gallery')
    .upload(filePath, file, {
      cacheControl: '3600',
      upsert: false
    });

  if (error) {
    throw new Error(`Failed to upload image: ${error.message}`);
  }

  const { data: { publicUrl } } = supabase.storage
    .from('gallery')
    .getPublicUrl(filePath);

  return publicUrl;
}

export async function createGalleryCategory(
  title: string,
  description: string | null = null,
  displayOrder: number = 0
): Promise<number> {
  const { data, error } = await supabase
    .from('gallery_categories')
    .insert({
      title,
      description,
      display_order: displayOrder
    })
    .select('id')
    .single();

  if (error) {
    throw new Error(`Failed to create category: ${error.message}`);
  }

  return data.id;
}

export async function addImagesToCategory(
  categoryId: number,
  images: Array<{ imageUrl: string; title?: string; displayOrder: number }>
): Promise<void> {
  const imageRecords = images.map(img => ({
    category_id: categoryId,
    image_url: img.imageUrl,
    title: img.title || null,
    display_order: img.displayOrder
  }));

  const { error } = await supabase
    .from('gallery_images')
    .insert(imageRecords);

  if (error) {
    throw new Error(`Failed to add images to category: ${error.message}`);
  }
}

export async function createGalleryAlbum(
  categoryTitle: string,
  categoryDescription: string | null,
  imageUrls: string[],
  imageTitles?: string[]
): Promise<void> {
  const categoryId = await createGalleryCategory(categoryTitle, categoryDescription);

  const images = imageUrls.map((url, index) => ({
    imageUrl: url,
    title: imageTitles?.[index],
    displayOrder: index
  }));

  await addImagesToCategory(categoryId, images);
}
