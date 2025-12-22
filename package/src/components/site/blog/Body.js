import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const Body = ({ text }) => {

    // console.log(text);
    // console.log(image);
    // console.log(alt);

    return (
        <section className="template2__section--body">
            <div className="template2__section--body-text">
                {text}
            </div>

            {/* {image && (
                <div className="template2__section--body-image">
                    <GatsbyImage image={image} alt={alt || ""} />
                </div>
            )} */}
        </section>
    );
};

export default Body;
