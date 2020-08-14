import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import { Box } from "@chakra-ui/core";

export default function Layout({ children, pageTitle, url, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={url} />
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>
        {`
          @import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@300;400;700;800;900&display=swap");
          html,
          body {
            color: #445566;
          }
        `}
      </style>
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
