import * as React from "react";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Head from "../components/general/Head";
import Video from "../components/general/Video";
import Services from "../components/site/services/Services";
import Weblog from "../components/site/blog/Weblog";

export default function HomePage() {
  return (
    <Layout>
      <Head pageTitle="Home Page" />
      <Video />
      <Services footer={true} />
      <Weblog footer={true} />
    </ Layout>
  );
}
