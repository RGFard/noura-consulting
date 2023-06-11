import * as React from "react";
import { graphql } from "gatsby";

import "../sass/style.scss";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Video from "../components/Video";
import Services from "../components/services/Services";
import Blogs from "../components/blogs/Blogs";

export default function Home({ data }) {
  return (
    <Layout>
      <Seo pageTitle="Home Page" />
      <Video />
      <Services services={data.services.nodes} />
      <Blogs blogs={data.blogs.nodes} />
    </Layout >);
}

export const query = graphql`
query MyQuery {
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
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
      title
    }
  }
}
`;
