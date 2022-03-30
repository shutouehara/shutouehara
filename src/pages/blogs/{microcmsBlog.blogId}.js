import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout"
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import Seo from "../../components/seo"
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import BtnOriginal from "../../components/btn-original"
import ContactBtn from "../../components/contact-btn"
import { useLocation } from "@reach/router"

dayjs.extend(utc)
dayjs.extend(timezone)

const BlogPage = ({ pageContext, data }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const date = dayjs.utc(data.microcmsBlog.updatedAt).tz('Asia/Tokyo').format('YYYY/MM/DD')
  const url = useLocation()
  return (
    <Layout>
      <div className="article-container pt-5 bg-white px-3 px-sm-4 mx-3 mx-md-auto">
        <Seo title={data.microcmsBlog.blog_title} description={data.microcmsBlog.blog_desc} siteType="article" pageUrl={url.pathname} imgUrl={data.microcmsBlog.blog_thumbnail.url} />
        <Breadcrumb
        //crumbsはpageContextからとったものを渡すだけ
        crumbs={crumbs} crumbSeparator=" > "
        crumbLabel={data.microcmsBlog.blog_title}
        />
        <article className="mx-sm-0 mb-5">
          <h1 className="mb-2">{data.microcmsBlog.blog_title}</h1>
          <time
            datetime={data.microcmsBlog.updatedAt}
            itemProp="modified"
            className="d-block"
          >
            {date}更新
          </time>
          <dl className="mb-5">
            <dt className="mb-5 me-3 d-inline fw-normal">カテゴリ</dt>
            <dd className="d-inline">{data.microcmsBlog.blog_category}</dd>
          </dl>
          <p className="my-5"><img src={data.microcmsBlog.blog_thumbnail.url}  alt={`${data.microcmsBlog.blog_title}のサムネイル`} style={{ border: '1px solid' }} /></p>
          <div
            dangerouslySetInnerHTML={{
              __html: `${data.microcmsBlog.blog_body}`,
            }}
            className="pt-3 pt-md-5 lh-lg article-inner"
          />
        </article>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6716641662780805"
     crossorigin="anonymous"></script>
        <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-6716641662780805"
            data-ad-slot="5179379727"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        <script>
            (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        <ContactBtn />
      </div>
      <div className="my-5 text-center">
        <BtnOriginal btnText="ブログ一覧へ" linkTo="/blogs/" btnClass="mt-3 mb-5 py-2" />
        <BtnOriginal btnText="トップページへ" linkTo="/" btnClass="mt-3 mb-5 py-2" />
      </div>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  query($id: String!) {
    microcmsBlog(id: { eq: $id }) {
      blogId
      blog_title
      blog_body
      blog_category
      blog_thumbnail {
        url
      }
      updatedAt
    }
  }
`