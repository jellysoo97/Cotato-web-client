import React, { useState } from "react"
import axios from 'axios'
import CommentsForm from "./CommentsForm"

// 댓글들 있고 추가해주는거 (내가 원래 짰던 코드)

class Comments extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweets: [
        // 댓글 하드코딩 부분
        // {
        //   uuid: 1,
        //   writer: "김감자",
        //   date: "2022-01-24",
        //   content: "김감자 댓글입니다.",
        // },
        // {
        //   uuid: 2,
        //   writer: "이감자",
        //   date: "2022-01-25",
        //   content: "이감자 댓글입니다.",
        // },
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
          <h3 style={{ textAlign: "left", width: "300px", height: "50px", margin: "30px 0px 0px 0px" }}>작성자: userID</h3>

          {/* 댓글작성 area */}
          <div>
            <div class="input-group mb-3">
              <textarea className="form-control" placeholder="댓글을 입력하세요" id="floatingTextarea2" id="new-tweet-content" style={{ height: "100px", fontSize: "15px" }}></textarea>
              <button type="button" className="btn btn-warning" style={{ width: "100px", height: "100px", marginLeft: "30px", fontSize: "15px" }} onClick={this.addTweet}>등록</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Comments


// const commentsData = [
//   {
//     index: 1,
//     writer: '김감자',
//     date: '2022-01-24',
//     content: '김감자 댓글입니다.',
//   },
//   {
//     index: 2,
//     writer: '이감자',
//     date: '2022-01-25',
//     content: '이감자 댓글입니다.',
//   },
// ]


// function Comments(props) {

//   const [CommentValue, setCommentValue] = useState('')

//   const addComment = () => {
//     let value = document.querySelector('#new-tweet-content').value;
//     this.setState({
//       tweets: [
//         ...this.state.tweets,
//         {
//           index: this.state.tweets.length + 1,
//           writer: 'userID',
//           date: new Date().toISOString().slice(0, 10),
//           content: value,
//         },
//       ],
//     })
//   }

//   const onSubmit = (e) => {
//     e.preventDefault();

//     //댓글 다는 유저 정보, 내용들로 리퀘스트를 보내야 하는데..!? 이미 했었네!
//     const variable = {
//       content: CommentValue,
//       postId: props.postId,
//       date: new Date().toISOString().slice(0, 10),
//       // responseTo: props.comment.id,
//     };

//     axios
//       .post('http://localhost:8080/board/:id/createComment ', variable)
//       .then((response) => {
//         if (response.data) {
//           //console.log(response.data.result);
//           setCommentValue('');

//           //PostPageView(부모)의 Comments를 수정해줘야 함
//           props.refreshFunc(response.data.result);
//         } else {
//           alert('댓글 등록 실패');
//         }
//       });
//   }

//   return (
//     <div>
//       <div>
//         {/* 댓글 작성 부분 */}
//         <ul>
//           {/* {this.state.tweets.map((tweet) => {
//             return <CommentsForm key={tweet.uuid} tweet={tweet} />
//           })} */}
//         </ul>
//         {/* 글쓴이 */}
//         <h3 style={{ textAlign: "left", width: "300px", height: "50px", margin: "30px 0px 0px 30px" }}>작성자: userID</h3>

//         {/* 댓글작성 area */}
//         <div>
//           <div className="col-sm-10" style={{ float: "left", margin: "0px 0px 0px 30px" }}>
//             <textarea className="form-control" placeholder="댓글을 입력하세요" id="new-tweet-content" style={{ height: "100px", fontSize: "15px" }}></textarea>
//           </div>
//           <div className="col-sm-2" style={{ display: "inline" }}>
//             <button type="button" className="btn btn-warning" style={{ width: "100px", height: "100px", marginLeft: "30px", fontSize: "15px" }} onClick={addComment}>
//               등록
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Comments
