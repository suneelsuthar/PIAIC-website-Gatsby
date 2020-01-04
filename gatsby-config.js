/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  /* Your site config here */
  plugins:[
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
     {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: ivamkcx9tr1t,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: _LvZZMG0wYI4dtUQ8Z7tubw0DTt95tLh766vvjFy-7w,
      },
    },
  ]
}
