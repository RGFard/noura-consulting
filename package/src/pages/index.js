import * as React from "react";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Head from "../components/general/Head";
import PageIntro from "../components/site/pageIntro/PageIntro";
import Weblog from "../components/site/blog/Weblog";
import Services from "../components/site/services/Services";
import Video from "../components/general/Video";
import HomeVideo from "../assets/videos/home.mp4";

export default function HomePage() {
  return (
    <Layout>
      <Head pageTitle="Home Page" />
      <div className="template2">
        <Video src={HomeVideo} dark={true} />
      </div>
      <PageIntro />
      <Weblog footer={true} />
      <Services footer={true} />
    </Layout>
  );
}
