import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import CommentReply from "./CommentReply"

function Comment(props) {
  const postNumber = useParams()
  const [comments, setComments] = useState([])
  const [input, setInput] = useState()

  const onSubmit = (e) => {
    e.preventDefault()

    //댓글 다는 유저 정보, 내용들로 리퀘스트를 보내야 하는데..!? 이미 했었네!
    const variable = {
      content: input,
      postId: postNumber,
    }

    axios.post("http://localhost:8080/board/:id/createComment ", variable).then((response) => {
      if (response.data) {
        //console.log(response.data.result);
        setComments("")

        //PostPageView(부모)의 Comments를 수정해줘야 함
        props.refreshFunc(response.data.result)
      } else {
        alert("댓글 등록 실패")
      }
    })
  }

  const onChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    async function getComments() {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/comments/")
        setComments(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getComments()
  }, [])

  const addComment = () => {
    setComments(
      comments.concat({
        postId: postNumber,
        id: comments.length + 1,
        name: "userID",
        date: new Date().toISOString().slice(0, 10),
        content: input,
      })
    )
    setInput("")
    onSubmit()
  }

  const removeComment = (index) => {
    return setComments(comments.filter((comment) => comment.index !== index))
  }

  const changeContent = (index, inputWord) => {
    return setComments(
      comments.map((comment) => {
        if (comment.index === index) {
          return {
            ...comment,
            text: inputWord,
          }
        }
        return comment
      })
    )
  }

  return (
    <div className="container mt-4 p-4">
      <div className="row mb-4">
        <div className="col-12">댓글 {comments.length} 개</div>
      </div>
      {comments.map((comment, index) => {
        return (
          <div className="row mb-4 border-bottom border-secondary">
            <div className="col-4 p-2 fw-bold">{comment.name}</div>
            <div className="col-3 p-2">{comment.date}</div>
            <div key={index} className="col-5 d-grid gap-2 d-flex justify-content-end">
              <button className="btn btn-outline-warning">좋아요</button>
              <button className="btn btn-outline-warning" onClick={() => changeContent(comment.index, input)}>
                수정
              </button>
              <button className="btn btn-outline-warning" onClick={() => removeComment(comment.index)}>
                삭제
              </button>
              <CommentReply />
            </div>
            <div className="col-12 p-3 mb-3">{comment.body}</div>
          </div>
        )
      })}
      <div className="row">
        <div className="col-10">
          <textarea className="form-control" value={input} onChange={onChange} placeholder={"댓글을 입력하세요"} rows="3"></textarea>
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-warning p-4"
            onClick={() => {
              addComment(input)
              setInput("")
            }}
          >
            댓글달기
          </button>
        </div>
      </div>
    </div>
  )
}

export default Comment
