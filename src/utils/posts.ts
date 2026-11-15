import { getCollection, type CollectionEntry } from "astro:content";

export type Post = CollectionEntry<"blog">;

export async function getPostsByDate(): Promise<Post[]> {
  const posts = await getCollection("blog");
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function readingMinutes(body: string | undefined): number {
  const words = (body ?? "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

export function formatDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

// El frontmatter guarda `posts/images/x.png` sin barra inicial.
export function imagePath(image: string | undefined): string | undefined {
  return image && `/${image.replace(/^\//, "")}`;
}
