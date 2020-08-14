import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import { Box } from "@chakra-ui/core";
import Layout from "../../components/Layout";
import Container from "../../components/Container";

export default function BlogPost({
  siteTitle,
  frontmatter,
  markdownBody,
  url,
}) {
  if (!frontmatter) return <></>;
  console.log({ frontmatter });
  return (
    <>
      <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`} url={url}>
        <Container>
          <article>
            <header>
              <Link href="/blog">
                <a>Back to post list</a>
              </Link>
              <h1>{frontmatter.title}</h1>
              <p>By {frontmatter.author}</p>
            </header>
            <Box mt={8} px={4}>
              <ReactMarkdown source={markdownBody} />
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
