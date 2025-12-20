import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header/Header";
import Footer from "./footer/Footer";
import { SiteMetadataContext } from "../../context/SiteMetadataContext";

const query = graphql`
{
  allContentfulJsonContent(filter: { name: { eq: "icon" } }) {
    nodes {
      childrenContentfulJsonContentObjectJsonNode {
        internal {
          content
        }
      }
    }
  }
  siteMetadata: allContentfulSite {
    nodes {
      data {
        title
        description
        author
        header
        quickMenu {
          name
          url
          type
        }
        followUs {
          name
          url
        }
      }
    }
  }
}
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(query);

  const siteMetadata = data?.siteMetadata?.nodes?.[0]?.data ?? {};
  const header = siteMetadata?.header ?? "";
  const icons =
    data.allContentfulJsonContent.nodes[0]
      .childrenContentfulJsonContentObjectJsonNode;

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <div className="container">
        <h1 className="container__hidden">{header}</h1>

        <Header siteMetadata={siteMetadata} />

        <div className="container__main">
          {children}
        </div>

        <Footer siteMetadata={siteMetadata} icons={icons} />
      </div>
    </SiteMetadataContext.Provider>
  );
};

export default Layout;
