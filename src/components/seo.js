import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description, siteType }) => {
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
            property: `og:site_name`,
            content: `Dev Blog`,
        },
        {
            property: `og:locale`,
            content: `ja_JP`,
        },
        {
            property: `twitter:title`,
            content: title,
        },
        {
            property: `twitter:description`,
            content: description,
        },
      ]}
    />
  )
}

export default Seo