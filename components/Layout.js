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
          @font-face {
            font-family: "IBM Plex Mono";
            src: url("/fonts/IBMPlexMono-Regular.ttf");
            font-weight: 400;
            font-style: normal;
          }

          /* IBM PlexMono italic */

          @font-face {
            font-family: "IBM Plex Mono";
            src: url("/fonts/IBMPlexMono-Italic.ttf");
            font-weight: 400;
            font-style: italic;
          }

          /* IBM PlexMono bold */

          @font-face {
            font-family: "IBM Plex Mono";
            src: url("/fonts/IBMPlexMono-Bold.ttf");
            font-weight: 700;
            font-style: normal;
          }
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
