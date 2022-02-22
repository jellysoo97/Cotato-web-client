import React from "react"

function PageName({ pagename }) {
  return (
    <>
      <div className="col-sm-9" style={{ fontSize: "30px", fontWeight: "bold" }}>
        {pagename}
      </div>
      <div className="col-sm-3">
        <a className="btn btn-outline-secondary" href="/createPost" role="button" style={{ float: "right" }}>
          글쓰기
        </a>
      </div>
    </>
  )
}

export default PageName
