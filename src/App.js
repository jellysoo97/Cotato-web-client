import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./components/LandingPage"
import NavBar from "./components/Common/NavBar"
import Footer from "./components/Common/Footer"

import Login from "./components/Auth/Login"
import Register from "./components/Auth/Register"
import Edit from "./components/Auth/Edit"
import MyPage from "./components/Auth/MyPage"

import It from "./components/Category/ITissue"
import Session from "./components/Category/Session"
import Study from "./components/Category/Study"
import Project from "./components/Category/Project"

import Comments from "./components/comments/Comments"
import PostCreate from "./components/Postcrud/Postcrud"
import PostEach from "./components/Postlist/PostEach"

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
            <Route exact path="/myPage" element={<MyPage />} />
            <Route exact path="/edit" element={<Edit />} />

            <Route exact path="/it" element={<It />} />
            <Route exact path="/session" element={<Session />} />
            <Route exact path="/study" element={<Study />} />
            <Route exact path="/project" element={<Project />} />

            <Route exact path="/comments" element={<Comments />} />
            <Route exact path="/createPost" element={<PostCreate />} />
            <Route exact path="/postEach" element={<PostEach />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </Suspense>
  )
}

export default App
