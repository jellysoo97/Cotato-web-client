import React from "react"
import PageName from "./PageName"
import Category from "./Category"
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
