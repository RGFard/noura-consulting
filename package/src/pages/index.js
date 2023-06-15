import * as React from "react";
import { graphql } from "gatsby";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Seo from "../components/SEO";
import Video from "../components/general/Video";
import Services from "../components/site/services/Services";
import Blogs from "../components/site/blogs/Blogs";

export default function Home({ data }) {
  return (
    <Layout>
      <Seo pageTitle="Home Page" />
      <Video />
      <Services />
      <Blogs blogs={data.blogs.nodes} />
    </ Layout>);
}

export const query = graphql`
query Main {
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
      list {
        link
      }
    }
  }
}
`;
