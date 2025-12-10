import React from "react";

const Video = ({ src, title, dark }) => {
    let className = dark === true ?
        "template2__section--header-video template2__section--header-video--dark" :
        "template2__section--header-video";

    return (
        <section className="template2__section--header" key="header">
            <div className="template2__section--header-text">
                {title}
            </div>
            <video className={className} autoPlay loop muted playsInline>
                <source src={src} type="video/mp4" />
                Your browser is not supported! Use Chrome or Firefox.
            </video>
        </section>
    );
};

export default Video;