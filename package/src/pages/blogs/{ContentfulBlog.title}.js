import { graphql } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout/Layout";
import Seo from "../../components/general/SEO";
import setupRichText from "../../utils/setupRichText";
import Body from "../../components/site/blogs/Body";


const ServiceTemplate = ({ data }) => {
  const {
    title,
    friendlyTitle,
    mainImage,
    introduction,
    introductionImage,
    problemStatement,
    problemStatementImage,
    solution,
    solutionImage,
    conclusion
  } = data.contentfulBlog;
  const pathToMainImage = getImage(mainImage);
  const pathToIntroductionImage = getImage(introductionImage);
  const pathToProblemStatementImage = getImage(problemStatementImage);
  const pathToSolutionImage = getImage(solutionImage);
  const introductionParagraph = setupRichText(introduction);
  const problemStatementParagraph = setupRichText(problemStatement);
  const solutionParagraph = setupRichText(solution);
  const conclusionParagraph = setupRichText(conclusion);

  return (
    <Layout>
      <Seo pageTitle={title} />
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
        <Body text={introductionParagraph} image={pathToIntroductionImage} alt={introductionImage.description} />
        <Body text={problemStatementParagraph} image={pathToProblemStatementImage} alt={problemStatementImage.description} />
        <Body text={solutionParagraph} image={pathToSolutionImage} alt={solutionImage.description} />
        <section className="template2__section--body">
          <div className="template2__section--body-text">
            {conclusionParagraph}
          </div>
        </section>
      </main>
    </ Layout>
  );
};

export const query = graphql`
query getSingleBlog($title: String) {
  contentfulBlog(
    title: {eq: $title}
  ) {
    title
    friendlyTitle
    mainImage {
      gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      description
    }
    introductionImage {
      gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      description
    }
    problemStatementImage {
      gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      description
    }
    solutionImage {
      gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      description
    }
    introduction {
      raw
    }
    problemStatement {
      raw
    }
    solution {
      raw
    }
    conclusion {
      raw
    }
  }
}
`;

export default ServiceTemplate;