import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Blog from "./Blog";
import Button from "../../general/Button";

const query = graphql`
{
  allContentfulBlog(
    sort: {order: ASC}
  ) {
    nodes {
      friendlyTitle
      url
      mainDescription {
        raw
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: DOMINANT_COLOR)
      }
    }
  }
}
`;

const Blogs = () => {
  const wide = true;
  const caption = "See all blog articles";

  const blogs = useStaticQuery(query).allContentfulBlog.nodes;

  return (
    <section className="blogs">
      <div className="blogs__title">
        <h2 className="heading-2 heading-2--dark">Blogs</h2>
      </div>
      <Blog blogs={blogs} />
      <div className="blogs__footer">
        <Button specifiedClass="services-button" wide={wide} caption={caption} />
      </div>
    </section>
  );
};

export default Blogs;