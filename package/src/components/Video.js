import React from "react";

import VisionVideo from "../assets/images/vision.mp4";

const Video = () => {
    return (
        <section className="vision">
            <video className="vision__video" contentType="video/mp4" autoPlay muted loop>
                <source src={VisionVideo} type="video/mp4" />
                Your browser is not supported! Use Chrome or Firefox.
            </video>
        </section>
    );
};

export default Video;