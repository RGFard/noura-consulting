import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import FooterItem from "./FooterItem";

const query = graphql`
{
  allContentfulContent(sort: {order: ASC}, filter: {type: {in: ["text", "icon"]}}) {
    nodes {
      order
      list {
        items
      }
      title
      type
    }
  }
}
`;

const Footer = () => {
  const {
    allContentfulContent: { nodes: footerItems1 }
  } = useStaticQuery(query);

  return (
    <footer className="footer">
      <div className="footer__item footer__item--1">
        <div className="footer__item-title">about</div>
        <div className="footer__item-about">
          <div>Non odio euismod lacinia at quis. Eu
            scelerisque felis imperdiet proin fermentum.
          </div>
          <div className="footer__item-about-footer">
            <button className="footer__item-button">Learn more</button>
          </div>
        </div>
      </div>
      {/* <FooterItem footerItems={footerItems1} /> */}
    </footer>
  );
};

export default Footer;