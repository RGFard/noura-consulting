import React from "react";

const SideNav = () => {
    return (
        <aside className="sidenav">
            {/* <input type="checkbox" className="sidenav__checkbox" id="navi-toggle" />

            <label htmlFor="navi-toggle" className="sidenav__button">
                <div className="sidenav__icon">
                    <span className="sidenav__icon-line"></span>
                    <span className="sidenav__icon-line"></span>
                    <span className="sidenav__icon-line"></span>
                </div>
            </label>

            <div className="sidenav__background">&nbsp;</div> */}

            <nav className="sidenav__nav">
                <ul className="sidenav__list">
                    <li className="sidenav__item">
                        <a href="testUrl" className="sidenav__link">About</a>
                    </li>
                    <li className="sidenav__item">
                        <a href="testUrl" className="sidenav__link">Services</a>
                    </li>
                    <li className="sidenav__item">
                        <a href="testUrl" className="sidenav__link">Blog</a>
                    </li>
                    <li className="sidenav__item">
                        <a href="testUrl" className="sidenav__link">contact</a>
                    </li>
                    <li className="sidenav__item">
                        <a href="testUrl" className="sidenav__link">Console</a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideNav;