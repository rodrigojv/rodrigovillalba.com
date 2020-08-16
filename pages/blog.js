import matter from "gray-matter";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import Container from "../components/Container";
import { Heading, Text, Box, Stack } from "@chakra-ui/core";

const Index = ({ posts, title }) => {
  return (
    <Layout pageTitle={`Blog | ${title}`}>
      <header>
        <Container textAlign="center">
          <Stack spacing={6}>
            <Heading>Blog</Heading>
            <Text fontWeight="medium" fontSize="lg">
              Words and thoughts about software development, productivity and
              other wholesome topics
            </Text>
          </Stack>
        </Container>
      </header>
      <Box as="section" mt={8}>
        <Container>
          <PostList posts={posts} />
          <Text textAlign="center" mt={4} py={4}>
            🚧This blog is under construction. More useful content is coming
            soon, stay tuned
          </Text>
        </Container>
      </Box>
    </Layout>
  );
};

export default Index;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  const posts = ((context) => {
    const keys = context.keys();
    const values = keys.map(context);

    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);
      const value = values[index];
      const document = matter(value.default);
      return {
        frontmatter: document.data,
        markdownBody: document.content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  return {
    props: {
      posts,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
