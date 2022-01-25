import React from "react"
import NavBar from "./NavBar"
import PageName from "./PageName"
import Category from "./Category"
import PostTable from "./PostTable"
import Footer from "./Footer"

function PostList() {
  return (
    <>
      <header>
        <NavBar />
      </header>
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
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default PostList
