import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const query = graphql`
{
  siteMetadata: allContentfulSite {
    nodes {
      data {
        title
        description
        author
      }
    }
  }
}
`;

const Head = ({ pageTitle }) => {
  const { title, description } = useStaticQuery(query).siteMetadata.nodes[0].data;
  return (
    <>
      <title>{`${pageTitle} | ${title}`}</title>
      <meta name="description" content={description} />
      <link
        href="https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,400i|Nunito:300,300i"
        rel="stylesheet"
      />
    </>
  );
};

export default Head;