import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import PageName from "../Common/PageName"
import Table from "./Table/Table"

function Posts() {
  const [posts, setPosts] = useState([])
  const category = useParams()

  // 해당 카테고리의 게시글 데이터 받아서 posts에 저장
  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get("http://localhost:8080/" + category.category)
        setPosts(response.data) // get data
      } catch (error) {
        console.log(error)
      }
    }
    getPosts()
  }, [])

  return (
    <div className="container">
      <div className="row m-2 p-2 align-items-center">
        <PageName pagename={category.category} />
      </div>
      <div className="row m-2">
        {/* Table(자식 컴포넌트)에 props 전달 */}
        <Table data={posts} rowsPerPage={10} />
      </div>
    </div>
  )
}

export default Posts
