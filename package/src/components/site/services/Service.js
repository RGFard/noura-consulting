import React from "react";

import Button from "../../general/Button";

const Service = ({ services = [] }) => {
    const caption = "Learn more";

    return (
        services.map((service, index) => {
            const { friendlyTitle, shortDescription } = service;
            let className = `service__title--${index + 1}`;

            return (
                <div className="service" key={index + 1}>
                    <div className={className}>
                        <h2 className="heading-2 heading-2--light">{friendlyTitle}</h2>
                    </div>
                    <p className="service__text">
                        {shortDescription}
                    </p>
                    <Button specifiedClass="services-button" caption={caption} />
                </div>
            );
        })
    );
};

export default Service;