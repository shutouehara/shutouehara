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

dayjs.extend(utc)
dayjs.extend(timezone)

const PortfolioPage = ({ pageContext, data }) => {
  const {
    breadcrumb: { crumbs },
  } = pageContext
  const date = dayjs.utc(data.microcmsPortfolio.updatedAt).tz('Asia/Tokyo').format('YYYY/MM/DD')
  return (
    <Layout>
      <div className="article-container pt-5 bg-white px-3 px-sm-4 mx-3 mx-md-auto">
        <Seo title={data.microcmsPortfolio.portfolio_title} description={data.microcmsPortfolio.portfolio_desc} siteType="article" />
        <Breadcrumb
        //crumbsはpageContextからとったものを渡すだけ
        crumbs={crumbs} crumbSeparator=" > "
        crumbLabel={data.microcmsPortfolio.portfolio_title}
        />
        <article>
          <h1 className="mb-2 fw-bold">{data.microcmsPortfolio.portfolio_title}</h1>
          <time
            datetime={data.microcmsPortfolio.updatedAt}
            itemProp="modified"
            className="d-block mb-4"
          >
            {date}更新
          </time>
          <p className="my-5"><img src={data.microcmsPortfolio.portfolio_thumbnail.url} alt={`${data.microcmsPortfolio.portfolio_title}のサムネイル`} style={{ border: '1px solid' }} /></p>
          <dl className="border-top border-bottom mb-5">
            <dt className="mt-2 d-block fw-normal">タグ</dt>
            <dd className="d-block">{data.microcmsPortfolio.portfolio_tag}</dd>
            <dt className="mt-2 d-block fw-normal border-top pt-2">制作期間</dt>
            <dd className="d-block border-bottom pb-2">{data.microcmsPortfolio.portfolio_period}</dd>
            <dt className="mt-2 d-block fw-normal">URL</dt>
            <a href={data.microcmsPortfolio.portfolio_url} rel="noopener noreferrer" target="_blank">
              <dd className="d-block">{data.microcmsPortfolio.portfolio_url}</dd>
            </a>
          </dl>
          <div
            dangerouslySetInnerHTML={{
              __html: `${data.microcmsPortfolio.portfolio_body}`,
            }}
            className="pt-3 pt-md-5 lh-lg article-inner"
          />
        </article>
        <ContactBtn />
      </div>
      <div className="my-5 text-center">
        <BtnOriginal btnText="制作例一覧へ" linkTo="/portfolio/" btnClass="mt-3 mb-5 py-2" />
        <BtnOriginal btnText="トップページへ" linkTo="/" btnClass="mt-3 mb-5 py-2" />
      </div>
    </Layout>
  )
}

export default PortfolioPage

export const query = graphql`
  query($id: String!) {
    microcmsPortfolio(id: { eq: $id }) {
      portfolioId
      portfolio_title
      portfolio_desc
      portfolio_body
      portfolio_thumbnail {
        url
      }
      portfolio_url
      portfolio_period
      portfolio_tag
      updatedAt
    }
  }
`