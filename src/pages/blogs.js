import React from "react"
import { useLocation } from "@reach/router"
import { graphql, Link } from "gatsby"
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'
import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from "../components/seo"
import CardOriginal from "../components/card"
import ContactBtn from "../components/contact-btn"

import topHeroImg from "../../static/blog_heroimg_1200.webp"
import webhannImg from "../../static/thumb_webhann.webp"
import yuimaruImg from "../../static/thumb_yuimaru.webp"

dayjs.extend(utc)
dayjs.extend(timezone)

export default function Home({ data }) {
  const heroText = 'ブログ一覧'
  const url = useLocation()
  return (
    <>
      <Layout>
        <Hero heroText={heroText} heroImgSrc={topHeroImg} heroImgAlt="shutoueharaブログ一覧ページ" heroImgWidth="1200" heroImgHeight="800" />
        <Seo title="ブログ" description="技術ブログを中心に日々のアウトプットを載せます。" siteType="article" pageUrl={url.pathname} imgUrl={topHeroImg} />
        <article className="p-3 p-sm-5 m-auto" style={{maxWidth:'1200px'}}>
          <div className="py-3">
            <h2 className="fw-bold mt-5 mb-4 pb-2 border-bottom border-dark">技術ブログ</h2>
            <p className="mb-5">JavaScriptやPHP、WordPressなどサイト制作に関する技術的な気づきなどをブログに残しています。</p>
            <ul className="ul-list gap blogs">
              {data.allMicrocmsBlog.edges.map(({node}) => (
                <li key={node.blogId} className="card-shadow">
                  <CardOriginal
                    linkParent="blogs"
                    linkTo={node.blogId}
                    imgSrc={node.blog_thumbnail.url}
                    title={node.blog_title}
                    time={dayjs.utc(node.updatedAt).tz('Asia/Tokyo').format('YYYY/MM/DD')}
                    category={node.blog_category}
                    description={node.blog_desc}
                    moreText="詳しくみる→"
                  />
                </li>
              ))}
            </ul>
          </div>
          <ul className="ps-0">
            <li className="py-3 list-unstyled">
              <h2 className="fw-bold mt-5 mb-4 pb-2 border-bottom border-dark">うぇぶはん.com</h2>
              <p className="mb-5">主にデザインのインプット＆アウトプットにまとめているブログです。テレビ局のウェブ班として、テレビ番組HPなどのデザインが多いです。<br />WordPressに慣れ親しむために初めて制作したブログサイトです。</p>
              <div className="card-shadow p-4 d-inline-block" style={{ border: '8px solid #03092e' }} >
                <Link to="https://www.webhann.com/" target="_blank" rel="noopener">
                  <img src={webhannImg} alt="webhann.com" className="max-400" />
                  <p className="mt-2 mb-0 fs-4">うぇぶはん.com</p>
                </Link>
              </div>
            </li>
            <li className="py-3 list-unstyled">
              <h2 className="fw-bold mt-5 mb-4 pb-2 border-bottom border-dark">おきなわフリー写真　ゆいまーる</h2>
              <p className="mb-5">サイト制作に使えるフリーの沖縄写真が欲しいと思い、自分で撮った写真を集めてサイトを作りました。</p>
              <div className="card-shadow p-4 d-inline-block" style={{ border: '8px solid #03092e' }} >
                <Link to="https://okinawa-yuimaru.com/" target="_blank" rel="noopener">
                  <img src={yuimaruImg} alt="okinawa-yuimaru.com" className="max-400" />
                  <p className="mt-2 mb-0 fs-4">おきなわフリー写真　ゆいまーる</p>
                </Link>
              </div>
            </li>
          </ul>
        </article>
        <ContactBtn />
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    allMicrocmsBlog {
      edges {
        node {
          blog_thumbnail {
            url
            width
            height
          }
          blogId
          blog_title
          blog_category
          blog_desc
          publishedAt
          updatedAt
          sortIndex
        }
      }
    }
  }
`