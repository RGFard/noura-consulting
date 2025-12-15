import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout/Layout";
import Head from "../../components/general/Head";
import setupRichText from "../../utils/setupRichText";

const ServiceTemplate = ({ data }) => {
  const {
    title,
    friendlyTitle,
    mainImage,
    description,
  } = data.contentfulService;
  const pathToMainImage = getImage(mainImage);
  const bodyDescription = setupRichText(description);

  return (
    <Layout>
      <Head pageTitle={title} />
      <main className="template2">
        <section className="template2__section--header" key="header">
          <div className="template2__section--header-text">
            {friendlyTitle}
          </div>
          <GatsbyImage
            image={pathToMainImage}
            className="template2__section--header-image"
            alt={mainImage.description}
          />
        </section>

        <section className="template2__section--body">
          <div className="template2__section--body-text">
            {bodyDescription}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
query getSingleService($title: String) {
  contentfulService(title: {eq: $title}) {
    title
    friendlyTitle
    mainImage {
      gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      description
    }
    description {
      raw
    }
  }
}
`;

export default ServiceTemplate;