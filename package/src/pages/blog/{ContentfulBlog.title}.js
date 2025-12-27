import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Head from "../../components/general/Head";
import setupRichText from "../../utils/setupRichText";
import Body from "../../components/site/blog/Body";

const BlogTemplate = ({ data }) => {
  const blog = data?.contentfulBlog;
  if (!blog) return null;

  const {
    title,
    friendlyTitle,
    image,
    mainDescription,
  } = blog;

  const imageBlockMap = {};
  data.allContentfulImageBlock.nodes.forEach(b => {
    imageBlockMap[b.contentful_id] = b;
  });


  const headerImage = getImage(image?.gatsbyImageData);

  const mainDescriptionParagraph = setupRichText({
    raw: mainDescription.raw,
    references: mainDescription.references,
    imageBlockMap,
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

          {headerImage && (
            <GatsbyImage
              image={headerImage}
              className="template2__section--header-image"
              alt={image?.description || friendlyTitle}
            />
          )}
        </section>

        {/* Body */}
        <Body text={mainDescriptionParagraph} />
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
        }
      }
    }

    # ImageBlocks queried independently (NO union risk)
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
  }
`;

export default BlogTemplate;
