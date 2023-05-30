import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Video from "../components/Video";
import Services from "../components/services/Services";
import Blogs from "../components/blogs/Blogs";

export default function Home({ data }) {
  return (
    <Layout footerItems={data.footerItems.nodes} icons={data.icons.nodes}>
      <Seo pageTitle="Home Page" siteMetadata={data.siteMetadata.nodes[0].list} />
      <Video />
      <Services services={data.services.nodes} />
      <Blogs blogs={data.blogs.nodes} />
    </Layout >);
}

export const query = graphql`
query MyQuery {
  siteMetadata: allContentfulContent(
    filter: {title: {eq: "siteMetadata"}}
  ) {
    nodes {
      list {
        description
        author
        title
      }
    }
  }
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
    filter: {type: {in: ["text", "icon"]}, title: {ne: "siteMetadata"}}
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
