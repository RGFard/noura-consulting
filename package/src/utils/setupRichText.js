import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const setupRichText = ({
  raw,
  references = [],
  assetMap = {},
  imageBlockMap = {},
}) => {
  if (!raw || typeof raw !== "string") return null;

  /* ------------------------------------------------
     SINGLE source of truth for embedded resolution
     Order of precedence:
     1. Blog references
     2. Service assets
     3. Service image blocks
  ------------------------------------------------ */
  const lookup = {};

  // Blogs (Rich Text references)
  references.forEach((ref) => {
    if (ref?.contentful_id) {
      lookup[ref.contentful_id] = ref;
    }
  });

  // Services (explicit assets)
  Object.keys(assetMap).forEach((id) => {
    lookup[id] = assetMap[id];
  });

  // Services (ImageBlocks)
  Object.keys(imageBlockMap).forEach((id) => {
    lookup[id] = imageBlockMap[id];
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

      /* ---------- Headings ---------- */
      [BLOCKS.HEADING_1]: (_, children) => (
        <h1 className="heading-1 heading-1--dark">
          {children}
        </h1>
      ),

      [BLOCKS.HEADING_2]: (_, children) => (
        <h2 className="heading-2 heading-2--dark">
          {children}
        </h2>
      ),

      [BLOCKS.HEADING_3]: (_, children) => (
        <h3 className="heading-3 heading-3--black">
          {children}
        </h3>
      ),

      /* ---------- Paragraphs ---------- */
      [BLOCKS.PARAGRAPH]: (_, children) => {
        const content = Array.isArray(children) ? children : [children];

        const withBreaks = content.flatMap((child, index) => {
          if (typeof child === "string") {
            return child
              // Convert literal "\n" into real newlines
              .replace(/\\n/g, "\n")
              // Convert <br> tags into newlines
              .replace(/<br\s*\/?>/gi, "\n")
              // Split on real newlines
              .split("\n")
              .flatMap((line, i) =>
                i > 0
                  ? [<br key={`${index}-${i}`} />, line]
                  : line
              );
          }
          return child;
        });

        return <p className="body-text">{withBreaks}</p>;
      },
      /* ---------- Embedded Asset (Blogs + Services) ---------- */
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const id = node.data?.target?.sys?.id;
        const asset = lookup[id];

        if (!asset?.gatsbyImageData) return null;

        return (
          <figure className="template2__section--body-image">
            <GatsbyImage
              image={getImage(asset.gatsbyImageData)}
              alt={asset.description || asset.title || ""}
            />
          </figure>
        );
      },

      /* ---------- Embedded Entry (ImageBlock / Services) ---------- */
      [BLOCKS.EMBEDDED_ENTRY]: (node) => {
        const id = node.data?.target?.sys?.id;
        const entry = lookup[id];

        // Ignore non-ImageBlock entries safely
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

        const imageNode = (
          <figure className="template2__imageText-image">
            <GatsbyImage
              image={image}
              alt={entry.image.description || entry.caption || ""}
            />
            {entry.caption && (
              <figcaption className="body-text template2__imageText-image--caption">
                {entry.caption}
              </figcaption>
            )}
          </figure>
        );

        const textNode = entry.sideText?.raw ? (
          <div className="template2__imageText-text">
            {setupRichText({
              raw: entry.sideText.raw,
              references,
              assetMap,
              imageBlockMap,
            })}
          </div>
        ) : null;

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
