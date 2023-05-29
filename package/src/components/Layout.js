import React from "react";

import "../sass/main.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Layout = ({ children, footerItems }) => {

    return (
        <div className="container">
            <Header />
            {children}
            <Footer footerItems={footerItems} />
        </div>
    );
};

export default Layout;