---
title: "Behind the scenes of my blog"
author: "Rodrigo Villalba"
tags: ["development", "react"]
date: "2021-03-09T19:53:51.635Z"
summary: "Part of my motivation for having a website/blog, was the curiosity of building something on my own"
---

Part of my motivation for having a website/blog, was the curiosity of building something on my own, from scratch, relying on my skills as a web developer and being able to pick the tech I liked the most. So I decided to build everything by hand, instead of using a blog template or something like wordpress.

This is the tech behind the site:

- [NextJS](https://nextjs.org/): which allows me to use React, my favorite library, and also easily create pages for each section and blog post.
- [Chakra UI](https://chakra-ui.com/): I have very little design skills and Chakra UI allows me to build something that looks decent. As I heard someone once said "Being a developer, with Chakra I can design as I code".
- Markdown: for writing the blog post and then feed the files to NextJS and dynamically (at build-time) create a page for each markdown file.
- [Netlify](https://www.netlify.com/): for deploying my website. It is hooked up to Github so all I have to do is push the changes to a Github repo and it automatically deploys each new version. I'm planning to eventually move over to [Vercel](https://vercel.com/), which is the hosting platform from the NextJS team and in that way I will be able to fully take advantage of all of NextJS features.

And that's pretty much it, you can find the source code for my website on [Github](https://github.com/rodrigojv/rodrigovillalba.com).

What I need to keep improving on is my writing process and tools. I was using just VSCode to write new blog posts, and lately I've been trying out [iA Writer] and loving it, since it lets you focus on just the text on your screen and also allows you to export the text to a markdown file.

I'm also realizing that I make many writing mistakes and need to keep working on becoming a more smooth writer, for that I should probably get some help from other tools like [Grammarly](https://www.grammarly.com/). And that's on my todo list.
