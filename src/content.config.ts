import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string().default("Rodrigo Villalba"),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    image: z.string().optional(),
    guest_post_url: z.string().url().optional(),
  }),
});

const cv = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/cv" }),
});

export const collections = { blog, cv };
