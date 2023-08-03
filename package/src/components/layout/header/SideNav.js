import React from "react";
import { Link } from 'gatsby';

const SideNav = () => {
    return (
        <aside className="sidenav">
            <input type="checkbox" className="sidenav__checkbox" id="navi-toggle" />

            <label htmlFor="navi-toggle" className="sidenav__button">
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
                    <li className="sidenav__item">
                        <Link to="/under-construction" className="sidenav__link">about</Link>
                    </li>
                    <li className="sidenav__item">
                        <Link to="/under-construction" className="sidenav__link">services</Link>
                    </li>
                    <li className="sidenav__item">
                        <Link to="/blog" className="sidenav__link">blog</Link>
                    </li>
                    <li className="sidenav__item">
                        <Link to="/under-construction" className="sidenav__link">contact</Link>
                    </li>
                    <li className="sidenav__item">
                        <Link to="/under-construction" className="sidenav__link">console</Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default SideNav;