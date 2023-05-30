import React from "react";
import parser from "html-react-parser";

const Icon = ({ name, icons }) => {
  let iconTag;

  icons.find(() => true).object.map((icon) => {
    if (icon.name === name) {
      iconTag = parser(icon.tag);
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