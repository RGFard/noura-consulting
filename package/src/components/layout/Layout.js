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
    siteMetadata: allContentfulSite {
        nodes {
            data {
                title
                description
                author
                mainServices {
                    name
                    url
                }
                quickMenu {
                    name
                    url
                    type
                }
                followUs {
                    name
                    url
                }                
            }
        }
    }
}
`;

const Layout = ({ children }) => {
    const data = useStaticQuery(query);
    const siteMetadata = data?.siteMetadata?.nodes?.[0]?.data ?? {};
    return (
        <div className="container">
            <Header siteMetadata={siteMetadata} />
            {children}
            <Footer siteMetadata={siteMetadata} icons={data.icons.nodes} />
        </div>
    );
};

export default Layout;