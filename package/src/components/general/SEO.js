import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Helmet } from "react-helmet";

const query = graphql`
{
  siteMetadata: allContentfulContent(
    filter: {title: {eq: "siteMetadata"}}
  ) {
    nodes {
      list {
        description
        author
        title
      }
    }
  }
}
`;

const SEO = ({ pageTitle }) => {
  const { title, description } = useStaticQuery(query).siteMetadata.nodes[0].list;
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