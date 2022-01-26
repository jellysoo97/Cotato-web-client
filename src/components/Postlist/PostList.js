import React from "react"
import PageName from "../Basic/PageName"
import Category from "../Basic/Category"
import PostTable from "./PostTable"

function PostList() {
  return (
    <>
      <main>
        <div className="container">
          <PageName />
          <div className="container" style={{ height: "auto", minHeight: "100%", paddingBottom: "20px" }}>
            <div className="row">
              <Category />
              <PostTable />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PostList
