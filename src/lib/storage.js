import supabase from './supabaseClient';

export async function uploadImageFile(file) {
  if (!file) throw new Error('No file provided');
  const sanitizedName = file.name.replace(/\s+/g, '-');
  const filePath = `uploads/${Date.now()}-${sanitizedName}`;
  const { error } = await supabase.storage
    .from('images')
    .upload(filePath, file, { cacheControl: '3600', upsert: true });
  if (error) throw error;
  return supabase.storage.from('images').getPublicUrl(filePath).data.publicUrl;
}

export async function uploadImageFromUrl(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch image');
  const blob = await res.blob();
  const ext = mimeExtension(blob.type) || 'jpg';
  const filePath = `uploads/${Date.now()}.${ext}`;
  const { error } = await supabase.storage
    .from('images')
    .upload(filePath, blob, { cacheControl: '3600', upsert: true, contentType: blob.type });
  if (error) throw error;
  return supabase.storage.from('images').getPublicUrl(filePath).data.publicUrl;
}

export async function uploadVideoFile(file) {
  if (!file) throw new Error('No file provided');
  const sanitizedName = file.name.replace(/\s+/g, '-');
  const filePath = `uploads/${Date.now()}-${sanitizedName}`;
  const { error } = await supabase.storage
    .from('videos')
    .upload(filePath, file, { cacheControl: '3600', upsert: true });
  if (error) throw error;
  return supabase.storage.from('videos').getPublicUrl(filePath).data.publicUrl;
}

export async function uploadVideoFromUrl(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch video');
  const blob = await res.blob();
  const ext = mimeExtension(blob.type) || 'mp4';
  const filePath = `uploads/${Date.now()}.${ext}`;
  const { error } = await supabase.storage
    .from('videos')
    .upload(filePath, blob, { cacheControl: '3600', upsert: true, contentType: blob.type });
  if (error) throw error;
  return supabase.storage.from('videos').getPublicUrl(filePath).data.publicUrl;
}

function mimeExtension(mime) {
  if (!mime) return undefined;
  if (mime === 'image/jpeg') return 'jpg';
  if (mime === 'image/png') return 'png';
  if (mime === 'image/webp') return 'webp';
  if (mime === 'video/mp4') return 'mp4';
  if (mime === 'video/webm') return 'webm';
  return undefined;
}


