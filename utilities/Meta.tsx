import Head from "next/head";
import React from "react";

interface MetaProps {
  title: string;
}

const Meta = (MetaProps: MetaProps) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale1" />
      <meta name="keywords" content="Programming, Web Developement" />
      <meta name="description" content="Next.js sample code" />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{MetaProps.title}</title>
    </Head>
  );
};

export default Meta;
