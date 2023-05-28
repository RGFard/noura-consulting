import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Video from "../components/Video";
import Services from "../components/services/Services";
import Blogs from "../components/blogs/Blogs";

export default function Home() {
  return (
    <Layout>
      <Seo title="Home Page" />
      <Video />
      <Services />
      <Blogs />
    </Layout >);
}
