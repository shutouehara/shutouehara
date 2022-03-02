import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const pageTitle = "プライバシーポリシー"

export default function Home() {
  return (
    <Layout>
      <Seo title={pageTitle} description="当サイトにおける閲覧者の個人情報保護方針について記載しています。" siteType="article" />
      <div className="article-container pt-5 bg-white px-3 px-sm-4 mx-3 mx-md-auto">
        <article className="pb-5">
          <div className="mt-5 pb-5 lh-lg article-inner">
            <h1>{pageTitle}</h1>
            <p>本プライバシーポリシーは、shutouehara.com（以下、「当サイト」）の各種サービス（当サイトによる情報提供、各種お問合せの受付等）において、当サイトの閲覧者の個人情報もしくはそれに準ずる情報を取り扱う際に、当サイトが遵守する方針を示したものです。</p>
            <h2>問い合わせ情報について</h2>
            <p>当サイトではお問い合わせいただく際にお名前やメールアドレス等の個人情報を入力していただきます。<br />
              これらの個人情報は、返信の際に利用するものであり、それ以外の目的で利用することはございません。<br />
              なお、収集した個人情報は、法令に基づく場合を除き、本人の同意なく第三者へ開示することはありません。</p>
            <h2>Cookieについて</h2>
            <p>当サイトは閲覧者の当サイト閲覧時の利便性を高めるため、コンピュータにCookieを送信することがあります。<br />
              Cookie（クッキー）とは、ウェブサイトを利用したときに、ブラウザとサーバーとの間で送受信した利用履歴や入力内容などを、閲覧者のコンピュータにファイルとして保存しておく仕組みです。<br />
              閲覧者は、Cookieの送受信に関する設定をお使いのブラウザの設定メニューよりご確認、変更できます。</p>
            <h2>アクセス解析ツールについて</h2>
            <p>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。<br />
              このGoogleアナリティクスはアクセス情報の収集のためにCookieを使用しています。このアクセス情報は匿名で収集されており、個人を特定するものではありません。<br />
              Googleアナリティクスの利用規約に関して確認したい場合は、<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" rel="noopener noreferrer" target="_blank">こちら</a>をクリックしてください。</p>
            <h2>第三者配信の広告サービスについて</h2>
            <p>当サイトは、第三者配信の広告サービス「Google Adsense（グーグルアドセンス）」を利用しています。<br />
              Googleなどの第三者広告配信事業者は、閲覧者の興味に応じた広告を表示するために、Cookie（氏名、住所、メール アドレス、電話番号は含まれません）を使用することがあります。<br />
              当該第三者によって取得されたCookie情報等は、当該第三者のプライバシーポリシーに従って取り扱われます。<br />
              閲覧者は、当該第三者のウェブサイト内に設けられたオプトアウト（個人情報を第三者に提供することを停止すること）ページにアクセスして、当該第三者によるCookie情報等の広告配信への利用を停止することができます。<br />
              Googleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、<a href="https://support.google.com/adsense#topic=3373519" rel="noopener noreferrer" target="_blank">こちら</a>をクリックしてください。</p>
            <h2>プライバシーポリシーの変更について</h2>
            <p>当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本プライバシーポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。<br /><br />
              2022年3月1日　策定</p>
          </div>
        </article>
      </div>
    </Layout>
  )
}