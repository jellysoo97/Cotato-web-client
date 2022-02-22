import React, { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"

import Comments from "../comments/Comments"

function PostEach() {
  let [liked, setLiked] = useState(0)
  const [data, setData] = useState([])
  // const { id } = useParams()
  const { postNumber } = useParams()

  useEffect(() => {
    async function getData() {
      try {
        //응답 성공
        const response = await axios.get(
          "http://localhost:8080/" +
            window.location.pathname.substring(1).split("/")[0] +
            "/" +
            postNumber
        )
        setData(response.data)
        console.log(response.data)
      } catch (error) {
        //응답 실패
        console.error(error)
      }
    }
    getData()
  }, [postNumber]) //postNumber

  return (
    <>
      <div className="container mt-5">
        <div className="row border-top border-3 border-dark">
          <div
            className="col-11 p-3"
            style={{ fontSize: "20px", fontWeight: "bold" }}
          >
            {/* {data.userId} */}
            {data.category}
          </div>
          <div className="col-1 p-3 d-grid gap-2 d-flex justify-content-end">
            <button type="button" className="btn btn-outline-secondary">
              <Link to={`/${data.category}/createPost`}>글쓰기</Link>
            </button>
          </div>
        </div>
        <div className="row border-top border-dark">
          <div
            className="col-10 p-3"
            style={{ fontSize: "25px", fontWeight: "bolder" }}
          >
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
          <div className="col-md-1 p-2">
            {/* {data.userId} */}
            작성자 {data.username}
          </div>
          <div className="col-md-2 p-2">
            {/* {data.id} */}
            날짜 {data.date}
          </div>
          <div className="col-1 offset-7 p-2 text-end">
            조회수&nbsp;&#124;&nbsp;{data.views}
            {/* {data.views} */}
          </div>
          <div className="col-1 p-2 text-end">
            좋아요&nbsp;&#124;&nbsp;{data.liked}
            {/* {data.liked} */}
          </div>
        </div>
        <div className="row border-top border-dark">
          <div
            className="col-12 p-4 mt-3 mb-5 min-vh"
            style={{ fontSize: "18px" }}
          >
            {/* {data.body}
                  {data.desc} */}
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
              <Link to={`/${data.category}/${data.postNumber - 1}`}>
                이전글
              </Link>
            </button>
            <button type="button" className="btn btn-outline-secondary">
              <Link to={`/${data.category}/${data.postNumber + 1}`}>
                다음글
              </Link>
            </button>
          </div>
        </div>
        <Comments />
      </div>
    </>
  )
}

export default PostEach
