import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

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
            margin: 0;
            padding: 0;
            font-family: "IBM Plex Mono", -apple-system, BlinkMacSystemFont,
              "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
              "Helvetica Neue", sans-serif;
            color: #445566;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: bold;
          }

          .content {
            padding-top: 2rem;
            padding-bottom: 2rem;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 4rem;
          }
        `}
      </style>
      <section>
        <Header />
        <main>{children}</main>
      </section>
      <Footer></Footer>
    </>
  );
}
