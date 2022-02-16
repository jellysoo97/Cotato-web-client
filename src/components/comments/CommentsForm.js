import { useState } from "react"

export default function CommentsForm({ tweet }) {
  const msg = "메시지";
  // const daeDat = () => {
  //   alert("대댓글!!!")
  // }

  return (
    // 작성된 댓글모음 부분
    <div>
      {/* 글쓴이 + 날짜 */}
      <div>
        <h3 style={{ textAlign: "left", width: "300px", height: "50px" }}>
          {tweet.writer}
          <h6 style={{ display: "inline", margin: "0px 0px 0px 0px" }}>{tweet.date}</h6>
        </h3>
      </div>

      {/* 댓글 내용 */}
      <div>
        <p>{tweet.content}</p>
        {/* <button onClick={ ()=>{ 따봉변경(따봉+1) } } type="button" className="btn btn-outline-warning">좋아요</button> {따봉} */}
        {/* <button type="button" className="btn btn-outline-warning">좋아요</button> */}
        <button onclick={() => (
          alert(msg)
        )} type="button" className="btn btn-outline-warning" style={{ float: "right" }}>
          답글달기
        </button>{" "}
        <br /> <br />
        <hr />
      </div>
    </div>
  )
}
