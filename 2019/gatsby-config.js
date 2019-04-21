module.exports = {
  siteMetadata: {
    title: `React Boston 2019`,
    description: `New England's annual React conference!`,
    author: `@wayfair`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-flow`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        custom: {
          families: ["Avenir Next Condensed"],
          urls: ["/src/fonts/fonts.css"],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
