import React from "react";

import FooterItemList from "./FooterItemList";

const FooterItem = ({ siteMetadata, icons }) => {
    const { followUs, mainServices, quickMenu } = siteMetadata;

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
                        <FooterItemList list={list} icons={icons} type={type} key={index} />
                    </div>
                </div>
            );
        })
    );
};

export default FooterItem;