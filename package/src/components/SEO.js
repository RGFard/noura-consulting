import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

// const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//         description
//       }
//     }
//   }
// `;

const SEO = ({ title, siteMetadata }) => {
  // const { site } = useStaticQuery(query);
  const metaDescription = siteMetadata.description;
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${siteMetadata.title}`}
      meta={[{ name: `description`, content: metaDescription }]}>
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i"
        rel="stylesheet"
      />
    </Helmet>
    // <div></div>
  );
};

export default SEO;