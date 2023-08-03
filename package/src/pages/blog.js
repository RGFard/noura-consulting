import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Head from "../components/general/Head";
import Weblog from "../components/site/blog/Weblog";

export default function Home() {
    return (
        <Layout>
            <Head pageTitle="Blog Page" />
            <main className="template2">
                <section className="template2__section--header" key="header">
                    <div className="template2__section--header-text">
                        Blog Posts
                    </div>
                    <StaticImage alt="Blog" src="../assets/images/weblog.jpg" class="template2__section--header-image" />
                </section>
            </main>
            <Weblog footer={false} />
        </ Layout>
    );
}
