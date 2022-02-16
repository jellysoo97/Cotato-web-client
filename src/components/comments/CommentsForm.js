import React from "react"

const commentsData = [
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
]

function CommentsForm({ comment }) {
  return (
    // 작성된 댓글모음 부분
    <div>
      {/* 글쓴이 + 날짜 */}
      <div>
        <h3 style={{ textAlign: 'left', width: '300px', height: '50px' }}>
          {comment.writer}
          <h6 style={{ display: 'inline', margin: '0px 0px 0px 0px' }}>
            {comment.date}
          </h6>
        </h3>
      </div>
      {/* 댓글 내용 */}
      <div>
        <p>{comment.content}</p>
        {/* <button onClick={ ()=>{ 따봉변경(따봉+1) } } type="button" className="btn btn-outline-warning">좋아요</button> {따봉} */}
        {/* <button type="button" className="btn btn-outline-warning">좋아요</button> */}
        <button
          type="button"
          className="btn btn-outline-warning"
          style={{ float: 'right' }}
        >
          답글달기
        </button>{' '}
        <br /> <br />
        <hr />
      </div>
    </div>
  );
}

export default CommentsForm