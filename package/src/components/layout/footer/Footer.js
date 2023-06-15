import React from "react";

import FooterItem from "./FooterItem";

const Footer = ({ footerItems, icons }) => {
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
      <FooterItem footerItems={footerItems} icons={icons} />
    </footer>
  );
};

export default Footer;