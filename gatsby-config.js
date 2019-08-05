const siteMetadata = require('./config/siteMetadata');

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        typeName: `Json`,
        path: `${__dirname}/src/data`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-i18n",
    //   options: {
    //     langKeyForNull: 'en',
    //     langKeyDefault: 'en',
    //     useLangKeyLayout: true,
    //     prefixDefault: false,
    //     // markdownRemark: {
    //     //   projectPage: 'src/pages/projects/index.js',
    //     //   query: `
    //     //     {
    //     //         allMarkdownRemark {
    //     //             edges {
    //     //               node {
    //     //                   fields {
    //     //                   slug,
    //     //                   langKey
    //     //                   }
    //     //               }
    //     //             }
    //     //         }
    //     //     }
    //     //   `
    //     // }
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `north-bits-portfolio`,
        short_name: `portfolio`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
