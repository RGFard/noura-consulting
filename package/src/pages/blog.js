import * as React from "react";
import { useContext } from "react";
import { useLocation } from "@reach/router";

import "../sass/style.scss";
import Head from "../components/general/Head";
import Blogs from "../components/site/blog/Blogs";
import Video from "../components/general/Video";
import BlogVideoMp4 from "../assets/videos/blog.mp4";

import { SiteMetadataContext } from "../context/SiteMetadataContext";

export default function BlogPage() {
  const siteMetadata = useContext(SiteMetadataContext);

  const quickMenu = siteMetadata?.quickMenu ?? [];
  const blogMenuData =
    quickMenu.find(item => item.name === "blog") || {};

  const { pathname } = useLocation();
  const footerButton = pathname.replace(/\//g, "") === "";

  return (
    <>
      <Head pageTitle="Blog Page" />

      <div className="template2">
        <Video src={BlogVideoMp4} title="Blog" dark />
      </div>

      <Blogs
        footerButton={footerButton}
        blogMenuData={blogMenuData}
      />
    </>
  );
}
