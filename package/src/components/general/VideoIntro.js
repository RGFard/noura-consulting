import React from "react";

const VideoIntro = ({ src, imageUrl, description }) => {
  const hasVideo = Boolean(src);

  return (
    <div className="videoIntro__video-wrapper">
      {hasVideo ? (
        <video
          className="videoIntro__video"
          poster={imageUrl}
          controls
        >
          <source src={src} type="video/mp4" />

          {/* Accessibility: captions */}
          <track
            kind="captions"
            srcLang="en"
            src="/captions/placeholder.vtt"
            default
          />

          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          className="videoIntro__video"
          src={imageUrl}
          alt={description}
        />
      )}
    </div>
  );
};

export default VideoIntro;
