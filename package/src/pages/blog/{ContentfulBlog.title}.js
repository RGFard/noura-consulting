import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Head from "../../components/general/Head";
import setupRichText from "../../utils/setupRichText";
import Body from "../../components/site/blog/Body";

// This is a test comment
const BlogTemplate = ({ data }) => {
  const blog = data?.contentfulBlog;

  // 🔒 Guard for SSR / missing data
  if (!blog) return null;

  const {
    title,
    friendlyTitle,
    image,
    shortDescription,
    mainDescription
  } = blog;

  const pathToImage = getImage(image);
  // const pathToIntroductionImage = getImage(introductionImage);
  // const pathToProblemStatementImage = getImage(problemStatementImage);
  // const pathToSolutionImage = getImage(solutionImage);

  // const introductionParagraph = setupRichText(introduction);
  // const problemStatementParagraph = setupRichText(problemStatement);
  // const solutionParagraph = setupRichText(solution);
  // const conclusionParagraph = setupRichText(conclusion);
  
  // console.log(mainDescriptionParagraph);
  
  // const mainDescriptionParagraph = setupRichText(mainDescription);
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

        {/* Introduction */}
        <Body
          text={mainDescriptionParagraph}
        // image={pathToIntroductionImage}
        // alt={introductionImage?.description}
        />

        {/* Introduction */}
        {/* <Body
          text={introductionParagraph}
          image={pathToIntroductionImage}
          alt={introductionImage?.description}
        /> */}

        {/* Problem Statement */}
        {/* <Body
          text={problemStatementParagraph}
          image={pathToProblemStatementImage}
          alt={problemStatementImage?.description}
        /> */}

        {/* Solution */}
        {/* <Body
          text={solutionParagraph}
          image={pathToSolutionImage}
          alt={solutionImage?.description}
        /> */}

        {/* Conclusion */}
        {/* <section className="template2__section--body">
          <div className="template2__section--body-text">
            {conclusionParagraph}
          </div>
        </section> */}
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
  }
`;

export default BlogTemplate;
