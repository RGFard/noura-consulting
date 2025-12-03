import React from "react";
import { Link } from 'gatsby';

import Button from "../../general/Button";

const TopNav = ({ siteMetadata }) => {
    const { quickMenu = [] } = siteMetadata;

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item--1">
                    <Link to="/" className="nav__item-logo">
                        <p className="nav__item-logo--1st">Data</p>
                        <p className="nav__item-logo--2nd">Nexus</p>
                    </Link>
                    <div className=""></div>
                </li>
                <li className="nav__item--2"></li>

                {quickMenu.map((item, index) => {
                    const name = item.name[0].toUpperCase() + item.name.slice(1);
                    return item.type !== "button" ? (
                        <li key={index} className="nav__item">
                            <Link to={`${item.url}`} className="nav__item-link">
                                {name}
                            </Link>
                        </li>
                    ) : (
                        <li key={index} className="nav__item--last">
                            <Button
                                specifiedClass="nav__item-console-btn"
                                caption={name}
                            />
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};

export default TopNav;