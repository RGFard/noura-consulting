import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { useContext } from "react";

import Service from "./Service";
import Button from "../../general/Button";
import { CaptionContext } from "../../../context/CaptionContext";

const query = graphql`
{
  allContentfulService(
    sort: { order: ASC }
  ) {
    nodes {
      order
      friendlyTitle
      shortDescription
      url
      slug
      mainImage {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: DOMINANT_COLOR
        )
      }
      redirectCaption
    }
  }
}
`;

const Services = ({
  footerButton,
  footerUrl
}) => {
  const data = useStaticQuery(query);

  const captions = useContext(CaptionContext);
  const servicesCaptions = captions?.services ?? {};
  const mainTitle = servicesCaptions?.mainTitle;
  const mainSubTitle = servicesCaptions?.mainSubTitle;
  const combinedButton = servicesCaptions?.combinedButton;

  return (
    <section className="services">
      <h2 className="services__title heading-2 heading-2--dark">
        {mainTitle}
      </h2>

      {mainSubTitle && (
        <p className="services__title--subtitle">
          {mainSubTitle}
        </p>
      )}

      <Service services={data?.allContentfulService?.nodes ?? []} />

      {footerButton && (
        <div className="services__footer">
          <Button
            specifiedClass="services__footer-button"
            wide
            url={footerUrl}
            caption={combinedButton}
          />
        </div>
      )}
    </section>
  );
};

export default Services;
