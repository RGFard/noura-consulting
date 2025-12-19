import * as React from "react";
import { useContext } from "react";
import { graphql } from "gatsby";
import { useLocation } from "@reach/router";

import "../sass/style.scss";
import Head from "../components/general/Head";
import PageIntro from "../components/site/pageIntro/PageIntro";
import Blogs from "../components/site/blog/Blogs";
import Services from "../components/site/services/Services";
import Video from "../components/general/Video";
import HomeVideo from "../assets/videos/home.mp4";

import { SiteMetadataContext } from "../context/SiteMetadataContext";

export default function HomePage({ data }) {
  const siteMetadata = useContext(SiteMetadataContext);

  const quickMenu = siteMetadata?.quickMenu ?? [];

  const servicesMenuData =
    quickMenu.find(item => item.name === "services") || {};

  const blogMenuData =
    quickMenu.find(item => item.name === "blog") || {};

  const { pathname } = useLocation();
  const footerButton = pathname.replace(/\//g, "") === "";

  return (
    <>
      <Head pageTitle="Home Page" />

      <div className="template2">
        <Video src={HomeVideo} dark />
      </div>

      {/* ✅ data is now defined */}
      <PageIntro data={data} />

      <Services
        footerButton={footerButton}
        servicesMenuData={servicesMenuData}
      />

      <Blogs
        footerButton={footerButton}
        blogMenuData={blogMenuData}
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
  }
`;