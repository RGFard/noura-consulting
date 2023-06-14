import React from "react";

import Service from "./Service";
import Button from "../Button";

const Services = ({ services }) => {
  const wide = true;
  const caption = "See all services";

  return (
    <section className="services">
      <div className="services__row">
        <h2 className="heading-2 heading-2--dark">Services</h2>
      </div>
      <Service services={services} />
      <div className="services__row">
        <Button wide={wide} caption={caption} />
      </div>
    </section>
  );
};

export default Services;