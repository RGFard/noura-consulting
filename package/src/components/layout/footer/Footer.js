import React from "react";

import FooterItem from "./FooterItem";
import Button from "../../general/Button";

const Footer = ({ footerItems, icons }) => {
  const caption = "Learn more";

  return (
    <footer className="footer">
      <div className="footer__item footer__item--1">
        <div className="footer__item-title">about</div>
        <div className="footer__item-about">
          <div>Noura Consulting Ltd. is an IT consulting and technology startup established in 2014 in Greater Toronto Area (GTA), Ontario, Canada.
          </div>
          <div className="footer__item-about-footer">
            <Button color="footer__item-button" caption={caption} />
          </div>
        </div>
      </div>
      <FooterItem footerItems={footerItems} icons={icons} />
    </footer>
  );
};

export default Footer;