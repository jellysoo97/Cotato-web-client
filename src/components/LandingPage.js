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
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Hello, COTATO!</h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr className="my-4" />
        <img
          src="./images/logo3.png"
          width={'800px'}
          height={'500px'}
          alt="logo3"
        ></img>
        <p className="lead">
          <a
            className="btn btn-warning btn-lg my-5"
            href="/createPost"
            role="button"
          >
            글쓰기
          </a>
        </p>
      </div>
    </div>
  );
}

export default LandingPage
