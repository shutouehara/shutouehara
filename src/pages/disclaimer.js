import React from "react"
import { useLocation } from "@reach/router"
import Layout from "../components/layout"
import Seo from "../components/seo"

const pageTitle = "免責事項"

export default function Home() {
  const url = useLocation()
  return (
    <Layout>
      <Seo title={pageTitle} description="当サイトにおける免責事項について記載しています。" siteType="article" pageUrl={url.pathname} />
      <div className="article-container pt-5 bg-white px-3 px-sm-4 mx-3 mx-md-auto">
        <article className="pb-5">
          <div className="mt-5 pb-5 lh-lg article-inner">
            <h1>{pageTitle}</h1>
            <p>当サイトの管理者は利用者が当サイトの情報を用いて行う一切の行為について、何らの責任を負うものではありません。<br />
              下記の免責規定をご確認の上、ご了承ください。</p>
            <h2 className="pb-2">情報の正確性</h2>
            <p>当サイトにおける情報・資料の正確性については注意を払って確認し掲載しておりますが、内容の正確性については一切保証しません。当サイトに掲載された情報の利用やダウンロードに関して生じるあらゆる損害等については一切責任を負いません。</p>
            <h2 className="pb-2">情報の変更・削除</h2>
            <p>当サイトに掲載される情報は、予告なしに変更または削除される場合があります。</p>
            <h2 className="pb-2">外部リンク</h2>
            <p>当サイトに掲載されるリンクには外部サイトのアドレスが含まれることがあります。移動先サイトにおけるあらゆる損害等については一切責任を負いません。</p>
            <h2 className="pb-2">コンテンツの著作権や肖像権</h2>
            <p>当サイトに掲載される内容の著作権や肖像権等は、各権利所有者に帰属します。それぞれの無断転載、複製、販売等の一切を固く禁じております。なお、アイコンやイラスト素材等については入手元を以下に記します。</p>
            <dl className="mb-0 lh-sm">
              <dt className="mt-4">アイコンイラスト素材</dt>
              <dd><a href="https://icon-rainbow.com/" rel="noopener noreferrer" target="_blank">icon rainbow</a></dd>
              <dt className="mt-4">ピクトグラム素材</dt>
              <dd><a href="https://pictogram2.com/" rel="noopener noreferrer" target="_blank">human pictogram 2.0</a></dd>
              <dt className="mt-4">フリー写真</dt>
              <dd><a href="https://www.pakutaso.com/" rel="noopener noreferrer" target="_blank">ぱくたそ</a></dd>
              <dt className="mt-4">フリー写真</dt>
              <dd><a href="https://free-materials.com/" rel="noopener noreferrer" target="_blank">フリー素材ドットコム</a></dd>
              <dt className="mt-4">フリー写真</dt>
              <dd className="mb-0"><a href="https://okinawa-yuimaru.com/" rel="noopener noreferrer" target="_blank">おきなわフリー写真 ゆいまーる</a></dd>
            </dl>
          </div>
        </article>
      </div>
    </Layout>
  )
}