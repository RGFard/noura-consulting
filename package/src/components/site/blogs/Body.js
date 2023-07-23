import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Body = ({ text, image, alt }) => {

    return (
        <section className="template2__section--body">
            <div className="template2__section--body-text">
                {text}
            </div>
            <div className="template2__section--body-image">
                <GatsbyImage image={image} alt={alt} />
            </div>
        </section>
    );
};

export default Body;
