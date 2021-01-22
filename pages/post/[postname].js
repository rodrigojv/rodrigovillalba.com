import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import { Box, Heading, Text, Stack, Tag } from "@chakra-ui/react";
import BlogLayout from "../../components/BlogLayout";
import Container from "../../components/Container";
import PostRenderer from "../../components/PostRenderer";
import tagToColor from "../../utils/tagToColor";
import { format, parseISO } from "date-fns";

export default function BlogPost({
  siteTitle,
  frontmatter,
  markdownBody,
  siteUrl,
}) {
  if (!frontmatter) {
    return <></>;
  }
  return (
    <>
      <BlogLayout frontmatter={frontmatter} siteUrl={siteUrl}>
        <Container maxW="800px">
          <Box as="article" fontSize="lg" lineHeight="1.75em">
            <header>
              <Heading mt={4}>{frontmatter.title}</Heading>
              <Text mt={2} fontSize="sm">
                By {frontmatter.author} on {frontmatter.formattedDate}
              </Text>
              {frontmatter.tags && (
                <Stack mt={2} spacing={4} isInline>
                  {frontmatter.tags.map((tag) => (
                    <Tag size="sm" key={tag} colorScheme={tagToColor(tag)}>
                      {tag}
                    </Tag>
                  ))}
                </Stack>
              )}
            </header>
            <Box my={4}>
              <ReactMarkdown
                renderers={PostRenderer}
                source={markdownBody}
                escapeHtml={false}
              />
            </Box>
          </Box>
        </Container>
      </BlogLayout>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const postContent = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const { data, content } = matter(postContent.default);
  const formattedDate = format(parseISO(data.date), "d MMM, yyyy");
  return {
    props: {
      siteTitle: config.title,
      frontmatter: { ...data, slug: postname, formattedDate },
      siteUrl: config.url,
      markdownBody: content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
