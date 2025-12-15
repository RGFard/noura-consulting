import React from "react";
import parser from "html-react-parser";

const Icon = ({ name, icons }) => {
  let iconTag;

  icons.map((icon) => {
    let iconContent = JSON.parse(icon.internal.content);
    if (iconContent.name === name) {
      iconTag = parser(iconContent.tag);
    }
    return iconTag;
  });

  return (
    <>
      {iconTag}
    </>
  );
};

export default Icon;