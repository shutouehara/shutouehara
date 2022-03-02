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
  },
  plugins: [
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: "9d56d66000b341b096e0d8f56437716d15bf",
        serviceId: 'shutouehara',
        apis: [
          {
            endpoint: "portfolio",
            //query: {
              //filters: equals('portfolio_category', 'website'),
            //},
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
  ],
}
