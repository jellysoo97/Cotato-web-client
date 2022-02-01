import React, { useState } from "react"

function PageName() {
  const [pagename, changeName] = useState(["IT Issue"]) //useState([newPageNameData])

  function changePageName() {
    const newPageName = [...pagename]
    newPageName[0] = "IT Issue" // newPageNameData
    changeName(newPageName)
  }

  return (
    <div className="col-sm-12" onLoad={changePageName} style={{ height: "70px", marginBottom: "20px", padding: "10px 30px 10px", fontSize: "30px", fontWeight: "bold" }}>
      {pagename[0]}
    </div>
  )
}

export default PageName
