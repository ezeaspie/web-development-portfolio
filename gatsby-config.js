module.exports = {
  siteMetadata: {
    title: `Ezequiel Espinoza, Web Developer, Washington D.C`,
    description: `Website for Ezequiel Espinoza, front-end Web Developer services`,
    author: `Ezequiel Espinoza`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
