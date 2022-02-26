import React, { useState, Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

import LandingPage from "./components/LandingPage"
import NavBar from "./components/Common/NavBar"
import Footer from "./components/Common/Footer"

import Login from "./components/Auth/Login"
import SignUp from './components/Auth/SignUp'
import Edit from "./components/Auth/Edit"
import MyPage from "./components/Auth/MyPage"

import Posts from "./components/Postlist/PostList"

import Comments from "./components/comments/Comments"
import PostCreate from "./components/Postcrud/Postcrud"
import PostEach from "./components/Postlist/PostEach"

// const LOGIN = 1
// const MAIN = 2

function App() {
  // const [mode, setMode] = useState(LOGIN)
  // const [id, setId] = useState("")

  // const onLogin = (userId) => {
  //   alert(`${userId} 님 환영합니다`)
  //   setMode(MAIN)
  //   setId(userId)
  // }

  // const onLogout = () => {
  //   alert(`로그아웃`);
  //   setMode(LOGIN);
  // };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/myPage" element={<MyPage />} />
            <Route exact path="/edit" element={<Edit />} />

            <Route exact path="/:category" element={<Posts />} />
            <Route exact path="/:category/:id" element={<PostEach />} />
            {/* <Route exact path="/:category/:postNumber" element={<PostEach />} /> */}

            <Route exact path="/comments" element={<Comments />} />
            <Route
              exact
              path="/:category/createPost"
              element={<PostCreate />}
            />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer />
    </Suspense>
  );
}

export default App
