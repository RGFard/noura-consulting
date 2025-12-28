import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import FooterItem from "./FooterItem";
import Button from "../../general/Button";

const query = graphql`
{
  allContentfulService(
    sort: { order: ASC }
    filter: { site: { eq: "dataNexus" } }
  ) {
    nodes {
      friendlyTitle
      url
      order
    }
  }
}
`;

const Footer = ({ siteMetadata, icons }) => {
  const data = useStaticQuery(query);
  const services = data?.allContentfulService?.nodes ?? [];

  const caption = "Learn more";

  return (
    <footer className="footer">
      <div className="footer__item footer__item--1">
        <div className="footer__item-title">about</div>
        <div className="footer__item-about">
          <p>
            {siteMetadata.title}; {siteMetadata.description}
          </p>
          <div className="footer__item-about-footer">
            <Button
              specifiedClass="footer__item-button"
              caption={caption}
              url={"/about"}
            />
          </div>
        </div>
      </div>

      <FooterItem
        siteMetadata={siteMetadata}
        icons={icons}
        services={services}
      />
    </footer>
  );
};

export default Footer;