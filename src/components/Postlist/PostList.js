import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import AuthContext from "../../context/AuthContext"

import PageName from "../Common/PageName"
import Table from "./Table/Table"

const Posts = ({ authService, authErrorEventBus, postService }) => {
  const [posts, setPosts] = useState([])
  const category = useParams()
  const navigate = useNavigate()
  const [user, setUser] = useState(undefined)
  // const value = useContext(AuthContext)
  // const user = value.user

  useEffect(() => {
    authService
      .me()
      .then((user) => setUser(user))
      .catch(console.error)
    console.log(user)
    if (user) {
      if (typeof user != "string") {
        alert("로그인 후 이용해주세요.")
        navigate("/users/signin")
      }
    }
  })

  // 해당 카테고리의 게시글 데이터 받아서 posts에 저장
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/cotato/" + category.category
        )

        setPosts(response.data) // get data
      } catch (error) {
        console.log(error)
      }
    }

    fetchPosts()
  }, [])

  return (
    <div className="container">
      <div className="row m-2 p-2 align-items-center">
        <PageName
          pagename={category.category}
          user={user}
          postService={postService}
        />
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
