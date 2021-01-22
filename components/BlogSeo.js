import { NextSeo, ArticleJsonLd } from "next-seo";

// eslint-disable-next-line react/prop-types
export default function BlogSeo({ title, date, summary, url, image }) {
  // TODO ver si es importante tener imagen por cada post
  //   const featuredImage = {
  //     url: `https://leerob.io${image}`,
  //     alt: title,
  //   };
  const featuredImage = {};

  return (
    <>
      <NextSeo
        title={`${title} – Rodrigo Villalba`}
        description={summary}
        canonical={url}
        openGraph={{
          type: "article",
          article: {
            publishedTime: date,
          },
          url,
          title,
          description: summary,
          images: [featuredImage],
        }}
      />
      <ArticleJsonLd
        authorName="Rodrigo Villalba"
        dateModified={date}
        datePublished={date}
        description={summary}
        images={[featuredImage]}
        publisherLogo="/static/favicon_io/android-chrome-192x192.png"
        publisherName="Rodrigo Villalba"
        title={title}
        url={url}
      />
    </>
  );
}
