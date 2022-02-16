import React from "react"
import "../index.css"

import CardRow from "./LandingCard"

function LandingPage() {
  const Img = ({ link, src }) => {
    return (
      <a href={link}>
        <img src={src} alt={""} width={"50px"} height={"50px"} style={{ marginRight: "15px" }} />
      </a>
    )
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row align-items-center landing">
          <div className="col-6" style={{ marginLeft: "50px" }}>
            <div className="landingtitle">
              Cotato
              <br />
              코딩하는 감자들
            </div>
            <div className="landingdesc">대학생 연합 개발 프로젝트/스터디 동아리</div>
            <a href="#container" style={{ textDecoration: "none", color: "white" }}>
              <div className="landingdesc">ABOUT US -&gt;</div>
            </a>
            <div style={{ marginTop: "15px" }}>
              <Img link={"https://www.instagram.com/accounts/login/?next=/cotato_official/"} src={"./images/instagram.png"} />
              <Img link={"https://cafe.naver.com/cotato"} src={"./images/cafe.png"} />
              <Img link={""} src={"./images/kakaotalk.png"} />
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2" id="container">
        <CardRow />
      </div>
    </>
  )
}

export default LandingPage
