import * as React from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";

import "../sass/style.scss";
import Head from "../components/general/Head";
import PageIntro from "../components/site/pageIntro/PageIntro";
import Blogs from "../components/site/blog/Blogs";
import Services from "../components/site/services/Services";
import Video from "../components/general/Video";

export default function HomePage({ data }) {
  const homeTopBannerVideo = data.servicesTopBannerVideo?.nodes[0]?.file?.url;

  const { pathname } = useLocation();
  const footerButton = pathname.replace(/\//g, "") === "";

  return (
    <>
      <Head pageTitle="Home Page" />

      <div className="template2">
        <Video src={homeTopBannerVideo} dark />
      </div>

      <PageIntro intro={data.contentfulPageIntro} />

      <Services
        footerButton={footerButton}
      />

      <Blogs
        footerButton={footerButton}
        limit={3}
      />
    </>
  );
}

export const query = graphql`
  query HomePageIntro {
    contentfulPageIntro(page: { eq: "home" }) {
      friendlyTitle
      description {
        raw
      }
      image {
        file {
          url
        }
      }
      video {
        file {
          url
        }
      }
    }

    servicesTopBannerVideo: allContentfulAsset(
      filter: {
        title: { eq: "home-top-banner" }
        file: {
          contentType: { regex: "/^video\\//" }
        }
      }
      limit: 1
    ) {
      nodes {
        title
        file {
          url
          contentType
          fileName
          details {
            size
          }
        }
      }
    }
  }
`;
