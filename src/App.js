import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./components/LandingPage"
import PostList from "./components/PostList"
import Comments from './components/Comments'
import NavBar from './components/NavBar'
import PostPage from './components/PostPage'
import PostCreate from './components/PostCreate'
import Footer from './components/Footer'

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
        <div style={{ paddingTop: "69px", minHeight: "calc(100vh - 80px)" }}>
          <BrowserRouter>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/postlist" element={<PostList />} />
              <Route exact path="/comments" element={<Comments />}/>
              <Route exact path="/board" element={<PostPage />}/>
              <Route exact path="/createPost" element={<PostCreate />}/>
            </Routes>
          </BrowserRouter>
        </div>

      <Footer />
    </Suspense>
  );
}

export default App
