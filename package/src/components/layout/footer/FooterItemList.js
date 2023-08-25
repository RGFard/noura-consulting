import React from "react";
import { Link } from "gatsby";

import Icon from "../../general/Icon";

const FooterItemList = ({ list = [], icons, type }) => {

    return (
        list.map((listItem, index) => {
            let item, tooltipItem, url;
            url = (listItem.url === "/services" || listItem.url === "/blog"
                || listItem.url === "/services/ethereum-applications-smart-contracts-and-web3"
                || listItem.url === "/services/web-and-mobile-interface-for-ethereum-application"
                || listItem.url === "/services/consolidated-apis-for-off-chain-operations") ?
                listItem.url : "/under-construction";
            item = tooltipItem = listItem.name.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            if (type !== "icon") {
                if (item.length > 20) {
                    item = item.substring(0, 18) + "...";
                }
            } else {
                item = <Icon name={listItem.name} key={index} icons={icons} />;
            }

            return (
                <div className="footer__item-caption" key={index}>
                    <Link to={url} className="footer__item-caption--link">{item}</Link>
                    <span className="footer__item-caption--tooltip">{tooltipItem}</span>
                </div>
            );
        })
    );
};

export default FooterItemList;