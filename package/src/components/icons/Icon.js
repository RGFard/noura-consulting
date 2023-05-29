import React from "react";
import parser from "html-react-parser";
import { useStaticQuery, graphql } from "gatsby";

// const query = graphql`
// {
//   allContentfulJsonContent {
//     nodes {
//       object {
//         name
//         tag
//       }
//     }
//   }
// }
// `;

const Icon = ({ name, icons }) => {
  let iconTag;

  // const {
  //     allContentfulJsonContent: { nodes: icons }
  // } = useStaticQuery(query);

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