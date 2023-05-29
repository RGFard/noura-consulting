import React from "react";

import Service from "./Service";

const Services = ({ services }) => {

  return (
    <section className="services">
      <div className="services__title">
        <h2 className="heading-2 heading-2--dark">Services</h2>
      </div>
      <Service services={services} />
    </section>
  );
};

export default Services;