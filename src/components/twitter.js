import React from "react"
import BtnOriginal from "./btn-original"
import letter from "../../static/letter_icon.svg"

export default function Twitter () {
  return (
    <div className="text-center mb-5 pb-5">
      <div className="d-flex justify-content-center align-items-center mb-1">
        <span>Twitterやってます♪<br />DMもお気軽に😊</span>&nbsp;
        <img src={letter} alt="" width="40" height="32" className="letter" />
      </div>
      <a class="twitter-timeline" data-lang="ja" data-height="400" data-theme="dark" href="https://twitter.com/webhann?ref_src=twsrc%5Etfw">Tweets by webhann</a>
      <BtnOriginal btnText="DMはこちらから" linkTo="https://twitter.com/webhann/" btnClass="mt-3 mb-5 py-2" />
    </div>
  )
}