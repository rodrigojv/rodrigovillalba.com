import matter from "gray-matter";
import Layout from "../components/Layout";
import NextLink from "next/link";
import { FaGithub } from "react-icons/fa";
import { Stack, Box, Link, Flex } from "@chakra-ui/core";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <Box
        boxShadow="xl"
        rounded="md"
        w="100%"
        maxW="960px"
        mx="auto"
        backgroundImage="linear-gradient(to bottom left, slategrey, black)"
        backgroundPosition="center"
        backgroundSize="cover"
        color="#EBF8FF"
        textShadow="0 0 5px #EBF8FF, 0 0 7px #EBF8FF, 0 0 12px #EBF8FF"
        px={8}
        py={8}
      >
        <Stack spacing={8}>
          <Box textAlign="center">Initializing...</Box>
          <Box>
            <p>>Who is Rodrigo Villalba and what does he do anyways?</p>
            <p>Loading results...</p>
            <p>
              Results:{" "}
              <NextLink href="/about" passHref>
                <Link>About Page 🤷🏻‍♀️</Link>
              </NextLink>
            </p>
          </Box>
          <Box>
            <p>>Has he written any blog posts?</p>
            <p>Loading results...</p>
            <p>
              Results:{" "}
              <NextLink href="/blog" passHref>
                <Link>Blog Page ✍</Link>
              </NextLink>
            </p>
          </Box>
          <Box>
            <p>>What about Open Source?</p>
            <p>Loading results...</p>
            <Flex>
              <span>Results:</span>{" "}
              <Flex ml={2}>
                <Link
                  isRound={true}
                  fontSize="30px"
                  isExternal
                  href="https://github.com/rodrigojv"
                >
                  <FaGithub />
                </Link>
              </Flex>
            </Flex>
          </Box>
          <Box>
            ><span className="cursor">█</span>
          </Box>
        </Stack>
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
