import React from "react"
import BtnOriginal from "./btn-original"
import letter from "../../static/letter_icon.svg"

export default function ContactBtn () {
  return (
    <div className="text-center my-5 py-5">
      <div className="d-flex justify-content-center align-items-center">
        <span>サイトの制作・改修などを<br />気になってることを質問</span>&nbsp;
        <img src={letter} alt="問い合わせボタンエリア" width="40" height="32" className="letter" />
      </div>
      <BtnOriginal btnText="お問い合わせはこちら" linkTo="/contact/" btnClass="mt-3 mb-5 py-2" />
    </div>
  )
}