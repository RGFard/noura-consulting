import * as React from "react";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Head from "../components/general/Head";
import Weblog from "../components/site/blog/Weblog";
import Video from "../components/general/Video";
import BlogVideoMp4 from "../assets/videos/blog.mp4";

export default function BlogPage() {
    return (
        <Layout>
            <Head pageTitle="Blog Page" />
            <div className="template2">
                <Video src={BlogVideoMp4} title="Blog" />
            </div>
            <Weblog footer={false} />
        </ Layout>
    );
}
