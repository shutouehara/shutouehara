import React from "react"
import { Link } from "gatsby"
import { useLocation } from "react-router-dom"
import "../styles/footer.css"

export default function Footer() {
  const location = useLocation
  return (
      <footer className="pt-4 justify-content-between align-items-baseline">
        <div className="d-flex flex-wrap footer-menu m-auto mb-4 lh-ll justify-content-evenly" style={{maxWidth:'1200px'}}>
          <p className="footer-contents text-center mb-0"><Link to="/privacy/">プライバシーポリシー</Link></p>
          <p className="footer-contents text-center mb-0 ls-half"><Link to="/disclaimer/">免責事項</Link></p>
          <p className="footer-contents text-center mb-0"><Link to="/sitemap/">サイトマップ</Link></p>
          { location === '/' ? <p className="footer-contents text-center mb-0"><Link to="/">トップページ</Link></p> : <p className="footer-contents text-center mb-0"><Link to="/">トップページ</Link></p> }
        </div>
        <address className="text-center fs-6 pb-1 fst-normal">&copy; {new Date().getFullYear()}&nbsp;shutouehara.com</address>
      </footer>
  )
}