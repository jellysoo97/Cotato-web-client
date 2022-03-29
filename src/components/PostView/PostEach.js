import React, { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

// import { LikeBtn } from "./Like"
import PostEachView from "./PostEachView"
import parse from "html-react-parser"

function PostEach({ authService, authErrorEventBus, postService }) {
  const [liked, setLiked] = useState(false)
  const [likeBtn, setlikeBtn] = useState("")
  const [data, setData] = useState([])
  const [comments, setComments] = useState([])
  const params = useParams()
  const category = params.category
  const postNumber = Number(params.postNumber)
  const navigate = useNavigate()
  const [user, setUser] = useState(undefined)

  // 인증
  // useEffect(() => {
  //   authErrorEventBus.listen((err) => {
  //     console.log(err)
  //     setUser(undefined)
  //   })
  // }, [authErrorEventBus])
  // useEffect(() => {
  //   authService.me().then(setUser).catch(console.error)
  // }, [authService])

  // postNumber 바뀔때마다 리렌더링
  useEffect(() => {
    async function getData() {
      try {
        // get 게시글
        const response = await axios.get(
          "http://localhost:8080/cotato/" + category + "/" + postNumber
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

  useEffect(() => {
    async function getLike() {
      try {
        const response = await axios.get("http://localhost:8080/cotato/getLike")
        console.log(response.data.result)
        if (response.data.result.length == 0) {
          setLiked(false)
        } else {
          setLiked(true)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getLike()
    liked == false
      ? setlikeBtn("btn btn-outline-secondary")
      : setlikeBtn("btn btn-secondary")
  }, [liked])

  // get 이전글
  async function getPrev() {
    try {
      const response = await axios.get(
        "http://localhost:8080/cotato/" +
          category +
          "/" +
          postNumber +
          "/prevPost"
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
        "http://localhost:8080/cotato/" +
          category +
          "/" +
          postNumber +
          "/nextPost"
      )
      navigate(`/${response.data[0].category}/${response.data[0].postNumber}`)
    } catch (error) {
      console.log(error)
      handlePrePost()
    }
  }

  // 좋아요

  async function like() {
    // liked == false ? setLiked(true) : setLiked(false)
    liked == false ? upLike() : unLike()
    async function upLike() {
      setLiked(true)
      const variable = {
        userId: data.userId,
        postId: data.postId,
      }

      await axios
        .post("http://localhost:8080/cotato/upLike", variable)
        .then((response) => {
          console.log(response.data.result)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    async function unLike() {
      setLiked(false)
      const variable = {
        userId: data.userId,
        postId: data.postId,
      }

      await axios
        .post("http://localhost:8080/cotato/unLike", variable)
        .then((response) => {
          console.log("un response: ", response.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  // 게시글 삭제
  const deletePost = async (e) => {
    e.preventDefault()
    postService.deletePost(data._id)
    setTimeout(() => {
      alert("해당 게시글 삭제 완료")
      navigate("/cotato/" + category)
    }, 500)
  }

  // 해당 게시글이 없는 에러 핸들링 함수
  function handlePrePost() {
    alert("해당 게시글이 없습니다.")
    navigate(`/cotato/${category}`)
  }

  //부모의 Comments state값을 업데이트하기 위한 함수
  const refreshFunction = (newComment) => {
    setComments(comments.concat(newComment)) //자식들한테 값을 전달받아 Comments값 업데이트
    console.log(newComment)
  }

  return (
    <PostEachView
      data={data}
      category={category}
      postNumber={postNumber}
      comments={comments}
      getPrev={getPrev}
      getNext={getNext}
      likeBtn={likeBtn}
      like={like}
      deletePost={deletePost}
      refreshFunction={refreshFunction}
      user={user}
    />
  )
}

export default PostEach
