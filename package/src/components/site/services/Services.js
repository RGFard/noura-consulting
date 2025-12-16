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
      friendlyTitle
      shortDescription
      url
      site
      mainImage {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
      redirectCaption
    }
  }
}
`;

const Services = ({ servicesMenuData }) => {
  const data = useStaticQuery(query);
  const servicesButton = extractFromJson(data, servicesMenuData?.name);

  return (
    <div className="_services">
      <h2 className="_services__title heading-2 heading-2--dark">
        {servicesMenuData?.name.charAt(0).toUpperCase() +
          servicesMenuData?.name.slice(1)}
      </h2>
      <Service services={data.allContentfulService.nodes} />
      <Button specifiedClass="_service-button" url={servicesMenuData?.url} caption={servicesButton?.combined} />
    </div>
  );
};

export default Services;