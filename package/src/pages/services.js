import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Head from "../components/general/Head";
import Services from "../components/site/services/Services";

export default function ServicesPage() {
    return (
        <Layout>
            <Head pageTitle="Services Page" />
            <div className="template2">
                <section className="template2__section--header" key="header">
                    <div className="template2__section--header-text">
                        Services
                    </div>
                    <StaticImage alt="Blog" src="../assets/images/services.jpg" class="template2__section--header-image" />
                </section>
            </div>
            <Services footer={false} />
        </Layout>
    );
}