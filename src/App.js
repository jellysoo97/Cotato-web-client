import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./components/LandingPage"
import NavBar from "./components/Common/NavBar"
import Footer from "./components/Common/Footer"

import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Edit from "./components/Auth/Edit"
import MyPage from "./components/Auth/MyPage"

import Posts from "./components/Postlist/PostList"

import PostEach from "./components/PostView/PostEach"
import CreateUpdatePost from "./components/Postcrud/CreateUpdatePost"

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ minHeight: "calc(100vh - 80px)" }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/mypage" element={<MyPage />} />
            <Route exact path="/edit" element={<Edit />} />

            <Route exact path="/:category" element={<Posts />} />
            <Route exact path="/:category/:postNumber" element={<PostEach />} />

            <Route
              exact
              path="/:category/createPost"
              element={<CreateUpdatePost />}
            />
            <Route
              exact
              path="/:category/:postNumber/createPost"
              element={<CreateUpdatePost />}
            />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </Suspense>
  )
}

export default App
