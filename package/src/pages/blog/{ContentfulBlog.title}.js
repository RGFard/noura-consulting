import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Head from "../../components/general/Head";
import setupRichText from "../../utils/setupRichText";
import Body from "../../components/site/blog/Body";

// This is a test comment
const BlogTemplate = ({ data }) => {
  const blog = data?.contentfulBlog;

  // Guard for SSR / missing data
  if (!blog) return null;

  const {
    title,
    friendlyTitle,
    image,
    mainDescription
  } = blog;

  const pathToImage = getImage(image);

  const mainDescriptionParagraph = setupRichText({
    raw: mainDescription.raw,
    references: mainDescription.references,
  });

  return (
    <>
      <Head pageTitle={title} />

      <main className="template2">
        {/* Header */}
        <section className="template2__section--header">
          <div className="template2__section--header-text">
            {/* {friendlyTitle} */}
          </div>

          {pathToImage && (
            <GatsbyImage
              image={pathToImage}
              className="template2__section--header-image"
              alt={image?.description || friendlyTitle}
            />
          )}
        </section>

        {/* mainDescription */}
        <Body
          text={mainDescriptionParagraph}
        />
      </main>
    </>
  );
};

export const query = graphql`
  query getSingleBlog($title: String) {
      contentfulBlog(title: { eq: $title }) {
        title
        friendlyTitle
        image {
          gatsbyImageData(
            layout: CONSTRAINED
            placeholder: DOMINANT_COLOR
          )
          description
        }
        shortDescription
        mainDescription {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            title
            description
            gatsbyImageData(
              layout: CONSTRAINED
              placeholder: BLURRED
            )
          }
          ... on ContentfulImageBlock {
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
      } 
    }
  }
`;

export default BlogTemplate;
