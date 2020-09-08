import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/core";
import PropTypes from "prop-types";

export default function Layout({ children, pageTitle, url, ...props }) {
  return (
    <>
      <Head>
        <link rel="canonical" href={url} />

        <title>{pageTitle}</title>
      </Head>

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

Layout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.string.isRequired,
  url: PropTypes.string,
};
