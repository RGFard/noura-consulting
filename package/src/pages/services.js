import * as React from "react";
import { graphql } from "gatsby";

import "../sass/style.scss";
import Head from "../components/general/Head";
import PageIntro from "../components/site/pageIntro/PageIntro";
import Services from "../components/site/services/Services";
import Video from "../components/general/Video";

export default function ServicesPage({ data }) {

  const {
    file
  } = data.allContentfulAsset.nodes[0];

  return (
    <>
      <Head pageTitle="Services Page" />

      <div className="template2">
        <Video src={file.url} title="Services" dark />
      </div>

      <PageIntro intro={data.contentfulPageIntro} />

      <Services footer={false} />
    </>
  );
}

export const query = graphql`
  query ServicesPageData {
    allContentfulAsset(
      filter: {
        title: { eq: "services-top-banner" }
        file: {
          contentType: { regex: "/^video\\//" }
        }
      }
    ) {
      nodes {
        file {
          url
        }
      }
    }

    contentfulPageIntro(page: { eq: "services" }) {
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