import React, { useState } from "react"
import { Fragment } from "react"
import axios from "axios"

import SingleComment from "./SingleComment"
import CommentReply from "./CommentReply"

// props: postId, username, comments, refreshFunc
function Comment(props) {
  const postId = props.postId
  const username = props.username
  const [commentValue, setcommentValue] = useState("")

  const handleChange = (e) => {
    setcommentValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const variable = {
      post: postId,
      text: commentValue,
    }

    axios
      .post(
        "http://localhost:8080/comment/" + postId + "/createComment",
        variable
      )
      .then((response) => {
        if (response.data) {
          console.log(response.data)
        } else {
          alert("댓글 저장 실패")
        }
      })
  }

  return (
    <div className="container mt-4 p-4 border-top border-dark">
      <div className="row">
        <div className="col-12 fw-bold">댓글 {props.commentList.length} 개</div>
      </div>

      {/* Comment Lists */}
      <div className="row">
        {props.commentList &&
          props.commentList.map(
            (comment, index) =>
              !comment.id && (
                // 대댓글은 우선 숨기겠다는 의미
                <Fragment key={index}>
                  <SingleComment
                    refreshFunction={props.refreshFunction}
                    comment={comment}
                    postId={props.postId}
                    key={index}
                  />
                  <CommentReply
                    refreshFunction={props.refreshFunction}
                    commentList={props.commentList}
                    parentCommentId={comment._id}
                    postId={props.postId}
                    key={index}
                  />
                </Fragment>
              )
          )}
      </div>

      {/* Comment Form */}
      <form>
        <div className="row">
          <div className="col-10">
            <textarea
              className="form-control"
              value={commentValue}
              onChange={handleChange}
              placeholder={"댓글을 입력하세요"}
              rows="3"
            ></textarea>
          </div>
          <div className="col-2 p-2 text-center">
            <button className="btn btn-outline-warning p-4" onClick={onSubmit}>
              댓글달기
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Comment
