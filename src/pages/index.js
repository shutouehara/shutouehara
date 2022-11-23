import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import BtnOriginal from "../components/btn-original"
import { useLocation } from "@reach/router"
import { ReactGenieAnimations, Animation } from "react-genie-styled-components"
import { Reveal } from "react-genie"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import ContactBtn from "../components/contact-btn"
import Twitter from "../components/twitter"
import "../styles/top.css"

import { graphql } from "gatsby"

import topHeroImg from "../../static/top_heroimg_1200.webp"

export default function Home({data}) {
  const heroText = 'あなたのウェブ\n任せてください'
  const siteTitle = data.site.siteMetadata.title
  const siteDescription = data.site.siteMetadata.description
  const url = useLocation()
  return (
    <>
      <Layout>
        <Seo title={siteTitle} description={siteDescription} siteType="website" pageUrl={url.pathname} imgUrl={topHeroImg} />
        <ReactGenieAnimations />
        <Hero heroText={heroText} heroImgSrc={topHeroImg} heroImgAlt="shutoueharaポートフォリオサイト" heroImgWidth="2400" heroImgHeight="1600" />
        <div className="pt-5 px-4 px-sm-5 m-auto" style={{maxWidth:'1400px'}}>
          <div className="mt-5 pb-5">
            <Reveal animation={Animation.FadeInUp} delay="400" >
              <div className="d-flex flex-wrap align-items-sm-center gap-3 gap-sm-5 p-sm-5">
                <div className="menu-img position-relative">
                  <StaticImage
                    src="../../static/service_heroimg_1200.webp"
                    width={1200}
                    alt="shutoueharaサービス一覧はこちらからご覧ください"
                    placeholder="blurred"
                    quality={80}
                    loading="lazy"
                  />
                </div>
                <div className="menu-text">
                  <div className="menu-title mb-sm-3"><h2>サービス一覧</h2></div>
                  <div className="menu-desc"><p style={{maxWidth:'560px'}}>サイト制作 運用 ウェブマーケティングなど 僕がお手伝いできることをこちらに掲載します。</p></div>
                </div>
              </div>
            </Reveal>
            <BtnOriginal btnText="サービス一覧へ" linkTo="service" btnClass="text-center mt-3 py-2 p-sm-5" />
          </div>
          <div className="mt-5 pb-5">
            <Reveal animation={Animation.FadeInUp} delay="400" >
              <div className="d-flex flex-wrap align-items-sm-center gap-3 gap-sm-5 p-sm-5 flex-sm-row-reverse">
                <div className="menu-img position-relative">
                  <StaticImage
                    src="../../static/portfolio_heroimg_1200.webp"
                    width={1200}
                    alt="上原崇利(しゅうと)の制作実績＆ポートフォリオはこちらからご覧ください"
                    placeholder="blurred"
                    quality={80}
                    loading="lazy"
                  />
                </div>
                <div className="menu-text">
                  <div className="menu-title mb-sm-3"><h2>制作例＆ポートフォリオ</h2></div>
                  <div className="menu-desc"><p>制作したサイトやページなど、解説もあわせて掲載しています。</p></div>
                </div>
              </div>
            </Reveal>
            <BtnOriginal btnText="ポートフォリオページへ" linkTo="portfolio" btnClass="text-center mt-3 py-2 p-sm-5" />
          </div>
          <div className="mt-5 pb-5">
            <Reveal animation={Animation.FadeInUp} delay="400" >
              <div className="d-flex flex-wrap align-items-sm-center gap-3 gap-sm-5 p-sm-5">
                <div className="menu-img position-relative">
                  <StaticImage
                    src="../../static/profile_heroimg_1200.webp"
                    width={1200}
                    alt="上原崇利(しゅうと)のプロフィールはこちらからご覧ください"
                    placeholder="blurred"
                    quality={80}
                    loading="lazy"
                  />
                </div>
                <div className="menu-text">
                  <div className="menu-title mb-sm-3"><h2>プロフィール</h2></div>
                  <div className="menu-desc"><p>上原崇利の経歴など。</p></div>
                </div>
              </div>
            </Reveal>
            <BtnOriginal btnText="プロフィールページへ" linkTo="profile" btnClass="text-center mt-3 py-2 p-sm-5" />
          </div>
          <div className="mt-5 pb-5">
            <Reveal animation={Animation.FadeInUp} delay="400" >
              <div className="d-flex flex-wrap align-items-sm-center gap-3 gap-sm-5 p-sm-5 flex-sm-row-reverse">
                <div className="menu-img position-relative">
                  <StaticImage
                    src="../../static/blog_heroimg_1200.webp"
                    width={1200}
                    alt="上原崇利(しゅうと)のブログ一覧はこちらからご覧ください"
                    placeholder="blurred"
                    quality={80}
                    loading="lazy"
                  />
                </div>
                <div className="menu-text">
                  <div className="menu-title mb-sm-3"><h2>ブログ</h2></div>
                  <div className="menu-desc"><p>技術ブログを中心に日々のアウトプットを載せています。</p></div>
                </div>
              </div>
            </Reveal>
            <BtnOriginal btnText="ブログ一覧へ" linkTo="blogs" btnClass="text-center mt-3 py-2 p-sm-5" />
          </div>
        </div>
        <Reveal animation={Animation.SlideInLeft} delay="400" >
          <ContactBtn />
          <div className="px-4">
            <Twitter />
          </div>
        </Reveal>
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
