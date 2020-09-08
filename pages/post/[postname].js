import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Box, Heading, Text, Icon, Stack, Tag } from "@chakra-ui/core";
import Layout from "../../components/Layout";
import Container from "../../components/Container";
import Code from "../../components/Code";

export default function BlogPost({
  siteTitle,
  frontmatter,
  markdownBody,
  url,
}) {
  if (!frontmatter) {
    return <></>;
  }
  return (
    <>
      <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`} url={url}>
        <Container maxW="800px">
          <article>
            <header>
              <Heading mt={4}>{frontmatter.title}</Heading>
              <Text>By {frontmatter.author}</Text>
              {frontmatter.tags && (
                <Stack mt={2} spacing={4} isInline>
                  {frontmatter.tags.map((tag) => (
                    <Tag size="sm" key={tag} variantColor="blue">
                      {tag}
                    </Tag>
                  ))}
                </Stack>
              )}
            </header>
            <Box mt={4} px={4} py={6}>
              <ReactMarkdown source={markdownBody} renderers={{ code: Code }} />
            </Box>
          </article>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);
  // const url = "https://" + ctx.req.headers.host + "/" + ctx.req.params.slug;
  console.log("------params", ctx.params);
  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      url: null,
      markdownBody: data.content,
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
