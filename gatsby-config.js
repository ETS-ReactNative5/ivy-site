require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    "gatsby-plugin-root-import",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
