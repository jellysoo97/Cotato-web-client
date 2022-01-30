import React, { useState } from "react"
import PageName from "../Basic/PageName"
import Category from "../Basic/Category"
import countriesData from "./PostData"
import Table from "./PostTable"

function PostList() {
  const [countries] = useState([...countriesData])
  return (
    <>
      <main>
        <div className="container">
          <PageName />
          <div className="container" style={{ height: "auto", minHeight: "100%", paddingBottom: "20px" }}>
            <div className="row">
              <Category />
              <Table data={countries} rowsPerPage={10} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PostList
