import axios from "axios"
import React, { useState, useEffect } from "react"

function MyPage() {
  const [name, setName] = useState()
  const [user, setUser] = useState()
  const [rpost, setPost] = useState()
  const [rcomment, setComment] = useState()

  useEffect(() => {
    async function getInfo() {
      try {
        const responseUser = await axios.get("http://localhost:8080/mypage" + name + "/getUser")
        setUser(responseUser.data)
        const responsePost = await axios.get("http://localhost:8080/mypage" + name + "/recentPost")
        setPost(responsePost.data)
        const responseComment = await axios.get("http://localhost:8080/mypage" + name + "/recentComment")
        setPost(responseComment.data)
      } catch (error) {
        console.log(error)
      }
    }
    getInfo()
  }, [])

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="row">
        {/* 회원 정보 */}
        <div className="col-12">
          <div class="card border-warning">
            <h3 class="card-header">
              <img src="./images/myPage1.png" style={{ width: "30px", height: "30px", margin: "0px 10px 0px 0px" }} />
              회원 정보
              <button style={{ display: "inline", float: "right" }} type="button" class="btn btn-outline-warning">
                회원 정보 변경
              </button>
            </h3>
            <div class="card-body">
              <div className="row">
                <div className="col-6">
                  <h4 class="card-title" style={{ textAlign: "center" }}>
                    이름
                  </h4>
                </div>
                <div className="col-5">
                  <h4 style={{ textAlign: "center", fontWeight: "bold" }}>{user.name}</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h4 class="card-title" style={{ textAlign: "center" }}>
                    아이디
                  </h4>
                </div>
                <div className="col-5">
                  <h4 style={{ textAlign: "center", fontWeight: "bold" }}>{user.username}</h4>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <h4 class="card-title" style={{ textAlign: "center" }}>
                    이메일
                  </h4>
                </div>
                <div className="col-5">
                  <h5 style={{ textAlign: "center", fontWeight: "bold" }}>{user.email}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div className="row">
        {/* 최근 작성글 */}
        <div className="col-6">
          <div class="card border-warning">
            <h3 class="card-header">
              <img src="./images/myPage3.png" style={{ width: "30px", height: "30px", margin: "0px 10px 0px 0px" }} />
              최근 작성글
              <button style={{ display: "inline", float: "right" }} type="button" class="btn btn-outline-warning">
                더보기
              </button>
            </h3>
            <div class="card-body">
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold", display: "inline" }}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{ display: "inline" }}>대충 이런 글을 썼다.</p>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 최근 작성 댓글 */}
        <div className="col-6">
          <div class="card border-warning">
            <h3 class="card-header">
              <img src="./images/myPage4.png" style={{ width: "30px", height: "30px", margin: "0px 10px 0px 0px" }} />
              최근 작성 댓글
              <button style={{ display: "inline", float: "right" }} type="button" class="btn btn-outline-warning">
                더보기
              </button>
            </h3>
            <div class="card-body">
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action" style={{ textAlign: "center" }}>
                  <p style={{ fontWeight: "bold", display: "inline" }}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{ display: "inline" }}>대충 이런 댓글을 썼다.</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MyPage
