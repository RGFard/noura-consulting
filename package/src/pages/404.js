import * as React from "react";

import "../sass/style.scss";
import Layout from "../components/Layout";
import Seo from "../components/SEO";

export default function Error() {
    return (
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