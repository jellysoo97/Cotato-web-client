import React, { useState, useEffect } from "react"
import "./Auth.css"
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons"
import axios from "axios"
import { AuthTitle, AuthBox, AuthBox2 } from "./AuthCommon"

function Login() {
  const [value, setValue] = useState([])
  const [value2, setValue2] = useState([])

  const getValue = (value) => {
    setValue(value)
    console.log("value:", value)
  }
  const getValue2 = (value) => {
    setValue2(value)
    console.log("value2:", value)
  }

  async function postUser() {
    getValue()
    getValue2()
    const variable = {
      username: value,
      password: value2,
    }

    try {
      // get 게시글
      const response = await axios.post("http://localhost:8080/users/signin", variable)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="AuthBigBox position-absolute top-50 start-50 translate-middle">
      <article className="card-body">
        <AuthTitle title={"로그인"} />
        <AuthBox setValue={setValue} label={"id"} text={"아이디"} warning={"아이디를 입력해주세요"} icon={faUser} placeholder={"아이디"} />
        <AuthBox2 setValue2={setValue2} label={"pw"} text={"비밀번호"} warning={"비밀번호를 입력해주세요"} icon={faLock} placeholder={"비밀번호"} />
        <button onClick={postUser} type="submit" className="btn btn-primary mt-3 mb-3" style={{ width: "310px" }}>
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
