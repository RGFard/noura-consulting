import * as React from "react";

import "../sass/style.scss";
import Layout from "../components/Layout";
import Seo from "../components/SEO";
import underConstructionImage from "../assets/images/under-construction.jpg";

export default function UnderConstruction() {
    return (
        <Layout>
            <Seo pageTitle="Under Construction page" />
            <main className="template-1">
                <section className="template-1--main">
                    <h1 className="heading-1 heading-1--dark">Coming Soon!</h1>
                    <h3 className="heading-3">Under Construction!</h3>
                    <img alt="Under Construction!" src={underConstructionImage} className="template-1--image" />
                </section>
            </main>
        </Layout>);
};