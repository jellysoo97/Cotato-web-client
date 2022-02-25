import React from "react"
import "./Auth.css"
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"

import { AuthTitle, AuthBox, AuthBox2 } from "./AuthCommon"

function Login() {
  return (
    <div className="AuthBigBox position-absolute top-50 start-50 translate-middle">
      <article className="card-body">
        <AuthTitle title={"로그인"} />
        <AuthBox label={"id"} text={"아이디"} warning={"아이디를 입력해주세요"} icon={faUser} placeholder={"아이디"} />
        <AuthBox2 label={"pw"} text={"비밀번호"} warning={"비밀번호를 입력해주세요"} icon={faLock} placeholder={"비밀번호"} />
        <button type="submit" className="btn btn-primary mt-3 mb-3" style={{ width: "310px" }}>
          로그인
        </button>
        <div>
          <a>아이디 찾기</a>&nbsp;&#124;&nbsp;
          <a>비밀번호 찾기</a>&nbsp;&#124;&nbsp;
          <a href="/register">회원가입</a>
        </div>
      </article>
    </div>
  )
}

export default Login
