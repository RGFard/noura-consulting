import React from 'react';
import { renderRichText } from 'gatsby-source-contentful/rich-text';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types';

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
            [BLOCKS.HEADING_2]: (node, children) => {
                return <h2>{children}</h2>;
            },
        },
    };
    return (
        renderRichText(richText, options)[0].props.children
    );
};

export default setupRichText;