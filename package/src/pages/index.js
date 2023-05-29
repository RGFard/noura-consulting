import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Video from "../components/Video";
import Services from "../components/services/Services";
import Blogs from "../components/blogs/Blogs";

export default function Home({ data }) {
  console.log(data.footerItems.nodes);
  console.log(data.services.nodes);
  console.log(data.blogs.nodes);
  return (
    <Layout footerItems={data.footerItems.nodes}>
      <Seo title="Home Page" />
      <Video />
      <Services />
      <Blogs />
    </Layout >);
}

export const query = graphql`
query query {
  icons: allContentfulJsonContent {
    nodes {
      object {
        name
        tag
      }
    }
  }
  footerItems: allContentfulContent(
    sort: {order: ASC}
    filter: {type: {in: ["text", "icon"]}}
  ) {
    nodes {
      order
      list {
        items
      }
      title
      type
    }
  }
  services: allContentfulContent(
    sort: {order: ASC}
    filter: {type: {eq: "service"}}
  ) {
    nodes {
      title
      description {
        description
      }
    }
  }
  blogs: allContentfulContent(
    sort: {order: ASC}, 
    filter:  {type: {eq: "blog"}}
  ) {
    nodes {
      description {
        description
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
      title
    }
  }
}
`;
