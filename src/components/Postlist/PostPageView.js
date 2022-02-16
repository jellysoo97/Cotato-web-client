import React, { useState, useEffect } from "react"
import axios from 'axios'
import Category from "../Common/Category"
import PostEach from "./PostEach"
import Comments from '../comments/Comments';
import PageName from '../Common/PageName';

function PostPageView(props) {
  const postId = props.match.params.id 
  const variable = { postId: postId }

  const [PostDesc, setPostDesc] = useState('');
  const [Comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/:id').then((response) => {
      if (response) {
        //console.log(response.data)
        setPostDesc(response.data)
      } else {
        alert('게시글 정보 가져오기 실패')
      }
    });

    //(responseTo를 받아오려면) 모든 comment 정보들을 DB에서 가져와야 함
    axios
      .post('http://localhost:8080/board/:id/getComment', variable)
      .then((response) => {
        if (response) {
          //console.log(response.data)
          setComments(response.data)
        } else {
          alert('댓글 정보 가져오기 실패')
        }
      });
  }, []);

  //Comments 업데이트
  const refreshFunc = (newComment) => {
    setComments(Comments.concat(newComment));
  };

  return (
    <>
      <div className="container">
        <PageName />
        {/* <div className="container" style={{ backgroundColor: "black"}}>  */}
        <div>
          <div className="row">
            <div className="col-3">
              <Category />
            </div>
            <div className="col-9">
              {/* <div className="col-9" style={{ backgroundColor: "skyblue"}}> */}
              <PostEach />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* <div className="container" style={{ backgroundColor: "gray"}}>  */}
        <div>
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              {/* <div className="col-9" style={{ backgroundColor: "pink"}}> */}
              {/* <Comments /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default PostPageView
