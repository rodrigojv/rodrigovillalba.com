import matter from "gray-matter";
import { format, parseISO } from "date-fns";
import Layout from "../components/Layout";
import PostList from "../components/PostList";
import Container from "../components/Container";
import { Heading, Text, Box, Stack } from "@chakra-ui/react";
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
      const { data, content } = matter(value.default);
      const formattedDate = format(parseISO(data.date), "d MMM, yyyy");
      return {
        frontmatter: { ...data, formattedDate },
        markdownBody: content,
        slug,
      };
    });
    return data;
  })(require.context("../posts", true, /\.md$/));

  const postDataSortByDate = posts.sort((post1, post2) => {
    const beforeDate = parseISO(post1.frontmatter.date);
    const afterDate = parseISO(post2.frontmatter.date);
    return afterDate - beforeDate;
  });
  return {
    props: {
      posts: postDataSortByDate,
      title: configData.default.title,
      description: configData.default.description,
    },
  };
}
