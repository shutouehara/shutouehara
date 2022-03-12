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
              <p className="h2 mb-0">上原 崇利<span>(犬派)</span></p>
              <p className="h4">shuto uehara</p>
              <p className="mt-4">{age()}歳（戌年）</p>
              <p className="mt-4 mb-0">沖縄県糸満市 出身</p>
              <p className="mt-0">浦添市 在住</p>
            </div>
          </div>
        </div>
        <div className="profile-right mt-5 mt-md-0 col row row-cols-2 lh-lg">
          <div className="col-3 text-end">職種：</div>
          <div className="col-9 text-start ps-0">フロントエンドエンジニア</div>
          <div className="col-3 text-end">特技：</div>
          <div className="col-9 text-start ps-0">校正</div>
          <div className="col-3 text-end">趣味：</div>
          <div className="col-9 text-start ps-0">未経験の技術を試してみること</div>

          <div className="col-4 col-lg-3 text-end mt-5">できること：</div>
          <div className="col-8 col-lg-9 text-start ps-0 mt-5">ウェブサイト制作（WordPress・Gatsby）</div>
          <div className="col-4 col-lg-3 text-end">使える言語：</div>
          <div className="col-8 col-lg-9 text-start ps-0">HTML/CSS、JavaScript（jQuery・React）、PHP（WordPress）</div>
          <div className="col-4 col-lg-3 text-end">興味分野：</div>
          <div className="col-8 col-lg-9 text-start ps-0">セキュリティ、アプリ開発、SEOライティング</div>

          <div className="col-3 text-end mt-5">学歴：</div>
          <div className="col-9 text-start ps-0 mt-5">琉球大学 産業経営学科 卒業</div>
          <div className="col-3 text-end lh-lg">職歴：</div>
          <div className="col-9 text-start ps-0 lh-lg">2019年より大阪の制作会社にて広告広報制作のアシスタントディレクターとして勤める。販促物やノベルティ制作、取扱説明書などの制作に携わる。そこでウェブマーケティングを含む案件に関わったことから、ウェブ業界に興味を持つ。<br />
          新型コロナの影響もあり地元にUターン転職。2020年、県内のメディア企業グループ会社に入社。<br />
          まずは制作できるようになるべきだと考え、フロントの制作技術やSEOなどを業務を通して学ぶ。</div>
        </div>
      </article>
      <ContactBtn />
    </Layout>
  )
}