module.exports = {
  siteMetadata: {
    title: `React Boston 2019`,
    description: `New England's annual React conference!`,
    about: `React Boston is a two-day, single-track conference on React hosted in Boston's Back Bay neighborhood and organized in collaboration with <a href="https://tech.wayfair.com/">Wayfair Tech</a> and the community <a href="https://meetup.com/ReactJS-Boston/">ReactJS Boston Meetup</a>. We're excited to welcome developers of all backgrounds, skill sets, and experience levels to join us for a weekend of high-quality content and great conversations with others in the developer community.`,
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
        name: `React Boston`,
        icon: `src/images/icon-logo.jpg`,
        start_url: `/`,
        background_color: `#2160ad`,
        theme_color: `#2160ad`,
        display: `browser`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto+Condensed:400,500,700`, `Source+Sans+Pro:300,400`],
        display: "swap",
      },
    },
    `gatsby-plugin-emotion`,
    "gatsby-transformer-json",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "data",
        path: `${__dirname}/src/api`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
