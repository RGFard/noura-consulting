import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Head from "../../components/general/Head";
import setupRichText from "../../utils/setupRichText";

const ServiceTemplate = ({ data }) => {
  const service = data?.contentfulService;

  // 🔒 Guard: prevents crashes during SSR or missing CMS data
  if (!service) return null;

  const {
    title,
    friendlyTitle,
    mainImage,
    description,
  } = service;

  const pathToMainImage = getImage(mainImage);
  const bodyDescription = setupRichText(description);

  return (
    <>
      <Head pageTitle={title} />

      <main className="template2">
        {/* Header */}
        <section className="template2__section--header">
          <div className="template2__section--header-text">
            {friendlyTitle}
          </div>

          {pathToMainImage && (
            <GatsbyImage
              image={pathToMainImage}
              className="template2__section--header-image"
              alt={mainImage?.description || friendlyTitle}
            />
          )}
        </section>

        {/* Body */}
        <section className="template2__section--body">
          <div className="template2__section--body-text">
            {bodyDescription}
          </div>
        </section>
      </main>
    </>
  );
};

export const query = graphql`
  query getSingleService($title: String) {
    contentfulService(title: { eq: $title }) {
      title
      friendlyTitle
      mainImage {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: DOMINANT_COLOR
        )
        description
      }
      description {
        raw
      }
    }
  }
`;

export default ServiceTemplate;
