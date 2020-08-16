import Link from "next/link";
import { List, ListItem, Heading, Stack, Tag } from "@chakra-ui/core";
export default function PostList({ posts }) {
  if (posts === "undefined") {
    return null;
  }
  return (
    <div>
      {!posts && <div>No posts!</div>}
      <List spacing={6}>
        {posts &&
          posts.map((post) => {
            return (
              <ListItem key={post.slug}>
                <Heading as="h3" size="lg">
                  <Link href={{ pathname: `/post/${post.slug}` }}>
                    <a>{post.frontmatter.title}</a>
                  </Link>
                </Heading>
                {post.frontmatter.tags && (
                  <Stack mt={2} spacing={4} isInline>
                    {post.frontmatter.tags.map((tag) => (
                      <Tag size="md" key={tag} variantColor="blue">
                        {tag}
                      </Tag>
                    ))}
                  </Stack>
                )}
              </ListItem>
            );
          })}
      </List>
    </div>
  );
}
