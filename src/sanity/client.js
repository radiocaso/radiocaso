import {createClient} from '@sanity/client';

export const client = createClient({
  projectId: '7w6dgxzr',
  dataset: 'radiocaso',
  useCdn: false,
  apiVersion: '2024-11-18',
});
