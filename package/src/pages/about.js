import * as React from "react";
import { graphql } from "gatsby";

import "../sass/style.scss";
import Head from "../components/general/Head";
import setupRichText from "../utils/setupRichText";
import Video from "../components/general/Video";
import PageIntro from "../components/site/pageIntro/PageIntro";


const AboutPage = ({ data }) => {
  const about = data?.contentfulGeneral;

  // Guard: prevents crashes during SSR / missing CMS entry
  if (!about) return null;

  const { description } = about;
  const descriptionParagraph = setupRichText(description);

  const {
    file
  } = data.allContentfulAsset.nodes[0];

  return (
    <>
      <Head pageTitle="About Page" />

      <div className="template2">
        <Video src={file.url} title="About" dark />
      </div>

      <PageIntro data={data} />

      <section className="template2__section--body">
        <div className="template2__section--body-text">
          {descriptionParagraph}
        </div>
      </section>
    </>
  );
};

export const query = graphql`
query AboutPageData {
    contentfulGeneral(title: { eq: "about" }) {
      title
      url
      friendlyTitle
      description {
        raw
      }
    }

    allContentfulAsset(
      filter: {
        title: { eq: "about-top-banner" }
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

    contentfulPageIntro(page: { eq: "about" }) {
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

export default AboutPage;
