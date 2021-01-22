import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import BlogSeo from "./BlogSeo";

export default function BlogLayout({
  children,
  frontmatter,
  siteUrl,
  ...props
}) {
  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
      </Head>
      <BlogSeo url={`${siteUrl}/post/${frontmatter.slug}`} {...frontmatter} />
      <section>
        <Header />
        <Box as="main" mt={6} {...props}>
          {children}
        </Box>
      </section>
      <Footer></Footer>
    </>
  );
}

BlogLayout.propTypes = {
  children: PropTypes.node,
  frontmatter: PropTypes.object.isRequired,
  siteUrl: PropTypes.string,
};
