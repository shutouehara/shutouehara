/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
 const path = require('path');

 require('dotenv').config({
   path: `.env.${process.env.NODE_ENV}`
 });

 const {
  equals,
 } = require('gatsby-source-microcms/src/query-builder');

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `shutouehara ウェブサイト制作・運用・修正のご相談承ります。`,
    description: `上原崇利のポートフォリオサイトです。僕ができることや制作例、ブログなどを掲載しています。`,
    author: `shutouehara`,
    siteUrl: `https://shutouehara.com`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'shutoueharaのポートフォリオ',
        short_name: 'PF of shutouehara',
        start_url:'/?utm_source=homescreen',
        background_color: '#030a2e',
        theme_color: '#030a2e',
        display: 'minimal-ui',
        icon: 'static/icons/favicon.png',
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [`/privacy/`, `/disclaimer/`, `/contact/*`, `/404/`],
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        //apiKey: process.env.API_KEY,
        apiKey: "9d56d66000b341b096e0d8f56437716d15bf",
        serviceId: 'shutouehara',
        apis: [
          {
            endpoint: "portfolio",
          },
          {
            endpoint: "blog",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-breadcrumb",
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `トップ`,
        crumbLabelUpdates: [
          {
            pathname: '/service',
            crumbLabel: 'サービス'
          },
          {
            pathname: '/portfolio',
            crumbLabel: '制作例'
          },
          {
            pathname: '/profile',
            crumbLabel: 'プロフィール'
          },
          {
            pathname: '/blogs',
            crumbLabel: 'ブログ'
          },
        ],
     },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-N28QRDT",
      },
    },
  ],
}
