import { graphql } from "gatsby";
import React from "react";

const ServiceTemplate = ({ data }) => {
  const {
    title
  } = data.contentfulService;

  return (
    <div className="">{title}</div>
  );
};

export const query = graphql`
query getSingleService($title: String) {
  contentfulService(
    title: {eq: $title}
  ) {
    title
  }
}
`;

export default ServiceTemplate;