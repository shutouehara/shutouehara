import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import BtnOriginal from "../components/btn-original"
import { useLocation } from "@reach/router"
import Seo from "../components/seo"
import ContactBtn from "../components/contact-btn"
import "../styles/top.css"

import { graphql } from "gatsby"

import topHeroImg from "../../static/top_heroimg_2400.webp"
import serviceImg from "../../static/sevice_heroimg_2400.webp"
import portfolioImg from "../../static/portfolio_heroimg_2400.webp"
import profileImg from "../../static/profile_heroimg_2400.webp"
import blogImg from "../../static/blog_heroimg_2400.webp"

export default function Home({data}) {
  const heroText = 'あなたのWeb\n任せてください'
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const url = useLocation()
  return (
    <>
      <Layout>
        <Seo title={siteTitle} description={siteDescription} siteType="website" pageUrl={url.pathname} imgUrl={topHeroImg} />
        <Hero heroText={heroText} heroImgSrc={topHeroImg} heroImgAlt="shutoueharaポートフォリオサイト" heroImgWidth="2400" heroImgHeight="1600" />
        <div className="pt-5 px-4 px-sm-5">
          <div className="mt-5 pb-5">
            <div className="d-flex flex-wrap align-items-sm-center gap-3 gap-sm-5 p-sm-5">
              <div className="menu-img position-relative">
                <img src={serviceImg} alt="shutoueharaサービス一覧はこちらからご覧ください" width="2400" height="1600" />
              </div>
              <div className="menu-text">
                <div className="menu-title mb-sm-3"><h2>サービス一覧</h2></div>
                <div className="menu-desc"><p>サイト制作 運用 ウェブマーケティングなど 僕がお手伝いできることをこちらに掲載します。</p></div>
              </div>
            </div>
            <BtnOriginal btnText="サービス一覧へ" linkTo="service" btnClass="text-end mt-3 py-2 p-sm-5" />
          </div>
          <div className="mt-5 pb-5">
            <div className="d-flex flex-wrap align-items-sm-center gap-3 gap-sm-5 p-sm-5 flex-sm-row-reverse">
              <div className="menu-img position-relative">
                <img src={portfolioImg} alt="shutouehara制作実績＆ポートフォリオはこちらからご覧ください" width="2400" height="1600" />
              </div>
              <div className="menu-text">
                <div className="menu-title mb-sm-3"><h2>制作例＆ポートフォリオ</h2></div>
                <div className="menu-desc"><p>制作したサイトやページなど、解説もあわせて掲載します。</p></div>
              </div>
            </div>
            <BtnOriginal btnText="ポートフォリオページへ" linkTo="portfolio" btnClass="text-end mt-3 py-2 p-sm-5" />
          </div>
          <div className="mt-5 pb-5">
            <div className="d-flex flex-wrap align-items-sm-center gap-3 gap-sm-5 p-sm-5">
              <div className="menu-img position-relative">
                <img src={profileImg} alt="shutoueharaプロフィールはこちらからご覧ください" width="2400" height="1600" />
              </div>
              <div className="menu-text">
                <div className="menu-title mb-sm-3"><h2>プロフィール</h2></div>
                <div className="menu-desc"><p>経歴など</p></div>
              </div>
            </div>
            <BtnOriginal btnText="プロフィールページへ" linkTo="profile" btnClass="text-end mt-3 py-2 p-sm-5" />
          </div>
          <div className="mt-5 pb-5">
            <div className="d-flex flex-wrap align-items-sm-center gap-3 gap-sm-5 p-sm-5 flex-sm-row-reverse">
              <div className="menu-img position-relative">
                <img src={blogImg} alt="shutoueharaブログ一覧はこちらからご覧ください" width="2400" height="1600" />
              </div>
              <div className="menu-text">
                <div className="menu-title mb-sm-3"><h2>ブログ</h2></div>
                <div className="menu-desc"><p>技術ブログを中心に日々のアウトプットを載せます。</p></div>
              </div>
            </div>
            <BtnOriginal btnText="ブログ一覧へ" linkTo="blogs" btnClass="text-end mt-3 py-2 p-sm-5" />
          </div>
        </div>
        <ContactBtn />
      </Layout>
    </>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
  `
