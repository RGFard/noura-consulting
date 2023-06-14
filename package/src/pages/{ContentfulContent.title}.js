import { graphql } from "gatsby";
import React from "react";

export default function ServiceTemplate({ data }) {
    const {
        title
    } = data.contentfulContent;
    console.log(title);

    return (
        <div className="">Service Page {title}</div>
    );
}

export const query = graphql`
query getSingleService($title: String) {
  contentfulContent(
    title: {eq: $title}
    type: {eq: "service"}
  ) {
    title
  }
}
`;
