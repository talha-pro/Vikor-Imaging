module.exports = {
  siteMetadata: {
    title: `Vikor Imaging Customer Portal`,
    description: ``,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Property',
        fieldName: 'vikordata',
        url:
          'https://6aqp2jbxp5a7xkcoobe4ydurga.appsync-api.us-east-1.amazonaws.com/graphql',
        headers: {
          'x-api-key': 'da2-537cruqp3nbt7bcy5kegmjssdi',
        },
      },
    },
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
        name: `vikor_customer_portal`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/header_logo.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
