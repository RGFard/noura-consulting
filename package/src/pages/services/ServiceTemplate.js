import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Head from "../../components/general/Head";
import setupRichText from "../../utils/setupRichText";
import PageIntro from "../../components/site/pageIntro/PageIntro";

const ServiceTemplate = ({ data }) => {
  const service = data?.contentfulService;
  if (!service) return null;

  const { title, friendlyTitle, mainImage, description } = service;

  const imageBlocks = data.allContentfulImageBlock?.nodes || [];
  const assets = data.allContentfulAsset?.nodes || [];

  const imageBlockMap = {};
  imageBlocks.forEach((b) => {
    imageBlockMap[b.contentful_id] = b;
  });

  const assetMap = {};
  assets.forEach((a) => {
    assetMap[a.contentful_id] = a;
  });

  const pathToMainImage = getImage(mainImage?.gatsbyImageData);

  const bodyDescription = setupRichText({
    raw: description.raw,
    assetMap,
    imageBlockMap,
  });

  return (
    <>
      <Head pageTitle={title} />

      <main className="template2">
        <section className="template2__section--header">
          <div className="template2__section--header-text">
            {/* {friendlyTitle} */}
          </div>

          {pathToMainImage && (
            <GatsbyImage
              image={pathToMainImage}
              className="template2__section--header-image"
              alt={mainImage?.description || friendlyTitle}
            />
          )}
        </section>

        {data.contentfulPageIntro && (
          <PageIntro intro={data.contentfulPageIntro} />
        )}

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
  query getSingleService($slug: String!) {
    contentfulService(slug: { eq: $slug }) {
      title
      friendlyTitle
      slug
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

    contentfulPageIntro(slug: { eq: $slug }) {
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

    allContentfulImageBlock {
      nodes {
        contentful_id
        alignment
        caption
        sideText {
          raw
        }
        image {
          description
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: BLURRED
          )
        }
      }
    }

    allContentfulAsset {
      nodes {
        contentful_id
        title
        description
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: BLURRED
        )
      }
    }
  }
`;

export default ServiceTemplate;