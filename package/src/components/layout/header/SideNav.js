import React from "react";
import { Link } from "gatsby";

const SideNav = ({ siteMetadata }) => {
  const { quickMenu = [] } = siteMetadata;

  const closeNav = () => {
    const checkbox = document.getElementById("navi-toggle");
    if (checkbox) checkbox.checked = false;
  };

  return (
    <aside className="sidenav">
      <input
        type="checkbox"
        className="sidenav__checkbox"
        id="navi-toggle"
      />

      <label
        htmlFor="navi-toggle"
        className="sidenav__button"
        aria-label="Toggle navigation menu"
      >
        <div className="sidenav__icon">
          <span className="sidenav__icon-line"></span>
          <span className="sidenav__icon-line"></span>
          <span className="sidenav__icon-line"></span>
          <span className="sidenav__icon-cross">&times;</span>
        </div>
      </label>

      <div className="sidenav__background">&nbsp;</div>

      <nav className="sidenav__nav">
        <ul className="sidenav__list">
          {quickMenu.map((item) => (
            <li key={item.url} className="sidenav__item">
              <Link
                to={item.url}
                className="sidenav__link"
                onClick={closeNav}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
