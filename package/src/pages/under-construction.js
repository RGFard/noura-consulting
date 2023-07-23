import * as React from "react";
import { Link } from "gatsby";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Seo from "../components/general/SEO";
import underConstructionImage from "../assets/images/under-construction.jpg";

export default function UnderConstruction() {
    return (
        <Layout>
            <Seo pageTitle="Under Construction page" />
            <main className="template1">
                <section>
                    <h1 className="heading-1 heading-1--dark">Coming Soon!</h1>
                    <h3 className="heading-3">Under Construction!</h3>
                    <img alt="Under Construction!" src={underConstructionImage} className="template1--image" />
                    <br />
                    <Link to="/" className="template1--text">Return Home</Link>
                </section>
            </main>
        </ Layout>);
};