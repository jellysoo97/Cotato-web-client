import React from "react"
import CommentsForm from "./CommentsForm"

class Comments extends React.Component {
  constructor(props) {
    super(props)
    // 댓글 하드코딩 부분
    this.state = {
      tweets: [
        {
          uuid: 1,
          writer: "김감자",
          date: "2022-01-24",
          content: "김감자 댓글입니다.",
        },
        {
          uuid: 2,
          writer: "이감자",
          date: "2022-01-25",
          content: "이감자 댓글입니다.",
        },
      ],
    }
    this.addTweet = this.addTweet.bind(this)
  }
  addTweet() {
    let value = document.querySelector("#new-tweet-content").value
    this.setState({
      tweets: [
        ...this.state.tweets,
        {
          uuid: this.state.tweets.length + 1,
          writer: "userID",
          date: new Date().toISOString().slice(0, 10),
          content: value,
        },
      ],
    })
  }
  render() {
    return (
      <div>
        <div>
          {/* 댓글 작성 부분 */}
          <ul>
            {this.state.tweets.map((tweet) => {
              return <CommentsForm key={tweet.uuid} tweet={tweet} />
            })}
          </ul>
          {/* 글쓴이 */}
          <h3 style={{ textAlign: "left", width: "300px", height: "50px", margin:"30px 0px 0px 30px" }}>작성자: userID</h3>

          {/* 댓글작성 area */}
          <div>
            <div class="col-sm-10" style={{ float: "left" , margin:"0px 0px 0px 30px"}}>
              <textarea class="form-control" placeholder="댓글을 입력하세요" id="floatingTextarea2" id="new-tweet-content" style={{ height: "100px", fontSize: "15px" }}></textarea>
            </div>
            <div class="col-sm-2" style={{display:"inline"}}>
              <button type="button" class="btn btn-warning" style={{ width: "100px", height: "100px", marginLeft: "30px", fontSize: "15px" }} onClick={this.addTweet}>
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments
