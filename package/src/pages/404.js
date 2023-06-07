import React from "react";
import { graphql } from "gatsby";

import "../sass/style.scss";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

export default function Error({ data }) {
    return (
        // <Layout footerItems={data.footerItems.nodes} icons={data.icons.nodes}>
        <Layout>
            <Seo pageTitle="Error page" />
            <main className="error">
                <section>
                    <h1 className="heading-1 heading-1--dark">404</h1>
                    <h3 className="heading-3">page not found!</h3>
                </section>
            </main>
        </Layout>);
};

export const query = graphql`
query MyQuery {
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