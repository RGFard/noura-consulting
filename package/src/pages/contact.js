import * as React from "react";

import "../sass/style.scss";
import Layout from "../components/layout/Layout";
import Head from "../components/general/Head";
import Video from "../components/general/Video";
import ContactVideoMp4 from "../assets/videos/contact.mp4";
import ContactForm from "../components/general/ContactForm";

export default function ContactPage() {
    return (
        <Layout>
            <Head pageTitle="Blog Page" />
            <main className="template2">
                <Video src={ContactVideoMp4} title="Contact Us" dark={true} />
                <ContactForm />
            </main>
        </ Layout>
    );
}
