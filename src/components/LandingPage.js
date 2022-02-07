import React from "react"

function LandingPage() {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-4">Hello, COTATO!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4" />
        <p>점보트론 점보트론</p>
        <p className="lead">
          <a className="btn btn-warning btn-lg" href="/createPost" role="button">
            글쓰기
          </a>
        </p>
      </div>
    </div>
  )
}

export default LandingPage
