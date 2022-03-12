import React from "react"
import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from "../components/seo"
import ContactBtn from "../components/contact-btn"
import { useLocation } from "@reach/router"

import topHeroImg from "../../static/service_heroimg_1200.webp"
import { Accordion } from "react-bootstrap"
import BtnOriginal from "../components/btn-original"

export default function Home() {
  const heroText = 'サービス一覧'
  const url = useLocation()
  const services = [
    {
      "title": "サイト制作 / リニューアル",
      "title2": "手軽に安く、使いやすいサイトを",
      "content": "CMSサイトは、自社でサイト内ページを作成、更新、修正、画像追加などができます。\n「WordPress」であれば、あらゆるカスタマイズが可能となります。ページカテゴリ毎に同じ内容を表示させたり、管理可能なページをユーザー毎に切り替えることもできます。WordPressの直接費用はサーバー代のみ（ドメイン料金含む）。安価で安定した自社サイトの運用を開始することができます。\nまた、近年流行している「JAMStackサイト」を活用すると、速いサイトを早く立ち上げることができます。データベースへのアクセスを省く機能で、閲覧者がページ遷移のために待つ時間が解消されます。こちらもCMS作成が可能です。\nCMS以外にも、HTMLサイト制作や、既存サイトのレスポンシブ化（スマホの縦長画面対応）も可能です。\n\n料金　¥10,000〜\n制作期間　2週間〜",
      "linkTo": "/portfolio/#website"
    },
    {
      "title": "ウェブマーケティング",
      "title2": "SNS対策やSEO対策など",
      "content": "SNSからの集客に力を入れたい、もっとシェアされるような仕組みを構築したい。\nそこで必要になってくるSNS表示設定やデザインなどの作業をいたします。\nまた、サイト全体のSEO対策（検索エンジンで上位に表示させるための設定）も承ります。\n\n料金　¥5,000〜\n作業期間　2時間〜",
      "linkTo": "/portfolio/#marketing"
    },
    {
      "title": "ランディングページ制作",
      "title2": "商品販促・キャンペーン・採用募集に特化した1ページ",
      "content": "新商品を発売するときや季節のキャンペーンを実施するとき、採用募集を告知する際にランディングページが必要になると思います。\nランディングページとは、検索一覧や広告から直接流入を見込むページです。サイトに入って1ページ目で、ターゲットの興味を惹き、理解を促し、行動に移してもらうことを目的とします。\nそのために、ターゲットと、ターゲットに伝えたいことを整理し、より効果を高めることを目的としたランディングページを制作します。\n\n料金　¥5,000〜\n制作期間　1日〜",
      "linkTo": "/portfolio/#landingpage"
    },
    {
      "title": "サイトカスタマイズ・運用",
      "title2": "ウェブサイトの機能追加や、ウェブページの新規立ち上げなど",
      "content": "WordPressの管理画面をもっと使いやすくする、ユーザー毎に更新できるページを区分するなど、管理面の課題をWordPressをカスタマイズすることで解決します。\n他にも、サイト構成の見直しや、新たな投稿カテゴリを作成するなど、サーバー上のPHPファイルを更新する作業を承ります。\nWordPressはもちろん、HTMLサイトなどの静的サイトの改修などもご相談ください。\n\n料金　¥5,000〜\n作業期間　2時間〜",
      "linkTo": "/portfolio/#customize"
    },
    //{
      //"title": "画像編集 / 映像編集",
      //"title2": "",
      //"content": ""
    //},
  ]

  const textContent = JSON.stringify(services, null, "\t")
  console.log(textContent)

  return (
    <Layout>
      <Seo title="サービス" description="サイト制作 運用など 僕がお手伝いできることをこちらに掲載します。" siteType="article" pageUrl={url.pathname} imgUrl={topHeroImg} />
      <Hero heroText={heroText} heroImgSrc={topHeroImg} heroImgAlt="shutoueharaサービス一覧" heroImgWidth="1200" heroImgHeight="800" />
      <article>
        <ul className="p-3 p-sm-5 lh-lg">
          {services.map((service, i) =>
            <Accordion defaultActiveKey={['0']} alwaysOpen as="li" className="mt-5">
              <h2>{service.title}</h2>
              <Accordion.Item eventKey={i}>
                <Accordion.Header as="p">{service.title2}</Accordion.Header>
                <Accordion.Body>
                  {service.content}
                  <BtnOriginal
                    linkTo={service.linkTo}
                    btnText="制作例をみる"
                    btnClass="text-end my-4 bg-white"
                  />
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          )}
        </ul>
      </article>
      <ContactBtn />
    </Layout>
  )
}