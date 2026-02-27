// src/pages/blog/BlogTemplate.js
import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Head from "../../components/general/Head";
import Video from "../../components/general/Video"
import setupRichText from "../../utils/setupRichText";
import Body from "../../components/site/blog/Body";
import PageIntro from "../../components/site/pageIntro/PageIntro";

const BlogTemplate = ({ data }) => {
  const blog = data?.contentfulBlog;
  if (!blog) return null;

  const { friendlyTitle, image, mainDescription, video } = blog;

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

  const headerImage = getImage(image?.gatsbyImageData);
  const pageIntro = data?.contentfulPageIntro;
  const videoUrl = video?.file?.url;

  const body = setupRichText({
    raw: mainDescription.raw,
    assetMap,
    imageBlockMap,
  });

  return (
    <>
      <Head pageTitle={friendlyTitle} />

      <main className="template2">
        {videoUrl ? (
          <div className="template2">
            <Video src={videoUrl} dark />
          </div>
        ) : (
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
        )}

        {pageIntro && <PageIntro intro={pageIntro} />}

        <Body text={body} />
      </main>
    </>
  );
};

export const query = graphql`
  query getSingleBlog($slug: String) {
    contentfulBlog(slug: { eq: $slug }) {
      title
      friendlyTitle
      slug
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: DOMINANT_COLOR
        )
        description
      }
      video {
        file {
          url
        }
      }        
      mainDescription {
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

export default BlogTemplate;
