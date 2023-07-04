/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types');

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8xjtcyj0blxi`,
        accessToken: process.env.CONTENTFUL_API_KEY,
      },
    },
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: '@contentful/gatsby-transformer-contentful-richtext',
    //   options: {
    //     renderOptions: {
    //       /*
    //        * Defines custom html string for each node type like heading, embedded entries etc..
    //        */
    //       renderNode: {
    //         // Example
    //         [INLINES.ASSET_HYPERLINK]: node => {
    //           return `<img class='custom-asset' src="${node.data.target.fields.file['en-US'].url
    //             }"/>`;
    //         },
    //         [INLINES.EMBEDDED_ENTRY]: node => {
    //           return `<div class='custom-entry' />${node.data.target.fields.name['en-US']
    //             }</div>`;
    //         },
    //       },
    //       /*
    //        * Defines custom html string for each mark type like bold, italic etc..
    //        */
    //       renderMark: {
    //         // Example
    //         [MARKS.BOLD]: text => `<custom-bold>${text}<custom-bold>`,
    //       },
    //     },
    //   },
    // }
  ]
};
