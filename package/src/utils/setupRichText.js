import React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { INLINES, BLOCKS, MARKS } from "@contentful/rich-text-types";

const setupRichText = (richText) => {

    const options = {
        renderMark: {
            [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
        },
        renderNode: {
            [INLINES.HYPERLINK]: (node, children) => {
                const { uri } = node.data;
                return (
                    <a href={uri} className="underline">
                        {children}
                    </a>
                );
            },
            [BLOCKS.PARAGRAPH]: (node, children) => {
                if (children.length > 1) {
                    return <p>{children}</p>;
                }
                else {
                    return (
                        children.map((line, index) => {
                            if (!line) {
                                return <br key={index} />;
                            } else {
                                return <p className="body-text" key={index}>{line}</p>;
                            }
                        })
                    );
                }
            },
            [BLOCKS.HEADING_1]: (node, children) => {
                return <h1 className="heading-1">{children}</h1>;
            },
            [BLOCKS.HEADING_2]: (node, children) => {
                return <h2 className="heading-2">{children}</h2>;
            },
            [BLOCKS.HEADING_3]: (node, children) => {
                return <h3 className="heading-3 heading-3--black">{children}</h3>;
            },
        },
    };
    return (
        renderRichText(richText, options)
    );
};

export default setupRichText;