import React, { useState, useEffect } from "react"
import axios from "axios"
import PostCard from "../Postcrud/PostCard"

function PostPage(props) {
  //url parameter 맞겠찌
  //const postId = props.match.params.id
  //const variable = {postId:postId}

  const [Title, setTitle] = useState("")
  const [Contents, setContents] = useState([])
  const [Comments, setComments] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/createPost").then((response) => {
      if (response.data.success) {
        //console.log(response.data)
        setContents(response.data)
      } else {
        alert("게시글 가져오기 실패")
      }
    })

    //(responseTo를 받아오려면) 모든 comment 정보들을 DB에서 가져와야 함
    //댓글 받아오는 api가 없어용
    // axios.post('http://localhost:3000/', variable)
    // .then(response=>{
    //     if(response.data.success){
    //         //console.log(response.data.comments)
    //         setComments(response.data.comments)
    //     }else{
    //         alert('댓글 정보 가져오기 실패')
    //     }
    // })
  }, [])

  //Comments를 업데이트 -> newComment를 추가
  const refreshFunc = (newComment) => {
    setComments(Comments.concat(newComment))
  }

  return (
    <div>
      {/* <!-- Page content--> */}
      <div class="container">
        <div class="row">
          {/* <!-- Blog entries--> */}
          <div class="col-lg-8">
            {/* <!-- Featured blog post--> */}
            <div class="card mb-4">
              <a href="#!">
                <img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." />
              </a>
              <div class="card-body">
                <div class="small text-muted">January 1, 2021</div>
                <h2 class="card-title">Featured Post Title</h2>
                <p class="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate
                  voluptatibus possimus, veniam magni quis!
                </p>
              </div>
            </div>
            <PostCard />
            {/* <!-- Pagination--> */}
            <nav aria-label="Pagination">
              <hr class="my-0" />
              <ul class="pagination justify-content-center my-4">
                <li class="page-item disabled">
                  <a class="page-link" href="#">
                    Newer
                  </a>
                </li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href="#!">
                    1
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#!">
                    2
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#!">
                    3
                  </a>
                </li>
                <li class="page-item disabled">
                  <a class="page-link" href="#!">
                    ...
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#!">
                    15
                  </a>
                </li>
                <li class="page-item">
                  <a class="page-link" href="#!">
                    Older
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <!-- Side widgets--> */}
          <div class="col-lg-4">
            {/* <!-- Search widget--> */}
            <div class="card mb-4">
              <div class="card-header">Search</div>
              <div class="card-body">
                <div class="input-group">
                  <input class="form-control" type="text" placeholder="Search" aria-label="Enter search term..." aria-describedby="button-search" />
                  <button class="btn btn-warning" id="button-search" type="button">
                    Search
                  </button>
                </div>
              </div>
            </div>
            {/* <!-- Categories widget--> */}
            <div class="card mb-4">
              <div class="card-header">Categories</div>
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!">Web Design</a>
                      </li>
                      <li>
                        <a href="#!">HTML</a>
                      </li>
                      <li>
                        <a href="#!">Freebies</a>
                      </li>
                    </ul>
                  </div>
                  <div class="col-sm-6">
                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!">JavaScript</a>
                      </li>
                      <li>
                        <a href="#!">CSS</a>
                      </li>
                      <li>
                        <a href="#!">Tutorials</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Side widget--> */}
            <div class="card mb-4">
              <div class="card-header">Side Widget</div>
              <div class="card-body">You can put anything you want inside of these side widgets. They are easy to use, and feature the Bootstrap 5 card component!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostPage
