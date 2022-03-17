import React, { useState, useCallback } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./Auth.css"
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import { AuthTitle, AuthBox, AuthBox2 } from "./AuthCommon"

// dlrjs0506
// ab3670

const Login = ({ onLogin, user }) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  ///////////////////////////setValue////////////////////////////////////
  const getValue = (value) => {
    setUsername(value)
  }

  const getPassword = (value) => {
    setPassword(value)
  }

  ///////////////////////////onSubmit////////////////////////////////////
  const onSubmit = (event) => {
    // event.preventDefault()
    onLogin(username, password)
    // setTimeout(() => {
    //   if (user) {
    //     navigate("/")
    //   } else {
    //     alert("아이디 또는 비밀번호를 잘못 입력했습니다. 다시 입력해주세요")
    //   }
    // }, 500)
  }

  return (
    <div className="AuthBigBox position-absolute top-50 start-50 translate-middle">
      <form className="auth-form" onSubmit={onSubmit}>
        <article className="card-body">
          <AuthTitle title={"로그인"} />
          <AuthBox
            label={"id"}
            text={"아이디"}
            type={"text"}
            warning={"아이디를 입력해주세요"}
            icon={faUser}
            getValue={getValue}
            name="username"
            placeholder={"아이디"}
          />
          <AuthBox2
            label={"pw"}
            text={"비밀번호"}
            warning={"비밀번호를 입력해주세요"}
            icon={faLock}
            getPassword={getPassword}
            name="password"
            placeholder={"비밀번호"}
          />
          <button
            type="submit"
            className="btn btn-primary mt-3 mb-3"
            style={{ width: "310px" }}
          >
            로그인
          </button>
          <div>
            <a>아이디 찾기</a>&nbsp;&#124;&nbsp;
            <a>비밀번호 찾기</a>&nbsp;&#124;&nbsp;
            <Link
              to="/users/signup"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              회원가입
            </Link>
          </div>
        </article>
      </form>
    </div>
  )
}

export default Login
