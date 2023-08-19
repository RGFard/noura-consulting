import React from "react";

import FooterItemList from "./FooterItemList";

const FooterItem = ({ siteMetadata, icons }) => {
    const { mainServices, quickMenu, followUs } = siteMetadata;

    const footerItems = [];

    footerItems.push({ title: "quick menu", type: "text", list: quickMenu });
    footerItems.push({ title: "main services", type: "text", list: mainServices });
    footerItems.push({ title: "follow us", type: "icon", list: followUs });

    return (
        footerItems.map((footerItem, index) => {
            const { title, list, type } = footerItem;

            return (
                <div className="footer__item" key={index}>
                    <div className="footer__item-title">{title}</div>
                    <div className="footer__item-list">
                        <FooterItemList icons={icons} type={type} key={index} list={list} />
                    </div>
                </div>
            );
        })
    );
};

export default FooterItem;