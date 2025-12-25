import * as React from "react";
import { graphql } from "gatsby";

import "../sass/style.scss";
import Head from "../components/general/Head";
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

      <Services footer={false} />
    </>
  );
}

export const query = graphql`
query AllVideoAssets {
  allContentfulAsset(
    filter: {
      title: { eq: "services-top-banner"}
      file: {
        contentType: { regex: "/^video\\//" }
      }
    }
  ) {
    nodes {
      title
      description
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