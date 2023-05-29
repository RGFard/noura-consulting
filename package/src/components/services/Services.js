import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Service from "./Service";

// const query = graphql`
// {
//   allContentfulContent(sort: {order: ASC}, filter:  {type: {eq: "service"}}) {
//     nodes {
//       title
//       description {
//         description
//       }
//     }
//   }
// }
// `;

const Services = ({ services }) => {

  // const {
  //   allContentfulContent: { nodes: services }
  // } = useStaticQuery(query);

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