import React from "react";

import "../sass/main.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children, footerItems, icons }) => {

    return (
        <div className="container">
            <Header />
            {children}
            <Footer footerItems={footerItems} icons={icons} />
        </div>
    );
};

export default Layout;