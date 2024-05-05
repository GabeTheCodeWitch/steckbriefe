import type { PageServerLoad } from './$types';
import { supabase } from '$lib/db';
import type { Database } from '$lib/schema';
import { convertGoogleDriveImages } from '$lib/googleDrive/helper';

// Automatisch generierter Typ
type Character = Database['public']['Tables']['steampunk']['Row'];

export const load = (async () => {
  let characters: Character[] = [];

  const { data, error } = await supabase
    .from('steampunk')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Could net fetch characters', error);
  } else {
    characters = data.map(convertGoogleDriveImages('avatarUrl'));
  }

  return {
    characters: characters,
  };
}) satisfies PageServerLoad;
