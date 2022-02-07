import React, { useState, useMemo } from "react"
import axios from "axios"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import CustomToolbar from "./CustomToolbar"

function PostCreate(props) {
  const [PostTitle, setPostTitle] = useState("")
  const [PostDesc, setPostDesc] = useState("")
  //const [FilePath, setFilePath] = useState('')

  const onTitleChange = (e) => {
    setPostTitle(e.currentTarget.value)
  }

  const onDescChange = (value) => {
    setPostDesc(value)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const variable = {
      title: PostTitle,
      desc: PostDesc,
    }
    //console.log(variable)

    //https://jsonplaceholder.typicode.com/posts
    axios
      .post("http://localhost:3000/createPost", variable)
      // .catch(function(err){
      //   if(err.response){
      //     console.log(err.response.data);
      //     console.log(err.response.status);
      //     console.log(err.response.headers);
      //   }else if(err.request){
      //     console.log(err.request)
      //   }
      // })
      .then((response) => {
        console.log(response)
        // if (response.data) {
        //   console.log('여기가 이프문 콘솔')
        // } else {
        //   alert('게시물 등록 실패')
        // }
      })
  }

  //////////////////////////// react-quill ////////////////////////////
  const imageHandler = () => {
    const input = document.createElement("input")

    input.setAttribute("type", "file")
    input.setAttribute("accept", "image/*")
    input.click()

    input.onChange = async () => {
      if (input.files) {
        var file = input.files[0]
        var formData = new FormData()

        formData.append("image", file)

        var fileName = file.name

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

  const formats = ["header", "font", "size", "bold", "italic", "underline", "list", "bullet", "align", "color", "background", "image"]

  //////////////////////////// react-quill ////////////////////////////

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label for="formGroupExampleInput" className="form-label">
            제목
          </label>
          <input type="text" className="form-control" id="formGroupExampleInput" placeholder="제목" onChange={onTitleChange} value={PostTitle} name="title"></input>
        </div>
        <div className="mb-3">
          <label for="formGroupExampleInput2" className="form-label">
            내용
          </label>
          {/* <input type="text" className="form-control" id="formGroupExampleInput2" placeholder='내용' onChange={onContentsChange} value={PostContents} name='contents'></input> */}

          {/* react-quill */}
          <div className="text-editor">
            <CustomToolbar />
            <ReactQuill modules={modules} formats={formats} value={PostDesc} onChange={onDescChange} name="desc" />
          </div>
        </div>

        <div>image_image_image TAT</div>
        <br />

        <div className="col-12">
          <button type="submit" className="btn btn-warning" onClick={onSubmit}>
            등록
          </button>
        </div>
      </form>
    </div>
  )
}

export default PostCreate

// 디렉토리 구조 리팩토링?
// 게시글 리스트 요청하는 api는 없어도 되나
