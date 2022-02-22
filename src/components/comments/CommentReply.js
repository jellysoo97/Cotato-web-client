import React, { useState } from "react"

import Comment from "./Comment"

function CommentReply() {
  const [OpenReply, setOpenReply] = useState(false)

  const onClickReplyOpen = () => {
    setOpenReply(!OpenReply)
  }

  return (
    <>
      <button onClick={onClickReplyOpen} type="button" className="btn btn-outline-warning" style={{ float: "right" }}>
        답글달기
      </button>
      {/* {OpenReply && <Comment />} */}
    </>
  )
}

export default CommentReply
