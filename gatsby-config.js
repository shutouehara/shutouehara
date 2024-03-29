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
    copyright: `©︎ .${new Date().getFullYear()} shutouehara.com`,
    menu: [
      {
        label: 'Services',
        path: '/service/',
      },
      {
        label: 'Portfolios',
        path: '/portfolio/',
      },
      {
        label: 'Profile',
        path: '/profile/',
      },
      {
        label: 'Blogs',
        path: '/blogs/',
      },
      {
        label: 'Privacy policy',
        path: '/privacy/',
      },
      {
        label: 'disclaimer',
        path: '/disclaimer/',
      },
      {
        label: 'Sitemap',
        path: '/sitemap/',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: 'shutoueharaのポートフォリオ',
        short_name: 'PF of shutouehara',
        start_url:'/?utm_source=homescreen',
        background_color: '#030a2e',
        theme_color: '#030a2e',
        display: 'minimal-ui',
        icon: 'static/favicon.ico',
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.API_KEY,
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
    {
      resolve: `@isamrish/gatsby-plugin-google-adsense`,
      options: {
        googleAdClientId: `ca-pub-6716641662780805`,
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-twitter",
  ],
}
