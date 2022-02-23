import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"

import PageName from "../Common/PageName"
import Table from "./Table/Table"

function Posts() {
  const [posts, setPosts] = useState([])
  const category = useParams()
  console.log(category.category)

  useEffect(() => {
    async function getPosts() {
      try {
        const response = await axios.get("http://localhost:8080/" + category.category)
        console.log("http://localhost:8080/" + category.category)
        console.log(response.data)
        setPosts(response.data) // get data
        console.log(posts)
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
        <Table data={posts} rowsPerPage={10} category={category.category} />
      </div>
    </div>
  )
}

export default Posts
