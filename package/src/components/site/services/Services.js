import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Service from "./Service";
import Button from "../../general/Button";

const query = graphql`
{
  allContentfulService {
    nodes {
      friendlyTitle
      shortDescription
      url
    }
  }
}
`;

const Services = ({ footer }) => {
  const wide = true;
  const caption = "See all services";

  const services = useStaticQuery(query).allContentfulService.nodes;
  let servicesFooter = footer === true ?
    <div className="services__row">
      <Button specifiedClass="services__row-button" wide={wide} caption={caption} url="/services" />
    </div> : null;

  return (
    <section className="services">
      <div className="services__row">
        <h2 className="heading-2 heading-2--dark">Services</h2>
      </div>
      <Service services={services} />
      {servicesFooter}
    </section>
  );
};

export default Services;