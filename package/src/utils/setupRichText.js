import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const setupRichText = ({ raw, references }) => {
  if (!raw || typeof raw !== "string") return null;

  // Build lookup table for assets
  const assetMap = {};
  references?.forEach((ref) => {
    assetMap[ref.contentful_id] = ref;
  });

  const document = JSON.parse(raw);

  return documentToReactComponents(document, {
    renderMark: {
      [MARKS.BOLD]: (text) => (
        <b className="body-text--font">{text}</b>
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
        const id = node.data?.target?.sys?.id;
        const asset = assetMap[id];

        if (!asset?.gatsbyImageData) return null;

        const image = getImage(asset.gatsbyImageData);

        return (
          <figure className="template2__section--body-image">
            <GatsbyImage
              image={image}
              alt={asset.description || asset.title || ""}
            />
          </figure>
        );
      },

      /* ---------- Embedded Image Entry ---------- */
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const id = node.data?.target?.sys?.id;
        const entry = assetMap[id];

        if (!entry?.image?.gatsbyImageData) return null;

        const image = getImage(entry.image.gatsbyImageData);
        if (!image) return null;

        const alignment = (entry.alignment || "right")
          .toString()
          .trim()
          .toLowerCase();

        const wrapperClass =
          alignment === "left"
            ? "template2__imageText template2__imageText--left"
            : alignment === "right"
              ? "template2__imageText template2__imageText--right"
              : "template2__imageText template2__imageText--full";

        const textNode = entry.sideText?.raw ? (
          <div className="template2__imageText-text">
            {setupRichText({
              raw: entry.sideText.raw,
              references: entry.sideText.references || [],
            })}
          </div>
        ) : null;

        const imageNode = (
          <figure className="template2__imageText-image">
            <GatsbyImage
              image={image}
              alt={entry.image.description || entry.caption || ""}
            />
            {entry.caption && <figcaption className="body-text template2__imageText-image--caption">{entry.caption}</figcaption>}
          </figure>
        );

        return (
          <section className={wrapperClass}>
            {alignment === "left" ? (
              <>
                {imageNode}
                {textNode}
              </>
            ) : (
              <>
                {textNode}
                {imageNode}
              </>
            )}
          </section>
        );
      },
    },
  });
};

export default setupRichText;
