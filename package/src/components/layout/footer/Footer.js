import React from "react";

import FooterItem from "./FooterItem";
import Button from "../../general/Button";

const Footer = ({ siteMetadata, icons }) => {
  const caption = "Learn more";

  return (
    <footer className="footer">
      <div className="footer__item footer__item--1">
        <div className="footer__item-title">about</div>
        <div className="footer__item-about">
          <p>{siteMetadata.title}; {siteMetadata.description}
          </p>
          <div className="footer__item-about-footer">
            <Button specifiedClass="footer__item-button" caption={caption} />
          </div>
        </div>
      </div>
      <FooterItem siteMetadata={siteMetadata} icons={icons} />
    </footer>
  );
};

export default Footer;