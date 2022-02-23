import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

import Comment from "../comments/Comment"

function PostEach() {
  let [liked, setLiked] = useState(0)
  const [data, setData] = useState([])
  const [comments, setComments] = useState([])
  const params = useParams()
  console.log(params)

  useEffect(() => {
    async function getData() {
      try {
        //응답 성공
        const response = await axios.get("http://localhost:8080/" + params.category + "/" + params.postNumber)
        setData(response.data)
        console.log(response.data._id)

        const responseC = await axios.get("http://localhost:8080/comment/" + response.data._id + "/getComment")
        setComments(responseC.data)
      } catch (error) {
        //응답 실패
        console.error(error)
      }
    }
    getData()
  }, [params.postNumber])

  const refreshFunction = (newComment) => {
    //부모의 Comments state값을 업데이트하기위한 함수
    setComments(comments.concat(newComment)) //자식들한테 값을 전달받아 Comments값 업데이트
  }

  return (
    <>
      <div className="container mt-5">
        <div className="row border-top border-3 border-dark">
          <div className="col-11 p-3" style={{ fontSize: "20px", fontWeight: "bold" }}>
            {data.category}
          </div>
          <div className="col-1 p-3 d-grid gap-2 d-flex justify-content-end">
            <button type="button" className="btn btn-outline-secondary">
              <Link to={"/" + params.category + "/createPost"}>글쓰기</Link>
            </button>
          </div>
        </div>
        <div className="row border-top border-dark">
          <div className="col-10 p-3" style={{ fontSize: "25px", fontWeight: "bolder" }}>
            {data.title}
          </div>
          <div className="col-2 p-3 d-grid gap-2 d-flex justify-content-end">
            <button type="button" className="btn btn-outline-secondary">
              <Link to={"/createPost"}>수정</Link>
            </button>
            <button type="button" className="btn btn-outline-secondary">
              <Link to={"/createPost"}>삭제</Link>
            </button>
          </div>
        </div>
        <div className="row border-top border-dark">
          <div className="col-md-1 p-2">{data.username}</div>
          <div className="col-md-2 p-2">{data.date}</div>
          <div className="col-1 offset-7 p-2 text-end">조회수&nbsp;&#124;&nbsp;{data.views}</div>
          <div className="col-1 p-2 text-end">좋아요&nbsp;&#124;&nbsp;{data.liked}</div>
        </div>
        <div className="row border-top border-dark">
          <div className="col-12 p-4 mt-3 mb-5 min-vh" style={{ fontSize: "18px" }}>
            {data.desc}
          </div>
        </div>
        <div className="row border-top border-dark">
          <div className="col-2 p-2">
            <button
              type="button"
              className="btn btn-outline-secondary mx-2"
              onClick={() => {
                setLiked(liked + 1)
              }}
            >
              좋아요 {data.liked}
            </button>
          </div>
          <div className="col-10 p-2 d-grid gap-2 d-flex justify-content-end">
            <button type="button" className="btn btn-outline-secondary">
              <Link to={`/${data.category}`}>목록</Link>
            </button>
            <button type="button" className="btn btn-outline-secondary">
              <Link to={`/${data.category}/${data.postNumber - 1}`}>이전글</Link>
            </button>
            <button type="button" className="btn btn-outline-secondary">
              <Link to={`/${data.category}/${data.postNumber + 1}`}>다음글</Link>
            </button>
          </div>
        </div>
        <Comment postId={data._id} username={data.username} commentList={comments} refreshFunction={refreshFunction} />
      </div>
    </>
  )
}

export default PostEach
