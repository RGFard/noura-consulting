import React from "react";

import Teaser from "../../../assets/videos/teaser.mp4";

const PageIntro = ({ services = [] }) => {
    return (
        <section className="pageIntro">
            {/* One row */}
            <div className="pageIntro__row">
                {/* row1 col1 */}
                <div className="pageIntro__col pageIntro__col--left">
                    <div className="pageIntro__title">
                        <h2 className="heading-2 heading-2--dark">What is Data Nexus?</h2>
                    </div>
                    <div>
                        <p className="pageIntro__text">
                            Data Nexus is an end-to-end integration platform that streamlines and modernizes how organizations exchange and govern data.
                        </p>
                        <p className="pageIntro__text">
                            It uses AI-driven automation to standardize authentication, transform and map data between any system, and enforce compliance automatically.
                        </p>
                        <p className="pageIntro__text">
                            With one unified gateway, every partner, vendor, and internal system connects seamlessly and securely.
                        </p>
                    </div>
                </div>
                {/* row1 col2 */}
                <div className="pageIntro__col pageIntro__col--right">
                    <div className="pageIntro__video-wrapper"
                        onClick={(e) => e.stopPropagation()}>
                        <video className="pageIntro__video" controls>
                            <source src={Teaser} type="video/mp4" />
                            Your browser is not supported! Use Chrome or Firefox.
                        </video>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageIntro;