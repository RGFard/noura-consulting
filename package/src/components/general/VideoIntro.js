import React from "react";

const VideoIntro = ({ src, imageUrl }) => {
  return (
    <div className="videoIntro__video-wrapper">
      <video
        className="videoIntro__video"
        poster={imageUrl}
        controls
      >
        <source src={src} type="video/mp4" />

        {/* ✅ Accessibility: captions */}
        <track
          kind="captions"
          srcLang="en"
          src="/captions/placeholder.vtt"
          default
        />

        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoIntro;
