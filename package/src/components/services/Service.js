import React from "react";

import Button from "../Button";

const Service = ({ services = [] }) => {
    const caption = "Learn more";

    return (
        services.map((service, index) => {
            const { title, description } = service;
            let className = `service__title--${index + 1}`;

            return (
                <div className="service" key={index + 1}>
                    <div className={className}>
                        <h2 className="heading-2 heading-2--light">{title}</h2>
                    </div>
                    <p className="service__text">
                        {description.description}
                    </p>
                    <Button caption={caption} />
                </div>
            );
        })
    );
};

export default Service;