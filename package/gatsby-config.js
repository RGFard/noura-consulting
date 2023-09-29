/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

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
    {
      resolve: "gatsby-source-formspree",
      options: {
        form: "xlekbrbw"
      },
    },
  ]
};
