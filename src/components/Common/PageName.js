import React, { useState } from "react"

function PageName() {
  const [pagename, changeName] = useState(["IT Issue"]) //useState([newPageNameData])

  function changePageName() {
    const newPageName = [...pagename]
    newPageName[0] = "IT Issue" // newPageNameData
    changeName(newPageName)
  }

  return (
    <>
      <div className="col-sm-9" onLoad={changePageName} style={{ fontSize: "30px", fontWeight: "bold" }}>
        {pagename[0]}
      </div>
      <div className="col-sm-3">
        <a className="btn btn-warning" href="/createPost" role="button" style={{ float: "right" }}>
          글쓰기
        </a>
      </div>
    </>
  )
}

export default PageName
