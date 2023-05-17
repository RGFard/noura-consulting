import React from "react";

import FooterItemList from "./FooterItemList";

const FooterItem = ({ footerItems = [] }) => {
    return (

        footerItems.map((footerItem, index) => {
            const { title, list, type } = footerItem;

            return (
                <div className="footer__item" key={index}>
                    <div className="footer__item-title">{title}</div>
                    <div className="footer__item-list">
                        <FooterItemList list={list} type={type} key={index} />
                    </div>
                </div>
            );
        })
    );
};

export default FooterItem;