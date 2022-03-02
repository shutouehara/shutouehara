import React from "react"
import "../styles/hero.css"

const Hero = ({ heroText, heroImgSrc, heroImgAlt, heroImgWidth, heroImgHeight }) => {
  return (
    <div className="position-relative">
      <div className="hero-text position-absolute w-100 h-100">
        <div className="text-bg position-absolute fw-bold ps-2 ps-sm-5">{heroText}</div>
      </div>
      <div className="hero-img"><img src={heroImgSrc} alt={heroImgAlt} width={heroImgWidth} height={heroImgHeight} /></div>
    </div>
  )
}

export default Hero