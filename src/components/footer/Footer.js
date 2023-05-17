import React from "react";

import FooterItem from "../footer/FooterItem";

const footerItem1 = {
    title: "quick menu",
    list: ["services", "blog", "contact", "console"],
    type: "text"
};
const footerItem2 = {
    title: "services",
    list: ["ethereum applications, smart contracts, and web3", "mobile native apps for ethereum applications", "consolidated APIs"],
    type: "text"
};
const footerItem3 = {
    title: "icons",
    list: ["facebook", "instagram", "twitter", "youtube"],
    type: "icon"
};

var footerItems = [footerItem1, footerItem2, footerItem3];

const Footer = () => {
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
            <FooterItem footerItems={footerItems} />
        </footer>
    );
};

export default Footer;