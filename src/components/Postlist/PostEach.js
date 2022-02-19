import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import Comments from "../comments/Comments"


function PostEach() {
  let [따봉, 따봉변경] = useState(0)
  const [data, setData] = useState([])
  const { id } = useParams()

  useEffect(() => {
    async function getData() {
      try {
        //응답 성공
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            //url 뒤에 붙는 param id값
            id: id,
          },
        })
        setData(response.data)
        console.log(response.data)
      } catch (error) {
        //응답 실패
        console.error(error)
      }
    }
    getData()
  }, [id])

  return (
    <>
      {data
        ? data.map((item, index) => (
            <div className="container" key={index}>
              <div>
                <hr />
                카테고리
                <hr />
                <h3>
                  <b>{item.title}</b>
                </h3>
                <hr />
                <p style={{ display: "inline", margin: "0px 5px 0px 0px", color: "red" }}>(작성자)</p>
                <p style={{ display: "inline", color: "red" }}>(날짜)</p>
                <p style={{ display: "inline", float: "right" }}>{따봉}</p>
                <p style={{ display: "inline", float: "right", margin: "0px 5px 0px 0px" }}>좋아요</p>
                <hr />
                {item.body}
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
          ))
        : ""}
    </>
  )
}
export default PostEach
