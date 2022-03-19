module.exports = {
  siteMetadata: {
      title: `Specom`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-transformer-json",
    "gatsby-plugin-image",
  "gatsby-plugin-styled-components",
  "gatsby-plugin-sitemap", 
  "gatsby-plugin-postcss",
   {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/favicon.png"
    }
  },
 
   "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "data",
        "path": "./src/data/"  
      
      }
    },
     {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};