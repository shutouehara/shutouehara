import React from "react"
import { useLocation } from "@reach/router"
import "../styles/hero.css"

const Hero = ({ heroText, heroImgSrc, heroImgAlt, heroImgWidth, heroImgHeight }) => {
  const location = useLocation()
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  function HeroTextArea () {
    if (isRootPath) {
      return <p className="text-bg position-absolute fw-bold ps-2 ps-sm-5">{heroText}</p>
    }else{
      return <h1 className="text-bg position-absolute fw-bold py-2 ps-2 ps-sm-5">{heroText}</h1>
    }
  }

  return (
    <div className="position-relative">
      <div className="hero-text position-absolute w-100 h-100">
        <HeroTextArea />
      </div>
      <div className="hero-img"><img src={heroImgSrc} alt={heroImgAlt} width={heroImgWidth} height={heroImgHeight} loading="eager" style={{ width:'100%', height:'auto' }} /></div>
    </div>
  )
}

export default Hero