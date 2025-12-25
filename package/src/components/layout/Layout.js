import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header/Header";
import Footer from "./footer/Footer";

import { SiteMetadataContext } from "../../context/SiteMetadataContext";
import { CaptionContext } from "../../context/CaptionContext";

const query = graphql`
{
  captions: allContentfulJsonContent(filter: { name: { eq: "caption" } }) {
    nodes {
      childrenContentfulJsonContentObjectJsonNode {
        internal {
          content
        }
      }
    }
  }

  icons: allContentfulJsonContent(filter: { name: { eq: "icon" } }) {
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

  /* -------------------------
     Site metadata (structure)
  -------------------------- */
  const siteMetadata = data?.siteMetadata?.nodes?.[0]?.data ?? {};
  const header = siteMetadata?.header ?? "";

  /* -------------------------
     Icons (raw JSON nodes)
  -------------------------- */
  const icons =
    data?.icons?.nodes?.[0]
      ?.childrenContentfulJsonContentObjectJsonNode ?? [];

  /* -------------------------
     Captions (parsed once)
  -------------------------- */
  const rawCaptions =
    data?.captions?.nodes?.[0]
      ?.childrenContentfulJsonContentObjectJsonNode?.[0]
      ?.internal?.content;

  const parsedCaptions = rawCaptions ? JSON.parse(rawCaptions) : null;

  const captions = Array.isArray(parsedCaptions)
    ? parsedCaptions[0] ?? {}
    : parsedCaptions ?? {};

  return (
    <SiteMetadataContext.Provider value={siteMetadata}>
      <CaptionContext.Provider value={captions}>
        <div className="container">
          {/* Accessibility / SEO */}
          <h1 className="container__hidden">{header}</h1>

          <Header siteMetadata={siteMetadata} />

          <main className="container__main">
            {children}
          </main>

          <Footer
            siteMetadata={siteMetadata}
            icons={icons}
          />
        </div>
      </CaptionContext.Provider>
    </SiteMetadataContext.Provider>
  );
};

export default Layout;
