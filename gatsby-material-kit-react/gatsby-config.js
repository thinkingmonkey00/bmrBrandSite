module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: "Baby Momma Rachel",
  },
  plugins: [
    "gatsby-plugin-resolve-src",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-sass",
    "gatsby-plugin-material-ui",
    "gatsby-theme-gallery",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Baby Momma Rachel",
        short_name: "BMR",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/assets/img/fruit4.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://babymommarachel.us4.list-manage.com/subscribe/post?u=9a32ff42332c6bebf4b03013f&amp;id=cca072786f",
      },
    },
  ],
}
