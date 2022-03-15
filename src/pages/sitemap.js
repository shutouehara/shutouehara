import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { useLocation } from "@reach/router"
import { ReactGenieAnimations, Animation } from "react-genie-styled-components"
import { Reveal } from "react-genie"

export default function Home() {
  const url = useLocation()
  return (
    <>
      <Layout>
        <Seo title="サイトマップ" description="shutoueharaのサイトマップページです。" siteType="article" pageUrl={url.pathname} />
        <ReactGenieAnimations />
        <div className="article-container pt-4 pb-5 bg-white px-2 px-md-5 mx-3 mx-md-auto">
          <article>
            <div className="pt-3 pt-md-5 lh-lg article-inner min-vh-100">
              <h1 className="px-3">サイトマップ</h1>
              <ul className="ps-5 py-4 mb-0">
                <Reveal animation={Animation.FadeInUp} >
                  <li className="mb-4 pb-4">
                    <Link to="/service/">
                      <button className="sitemap-btn h2 d-block w-100 text-start border-0">サービス</button>
                    </Link>
                    <p class="ps-2">提供できるサービス一覧</p>
                  </li>
                </Reveal>
                <Reveal animation={Animation.FadeInUp} delay="100" >
                  <li className="mb-4 pb-4">
                    <Link to="/portfolio/">
                      <button className="sitemap-btn h2 d-block w-100 text-start border-0">制作例</button>
                    </Link>
                    <p class="ps-2">これまでの実績や、試しに制作したもの</p>
                  </li>
                </Reveal>
                <Reveal animation={Animation.FadeInUp} delay="200" >
                  <li className="mb-4 pb-4">
                    <Link to="/profile/">
                      <button className="sitemap-btn h2 d-block w-100 text-start border-0">プロフィール</button>
                    </Link>
                    <p class="ps-2">僕のこれまでの経歴など</p>
                  </li>
                </Reveal>
                <Reveal animation={Animation.FadeInUp} delay="300" >
                  <li className="mb-4 pb-4">
                    <Link to="/blogs/">
                      <button className="sitemap-btn h2 d-block w-100 text-start border-0">ブログ</button>
                    </Link>
                    <p class="ps-2">日々学んだことや気づいたことなど、記載しています</p>
                  </li>
                </Reveal>
                <Reveal animation={Animation.FadeInUp} delay="400" >
                  <li className="mb-4 pb-4">
                    <Link to="/privacy/">
                      <button className="sitemap-btn h2 d-block w-100 text-start border-0">プライバシーポリシー</button>
                    </Link>
                    <p class="ps-2">ご入力いただいた個人情報の取扱いについて</p>
                  </li>
                </Reveal>
                <Reveal animation={Animation.FadeInUp} delay="500" >
                  <li className="mb-4 pb-4">
                    <Link to="/disclaimer/">
                      <button className="sitemap-btn h2 d-block w-100 text-start border-0">免責事項</button>
                    </Link>
                    <p class="ps-2">このサイトに掲載している情報についておことわり</p>
                  </li>
                </Reveal>
                <Reveal animation={Animation.FadeInUp} delay="600" >
                  <li className="mb-4 pb-4">
                    <Link to="/contact/">
                      <button className="sitemap-btn h2 d-block w-100 text-start border-0">お問い合わせ</button>
                    </Link>
                    <p class="ps-2">ウェブサイトに関するご相談はお気軽にどうぞ！</p>
                  </li>
                </Reveal>
              </ul>
            </div>
          </article>
        </div>
      </Layout>
    </>
  )
}