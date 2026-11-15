import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPostsByDate } from "../utils/posts";

export async function GET(context: APIContext) {
  const posts = (await getPostsByDate()).filter((p) => !p.data.guest_post_url);
  return rss({
    title: "Rodrigo Villalba",
    description: "Words and thoughts about software development, productivity and other wholesome topics",
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.summary,
      pubDate: p.data.date,
      link: `/post/${p.id}/`,
    })),
  });
}
