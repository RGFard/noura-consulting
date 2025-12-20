import React from "react";
import FooterItemList from "./FooterItemList";

const FooterItem = ({ siteMetadata, icons, services = [] }) => {
  const { quickMenu, followUs } = siteMetadata;

  const normalizedServices = services.map(service => ({
    name: service.friendlyTitle,
    url: service.url,
  }));

  const footerItems = [
    { title: "quick menu", type: "text", list: quickMenu },
    { title: "services", type: "text", list: normalizedServices },
    { title: "follow us", type: "icon", list: followUs },
  ];

  return footerItems.map((footerItem, index) => {
    const { title, list, type } = footerItem;

    return (
      <div className="footer__item" key={title}>
        <div className="footer__item-title">{title}</div>
        <div className="footer__item-list">
          <FooterItemList
            icons={icons}
            type={type}
            list={list}
          />
        </div>
      </div>
    );
  });
};

export default FooterItem;
