import React from "react"
import "./Auth.css"
import { faUser, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons"

import { AuthTitle, AuthBox, AuthBox2, AuthButton } from "./AuthCommon"

function Edit() {
  return (
    <div className="AuthBigBox position-absolute top-50 start-50 translate-middle">
      <article className="card-body">
        <AuthTitle title={"회원정보 수정"} />
        <AuthBox label={"id"} text={"아이디"} warning={"아이디를 입력해주세요"} icon={faUser} placeholder={"아이디"} />
        <AuthBox2 label={"pw"} text={"비밀번호"} warning={"비밀번호를 입력해주세요"} icon={faLock} placeholder={"비밀번호"} />
        <AuthBox label={"email"} text={"이메일"} warning={"이메일을 입력해주세요"} icon={faEnvelope} placeholder={"이메일"} />
        <AuthButton confirm={"수정"} cancel={"취소"} />
      </article>
    </div>
  )
}

export default Edit
