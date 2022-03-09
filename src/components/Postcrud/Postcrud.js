import React, { useState, useEffect, useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import CustomToolbar from "./CustomToolbar"

function PostCreate() {
  const [PostTitle, setPostTitle] = useState("")
  const [PostDesc, setPostDesc] = useState("")
  const [FileName, setFileName] = useState("") //이미지 처리를 위한 상태
  const [PostList, setPostList] = useState([])

  const category = useParams()
  const navigate = useNavigate()

  // useEffect(() => {
  //   const idInfo = {
  //     id: id,

  //   }
  //   axios
  //     .post("http://localhost:8080/getAll", idInfo)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setPostTitle(data.title)
  //       setPostDesc(data.desc)
  //     })
  // }, [id])

  const onTitleChange = (e) => {
    setPostTitle(e.target.value)
  }

  const onDescChange = (value) => {
    setPostDesc(value)
  }

  //////////////////////////// react-quill ////////////////////////////
  const imageHandler = () => {
    const input = document.createElement("input")

    input.setAttribute("type", "file")
    input.setAttribute("accept", "image/*")
    input.click()
    alert("이미지")

    input.onChange = async () => {
      if (input.files) {
        var file = input.files[0]
        var formData = new FormData()

        formData.append("image", file)

        var fileName = file.name
        console.log(fileName)
        console.log(formData)
      }
    }
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

  //////////////////////////// react-quill ////////////////////////////

  const createHandler = () => {
    const variable = {
      title: PostTitle,
      desc: PostDesc,
    }

    console.log(variable)

    axios
      .post(
        "http://localhost:8080/cotato/" + category.category + "/createPost",
        variable
      )
      .then((response) => {
        console.log(response.config.data)

        if (response.config.data) {
          console.log("여기가 이프문 콘솔")
          alert("작성 완료")
          setTimeout(() => {
            navigate("/" + category.category)
          }, 1000)
        } else {
          alert("게시물 등록 실패")
        }
      })
      .catch(function (err) {
        if (err.response) {
          console.log(err.response.data)
        } else if (err.request) {
          //2.8 (화) request 오류. CORS때문일수도?
          console.log(err.request)
        }
      })
  }

  // const updateHandler = ({ history }) => {

  //   try {
  //     if (PostTitle !== "" && PostDesc !== "") {
  //       let postInfo = {
  //         id: id,
  //         title: PostTitle,
  //         content: PostDesc,
  //       } // const reponse = await fetch();

  //       axios.post("http://localhost:8080/updatePost/:id", postInfo).then((response) => {
  //         alert("수정 완료")
  //         history.replace("/")
  //       })

  //     } else {
  //       alert("모든 칸을 작성해야합니다!")
  //     }
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const deleteHandler = (id) => {
  //   axios.delete(`http://localhost:8080/deletePost/${id}`).then((response) => {
  //     setPostList(
  //       PostList.filter((val) => {
  //         return val.id !== id
  //       })
  //     )
  //   })
  // }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            제목
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="제목"
            onChange={onTitleChange}
            value={PostTitle}
            name="title"
          ></input>
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">
            내용
          </label>
          {/* <input type="text" className="form-control" id="formGroupExampleInput2" placeholder='내용' onChange={onContentsChange} value={PostContents} name='contents'></input> */}

          {/* react-quill */}
          <div className="text-editor">
            <CustomToolbar />
            <ReactQuill
              modules={modules}
              formats={formats}
              value={PostDesc}
              onChange={onDescChange}
              name="desc"
            />
          </div>
        </div>
        {/* <div>image_image_image TAT</div> */}
        <br />

        <div className="col-12">
          <button
            type="submit"
            className="btn btn-warning"
            onClick={createHandler}
          >
            등록
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostCreate
