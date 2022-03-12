import React, { useState } from "react"
import { graphql } from "gatsby"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from "../components/seo"
import { Carousel } from "react-bootstrap"
import CardOriginal from "../components/card"
import ContactBtn from "../components/contact-btn"

import topHeroImg from "../../static/portfolio_heroimg_1200.webp"
import carouselIllust1 from "../../static/illust-carousel1.svg"
import carouselIllust2 from "../../static/illust-carousel2.svg"
import carouselIllust3 from "../../static/illust-carousel3.svg"
import carouselIllust4 from "../../static/illust-carousel4.svg"

export default function Home({ data }) {
  const heroText = '制作例'
  const [index, setIndex] = useState(0);
  const url = useLocation()

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const carouselObjects = [
    {
      "img": carouselIllust1,
      "title": "お店のウェブサイトが必要…",
      "description": "料理や飲み物のメニューを掲載したい。",
      "link": "#website"
    },
    {
      "img": carouselIllust2,
      "title": "サイトの何を改善するべきか分からない…",
      "description": "アクセス解析をして売上を伸ばしたい。",
      "link": "#marketing"
    },
    {
      "img": carouselIllust3,
      "title": "特別なページを公開したい…",
      "description": "イベントをウェブ上で告知・案内したい。",
      "link": "#landingpage"
    },
    {
      "img": carouselIllust4,
      "title": "サイトが使いづらい…",
      "description": "もっと更新・修正しやすい管理画面にしたい。",
      "link": "#customize"
    },
  ]
  const websiteFilter = data.allMicrocmsPortfolio.edges.filter(edge=>edge.node.portfolio_category == 'website')
  const marketingFilter = data.allMicrocmsPortfolio.edges.filter(edge=>edge.node.portfolio_category == 'marketing')
  const landingpageFilter = data.allMicrocmsPortfolio.edges.filter(edge=>edge.node.portfolio_category == 'landingpage')
  const customizeWpFilter = data.allMicrocmsPortfolio.edges.filter(edge=>edge.node.portfolio_category == 'customize_wp')
  return (
    <Layout>
      <Hero heroText={heroText} heroImgSrc={topHeroImg} heroImgAlt="shutoueharaポートフォリオ" heroImgWidth="1200" heroImgHeight="800" />
      <Seo title="制作例＆ポートフォリオ" description="制作したサイトやページなど、解説もあわせて掲載します。" siteType="article" pageUrl={url.pathname} imgUrl={topHeroImg} />
      <div className="p-3 p-sm-5">
        <h2 className="mt-5 mb-4 pb-2 border-bottom border-dark text-center h5">このようなお困り、ありませんか？</h2>
        <Carousel activeIndex={index} onSelect={handleSelect} className="my-5">
        {carouselObjects.map((carouselObject, i) =>
          <Carousel.Item as="a" href={carouselObject.link}>
            <img
              className="d-block carousel-img"
              src={carouselObject.img}
              alt={(`${carouselObject.title}の画像`)}
            />
            <Carousel.Caption>
              <h3>{carouselObject.title}</h3>
              <p>{carouselObject.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        )}
        </Carousel>
        <ul className="ps-0">
          <div className="py-4" id="website"></div>
          <li className="mb-3 list-unstyled">
            <h2 className="mt-5 mb-4 pb-2 border-bottom border-dark">サイト制作</h2>
            <p className="mb-5">店舗サイトやブログ、マニュアルのウェブページ保管など。WordPressやJAMStackサイトで制作しています。</p>
            <ul className="ul-list gap">
              {websiteFilter.map(({node}) =>
                <li key={node.portfolioId} className="shadow">
                  <CardOriginal
                    linkParent="portfolio"
                    linkTo={node.portfolioId}
                    imgSrc={node.portfolio_thumbnail.url}
                    title={node.portfolio_title}
                    description={node.portfolio_desc}
                    moreText="詳しくみる→"
                  />
                </li>
              )}
            </ul>
          </li>
          <div className="py-3" id="marketing"></div>
          <li className="mb-3 list-unstyled">
            <h2 className="mt-5 mb-4 pb-2 border-bottom border-dark">ウェブマーケティング</h2>
            <p className="mb-5">サイトアクセス計測ができるGoogle Analyticsの導入や、検索エンジン上位表示対策（SEO）など。マーケティング業務のウェブ施策をサポートします。</p>
            <ul className="ul-list gap">
              {marketingFilter.map(({node}) =>
                <li key={node.portfolioId} className="shadow">
                  <CardOriginal
                    linkParent="portfolio"
                    linkTo={node.portfolioId}
                    imgSrc={node.portfolio_thumbnail.url}
                    title={node.portfolio_title}
                    description={node.portfolio_desc}
                    moreText="詳しくみる→" />
                </li>
              )}
            </ul>
          </li>
          <div className="py-3" id="landingpage"></div>
          <li className="mb-3 list-unstyled">
            <h2 className="mt-5 mb-4 pb-2 border-bottom border-dark">LP制作</h2>
            <p className="mb-5">サイト内にテーマに特化した特別な1ページを制作してます。新商品発売時やキャンペーン展開時などに必要なページを制作します。</p>
            <ul className="ul-list gap">
              {landingpageFilter.map(({node}) =>
                <li key={node.portfolioId} className="shadow">
                  <CardOriginal
                    linkParent="portfolio"
                    linkTo={node.portfolioId}
                    imgSrc={node.portfolio_thumbnail.url}
                    title={node.portfolio_title}
                    description={node.portfolio_desc}
                    moreText="詳しくみる→"
                  />
                </li>
              )}
            </ul>
          </li>
          <div className="py-3" id="customize"></div>
          <li className="mb-3 list-unstyled">
            <h2 className="mt-5 mb-4 pb-2 border-bottom border-dark">既存WordPressカスタマイズ</h2>
            <p className="mb-5">サイト内全ページに共通のメニューを作成、加えてメニュー内のテキストやリンク先URLを簡単に管理画面から更新できるようにするなど。管理・更新しやすい管理画面の改修を行っています。</p>
            <ul className="ul-list gap">
              {customizeWpFilter.map(({node}) =>
                <li key={node.portfolioId} className="shadow">
                  <CardOriginal
                    linkParent="portfolio"
                    linkTo={node.portfolioId}
                    imgSrc={node.portfolio_thumbnail.url}
                    title={node.portfolio_title}
                    description={node.portfolio_desc}
                    moreText="詳しくみる→"
                  />
                </li>
              )}
            </ul>
          </li>
          <div className="py-3" id="editpicnmovie"></div>
          <li className="mb-3 list-unstyled display-none">
            <h2 className="mt-5 mb-4 pb-2 border-bottom border-dark">画像編集/動画編集</h2>
            <ul className="ul-list gap">
              <li className="shadow">
                <CardOriginal linkTo="/" imgSrc={topHeroImg} title="title" description="This is a description of the card." moreText="詳しくみる→" />
              </li>
              <li className="shadow">
                <CardOriginal linkTo="/" imgSrc={topHeroImg} title="title" description="This is a description of the card." moreText="詳しくみる→" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <ContactBtn />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMicrocmsPortfolio {
      edges {
        node {
          portfolio_thumbnail {
            url
            width
            height
          }
          portfolioId
          portfolio_title
          portfolio_category
          portfolio_desc
          publishedAt
          updatedAt
          sortIndex
        }
      }
    }
  }
`