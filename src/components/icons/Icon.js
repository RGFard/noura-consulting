import React from "react";
import parser from "html-react-parser";

import icons from "../../assets/data/icon.json";

const Icon = ({ name }) => {
    let iconTag;
    icons.map((icon) => {
        if (icon.name === name) {
            iconTag = parser(icon.tag);
        }
    });

    return (
        <>
            {iconTag}
        </>
    );
};

export default Icon;