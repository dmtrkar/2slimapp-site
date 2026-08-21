import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional().default(''),
    date: z.coerce.date(),
    image: z.string().optional(),
    imageAlt: z.string().optional().default(''),
    slug: z.string(),
  }),
});

const habits = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/habits' }),
  schema: z.object({
    title: z.string(),
    tag: z.string(),
    dek: z.string(),
    imageAlt: z.string(),
    order: z.number(),
    slug: z.string(),
  }),
});

export const collections = { articles, habits };
