import * as React from "react";
import { Link } from "gatsby";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Seo from "../components/general/SEO";

export default function Error() {
    return (
        <Layout>
            <Seo pageTitle="Error page" />
            <main className="template-1">
                <section>
                    <h1 className="heading-1 heading-1--dark">404</h1>
                    <h3 className="heading-3">page not found!</h3>
                    <Link to="/" className="template-1--text">Return Home</Link>
                </section>
            </main>
        </ Layout>);
};