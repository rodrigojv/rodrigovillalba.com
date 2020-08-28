import NextLink from "next/link";
import {
  List,
  ListItem,
  Heading,
  Stack,
  Tag,
  Box,
  Flex,
  Link,
  Icon,
  Divider,
  PseudoBox,
  Grid,
} from "@chakra-ui/core";
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
                <PostItemLayout post={post}>
                  <Box fontSize="xl">
                    <NextLink href={{ pathname: `/post/${post.slug}` }}>
                      <a>{post.frontmatter.title}</a>
                    </NextLink>
                  </Box>
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
                <PostItemLayout post={post}>
                  <Box fontSize="xl">
                    <Link href={post.frontmatter.guest_post_url}>
                      {post.frontmatter.title}
                    </Link>
                  </Box>
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

export function PostItemLayout({ post, children }) {
  return (
    <ListItem key={post.slug}>
      <PseudoBox _hover={{ boxShadow: "sm" }} padding={4}>
        <Grid templateColumns="4fr 2fr" alignItems="baseline">
          {children}
        </Grid>
      </PseudoBox>
    </ListItem>
  );
}

export function Tags({ post }) {
  return (
    post.frontmatter.tags && (
      <Stack mt={2} spacing={4} isInline>
        {post.frontmatter.tags.map((tag) => (
          <Tag size="md" key={tag} variantColor="blue">
            {tag}
          </Tag>
        ))}
      </Stack>
    )
  );
}
