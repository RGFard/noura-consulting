import React from "react";

import VisionVideoMp4 from "../assets/images/vision.mp4";
import VisionVideoWebm from "../assets/images/vision.webm";

const Video = () => {
    return (
        <section className="vision">
            <video className="vision__video" autoPlay muted loop>
                {/* <source src={VisionVideoMp4} type="video/mp4" /> */}
                <source src={VisionVideoWebm} type="video/webm" />
                Your browser is not supported! Use Chrome or Firefox.
            </video>
        </section>
    );
};

export default Video;