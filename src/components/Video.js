import React from "react";

import VisionVideo from "../assets/images/vision.mp4";

const Video = () => {
    return (
        <section className="vision">
            <video className="vision__video" autoPlay muted loop>
                <source src={VisionVideo} type="video/mp4" />
                Your browser is not supported!
            </video>
        </section>
    );
};

export default Video;