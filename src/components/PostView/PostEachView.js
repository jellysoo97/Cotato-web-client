import React from "react"
import { Link } from "react-router-dom"

import Comment from "./comments/Comment"
import parse from "html-react-parser"

function PostEachView(props) {
  const data = props.data
  const category = props.category
  const postNumber = props.postNumber
  const getPrev = props.getPrev
  const getNext = props.getNext
  const likeBtn = props.likeBtn
  const like = props.like
  const likedNum = props.likedNum
  const deletePost = props.deletePost
  const comments = props.comments
  const refreshFunction = props.refreshFunction
  const user = props.user

  return (
    <div className="container mt-5">
      {/* ---------------------------- 카테고리, 글쓰기 ---------------------------- */}
      <div className="row border-top border-3 border-dark">
        <div
          className="col-9 p-3"
          style={{ fontSize: "20px", fontWeight: "bold" }}
        >
          {category}
        </div>
        {user ? (
          <div className="col-3 p-3 d-grid gap-2 d-flex justify-content-end">
            <button type="button" className="btn btn-outline-secondary">
              <Link
                to={"/cotato/" + category + "/createPost"}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                글쓰기
              </Link>
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* ---------------------------- 제목, 수정, 삭제 ---------------------------- */}
      <div className="row border-top border-dark">
        <div
          className="col-10 p-3"
          style={{ fontSize: "25px", fontWeight: "bolder" }}
        >
          {data.title}
        </div>
        {user ? (
          <div className="col-2 p-3 d-grid gap-2 d-flex justify-content-end">
            <button type="button" className="btn btn-outline-secondary">
              <Link
                to={"/cotato/" + category + "/" + postNumber + "/createPost"}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                수정
              </Link>
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary"
              onClick={deletePost}
            >
              삭제
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>

      {/* ---------------------------- 아이디, 날짜, 조회수, 좋아요 ---------------------------- */}
      <div className="row border-top border-dark">
        <div className="col-2 p-2">{data.username}</div>
        <div className="col-3 p-2">&nbsp;&#124;&nbsp;{data.date}</div>
        <div className="col-1 offset-5 p-2 text-end">
          조회수&nbsp;&#124;&nbsp;{data.views}
        </div>
        <div className="col-1 p-2 text-end">
          좋아요&nbsp;&#124;&nbsp;{likedNum}
        </div>
      </div>

      {/* ---------------------------- 내용 ---------------------------- */}

      <div className="row border-top border-dark">
        <div
          className="col-12 p-4 mt-3 mb-5 min-vh"
          style={{ fontSize: "18px" }}
        >
          {parse("" + data.desc)}
        </div>
      </div>

      {/* ---------------------------- 좋아요, 목록, 이전글, 다음글 ---------------------------- */}
      <div className="row border-top border-dark">
        <div className="col-2 p-2">
          {/* <img src="public/images/heartfilled.png" alt={"엑박"} /> */}
          <button type="button" className={likeBtn} onClick={like}>
            좋아요
          </button>
          {/* <button type="button" className="btn btn-outline-secondary">
            좋아요
          </button> */}
        </div>
        <div className="col-10 p-2 d-grid gap-2 d-flex justify-content-end">
          <button type="button" className="btn btn-outline-secondary">
            <Link
              to={`/cotato/${data.category}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              목록
            </Link>
          </button>
          <button type="button" className="btn btn-outline-secondary">
            <Link
              to={`/cotato/${data.category}/${data.postNumber}`}
              onClick={getPrev}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              이전글
            </Link>
          </button>
          <button type="button" className="btn btn-outline-secondary">
            <Link
              to={`/cotato/${category}/${postNumber}`}
              onClick={getNext}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              다음글
            </Link>
          </button>
        </div>
      </div>

      {/* ---------------------------- 댓글 ---------------------------- */}
      <Comment
        postId={data._id}
        username={data.username}
        commentList={comments}
        refreshFunction={refreshFunction}
        user={user}
      />
    </div>
  )
}

export default PostEachView
