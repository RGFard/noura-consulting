import React from "react";

import TopNav from "./TopNav";
import SideNav from "./SideNav";

const Header = ({ siteMetadata }) => {
    return (
        <header className="header">
            <TopNav siteMetadata={siteMetadata} />
            <SideNav siteMetadata={siteMetadata} />
        </header>
    );
};

export default Header;