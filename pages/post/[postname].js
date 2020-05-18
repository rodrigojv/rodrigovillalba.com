import Link from "next/link";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";

import Layout from "../../components/Layout";

export default function BlogPost({
  siteTitle,
  frontmatter,
  markdownBody,
  url,
}) {
  if (!frontmatter) return <></>;
  console.log({ frontmatter });
  return (
    <>
      <Layout pageTitle={`${siteTitle} | ${frontmatter.title}`} url={url}>
        <Link href="/">
          <a>Back to post list</a>
        </Link>
        <article>
          <h1>{frontmatter.title}</h1>
          <p>By {frontmatter.author}</p>
          <div>
            <ReactMarkdown source={markdownBody} />
          </div>
        </article>
      </Layout>
      <style jsx>{`
        article {
          width: 100%;
          max-width: 1200px;
        }
        h1 {
          font-size: 3rem;
        }
        h3 {
          font-size: 2rem;
        }
        .back {
          width: 100%;
          max-width: 1200px;
          color: #00a395;
        }
      `}</style>
    </>
  );
}

export async function getStaticProps({ ...ctx }) {
  const { postname } = ctx.params;

  const content = await import(`../../posts/${postname}.md`);
  const config = await import(`../../siteconfig.json`);
  const data = matter(content.default);
  // const url = "https://" + ctx.req.headers.host + "/" + ctx.req.params.slug;
  console.log("------params", ctx.params);
  return {
    props: {
      siteTitle: config.title,
      frontmatter: data.data,
      url: null,
      markdownBody: data.content,
    },
  };
}

export async function getStaticPaths() {
  const blogSlugs = ((context) => {
    const keys = context.keys();
    const data = keys.map((key, index) => {
      let slug = key.replace(/^.*[\\\/]/, "").slice(0, -3);

      return slug;
    });
    return data;
  })(require.context("../../posts", true, /\.md$/));

  const paths = blogSlugs.map((slug) => `/post/${slug}`);

  return {
    paths,
    fallback: false,
  };
}
