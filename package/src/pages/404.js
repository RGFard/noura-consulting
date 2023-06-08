import React from "react";
import { StaticQuery, graphql } from "gatsby";

import "../sass/style.scss";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

// export default function Error() {
//     return (
//         // <Layout footerItems={data.footerItems.nodes} icons={data.icons.nodes}>
//         <Layout>
//             <Seo pageTitle="Error page" />
//             <main className="error">
//                 <section>
//                     <h1 className="heading-1 heading-1--dark">404</h1>
//                     <h3 className="heading-3">page not found!</h3>
//                 </section>
//             </main>
//         </Layout>);
// };
export default function Error() {
    return (
        <StaticQuery
            query={graphql`
                query MyQuery {
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
            `}
            render={data => (
                <Layout footerItems={data.footerItems}>
                    <Seo pageTitle="Error page" />
                    <main className="error">
                        <section>
                            <h1 className="heading-1 heading-1--dark">404</h1>
                            <h3 className="heading-3">page not found!</h3>
                        </section>
                    </main>
                </Layout>
            )}
        />
    );
}

// export const query = graphql`
// query {
//     allContentfulContent(
//         sort: {order: ASC}
//         filter: {type: {in: ["text", "icon"]}, title: {ne: "siteMetadata"}}
//         ) {
//             nodes {
//             order
//             list {
//                 items
//             }
//             title
//             type
//             }
//         }
//     }
// `;