import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function Home() {
  return (
    <>
      <Layout>
        <div className="article-container pt-5 bg-white px-2 px-md-5 mx-3 mx-md-auto">
          <article>
            <div className="pt-3 pt-md-5 lh-lg article-inner min-vh-100">
              <h1 className="px-3">サイトマップ</h1>
              <ul className="ps-5 py-4">
                <li className="mb-4">
                  <Link to="/service/">
                    <p className="h2 d-inline-block">サービス</p>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/portfolio/">
                    <p className="h2 d-inline-block">制作例</p>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/profile/">
                    <p className="h2 d-inline-block">プロフィール</p>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/blogs/">
                    <p className="h2 d-inline-block">ブログ</p>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/privacy/">
                    <p className="h2 d-inline-block">プライバシーポリシー</p>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="disclaimer">
                    <p className="h2 d-inline-block">免責事項</p>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="contact">
                    <p className="h2 d-inline-block">お問い合わせ</p>
                  </Link>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </Layout>
    </>
  )
}