import React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import BtnOriginal from "../../components/btn-original"

export default function Home () {
  return (
    <Layout>
      <Seo title="ありがとうございました。" />
      <div className="thanks-container article-container py-5 bg-white px-3 px-sm-4 mx-3 mx-md-auto text-md-center">
        <h1 className="fw-bold">ありがとうございます！</h1>
        <p>お問合せいただいた内容について、内容を確認し対応させていただきます。<br />恐れ入りますが、いましばらくお待ちください。</p>
        <BtnOriginal btnText="トップページへ" linkTo="/" btnClass="mt-3 mt-md-5 mb-5 py-2" />
      </div>
    </Layout>
  )
}