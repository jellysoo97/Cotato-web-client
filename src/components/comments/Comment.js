import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import CommentReply from "./CommentReply"

function Comment(props) {
  const postNumber = useParams()
  const [comments, setComments] = useState([])
  const [input, setInput] = useState()

  const createComment = (e) => {
    e.preventDefault()

    const variable = {
      content: input,
      postId: postNumber,
    }

    axios.post("http://localhost:8080/comment/" + postNumber + "/createComment ", variable).then((response) => {
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

  const updateComment = (e) => {
    e.preventDefault()

    const variable = {
      content: input,
    }

    axios.put("http://localhost:8080/comment/" + postNumber + "/updateComment ", variable).then((response) => {
      if (response.data) {
        //console.log(response.data.result);
        setComments("")

        //PostPageView(부모)의 Comments를 수정해줘야 함
        props.refreshFunc(response.data.result)
      } else {
        alert("댓글 수정 실패")
      }
    })
  }

  const deleteComment = (e) => {
    e.preventDefault()

    axios.put("http://localhost:8080/comment/" + postNumber + "/createComment ").then((response) => {
      if (response.data) {
        //console.log(response.data.result);
        setComments("")

        //PostPageView(부모)의 Comments를 수정해줘야 함
        props.refreshFunc(response.data.result)
      } else {
        alert("댓글 삭제 실패")
      }
    })
  }

  const onChange = (e) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    async function getComments() {
      try {
        const response = await axios.get("http://localhost:8080/comment/" + postNumber + "/getComment")
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
    createComment()
  }

  const removeComment = (id) => {
    setComments(comments.filter((comment) => comment.id !== id))
    deleteComment()
  }

  const changeComment = (id, inputWord) => {
    setComments(
      comments.map((comment) => {
        if (comment.id === id) {
          return {
            ...comment,
            content: inputWord,
          }
        }
        return comment
      })
    )
    setInput("")
    updateComment()
  }

  return (
    <div className="container mt-4 p-4">
      <div className="row mb-4">
        <div className="col-12">댓글 {comments.length} 개</div>
      </div>
      {comments.map((comment, index) => {
        return (
          <div className="row mb-4 border-bottom border-secondary">
            <div className="col-3 p-2 fw-bold">{comment.name}</div>
            <div className="col-3 p-2">{comment.date}</div>
            <div key={index} className="col-6 d-grid gap-2 d-flex justify-content-end">
              <button className="btn btn-outline-warning">좋아요</button>
              <button className="btn btn-outline-warning" onClick={() => changeComment(comment.id, input)}>
                수정
              </button>
              <button className="btn btn-outline-warning" onClick={() => removeComment(comment.id)}>
                삭제
              </button>
              <CommentReply />
            </div>
            <div className="col-12 p-3 mb-3">{comment.content}</div>
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
