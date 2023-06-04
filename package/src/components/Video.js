import React from "react";

import VisionVideoMp4 from "../assets/images/vision.mp4";

const Video = () => {
    return (
        <section className="vision">
            <video className="vision__video" controls preload='auto' autoplay loop muted playsInline>
                <source src={VisionVideoMp4} type="video/mp4" />
                Your browser is not supported! Use Chrome or Firefox.
            </video>
        </section>
    );
};

export default Video;