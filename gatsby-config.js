module.exports = {
  siteMetadata: {
    title: `Ultimate Gatsby Starter`,
    description: `Introducing the Ultimate Gatsby Starter. Everything you need to kick off your next Gatsby Project with a 100% responsive template.`,
    author: `@haydnadams`,
    siteUrl: `https://ultimategatsbystarter.adesignerwhocodes.com/`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
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
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
