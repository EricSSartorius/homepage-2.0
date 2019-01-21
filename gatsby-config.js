module.exports = {
  siteMetadata: {
    title: `Eric Sartorius`,
    description: `A homepage for Eric Sartorius`,
    author: `@The_Epic_Life`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [{
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 1600,
            quality: 90,
            linkImagesToOriginal: false,
          },
        },
          {
            resolve: 'gatsby-remark-responsive-iframe'
          }
        ],
      },
    },    
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto`, `sans-serif`]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-71581610-1',
        anonymize: true
      },
    },
  ],
}
