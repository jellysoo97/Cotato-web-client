import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import PageName from "../Common/PageName"
import Table from "./Table/Table"

const Posts = ({ postService }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const [posts, setPosts] = useState([])
  const category = useParams()

  // 해당 카테고리의 게시글 데이터 받아서 posts에 저장
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 요청 시작 : error 와 posts 를 초기화
        setError(null)
        setPosts(null)
        // loading 상태 : true로
        setLoading(true)

        const response = await axios.get(
          "http://localhost:8080/cotato/" + category.category
        )

        setPosts(response.data) // get data
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }

    fetchPosts()
  }, [])
  // console.log(window.location.pathname.substring(1))
  if (loading) return <div>로딩중</div>
  if (error) return <div>에러</div>
  if (!posts) return null

  return (
    <div className="container">
      <div className="row m-2 p-2 align-items-center">
        <PageName pagename={category.category} postService={postService} />
      </div>
      <div className="row m-2">
        {/* Table(자식 컴포넌트)에 props 전달 */}
        <Table data={posts} rowsPerPage={10} />
      </div>
    </div>
  )
}
export async function nextPost() {}
export async function prevPost() {}

export default Posts
