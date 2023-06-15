import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../../general/Button";

const Blog = ({ blogs = [] }) => {
    const caption = "Learn more";

    return (
        blogs.map((blog, index) => {
            const { friendlyTitle, shortDescription, image } = blog;
            const classNamePictures = `blog__pictures--${index + 1}`;
            const classNamePicture = `blog__picture--${index + 1}`;
            const pathToImage = getImage(image);

            const imageTag =
                <div className={classNamePictures}>
                    <GatsbyImage
                        image={pathToImage}
                        className={classNamePicture}
                        alt={friendlyTitle}
                    />
                </div>;
            const bodyTag =
                <div className="blog__article">
                    <h3 className="heading-3 heading-3--secondry-dark">
                        {friendlyTitle}
                    </h3>
                    <p className="blog__article__body">
                        {shortDescription.shortDescription}
                    </p>
                    <div className="blog__article__footer">
                        <Button caption={caption} />
                    </div>
                </div>;

            // To switch between image and body tags
            let firstTag;
            let sececondTag;

            if (index % 2 === 0) {
                firstTag = imageTag;
                sececondTag = bodyTag;
            } else {
                firstTag = bodyTag;
                sececondTag = imageTag;
            }
            return (
                <div className="blog" key={index + 1}>
                    {firstTag}
                    {sececondTag}
                </div>
            );
        }));
};

export default Blog;