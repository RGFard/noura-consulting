import * as React from "react";
import { graphql } from "gatsby";

import "../sass/style.scss";
import Head from "../components/general/Head";
import setupRichText from "../utils/setupRichText";
import Video from "../components/general/Video";
import AboutVideoMp4 from "../assets/videos/about.mp4";

const AboutPage = ({ data }) => {
  const about = data?.contentfulGeneral;

  // 🔒 Guard: prevents crashes during SSR / missing CMS entry
  if (!about) return null;

  const { friendlyTitle, description } = about;
  const descriptionParagraph = setupRichText(description);

  return (
    <>
      <Head pageTitle="About Page" />

      <main className="template2">
        <Video
          src={AboutVideoMp4}
          title={friendlyTitle}
          dark
        />

        <section className="template2__section--body">
          <div className="template2__section--body-text">
            {descriptionParagraph}
          </div>
        </section>
      </main>
    </>
  );
};

export const query = graphql`
{
  contentfulGeneral(title: { eq: "about" }) {
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
