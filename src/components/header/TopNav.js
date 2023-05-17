import React from "react";

const TopNav = () => {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item--1">
                    <div className="nav__item-logo">
                        <p className="nav__item-logo--1st">Noura</p>
                        <p className="nav__item-logo--2nd">Consulting</p>
                    </div>
                </li>
                <li className="nav__item--2"></li>
                <li className="nav__item">Services</li>
                <li className="nav__item">Blog</li>
                <li className="nav__item">Contact</li>
                <li className="nav__item">
                    <button className="nav__item-console-btn">Console</button>
                </li>
            </ul>
        </nav>
    );
};

export default TopNav;