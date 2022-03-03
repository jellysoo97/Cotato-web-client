import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

import QuillEditor from "./QuillEditor"

function CreateUpdatePost() {
  const navigate = useNavigate()
  const params = useParams()
  const category = params.category
  const postNumber = params.postNumber
  const user = "" //userInfo
  const [data, setData] = useState([])
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [image, setImage] = useState([])

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "http://localhost:8080/" + category + "/" + postNumber
        )
        if (response.data) {
          console.log(response.data.title, response.data.desc)
          setTitle(response.data.title)
          setContent(response.data.desc)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [postNumber])

  console.log(content)

  ////////////////////////////////////onChange////////////////////////////////////
  const onTitleChange = (e) => {
    setTitle(e.target.value)
  }

  const onEditorChange = (value) => {
    setContent(value)
  }

  const onImageChange = (images) => {
    setImage(images)
  }

  ////////////////////////////////////등록////////////////////////////////////
  async function onSubmit(e) {
    e.preventDefault()

    // user && !user.isAuth : 인증토큰이 있고 isAuth가 false이면(로그인 상태가 아니면)
    // return alert("로그인을 해주세요")

    try {
      const variable = {
        title: title,
        desc: content,
      }
      console.log(variable)
      const response = await axios.post(
        "http://localhost:8080/" + category + "/createPost",
        variable
      )
      alert("게시글ㄹ")
      console.log("configggg:", response.config.data)
    } catch (error) {
      console.log(error)
      alert("게시글 저장 실패")
    }

    setContent("")
    // alert("게시글 등록 완료")
    // navigate("/" + category)
  }

  ////////////////////////////////////취소////////////////////////////////////
  const gotoList = () => {
    alert("글쓰기를 취소하시겠습니까?")
    navigate("/" + category)
  }

  return (
    <div className="container mt-5">
      <form onSubmit={onSubmit}>
        {/* ////////////////////////////////////카테고리//////////////////////////////////// */}
        <div className="row border-top border-bottom border-3 border-dark">
          <div
            className="col-12 p-3"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            {category}
          </div>
        </div>

        {/* ////////////////////////////////////제목//////////////////////////////////// */}
        <div className="row mt-3">
          <div className="col-1 mt-2 text-center fw-bold fs-5">제목</div>
          <div className="col-11">
            <input
              type="text"
              className="form-control form-control-lg p-2"
              id="formGroupExampleInput"
              value={title}
              onChange={onTitleChange}
              name="title"
            ></input>
          </div>
        </div>

        {/* ////////////////////////////////////Quill//////////////////////////////////// */}
        <div className="row mt-3">
          <QuillEditor
            category={category}
            onEditorChange={onEditorChange}
            onImageChange={onImageChange}
            value={content}
          />
        </div>

        {/* ////////////////////////////////////버튼//////////////////////////////////// */}

        <div className="row mt-3 text-center justify-content-center">
          <div className="col-2">
            <button
              type="submit"
              onSubmit={onSubmit}
              className="btn btn-lg btn-secondary p-2"
              style={{ width: "100px" }}
            >
              등록
            </button>
          </div>
          <div className="col-2">
            <button
              type="button"
              onClick={gotoList}
              className="btn btn-lg btn-secondary p-2"
              style={{ width: "100px" }}
            >
              취소
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CreateUpdatePost
