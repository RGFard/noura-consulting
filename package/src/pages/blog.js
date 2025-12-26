import * as React from "react";
import { useLocation } from "@reach/router";
import { graphql } from "gatsby";

import "../sass/style.scss";
import Head from "../components/general/Head";
import Blogs from "../components/site/blog/Blogs";
import Video from "../components/general/Video";
import BlogVideoMp4 from "../assets/videos/blog.mp4";
import PageIntro from "../components/site/pageIntro/PageIntro";


export default function BlogPage({ data }) {

  const { pathname } = useLocation();
  const footerButton = pathname.replace(/\//g, "") === "";

  return (
    <>
      <Head pageTitle="Blog Page" />

      <div className="template2">
        <Video src={BlogVideoMp4} title="Blog" dark />
      </div>

      <PageIntro data={data} />

      <Blogs
        footerButton={footerButton}
      />
    </>
  );
}

export const query = graphql`
query BlogPageData {
    contentfulPageIntro(page: { eq: "blog" }) {
      friendlyTitle
      description {
        raw
      }
      image {
        file {
          url
        }
      }
      video {
        file {
          url
        }
      }
    }
  }
`;