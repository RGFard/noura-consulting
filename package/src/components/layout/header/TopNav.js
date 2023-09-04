import React from "react";
import { Link } from 'gatsby';

import Button from "../../general/Button";

const TopNav = () => {
    const caption = "Console";

    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item--1">
                    <Link to="/" className="nav__item-logo">
                        <p className="nav__item-logo--1st">Noura</p>
                        <p className="nav__item-logo--2nd">Consulting</p>
                    </Link>
                    <div className=""></div>
                </li>
                <li className="nav__item--2"></li>
                <li className="nav__item">
                    <Link to="/about" className="nav__item-link">About</Link>
                </li>
                <li className="nav__item">
                    <Link to="/services" className="nav__item-link">Services</Link>
                </li>
                <li className="nav__item">
                    <Link to="/blog" className="nav__item-link">Blog</Link>
                </li>
                <li className="nav__item">
                    <Link to="/under-construction" className="nav__item-link">Contact</Link>
                </li>
                <li className="nav__item--last">
                    <Button specifiedClass="nav__item-console-btn" caption={caption} />
                </li>
            </ul>
        </nav>
    );
};

export default TopNav;