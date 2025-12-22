import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const setupRichText = ({ raw, references }) => {
  if (!raw) return null;

  // Build lookup table for assets
  const assetMap = {};
  references?.forEach((ref) => {
    assetMap[ref.contentful_id] = ref;
  });

  const document = JSON.parse(raw);

  return documentToReactComponents(document, {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <b className="font-bold">{text}</b>
      ),
    },

    renderNode: {
      /* ---------- Links ---------- */
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),

      /* ---------- Paragraphs ---------- */
      [BLOCKS.PARAGRAPH]: (_, children) => {
        const content = Array.isArray(children) ? children : [children];

        const withBreaks = content.flatMap((child, index) => {
          if (typeof child === "string") {
            return child.split("\n").flatMap((line, i) =>
              i > 0 ? [<br key={`${index}-${i}`} />, line] : line
            );
          }
          return child;
        });

        return <p className="body-text">{withBreaks}</p>;
      },

      /* ---------- Lists ---------- */
      [BLOCKS.UL_LIST]: (_, children) => (
        <ul className="body-text">{children}</ul>
      ),

      [BLOCKS.OL_LIST]: (_, children) => (
        <ol className="body-text">{children}</ol>
      ),

      [BLOCKS.LIST_ITEM]: (_, children) => (
        <li className="body-text body-text--margined">
          {children}
        </li>
      ),

      /* ---------- Headings ---------- */
      [BLOCKS.HEADING_1]: (_, children) => (
        <h1 className="heading-1">{children}</h1>
      ),

      [BLOCKS.HEADING_2]: (_, children) => (
        <h2 className="heading-2">{children}</h2>
      ),

      [BLOCKS.HEADING_3]: (_, children) => (
        <h3 className="heading-3 heading-3--black">{children}</h3>
      ),

      /* ---------- Embedded Image Assets ---------- */
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const assetId = node.data?.target?.sys?.id;
        const asset = assetMap[assetId];

        if (!asset) return null;

        const image = getImage(asset.gatsbyImageData);
        if (!image) return null;

        return (
          <figure className="template2__section--body-image">
            <GatsbyImage
              image={image}
              alt={asset.description || asset.title || ""}
            />
          </figure>
        );
      },
    },
  });
};

export default setupRichText;
