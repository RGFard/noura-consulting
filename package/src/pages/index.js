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

  return (
    <Layout>
      <Head pageTitle="Home Page" />
      <div className="template2">
        <Video src={HomeVideo} dark={true} />
      </div>
      <PageIntro data={data} />
      <Weblog footer={true} />
      <Services footer={true} />
    </Layout>
  );
}

export const query = graphql`
  query getSinglePageIntro($name: String) {
    contentfulPageIntro(name: {eq: $name}) {
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
  }
`;
