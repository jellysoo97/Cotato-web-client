import React, { useState, useEffect, useRef, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import ReactQuill, { Quill } from "react-quill"
import "react-quill/dist/quill.snow.css"
import CustomToolbar from "./CustomToolbar"
import { applyMiddleware } from "redux"
import ImageResize from "quill-image-resize"
Quill.register("modules/ImageResize", ImageResize)

const PostCreate = ({ postService }) => {
  const [PostTitle, setPostTitle] = useState("")
  const [PostDesc, setPostDesc] = useState("")
  const [PostId, setPostId] = useState("")
  const quillRef = useRef()

  const navigate = useNavigate()
  const params = useParams()
  const category = params.category
  const postNumber = params.postNumber

  useEffect(() => {
    if (postNumber) {
      async function getPost() {
        try {
          const response = await axios.get(
            "http://localhost:8080/cotato/" + category + "/" + postNumber
          )
          setPostId(response.data._id)
          setPostTitle(response.data.title)
          setPostDesc(response.data.desc)
        } catch (error) {
          console.log(error)
        }
      }
      getPost()
    }
  }, [])

  ////////////////////////////////////onChange////////////////////////////////////

  const onTitleChange = (e) => {
    setPostTitle(e.target.value)
  }

  const onDescChange = (value) => {
    setPostDesc(value)
  }

  ////////////////////////// react-quill ////////////////////////////

  // const createHandler = () => {
  //   const variable = {
  //     title: PostTitle,
  //     desc: PostDesc,
  //   }

  //   console.log(variable)

  //   axios
  //     .post(
  //       "http://localhost:8080/cotato/" + category.category + "/createPost",
  //       variable
  //     )
  //     .then((response) => {
  //       console.log(response.config.data)
  //       if (response.config.data) {
  //         console.log("여기가 이프문 콘솔")
  //         alert("작성 완료")
  //         setTimeout(() => {
  //           navigate("/cotato/" + category.category)
  //         }, 500)
  //       } else {
  //         alert("게시물 등록 실패")
  //       }
  //     })
  //     .catch(function (err) {
  //       if (err.response) {
  //         console.log(err.response.data)
  //       } else if (err.request) {
  //         console.log(err.request)
  //       }
  //     })
  // }

  //////////////////////////// image ////////////////////////////
  const imageHandler = () => {
    const input = document.createElement("input")

    input.setAttribute("type", "file")
    input.setAttribute("accept", "image/*")
    input.click()

    input.addEventListener("change", async () => {
      var file = input.files[0]
      var formData = new FormData()

      formData.append("img", file)

      console.log(formData)
      var filename = file.name
      console.log(filename)
      try {
        const result = await axios.post(
          "http://localhost:8080/cotato/img",
          formData
        )
        console.log(result)

        console.log("성공 시, 백엔드가 보내주는 데이터", result.data.url)
        const IMG_URL = result.data.url

        const editor = quillRef.current.getEditor()
        const range = editor.getSelection()
        editor.insertEmbed(range.index, "image", IMG_URL)
      } catch (error) {
        console.log("실패했어요ㅠ")
      }
    })
  }

  const modules = useMemo(() => {
    return {
      toolbar: {
        container: "#toolbar",
        handlers: {
          //이미지 처리는 우리가 직접 imageHandler 함수로 처리할 것이다
          image: imageHandler,
        },
      },
      ImageResize: {
        parchment: Quill.import("parchment"),
      },
    }
  }, [])

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
    "align",
    "color",
    "background",
    "image",
  ]

  ////////////////////////////////////등록////////////////////////////////////
  const onSubmit = async (e) => {
    e.preventDefault()
    if (postNumber) {
      postService.updatePost(PostId, PostTitle, PostDesc)
      setTimeout(() => {
        alert("게시글 수정 완료")
        navigate("/cotato/" + category)
      }, 500)
    }
    if (!postNumber) {
      postService.createPost(PostTitle, PostDesc, category)
      setTimeout(() => {
        alert("게시글 등록 완료")
        navigate("/cotato/" + category)
      }, 500)
    }
  }

  ////////////////////////////////////취소////////////////////////////////////
  const gotoList = () => {
    alert("글쓰기를 취소하시겠습니까?")
    navigate("/cotato/" + category)
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
        <div className="row mt-4">
          <div className="col-1 mt-2 text-center fw-bold fs-5">제목</div>
          <div className="col-11">
            <input
              type="text"
              className="form-control form-control-lg p-2"
              id="formGroupExampleInput"
              value={PostTitle}
              onChange={onTitleChange}
              name="title"
            ></input>
          </div>
        </div>

        {/* ////////////////////////////////////Quill//////////////////////////////////// */}
        <div className="text-editor mt-4">
          <CustomToolbar />
          <ReactQuill
            modules={modules}
            formats={formats}
            ref={quillRef}
            value={PostDesc}
            onChange={onDescChange}
            name="desc"
            theme="snow"
            style={{ height: "350px" }}
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

export default PostCreate
