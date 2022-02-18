import React, { useState, useEffect } from "react"
import Comments from "../comments/Comments"
import dummyData from '../Postlist/PostData'

function PostEach(props) {
  let [따봉, 따봉변경] = useState(0)
  console.log(props.match)
  const [Data, setData] = useState({})


  useEffect(() => {
    setData(dummyData)
  }, [])
  

  return (
    <>
    <div className="container">
      <div>
        <hr />
        카테고리
        <hr />
        <h3>
          <b>(제목제목제목제목제목)</b>
        </h3>
        <hr />
        <p style={{ display: "inline", margin: "0px 5px 0px 0px", color: "red" }}>(작성자)</p>
        <p style={{ display: "inline", color: "red" }}>(날짜)</p>
        <p style={{ display: "inline", float: "right" }}>{따봉}</p>
        <p style={{ display: "inline", float: "right", margin: "0px 5px 0px 0px" }}>좋아요</p>
        <p style={{ display: "inline", float: "right", margin: "0px 10px 0px 0px", color: "red" }}>(조num)</p>
        <p style={{ display: "inline", float: "right", margin: "0px 5px 0px 0px" }}>조회수</p>
        <hr />
        내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용
        <br />
        <br />
        <button type="button" className="btn btn-outline-warning" style={{ float: "right", margin: "0px 0px 0px 0px" }}>
          {" "}
          다음글{" "}
        </button>
        <button type="button" className="btn btn-outline-warning" style={{ float: "right", margin: "0px 10px 0px 0px" }}>
          {" "}
          이전글{" "}
        </button>
        <button type="button" className="btn btn-outline-warning" style={{ float: "right", margin: "0px 10px 0px 0px" }}>
          {" "}
          목록{" "}
        </button>
        <button
          type="button"
          className="btn btn-outline-warning"
          style={{ float: "left", margin: "0px 0px 0px 0px" }}
          onClick={() => {
            따봉변경(따봉 + 1)
          }}
        >
          {" "}
          좋아요 {따봉}{" "}
        </button>
        <br />
        <br />
        <hr />
        <Comments />
      </div>
      </div>
    </>
  )
}
export default PostEach
