import React from "react";

import Icon from "../icons/Icon";

const FooterItemList = ({ list = [], type }) => {
    return (
        list.map((listItem, index) => {
            let item, tooltipItem;
            item = tooltipItem = listItem.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
            if (type !== "icon") {
                if (item.length > 20) {
                    item = item.substring(0, 20) + "...";
                }
            } else {
                item = <Icon name={listItem} key={index} />;
            }

            return (
                <div className="footer__item-link" key={index}>{item}
                    <span className="footer__item-link--tooltip">{tooltipItem}</span>
                </div>
            );
        })
    );
};

export default FooterItemList;