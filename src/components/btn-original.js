import React from "react"
import { Link } from "gatsby"
import "../styles/btn.css"

const BtnOriginal = ({ btnText, linkTo, btnClass }) => {
  return (
    <div className={btnClass}>
      <Link to={linkTo}>
        <button className="btn-o d-inline-block justify-content-between align-items-center position-relative my-0 ps-3 ps-sm-5 py-2 py-sm-3 fW-bold">{btnText}</button>
      </Link>
    </div>
  )
}

export default BtnOriginal