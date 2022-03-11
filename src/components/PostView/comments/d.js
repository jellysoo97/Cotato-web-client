// const createComment = (e) => {
//   e.preventDefault()

//   const variable = {
//     username: "username",
//     text: commentValue,
//     createdAt: new Date().toISOString().slice(0, 10),
//     // postId: props.postId,
//   }

//   axios.post("http://localhost:8080/comment/" + postNumber + "/createComment ", variable).then((response) => {
//     if (response.data) {
//       //console.log(response.data.result);
//       setcommentValue("")

//       //PostPageView(부모)의 CommentValue를 수정해줘야 함
//       props.refreshFunc(response.data.result)
//     } else {
//       alert("댓글 등록 실패")
//     }
//   })
// }

// const updateComment = (e) => {
//   e.preventDefault()

//   const variable = {
//     content: input,
//   }

//   axios.put("http://localhost:8080/comment/" + postNumber + "/updateComment ", variable).then((response) => {
//     if (response.data) {
//       //console.log(response.data.result);
//       setcommentValue("")

//       //PostPageView(부모)의 CommentValue를 수정해줘야 함
//       props.refreshFunc(response.data.result)
//     } else {
//       alert("댓글 수정 실패")
//     }
//   })
// }

// const deleteComment = (e) => {
//   e.preventDefault()

//   axios.put("http://localhost:8080/comment/" + postNumber + "/createComment ").then((response) => {
//     if (response.data) {
//       //console.log(response.data.result);
//       setcommentValue("")

//       //PostPageView(부모)의 CommentValue를 수정해줘야 함
//       props.refreshFunc(response.data.result)
//     } else {
//       alert("댓글 삭제 실패")
//     }
//   })
// }

// useEffect(() => {
//   async function getCommentValue() {
//     try {
//       const response = await axios.get("http://localhost:8080/comment/" + postNumber + "/getComment")
//       setcommentValue(response.data)
//     } catch (error) {
//       console.log(error)
//     }
//   }
//   getCommentValue()
// }, [])

// const addComment = () => {
//   setcommentValue(
//     commentValue.concat({
//       postId: postNumber,
//       id: commentValue.length + 1,
//       name: "userID",
//       date: new Date().toISOString().slice(0, 10),
//       content: input,
//     })
//   )
//   setInput("")
//   createComment()
// }

// const removeComment = (id) => {
//   setcommentValue(commentValue.filter((comment) => comment.id !== id))
//   deleteComment()
// }

// const changeComment = (id, inputWord) => {
//   setcommentValue(
//     commentValue.map((comment) => {
//       if (comment.id === id) {
//         return {
//           ...comment,
//           content: inputWord,
//         }
//       }
//       return comment
//     })
//   )
//   setInput("")
//   updateComment()
// }

import React, { useState } from "react"
import { Fragment } from "react"
import axios from "axios"

import SingleComment from "./SingleComment"
import CommentReply from "./CommentReply"

function Comment(props) {
  const postId = props.postId
  const [commentValue, setcommentValue] = useState("")
  const user = "userID"

  const handleChange = (e) => {
    setcommentValue(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const variable = {
      postId: postId,
      username: user,
      text: commentValue,
    }

    axios.post("", variable).then((response) => {
      if (response.data) {
        console.log(response.data)
      } else {
        alert("댓글 저장 실패")
      }
    })
  }

  return (
    <div className="container mt-4 p-4 border-top border-dark">
      {/* Comment Lists */}
      <div className="row">
        {props.commentList &&
          props.commentList.map(
            (comment, index) =>
              !comment.responseTo && ( //대댓글은 우선 숨기겠다는 의미
                <React.Fragment key={index}>
                  <SingleComment refreshFunction={props.refreshFunction} comment={comment} postId={props.postId} key={index} />
                  <CommentReply refreshFunction={props.refreshFunction} commentList={props.commentList} parentCommentId={comment._id} postId={props.postId} key={index} />
                </React.Fragment>
              )
          )}
      </div>

      {/* Comment Form */}
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
    </div>
  )
}

export default Comment
