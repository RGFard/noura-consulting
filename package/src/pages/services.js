import * as React from "react";

import "../sass/style.scss";
import Head from "../components/general/Head";
import Services from "../components/site/services/Services";
import Video from "../components/general/Video";
import ServicesVideoMp4 from "../assets/videos/services.mp4";

export default function ServicesPage() {
  return (
    <>
      <Head pageTitle="Services Page" />

      <div className="template2">
        <Video src={ServicesVideoMp4} title="Services" dark />
      </div>

      <Services footer={false} />
    </>
  );
}
