require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: 'https://coinrate.com',
    themeColor: '#2c52da',
    backgroundColor: '#2c52da',
    pathPrefix: null,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-offline',
    'gatsby-plugin-eslint',
    'gatsby-plugin-sharp',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          components: 'src/components',
          sections: 'src/sections',
          pages: 'src/pages',
          static: 'src/static',
          styles: 'src/styles',
          helpers: 'src/helpers',
          store: 'src/store',
        },
        extensions: ['*'],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-google-tagmanager',
    //   options: {
    //     id: 'UA-107444053-1',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/static/favicon.png',
        appName: 'CoinRate',
        appDescription: null,
        developerName: null,
        developerURL: null,
        dir: 'auto',
        lang: 'en',
        background: '#2c52da',
        theme_color: '#2c52da',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: false,
          coast: false,
          favicons: true,
          firefox: true,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
