import React, { useState } from "react"
import PageName from "../Common/PageName"
import countriesData from "./PostData"
import Table from "./PostTable"

function PostList() {
  const [countries] = useState([...countriesData])
  return (
    <div className="container">
      <div className="row m-2 p-2 align-items-center">
        <PageName />
      </div>
      <div className="row m-2">
        <Table data={countries} rowsPerPage={10} />
      </div>
    </div>
  )
}

export default PostList
