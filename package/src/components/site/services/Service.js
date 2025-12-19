import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Button from "../../general/Button";


const Service = ({ services = [] }) => {
    return (
        services.map((service, index) => {
            const { friendlyTitle, shortDescription, url, mainImage, redirectCaption } = service;
            const isReverse = index % 2 === 1;
            const pathToImage = getImage(mainImage);

            return (
                <div className={"service"} key={index}>
                    <div className={`service${isReverse ? "__reverse__image-col" : "__image-col"}`}>
                        <GatsbyImage
                            image={pathToImage}
                            alt={friendlyTitle}
                        />
                    </div>
                    <div className={`service${isReverse ? "__reverse__text-col" : "__text-col"}`}>
                        <h3 className="heading-3 heading-3--secondry-dark">
                            {friendlyTitle}
                        </h3>
                        <div className={`service${isReverse ?
                            "__reverse__text-col__description body-text" :
                            "__text-col__description body-text"}`}>
                            {shortDescription}
                        </div>
                        <Button specifiedClass="service__button" url={url} caption={redirectCaption} />
                    </div>
                </div>
            );
        })
    );
};

export default Service;