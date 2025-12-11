import React from "react";
import { getImage } from "gatsby-plugin-image";

import VideoIntro from "../../../components/general/VideoIntro";
import setupRichText from "../../../utils/setupRichText";

// Test comment
const PageIntro = ({ data }) => {

    const {
        friendlyTitle,
        image,
        description,
        video
    } = data.contentfulPageIntro;
    const bodyDescription = setupRichText(description);

    return (
        <section className="pageIntro">
            {/* One row */}
            <div className="pageIntro__row">
                {/* row1 col1 */}
                <div className="pageIntro__col pageIntro__col--left">
                    <div className="pageIntro__title">
                        <h2 className="heading-2 heading-2--dark">{friendlyTitle}</h2>
                    </div>
                    <div className="pageIntro__text">
                        {bodyDescription}
                    </div>
                </div>
                {/* row1 col2 */}
                <div className="pageIntro__col pageIntro__col--right">
                    <VideoIntro src={video.file.url} imageUrl={image.file.url} />
                </div>
            </div>
        </section>
    );
};

export default PageIntro;