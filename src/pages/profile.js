import React from "react"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactBtn from "../components/contact-btn"

import profileImg from "../../static/profile_heroimg_1200.webp"

export default function Home() {
  const age = () => {
    let month = new Date().getMonth()
    if (month <= 4) {
      return new Date().getFullYear()-1995
    }else{
      return new Date().getFullYear()-1994
    }
  }
  const url = useLocation()
  return (
    <Layout>
      <Seo title="プロフィール" description="経歴など。" siteType="article" pageUrl={url.pathname} imgUrl={profileImg} />
      <h1 className="text-center mt-5 mb-lg-5 pt-lg-4">プロフィール</h1>
      <article className="row row-cols-1 row-cols-sm-2 mt-3 mt-lg-4 pb-5 mx-0">
        <div className="profile-left col px-0 text-center">
          <div className="position-sticky profile-left-inner">
            <img src={profileImg} alt="shutoueharaプロフィールはこちらからご覧ください" width="1200" height="800" />
            <div className="mt-4 pt-4">
              <p className="h2 mb-0">上原 崇利</p>
              <p className="h4"><span>shuto uehara</span></p>
              <p className="mt-4">{age()}歳</p>
              <p className="mt-4 mb-0">沖縄県糸満市 出身</p>
              <p className="mt-0">浦添市 在住</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <dl className="profile-right text-start mx-auto mt-5 mt-md-0 px-4 px-md-5">
            <dt className="fw-normal">職種</dt>
            <dd className="mb-4">フロントエンドエンジニア</dd>
            <dt className="fw-normal">特技</dt>
            <dd className="mb-4">校正</dd>
            <dt className="fw-normal">趣味</dt>
            <dd className="mb-5">未経験の技術を試してみること</dd>

            <dt className="fw-normal pt-4">できること</dt>
            <dd className="mb-4">ウェブサイト制作（WordPress・Gatsby）</dd>
            <dt className="fw-normal">使える言語</dt>
            <dd className="mb-4">HTML/CSS、JavaScript（jQuery・React）、PHP（WordPress）</dd>
            <dt className="fw-normal">興味分野</dt>
            <dd className="mb-5">セキュリティ、アプリ開発、SEOライティング</dd>

            <dt className="fw-normal pt-4">学歴</dt>
            <dd className="mb-4">琉球大学 産業経営学科 卒業</dd>
            <dt className="fw-normal">職歴</dt>
            <dd className="mb-4 lh-lg">2019年より大阪の制作会社にて広告広報制作のアシスタントディレクターとして勤めました。販促物やノベルティ制作、取扱説明書などの制作に携わりました。そこでウェブマーケティングを含む案件に関わったことから、ウェブ業界に興味を持ちました。<br />
            新型コロナの影響もあり地元にUターン転職することに。2020年、県内のメディア企業グループ会社に入社。<br />
            まずはウェブサイトを制作できるようになるべきだと考え、フロントの制作技術やSEOなどを業務・独学を通して学んでいます。</dd>
          </dl>
        </div>
      </article>
      <div className="text-center">
        <a href="https://github.com/shutouehara" target="_blank" rel="noopener noreferrer">
          <p className="text-decoration-underline d-inline-block">github.com</p>
        </a>
      </div>
      <ContactBtn />
    </Layout>
  )
}