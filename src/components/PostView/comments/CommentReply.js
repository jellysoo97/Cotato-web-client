import React, { useEffect, useState } from "react"
import { Fragment } from "react"
import SingleComment from "./SingleComment"

function CommentReply(props) {
  const [ChildCommentNumber, setChildCommentNumber] = useState(0)
  const [OpenReplyComments, setOpenReplyComments] = useState(false)

  useEffect(() => {
    console.log("부모 댓글: ", props.parentCommentId)
    let commentNumber = 0
    props.commentList.map((comment) => {
      if (comment.id === props.parentCommentId) {
        commentNumber++
      }
    })
    setChildCommentNumber(commentNumber)
  }, [props.commentList]) //commentList가 바뀔때마다 실행이될 수 있도록해야됨
  const renderReplyComment = (parentCommentId) =>
    props.commentList.map((comment, index) => (
      <Fragment key={index}>
        {comment.id === parentCommentId && (
          <div style={{ width: "80%", marginLeft: "40px" }}>
            <SingleComment
              refreshFunction={props.refreshFunction}
              comment={comment}
              postId={props.postId}
            />
            <CommentReply
              refreshFunction={props.refreshFunction}
              commentList={props.commentList}
              postId={props.postId}
              parentCommentId={comment._id}
            />
          </div>
        )}
      </Fragment>
    ))

  const onHandleChange = () => {
    setOpenReplyComments(!OpenReplyComments)
  }
  return (
    <div>
      {ChildCommentNumber > 0 && (
        <p
          style={{ fontSize: "14px", margin: "0", color: "gray" }}
          onClick={onHandleChange}
        >
          대댓글 {ChildCommentNumber} 개
        </p>
      )}
      {OpenReplyComments && renderReplyComment(props.parentCommentId)}
      {/*대댓글을 달때 눌리면 나오고 아니면 숨긴상태*/}
    </div>
  )
}

export default CommentReply
