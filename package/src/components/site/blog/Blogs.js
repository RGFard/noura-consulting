import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";

import BlogGrid from "./BlogGrid";
import Button from "../../general/Button";
import { CaptionContext } from "../../../context/CaptionContext";

const query = graphql`
{
  allContentfulBlog(
    sort: { order: ASC }
  ) {
    nodes {
      order
      friendlyTitle
      url
      redirectCaption
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

const Blogs = ({ footerButton = false, limit }) => {
  const data = useStaticQuery(query);
  const captions = useContext(CaptionContext);

  const blogCaptions = captions?.blog ?? {};
  const {
    mainTitle,
    combinedButton,
    combinedButtonUrl
  } = blogCaptions;

  const allBlogs = data?.allContentfulBlog?.nodes ?? [];

  const blogs =
    typeof limit === "number"
      ? allBlogs.slice(0, limit)
      : allBlogs;

  return (
    <section className="blogs">
      {mainTitle && (
        <div className="blogs__title">
          <h2 className="heading-2 heading-2--dark">
            {mainTitle}
          </h2>
        </div>
      )}

      <div className="blogGrid">
        <BlogGrid blogs={blogs} />
      </div>

      {footerButton && combinedButton && combinedButtonUrl && (
        <div className="blogs__footer">
          <Button
            specifiedClass="blogs__footer-button"
            wide
            caption={combinedButton}
            url={combinedButtonUrl}
          />
        </div>
      )}
    </section>
  );
};

export default Blogs;
