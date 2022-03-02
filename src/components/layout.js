import React from "react"
import "../styles/layout.css"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }) => {
    return (
      <>
        <Header />
        <main className="pt-5">
          {children}
        </main>
        <Footer />
      </>
    )
}

export default Layout