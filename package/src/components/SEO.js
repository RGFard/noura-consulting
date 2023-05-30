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

const SEO = ({ title, site }) => {
  // const { site } = useStaticQuery(query);
  // console.log(site.siteMetadata.title);
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={`${title} | ${site.siteMetadata.title}`}
      meta={[{ name: `description`, content: site.siteMetadata.description }]}>
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i"
        rel="stylesheet"
      />
    </Helmet>
    // <div></div>
  );
};

export default SEO;