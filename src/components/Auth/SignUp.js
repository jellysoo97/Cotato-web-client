import React, { useState, useCallback } from "react"
import "./Auth.css"
import { useNavigate } from "react-router-dom"
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { AuthTitle, AuthBox, AuthBox2 } from "./AuthCommon"

function SignUp({ authService }) {
  const [name, setName] = useState("")
  const [id, setId] = useState("")
  const [pwd, setPwd] = useState("")
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  ///////////////////////////setValue////////////////////////////////////
  const getName = (value) => {
    setName(value)
  }
  const getPassword = (value) => {
    setPwd(value)
  }
  const getId = (value) => {
    setId(value)
  }
  const getEmail = (value) => {
    setEmail(value)
  }

  ///////////////////////////Reset////////////////////////////////////
  const onReset = useCallback(() => {
    setName("")
    setId("")
    setPwd("")
    setEmail("")
  }, [setName, setId, setPwd, setEmail])

  ///////////////////////////onSubmit////////////////////////////////////
  const onSubmit = (e) => {
    e.preventDefault()

    console.log("name: " + name)
    console.log("id: " + id)
    console.log("pwd: " + pwd)
    console.log("email: " + email)

    authService.signup(name, id, pwd, email)

    // history.push('/');
    onReset()
    alert("회원가입이 완료되었습니다.")
    navigate("/")
  }

  return (
    <div className="d-flex justify-content-center">
      <div className="AuthBigBox my-3">
        <div className="row align-content-center">
          <form className="auth-form" onSubmit={onSubmit}>
            <article className="card-body">
              <AuthTitle title={"회원가입"} />
              <AuthBox
                label={"name"}
                text={"이름"}
                type={"text"}
                warning={"이름을 입력해주세요"}
                icon={faUser}
                placeholder={"이름"}
                getValue={getName}
              />
              <AuthBox
                label={"id"}
                text={"아이디"}
                type={"text"}
                warning={"아이디를 입력해주세요"}
                icon={faUser}
                placeholder={"아이디"}
                getValue={getId}
              />
              <AuthBox2
                label={"password"}
                text={"비밀번호"}
                warning={"비밀번호를 입력해주세요"}
                icon={faLock}
                placeholder={"비밀번호"}
                getPassword={getPassword}
              />
              <AuthBox
                label={"email"}
                text={"이메일"}
                type={"email"}
                warning={"이메일을 입력해주세요"}
                icon={faEnvelope}
                placeholder={"이메일"}
                getValue={getEmail}
              />
              <button
                type="submit"
                className="btn btn-primary mt-3 mb-3"
                style={{ width: "310px" }}
              >
                회원가입
              </button>
            </article>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp
