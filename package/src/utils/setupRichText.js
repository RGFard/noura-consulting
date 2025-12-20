import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";

const setupRichText = (richText) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => (
        <b className="font-bold">{text}</b>
      ),
    },

    renderNode: {
      [INLINES.HYPERLINK]: (node, children) => (
        <a href={node.data.uri} className="underline">
          {children}
        </a>
      ),

      [BLOCKS.PARAGRAPH]: (node, children) => {
        const content = Array.isArray(children)
          ? children
          : [children];

        const withBreaks = content.flatMap((child, index) => {
          if (typeof child === "string") {
            return child.split("\n").flatMap((line, i) =>
              i > 0 ? [<br key={`${index}-${i}`} />, line] : line
            );
          }
          return child;
        });

        return (
          <p className="body-text">
            {withBreaks}
          </p>
        );
      },

      [BLOCKS.UL_LIST]: (node, children) => (
        <ul className="body-text">{children}</ul>
      ),

      [BLOCKS.OL_LIST]: (node, children) => (
        <ol className="body-text">{children}</ol>
      ),

      [BLOCKS.LIST_ITEM]: (node, children) => (
        <li className="body-text body-text--margined">
          {children}
        </li>
      ),

      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className="heading-1">{children}</h1>
      ),

      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="heading-2">{children}</h2>
      ),

      [BLOCKS.HEADING_3]: (node, children) => (
        <h3 className="heading-3 heading-3--black">{children}</h3>
      ),
    },
  };

  return renderRichText(richText, options);
};

export default setupRichText;
