import React from "react";

const Body = ({ text }) => {

    return (
        <section className="template2__section--body">
            <div className="template2__section--body-text">
                {text}
            </div>
        </section>
    );
};

export default Body;
