import React, { useState, useEffect } from "react"
import axios from "axios"

import PageName from "../Common/PageName"
import Table from "./PostTable"

function Posts({ pagename }) {
  const [posts, setPosts] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // 요청 시작 : error 와 posts 를 초기화
        setError(null)
        setPosts(null)
        // loading 상태 : true로
        setLoading(true)
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        // "http://localhost:8080/:category"
        setPosts(response.data) // get data
      } catch (e) {
        setError(e)
      }
      setLoading(false)
    }

    fetchPosts()
  }, [])

  if (loading) return <div>로딩중</div>
  if (error) return <div>에러</div>
  if (!posts) return null

  return (
    <div className="container">
      <div className="row m-2 p-2 align-items-center">
        <PageName pagename={pagename} />
      </div>
      <div className="row m-2">
        <Table data={posts} rowsPerPage={10} />
      </div>
    </div>
  )
}

export default Posts
