import matter from "gray-matter";
import Layout from "../components/Layout";
import NextLink from "next/link";
import { FaGithub } from "react-icons/fa";
import { Stack, Box, Link, Flex, Text } from "@chakra-ui/core";

const Index = ({ posts, title, description, ...props }) => {
  return (
    <Layout pageTitle={title}>
      <div className="lead">
        <Box
          border="3px solid #222121"
          borderRadius="20px"
          boxShadow="inset 0px 0px 10px 10px #000"
          w="100%"
          maxW="800px"
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
            <p>Initializing Web Site</p>
            <p
              style={{
                width: "100%",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              ...........................................................................
            </p>
            <Box mt={4}>
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
      </div>

      <style jsx>{`
        .lead {
          background-color: #b6b6b6;
          align-items: center;
          padding-left: 2rem;
          padding-right: 2rem;
          padding-bottom: 2.75rem;
          padding-top: 0.75rem;
        }
        p {
          line-height: 2rem;
        }
        .cursor {
          animation: cursor-fade 1.1s forwards;
          animation-iteration-count: infinite;
        }
        @keyframes cursor-fade {
          0% {
            opacity: 0.15;
          }

          50% {
            opacity: 1;
          }

          100% {
            opacity: 0.15;
          }
        }
        @media screen and (min-width: 800px) {
          .lead {
            padding: 4rem 0;
          }
        }
      `}</style>
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
