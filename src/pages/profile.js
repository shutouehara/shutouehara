import React from "react"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ContactBtn from "../components/contact-btn"

import profileImg from "../../static/profile_photo.webp"

export default function Home() {
  const age = () => {
    let month = new Date().getMonth()
    let date = new Date().getDate()
    console.log(date);
    if (month <= 5 && date < 30) {
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
              <p className="mt-0 pb-4">浦添市 在住</p>
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
            <dd className="mb-5">買い物（家事関連）、料理、ラジオ視聴、未経験の技術を試してみること</dd>

            <dt className="fw-normal pt-4">できること</dt>
            <dd className="mb-4">ウェブサイト制作（WordPress・Gatsby）</dd>
            <dt className="fw-normal">使える言語</dt>
            <dd className="mb-4">HTML/CSS、JavaScript（jQuery・React）、PHP</dd>
            <dt className="fw-normal">現在学習中</dt>
            <dd className="mb-4">TypeScript、Next.js、Laravel</dd>
            <dt className="fw-normal">興味分野</dt>
            <dd className="mb-5">情報セキュリティ、アプリ開発、SEOライティング</dd>

            <dt className="fw-normal pt-4">学歴</dt>
            <dd className="mb-4">琉球大学 観光産業科学部 産業経営学科　卒業</dd>
            <dt className="fw-normal">経歴</dt>
            <dd className="mb-4 lh-lg">
              <p>高校在学時にエイサーのアルバイトを経験し、観光業界の魅力と苦労を目の当たりに。<br />
              観光業界の付加価値向上を目指し、大学では観光産業と経営について学びました。また、DMCでインターン生となり、観光地の魅力掘り起こしと発信について知見を深めました。</p>
              <p>それまでの経験から、将来は沖縄のブランディングに貢献できるようになりたいと考え、卒業後は大阪の制作会社に就職。広告広報制作のアシスタントディレクターとして勤め、販促物やノベルティ制作、取扱説明書などの制作に携わりました。そこでウェブマーケティングを含む案件に関わったことから、ウェブ業界に興味を持ちました。</p>
              <p className="mb-0">ウェブに関わるスキルを得たいと考え、同時に新型コロナの影響もあり、転職を決意。ご縁を頂いて沖縄県内のメディアグループ会社に入社し、ホームページ更新の仕事をしています。<br />
              まずはウェブサイトを制作できるようになるべきだと考え、サイト制作技術やSEOなどを業務・独学を通して学んできました。</p>
            </dd>
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