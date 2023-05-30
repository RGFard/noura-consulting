import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ pageTitle, siteMetadata }) => {
  const { title, description } = siteMetadata.find(() => true).list;
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${pageTitle} | ${title}`}
      meta={[{ name: `description`, content: description }]}>
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default SEO;