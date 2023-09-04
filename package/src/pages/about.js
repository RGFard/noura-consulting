import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Head from "../components/general/Head";
import setupRichText from "../utils/setupRichText";
import VisionVideoMp4 from "../assets/images/noura-consulting-about.mp4";

const AboutPage = ({ data }) => {
  const {
    title,
    friendlyTitle,
    url,
    description
  } = data.contentfulGeneral;
  const descriptionParagraph = setupRichText(description);

  return (
    <Layout>
      <Head pageTitle="About Page" />

      <main className="template2">
        <section className="template2__section--header" key="header">
          <div className="template2__section--header-text">
            {friendlyTitle}
          </div>
          <video className="template2__section--header-video" autoPlay loop muted playsInline>
            <source src={VisionVideoMp4} type="video/mp4" />
            Your browser is not supported! Use Chrome or Firefox.
          </video>
        </section>
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