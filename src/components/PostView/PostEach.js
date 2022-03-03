import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

// import { LikeBtn } from "./Like"
import PostEachView from "./PostEachView"

function PostEach() {
  // const [liked, setLiked] = useState(false)
  // const [likedNum, setLikedNum] = useState(0)
  const [data, setData] = useState([])
  const [comments, setComments] = useState([])
  const params = useParams()
  const category = params.category
  const postNumber = Number(params.postNumber)
  const navigate = useNavigate()

  // postNumber 바뀔때마다 리렌더링
  useEffect(() => {
    async function getData() {
      try {
        // get 게시글
        const response = await axios.get(
          "http://localhost:8080/" + category + "/" + postNumber
        )
        setData(response.data)

        // get 댓글
        const responseC = await axios.get(
          "http://localhost:8080/comment/" + response.data._id + "/getComments"
        )
        setComments(responseC.data)
      } catch (error) {
        console.log(error)
        handlePrePost()
      }
    }
    getData()
  }, [postNumber])

  // get 이전글
  async function getPrev() {
    try {
      const response = await axios.get(
        "http://localhost:8080/" + category + "/" + postNumber + "/prevPost"
      )
      navigate(`/${response.data[0].category}/${response.data[0].postNumber}`)
    } catch (error) {
      console.log(error)
      handlePrePost()
    }
  }

  // get 다음글
  async function getNext() {
    try {
      const response = await axios.get(
        "http://localhost:8080/" + category + "/" + postNumber + "/nextPost"
      )
      navigate(`/${response.data[0].category}/${response.data[0].postNumber}`)
    } catch (error) {
      console.log(error)
      handlePrePost()
    }
  }

  function handleDelete() {
    alert("게시글을 삭제하시겠습니까?")

    async function deletePost() {
      try {
        const response = await axios.delete(
          "http://localhost:8080/deletePost/" + data._id
        )
        if (response) {
          console.log(response)
        }
      } catch (error) {
        console.log(error)
      }
    }
    deletePost()
    alert("삭제 완료")
    navigate("/" + category)
  }

  // async function putLike() {
  //   setLiked(!liked)
  //   setLikedNum(1)
  //   const variable = {
  //     liked: likedNum,
  //   }

  //   axios
  //     .put("http://localhost:8080/postLike/" + postNumber, variable)
  //     .then((response) => {
  //       console.log(response.config.data)
  //       setLikedNum(0)
  //       console.log(likedNum)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  // 해당 게시글이 없는 에러 핸들링 함수
  function handlePrePost() {
    alert("해당 게시글이 없습니다.")
    navigate(`/${category}`)
  }

  //부모의 Comments state값을 업데이트하기 위한 함수
  const refreshFunction = (newComment) => {
    setComments(comments.concat(newComment)) //자식들한테 값을 전달받아 Comments값 업데이트
    console.log(newComment)
  }

  return (
    <PostEachView
      data={data}
      comments={comments}
      getPrev={getPrev}
      getNext={getNext}
      handleDelete={handleDelete}
      refreshFunction={refreshFunction}
    />
  )
}

export default PostEach
