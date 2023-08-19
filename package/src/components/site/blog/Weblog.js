import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import BlogPost from "./BlogPost";
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

const Weblog = ({ footer }) => {
  const wide = true;
  const caption = "See all blog articles";

  const weblog = useStaticQuery(query).allContentfulBlog.nodes;
  let weblogFooter = footer === true ?
    <div className="weblog__footer">
      <Button specifiedClass="services-button" wide={wide} caption={caption} url="/blog" />
    </div> : null;

  return (
    <section className="weblog">
      <div className="weblog__title">
        <h2 className="heading-2 heading-2--dark">Blog Posts</h2>
      </div>
      <BlogPost weblog={weblog} />
      {weblogFooter}
    </section>
  );
};

export default Weblog;