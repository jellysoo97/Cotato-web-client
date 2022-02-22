import React, { useState } from "react"
import { Link } from 'react-router-dom'
import "./Auth.css"
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"

import { AuthTitle, AuthBox, AuthBox2 } from "./AuthCommon"

function Login() {

  const [signup, setSignup] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [url, setURL] = useState('');
  const [text, setText] = useState('');
  const [isAlert, setIsAlert] = useState(false);

  return (
    <div className="AuthBigBox">
      <article className="card-body">
        <AuthTitle title={"로그인"} />
        <AuthBox label={"id"} text={"아이디"} warning={"아이디를 입력해주세요"} icon={faUser} placeholder={"아이디"} />
        <AuthBox2 label={"pw"} text={"비밀번호"} warning={"비밀번호를 입력해주세요"} icon={faLock} placeholder={"비밀번호"} />
        <button type="submit" className="btn btn-primary mt-3 mb-3" style={{ width: "310px" }}>
          로그인
        </button>
        <div>
          <Link>아이디 찾기</Link>&nbsp;&#124;&nbsp;
          <Link>비밀번호 찾기</Link>&nbsp;&#124;&nbsp;
          <Link>회원가입</Link>
        </div>
      </article>
    </div>
  )
}

export default Login
