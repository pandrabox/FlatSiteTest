import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const boothItems = defineCollection({
	loader: glob({ base: './src/content/boothItems', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		price: z.number(),
		boothUrl: z.string(),
		imageUrl: z.string(),
		category: z.enum(['avatar', 'official_clothing', 'fan_clothing', 'gimmick']),
		recommendRank: z.number().min(1).max(5),
		description: z.string(),
		author: z.string(),
	}),
});

const guides = defineCollection({
	loader: glob({ base: './src/content/guides', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		stepNumber: z.number(),
		title: z.string(),
		description: z.string(),
		seoTitle: z.string(),
		keywords: z.array(z.string()).optional(),
	}),
});

export const collections = { boothItems, guides };
