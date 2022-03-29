import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"

import LandingPage from "./components/LandingPage"
import NavBar from "./components/Common/NavBar"
import Footer from "./components/Common/Footer"
import Login from "./components/Auth/Login"
import SignUp from "./components/Auth/SignUp"
import Edit from "./components/Auth/Edit"
import MyPage from "./components/Auth/MyPage"
import Posts from "./components/Postlist/PostList"
import PostCreate from "./components/Postcrud/Postcrud"
import PostEach from "./components/PostView/PostEach"
import { AuthProvider } from "./context/AuthContext"

function App({ onLogin, postService, authService, authErrorEventBus }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NavBar authService={authService} authErrorEventBus={authErrorEventBus} />
      <div style={{ minHeight: "calc(100vh - 80px)" }}>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route
            exact
            path="/users/signin"
            element={
              <Login onLogin={onLogin} />
              // <AuthProvider
              //   authService={authService}
              //   authErrorEventBus={authErrorEventBus}
              // />
            }
          />
          <Route
            exact
            path="/users/signup"
            element={<SignUp authService={authService} />}
          />
          <Route exact path="/myPage" element={<MyPage />} />
          <Route exact path="/edit" element={<Edit />} />

          <Route
            exact
            path="/cotato/:category"
            element={
              <Posts
                authService={authService}
                authErrorEventBus={authErrorEventBus}
              />
            }
          />
          <Route
            exact
            path="/cotato/:category/:postNumber"
            element={
              <PostEach
                authService={authService}
                authErrorEventBus={authErrorEventBus}
                postService={postService}
              />
            }
          />

          <Route
            exact
            path="/cotato/:category/createPost"
            element={<PostCreate postService={postService} />}
          />
          <Route
            exact
            path="/cotato/:category/:postNumber/createPost"
            element={<PostCreate postService={postService} />}
          />
        </Routes>
      </div>

      <Footer />
    </Suspense>
  )
}

export default App
