import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
// import slugify from "slugify";

const Blog = ({ blogs = [] }) => {

    return (
        blogs.map((blog, index) => {
            const { title, description, image } = blog;
            const classNamePictures = `blog__pictures--${index + 1}`;
            const classNamePicture = `blog__picture--${index + 1}`;

            const pathToImage = getImage(image);
            // const slug = slugify(title, { lower: true });

            const imageTag =
                <div className={classNamePictures}>
                    <GatsbyImage
                        image={pathToImage}
                        className={classNamePicture}
                        alt={title}
                    />
                </div>;
            const bodyTag =
                <div className="blog__article">
                    <h3 className="heading-3 heading-3--secondry-dark">
                        {title}
                    </h3>
                    <p className="blog__article__body">
                        {description.description}
                    </p>
                    <div className="blog__article__footer">
                        <button className="blog__article-button">Learn more</button>
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
            // <div className=""></div>;
        }));
};

export default Blog;