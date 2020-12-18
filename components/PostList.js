import NextLink from "next/link";
import {
  List,
  ListItem,
  Heading,
  Stack,
  Tag,
  Box,
  Link as ChakraLink,
  Divider,
  Grid,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

export default function PostList({ posts }) {
  if (posts === "undefined") {
    return null;
  }
  return (
    <div>
      <Heading mt={4} as="h3" size="sm">
        Latest Posts
      </Heading>
      {!posts && <div>No posts!</div>}
      <List mt={4} spacing={6}>
        {posts &&
          posts
            .filter((post) => !post.frontmatter.guest_post_url)
            .map((post) => {
              return (
                <PostItemLayout post={post} key={post.slug}>
                  <NextLink href={{ pathname: `/post/${post.slug}` }}>
                    <a className="link-post">
                      <Box fontSize="xl">{post.frontmatter.title}</Box>
                    </a>
                  </NextLink>
                  <Box>
                    <Tags post={post} />
                  </Box>
                </PostItemLayout>
              );
            })}
      </List>
      <Divider mt={12} />
      <Heading mt={4} as="h3" size="sm">
        Guest Posts
      </Heading>
      <List mt={4} spacing={6}>
        {posts &&
          posts
            .filter((post) => post.frontmatter.guest_post_url)
            .map((post) => {
              return (
                <PostItemLayout
                  post={post}
                  key={post.frontmatter.guest_post_url}
                >
                  <ChakraLink
                    className="link-post"
                    href={post.frontmatter.guest_post_url}
                    isExternal
                  >
                    <Box fontSize="xl">{post.frontmatter.title}</Box>
                  </ChakraLink>
                  <Box>
                    <Tags post={post} />
                  </Box>
                </PostItemLayout>
              );
            })}
      </List>
    </div>
  );
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export function PostItemLayout({ post, children }) {
  return (
    <ListItem key={post.slug}>
      <Box
        transition={{ boxShadow: ".25s" }}
        _hover={{ boxShadow: "sm" }}
        padding={4}
      >
        <Grid templateColumns="4fr 2fr" alignItems="baseline">
          {children}
        </Grid>
      </Box>
    </ListItem>
  );
}

PostItemLayout.propTypes = {
  post: PropTypes.object.isRequired,
  children: PropTypes.node,
};

export function Tags({ post }) {
  return (
    post.frontmatter.tags && (
      <Stack mt={2} spacing={4} isInline>
        {post.frontmatter.tags.map((tag) => (
          <Tag size="md" key={tag} colorScheme="blue">
            {tag}
          </Tag>
        ))}
      </Stack>
    )
  );
}

Tags.propTypes = {
  post: PropTypes.object.isRequired,
};
