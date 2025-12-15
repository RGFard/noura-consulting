import * as React from "react";
import { graphql } from "gatsby";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Head from "../components/general/Head";
import PageIntro from "../components/site/pageIntro/PageIntro";
import Weblog from "../components/site/blog/Weblog";
import Services from "../components/site/services/Services";
import Video from "../components/general/Video";
import HomeVideo from "../assets/videos/home.mp4";


export default function HomePage({ data }) {

  const quickMenu = data?.siteMetadata?.nodes?.[0]?.data?.quickMenu;
  const servicesMenuData = quickMenu.find(item => item.name === "services");

  return (
    <Layout>
      <Head pageTitle="Home Page" />
      <div className="template2">
        <Video src={HomeVideo} dark={true} />
      </div>
      <PageIntro data={data} key={1} />
      <Services footer={true} servicesMenuData={servicesMenuData} />
      <Weblog footer={true} />
    </Layout>
  );
}

export const query = graphql`
  query getSinglePageIntro($name: String) {
    contentfulPageIntro(name: { eq: $name }) {
      name
      friendlyTitle
      url
      page
      description {
        raw
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
        file {
          url
          contentType
        }
      }
      video {
        file {
          url
          contentType
        }
      }
    }
    siteMetadata: allContentfulSite {
      nodes {
        data {
          title
          description
          author
          mainServices {
            name
            url
          }
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
