import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../../general/Button";

const BlogGrid = ({ blogs = [] }) => {
  return blogs.map(blog => {
    const { friendlyTitle, url, redirectCaption, shortDescription, image } = blog;
    const pathToImage = getImage(image);

    return (
      <article className="blogCard" key={url}>
        <GatsbyImage
          image={pathToImage}
          className="blogCard__image"
          alt={friendlyTitle}
        />

        <h3 className="heading-3 heading-3--secondry-dark">
          {friendlyTitle}
        </h3>

        <div className="body-text">
          {shortDescription}
        </div>

        <div className="blogCard__footer">
          <Button
            specifiedClass="blogCard__button"
            url={url}
            caption={redirectCaption}
          />
        </div>
      </article>
    );
  });
};

export default BlogGrid;
