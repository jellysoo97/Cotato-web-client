import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./components/LandingPage"
import PostList from "./components/Postlist/PostList"
import Comments from "./components/comments/Comments"
import NavBar from "./components/Common/NavBar"
import PostPage from "./components/Postcrud/PostPage"
import PostCreate from "./components/Postcrud/PostCreate"
import Footer from "./components/Common/Footer"
import PostPageView from "./components/Postlist/PostPageView"
import MyPage from "./components/Auth/MyPage"

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ paddingTop: "10px", minHeight: "calc(100vh - 80px)" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/postlist" element={<PostList />} />
            <Route exact path="/comments" element={<Comments />} />
            <Route exact path="/board" element={<PostPage />} />
            <Route exact path="/createPost" element={<PostCreate />} />
            <Route exact path="/postPageView" element={<PostPageView />} />
            <Route exact path="/myPage" element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </Suspense>
  )
}

export default App
