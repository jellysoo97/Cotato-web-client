import React, { useState } from "react"
import axios from "axios"

function SingleComment(props) {
  const postId = props.postId
  const user = "username"
  const [OpenReply, setOpenReply] = useState(false)
  const [commentValue, setcommentValue] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    const variable = {
      username: user,
      text: commentValue,
      createdAt: new Date().toISOString().slice(0, 10),
      postId: props.postId,
      id: props.comment._id,
    }

    axios.post("http://localhost:8080/comment/" + postId + "/createComment", variable).then((response) => {
      if (response.data) {
        console.log(response.data)
        setcommentValue("")
        props.refreshFunction(response.data)
        setOpenReply(false) //댓글창 자동으로 닫기
      } else {
        alert("댓글 저장 실패")
      }
    })
  }

  const handleChange = (e) => {
    setcommentValue(e.target.value)
  }

  const onClickReplyOpen = (e) => {
    setcommentValue(e.target.value)
  }

  return (
    <div className="container mt-4 p-4">
      <div className="row mb-4">
        <div className="col-12">댓글 {commentValue.length} 개</div>
      </div>
      <div className="row mb-4 border-bottom border-secondary">
        <div className="col-3 p-2 fw-bold">{props.comment.username}</div>
        <div className="col-3 p-2">{props.comment.createdAt}</div>
        <div className="col-6 d-grid gap-2 d-flex justify-content-end">
          <button className="btn btn-outline-warning">좋아요</button>
          <button className="btn btn-outline-warning">수정</button>
          <button className="btn btn-outline-warning">삭제</button>
          <button className="btn btn-outline-warning" onClick={onClickReplyOpen}>
            답글달기
          </button>
        </div>
        <div className="col-12 p-3 mb-3">{props.comment.text}</div>
      </div>
      {OpenReply && ( //OpenReply가 true일때만 대댓글 보이게
        <form>
          <div className="row">
            <div className="col-10">
              <textarea className="form-control" value={commentValue} onChange={handleChange} placeholder={"댓글을 입력하세요"} rows="3"></textarea>
            </div>
            <div className="col-2 p-2 text-center">
              <button className="btn btn-outline-warning p-4" onClick={onSubmit}>
                댓글달기
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  )
}

export default SingleComment
