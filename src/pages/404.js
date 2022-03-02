import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import BtnOriginal from "../components/btn-original"

export default function NotFound() {
    return (
        <Layout>
            <Seo title="404 Not Found" description="ページが見つかりません" />
            <div className="d-flex flex-wrap justify-content-center align-content-center min-vh-100 text-center">
                <h1 className="d-block min-vw-100">404 Not Found</h1>
                <p className="min-vw-100">入力されたURLのページは存在しません。</p>
                <BtnOriginal btnText="トップページへ" linkTo="/" btnClass="mt-3 mb-5 py-2 d-block min-vw-100" />
            </div>
        </Layout>
    )
}