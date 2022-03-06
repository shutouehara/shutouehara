import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useLocation } from "@reach/router"

export default function Home() {
  const url = useLocation()
  return (
    <>
      <Layout>
        <Seo title="サイトマップ" description="shutoueharaのサイトマップページです。" siteType="article" pageUrl={url.pathname} />
        <div className="article-container pt-5 bg-white px-2 px-md-5 mx-3 mx-md-auto">
          <article>
            <div className="pt-3 pt-md-5 lh-lg article-inner min-vh-100">
              <h1 className="px-3">サイトマップ</h1>
              <ul className="ps-5 py-4">
                <li className="mb-4">
                  <Link to="/service/">
                    <button className="sitemap-btn h2 d-block w-100 text-start border-0">サービス</button>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/portfolio/">
                    <button className="sitemap-btn h2 d-block w-100 text-start border-0">制作例</button>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/profile/">
                    <button className="sitemap-btn h2 d-block w-100 text-start border-0">プロフィール</button>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/blogs/">
                    <button className="sitemap-btn h2 d-block w-100 text-start border-0">ブログ</button>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/privacy/">
                    <button className="sitemap-btn h2 d-block w-100 text-start border-0">プライバシーポリシー</button>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="disclaimer">
                    <button className="sitemap-btn h2 d-block w-100 text-start border-0">免責事項</button>
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="contact">
                    <button className="sitemap-btn h2 d-block w-100 text-start border-0">お問い合わせ</button>
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