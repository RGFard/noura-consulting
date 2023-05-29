/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "Noura Consulting Website",
    description: "A software provider corporation with specialties in Blockchain Applications, Smart Contracts, Web3, Mobile Native Apps, and APIs",
    author: "Reza Fard",
  },
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
    }
  ]
};
