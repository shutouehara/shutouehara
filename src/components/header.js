import React from "react"
import { Link } from "gatsby"
//import { useLocation } from "@reach/router"
import { useLocation } from "react-router-dom"
import "../styles/header.css"
import { Navbar, Nav } from 'react-bootstrap'

const siteTitle = 'shutouehara'

const Header = () => {
  const location = useLocation
  return (
    <header className="px-3 px-md-5 position-fixed text-white justify-content-between align-items-baseline w-100 shadow">
      <Navbar expand="md" variant="dark">
          <Navbar.Brand href="/">{ location === '/' ? <h1 className="ls-half d-ib">{siteTitle}</h1> : <p className='fs-2 fw-bold mb-0 ls-half'>{siteTitle}</p> }</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <Navbar.Collapse id="navbarResponsive">
            <Nav as="ul" className="ml-auto gap">
              <Nav.Item as="li">
                <Link to="/service/" activeClassName="active">サービス</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/portfolio/" activeClassName="active">制作例</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/profile/" activeClassName="active">プロフィール</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/blogs/" activeClassName="active">ブログ</Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    </header>
  )
}

export default Header