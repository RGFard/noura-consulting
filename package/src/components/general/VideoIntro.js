import React from "react";

const VideoIntro = ({ src, imageUrl }) => {
    return (
        <div className="videoIntro__video-wrapper"
            onClick={(e) => e.stopPropagation()}>
            <video className="videoIntro__video" poster={imageUrl} controls>
                <source src={src} type="video/mp4" />
                Your browser is not supported! Use Chrome or Firefox.
            </video>
        </div>
    );
};

export default VideoIntro;