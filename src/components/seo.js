import React from "react"
import { Helmet } from "react-helmet"
import { graphql } from "gatsby"

const Seo = ({ title, description, siteType, pageUrl, imgUrl }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "ja-jp" }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
            name: `description`,
            content: description,
        },
        {
            property: `og:title`,
            content: title,
        },
        {
            property: `og:description`,
            content: description,
        },
        {
            property: `og:type`,
            content: siteType,
        },
        {
            property: `og:url`,
            content: `https://shutouehara.com${pageUrl}`,
        },
        {
            property: `og:site_name`,
            content: `shutouehara ウェブサイト制作・運用・修正のご相談承ります。`,
        },
        {
            property: `og:locale`,
            content: `ja_JP`,
        },
        {
            property: `og:image:secure_url`,
            content: `https://shutouehara.com${imgUrl}`,
        },
        {
            property: `og:image`,
            content: `https://shutouehara.com${imgUrl}`,
        },
        {
            property: `twitter:site`,
            content: `@webhann`,
        },
        {
            property: `twitter:card`,
            content: `summary_large_image`,
        },
        {
            property: `twitter:title`,
            content: title,
        },
        {
            property: `twitter:description`,
            content: description,
        },
        {
            property: `twitter:image`,
            content: `https://shutouehara.com${imgUrl}`,
        },
      ]}
    />
  )
}

export default Seo