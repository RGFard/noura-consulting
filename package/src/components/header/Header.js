import React from "react";

import TopNav from "./TopNav";
import SideNav from "./SideNav";

const Header = () => {
    return (
        <header className="header">
            <TopNav />
            <SideNav />
        </header>
    );
};

export default Header;