import React from "react"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"

const Seo = ({ title, description, siteType, pageUrl, imgUrl }) => {
    const url = useLocation().pathname
    function img () {
        if( url.includes('portfolio')||url.includes('blogs') ) {
            if(url !== '/portfolio/' && url !== '/blogs/'){
                return imgUrl
            }else{
                return `https://shutouehara.com${imgUrl}`
            }
        } else {
            return `https://shutouehara.com${imgUrl}`
        }
    }
    const ogpImg = img()
  return (
    <Helmet
      htmlAttributes={{ lang: "ja-jp" }}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `google-site-verification`,
          content: `zKRE8bViBxV-3G6IqFX_n1Ad5iyv3eFWDqIUeD38S3M`,
        },
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
            content: ogpImg,
        },
        {
            property: `og:image`,
            content: ogpImg,
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
      ]}
    >
        <meta name="twitter:image" content={ogpImg} />
        <link rel="canonical" href={`https://shutouehara.com${pageUrl}`} />
    </Helmet>
  )
}

export default Seo