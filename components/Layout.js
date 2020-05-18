import Head from "next/head";
import Header from "./Header";

export default function Layout({ children, pageTitle, url, ...props }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={url} />
        <title>{pageTitle}</title>
      </Head>
      <style jsx global>{`
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
        a {
          color: #00a395;
        }
        .content {
          padding: 2rem 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <section className="layout">
        <Header />
        <div className="content">{children}</div>
      </section>
      <footer>Built by me!</footer>
    </>
  );
}
