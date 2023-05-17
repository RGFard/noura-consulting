import * as React from "react";

import Layout from "../components/Layout";
import Seo from "../components/SEO";
import Video from "../components/Video";
import Services from "../components/services/Services";
import Blogs from "../components/blogs/Blogs";

// import fb from "../assets/images/sprite.svg";
// import Icon from "../assets/sprite.svg";


export default function Home() {
  return (
    <Layout>
      <Seo title="Home Page" />
      <Video />
      <Services />
      <Blogs />
    </Layout >);
}
