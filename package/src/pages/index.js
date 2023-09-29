import * as React from "react";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Head from "../components/general/Head";
import Services from "../components/site/services/Services";
import Weblog from "../components/site/blog/Weblog";
import Video from "../components/general/Video";
import VisionVideoMp4 from "../assets/videos/vision.mp4";


export default function HomePage() {
  return (
    <Layout>
      <Head pageTitle="Home Page" />
      <div className="template2">
        <Video src={VisionVideoMp4} />
      </div>
      <Services footer={true} />
      <Weblog footer={true} />
    </ Layout>
  );
}
