import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header/Header";
import Footer from "./footer/Footer";

const query = graphql`
{
    icons: allContentfulJsonContent {
        nodes {
            object {
                name
                tag
            }
        }
    }
    footerItems: allContentfulContent(
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

const Layout = ({ children }) => {
    const data = useStaticQuery(query);
    return (
        <div className="container">
            <Header />
            {children}
            <Footer footerItems={data.footerItems.nodes} icons={data.icons.nodes} />
        </div>
    );
};

export default Layout;