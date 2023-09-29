import React from "react";

const Video = ({ src, title }) => {
    return (
        <section className="template2__section--header" key="header">
            <div className="template2__section--header-text">
                {title}
            </div>
            <video className="template2__section--header-video" autoPlay loop muted playsInline>
                <source src={src} type="video/mp4" />
                Your browser is not supported! Use Chrome or Firefox.
            </video>
        </section>
    );
};

export default Video;