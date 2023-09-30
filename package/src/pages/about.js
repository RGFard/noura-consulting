import * as React from "react";
import { graphql } from "gatsby";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Head from "../components/general/Head";
import setupRichText from "../utils/setupRichText";
import Video from "../components/general/Video";
import AboutVideoMp4 from "../assets/videos/about.mp4";

const AboutPage = ({ data }) => {
  const {
    friendlyTitle,
    description
  } = data.contentfulGeneral;
  const descriptionParagraph = setupRichText(description);

  return (
    <Layout>
      <Head pageTitle="About Page" />

      <main className="template2">
        <Video src={AboutVideoMp4} title={friendlyTitle} dark={true} />
        <section className="template2__section--body">
          <div className="template2__section--body-text">
            {descriptionParagraph}
          </div>
        </section>

      </main>
    </Layout>
  );
};

export const query = graphql`
{
  contentfulGeneral(title: {eq: "about"}) {
    title
    url
    friendlyTitle
		description {
    	raw
  	}
  }
}
`;

export default AboutPage;