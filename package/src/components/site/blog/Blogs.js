import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { extractFromJson } from "../../../utils/extractFromJson";
import BlogGrid from "./BlogGrid";
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

  allContentfulBlog(
    sort: { order: ASC }
  ) {
    nodes {
      order
      friendlyTitle
      url
      shortDescription
      mainDescription {
        raw
      }
      image {
        gatsbyImageData(
          layout: CONSTRAINED
          placeholder: DOMINANT_COLOR
        )
      }
    }
  }
}
`;

const Blogs = ({ footerButton = false, blogMenuData = {} }) => {
  const data = useStaticQuery(query);

  const blogs = data?.allContentfulBlog?.nodes ?? [];

  const { name = "", url = "" } = blogMenuData;

  const blogButtons =
    name ? extractFromJson(data, name) : null;

  return (
    <section className="blogs">
      <div className="blogs__title">
        <h2 className="heading-2 heading-2--dark">
          Blog Posts
        </h2>
      </div>

      <div className="blogGrid">
        <BlogGrid
          blogs={blogs}
          singleButtonCaption={blogButtons?.single}
        />
      </div>

      {footerButton && url && (
        <div className="blogs__footer">
          <Button
            specifiedClass="blogs__footer-button"
            wide
            caption={blogButtons?.combined}
            url={url}
          />
        </div>
      )}
    </section>
  );
};

export default Blogs;
