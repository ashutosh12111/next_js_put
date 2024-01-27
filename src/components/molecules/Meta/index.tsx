import React from "react";
const defaultDescription =
  "Unlock your professional potential now! Explore the tailored knowledge of our Professional Member section in the Encyclopedia for ambitious achievers like you";
import Head from "next/head";

const Meta = ({
  title,
  description = defaultDescription,
  image,
  url = "",
}: any) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
        />
        <meta
          property="og:title"
          content="Putiton-E"
        />
        <meta
          name="image"
          property="og:image"
          content={image}
        />

        <meta
          property="og:image:alt"
          content={description}
        />

        <meta
          property="og:type"
          content={"article"}
        />
        <meta
          property="og:description"
          content={description}
        />
        <meta
          property="og:url"
          content={url}
        />
        <meta
          property="og:site_name"
          content="Putiton-E"
        />
        <meta
          name="author"
          content="Putiton-E"
        />
        <link
          rel="canonical"
          href={url}
        ></link>

        <meta
          name="twitter:title"
          content="Putiton-E"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:description"
          content={description}
        />
        <meta
          name="twitter:image"
          content={image}
        />
        <meta
          name="twitter:url"
          content={url}
        />
        <meta
          name="twitter:image:alt"
          content={description}
        />
      </Head>
    </>
  );
};

export default Meta;
