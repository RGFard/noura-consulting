import * as React from "react";
import { graphql } from "gatsby";

import "../sass/style.scss";
import Head from "../components/general/Head";
import Video from "../components/general/Video";
import ContactForm from "../components/general/ContactForm";

export default function ContactPage({ data }) {

  const {
    file
  } = data.allContentfulAsset.nodes[0];

  return (
    <>
      <Head pageTitle="Contact Page" />

      <main className="template2">
        <Video src={file.url} title="Contact Us" dark />

        <ContactForm />
      </main>
    </>
  );
}


export const query = graphql`
query ContactPageData {
    allContentfulAsset(
      filter: {
        title: { eq: "contact-top-banner" }
        file: {
          contentType: { regex: "/^video\\//" }
        }
      }
    ) {
      nodes {
        file {
          url
        }
      }
    }      
  }
`;
