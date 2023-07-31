import * as React from "react";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Head from "../components/general/Head";
import Video from "../components/general/Video";
import Services from "../components/site/services/Services";
import Blogs from "../components/site/blogs/Blogs";

export default function Home() {
  return (
    <Layout>
      <Head pageTitle="Home Page" />
      <Video />
      <Services />
      <Blogs />
    </ Layout>
  );
}
