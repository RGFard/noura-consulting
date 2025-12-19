import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { extractFromJson } from "../../../utils/extractFromJson";
import Service from "./Service";
import Button from "../../general/Button";

const query = graphql`
{
  allContentfulJsonContent(filter: { name: { eq: "button" } }) {
    nodes {
      childrenContentfulJsonContentObjectJsonNode {
        internal {
          content
        }
      }
    }
  }

  allContentfulService(
    sort: { order: ASC }
    filter: { site: { eq: "dataNexus" } }
  ) {
    nodes {
      order
      friendlyTitle
      shortDescription
      url
      site
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


const Services = ({ footerButton = false, servicesMenuData = {} }) => {
  const data = useStaticQuery(query);

  const { name = "", url = "" } = servicesMenuData;

  const servicesButton =
    name ? extractFromJson(data, name) : null;

  const title =
    name ? name.charAt(0).toUpperCase() + name.slice(1) : "Services";

  return (
    <section className="services">
      <h2 className="services__title heading-2 heading-2--dark">
        {title}
      </h2>

      <Service services={data?.allContentfulService?.nodes ?? []} />

      {footerButton && url && (
        <div className="services__footer">
          <Button
            specifiedClass="services__footer-button"
            wide
            url={url}
            caption={servicesButton?.combined}
          />
        </div>
      )}
    </section>
  );
};

export default Services;
