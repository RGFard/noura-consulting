import React from "react";

import { StaticImage } from "gatsby-plugin-image";

const Blog = ({ blogs = [] }) => {
    const image1 = "../../assets/images/blogs/charity.jpg";
    const image2 = "../../assets/images/blogs/digitization-cybersecurity-fg.jpg";
    const image3 = "../../assets/images/blogs/digital-identity-fg.jpg";
    return (
        blogs.map((blog, index) => {
            const { title, body } = blog;
            const classNamePictures = `blog__pictures--${index + 1}`;
            const classNamePicture = `blog__picture--${index + 1}`;

            const imageTag =
                <div className={classNamePictures}>
                    <StaticImage
                        src={image1}
                        alt="Digital Identity and Credentials"
                        className={classNamePicture}
                    />
                </div>;
            const bodyTag =
                <div className="blog__article">
                    <h3 className="heading-3 heading-3--secondry-dark">
                        {title}
                    </h3>
                    <p className="blog__article__body">
                        {body}
                    </p>
                    <div className="blog__article__footer">
                        <button className="blog__article-button">Learn more</button>
                    </div>
                </div>;

            // To switch between image and body tags
            let firstTag;
            let sececondTag;

            if (index % 2 == 0) {
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
        })
    );
};

export default Blog;