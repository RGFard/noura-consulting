import { graphql } from "gatsby";
import React from "react";

const ServiceTemplate = ({ data }) => {
  const {
    title
  } = data.contentfulBlog;
  console.log(title);


  return (
    <div className="">{title}</div>
  );
};

export const query = graphql`
query getSingleBlog($title: String) {
  contentfulBlog(
    title: {eq: $title}
  ) {
    title
  }
}
`;

export default ServiceTemplate;