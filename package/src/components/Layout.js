import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const query = graphql`
{
    allContentfulContent(
        sort: {order: ASC}
        filter: {type: {in: ["text", "icon"]}, title: {ne: "siteMetadata"}}
        ) {
            nodes {
            order
            list {
                items
            }
            title
            type
            }
        }
    }
`;

const Layout = ({ children, footerItems, icons }) => {
    const q = useStaticQuery(query);
    console.log(q);
    return (
        <div className="container">
            <Header />
            {children}
            {/* <Footer footerItems={footerItems} icons={icons} /> */}
        </div>
    );
};

export default Layout;