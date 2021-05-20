module.exports = {
  siteMetadata: {
    title: "My Gatsby Site",
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-gatsby-cloud",
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `Gatsby client-side routing only`,
      short_name: 'Reactgo',
      start_url: '/',
      background_color: '#f7f0eb',
      theme_color: '#a2466c',
      display: 'standalone',
      icon: 'src/images/Logo.svg',
    },
  }
],
  pathPrefix: "/portfolio",
  
};
