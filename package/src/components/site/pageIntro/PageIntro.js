import React from "react";

import VideoIntro from "../../../components/general/VideoIntro";
import setupRichText from "../../../utils/setupRichText";

const PageIntro = ({ intro }) => {
  // const pageIntro = data?.contentfulPageIntro;
  

  // Guard: render nothing if data isn't ready
  if (!intro) return null;


  const {
    friendlyTitle,
    image,
    description,
    video,
  } = intro;

  const bodyDescription = setupRichText(description);

  return (
    <section className="pageIntro">
      <div className="pageIntro__row">
        {/* left column */}
        <div className="pageIntro__col pageIntro__col--left">
          <div className="pageIntro__title">
            <h2 className="heading-2 heading-2--dark">
              {friendlyTitle}
            </h2>
          </div>

          <div className="pageIntro__text body-text">
            {bodyDescription}
          </div>
        </div>

        {/* right column */}
        <div className="pageIntro__col pageIntro__col--right">
          <VideoIntro
            src={video?.file?.url}
            imageUrl={image?.file?.url}
          />
        </div>
      </div>
    </section>
  );
};

export default PageIntro;
