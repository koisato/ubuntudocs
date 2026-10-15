import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// searches English and Hungarian pages (default multilingual mode)
export const { GET } = createFromSource(source);
