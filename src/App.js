import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./components/LandingPage"
import PostList from "./components/Postlist/PostList"
import Comments from "./components/comments/Comments"
import NavBar from "./components/Basic/NavBar"
import PostPage from "./components/Postlist/PostPage"
import PostCreate from "./components/Postcrud/PostCreate"
import Footer from "./components/Basic/Footer"

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/postlist" element={<PostList />} />
            <Route exact path="/comments" element={<Comments />} />
            <Route exact path="/board" element={<PostPage />} />
            <Route exact path="/createPost" element={<PostCreate />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </Suspense>
  )
}

export default App
