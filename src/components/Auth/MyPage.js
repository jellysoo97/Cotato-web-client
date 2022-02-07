import React from "react"

function MyPage() {
  return (
    <div className="container" style={{marginTop:"50px"}}>
      <div className="row">
        {/* 회원 정보 */}
        <div className="col-6">
          <div class="card border-warning">
            <h3 class="card-header"><img src='./images/myPage1.png' style={{width:"30px", height:"30px", margin:"0px 10px 0px 0px"}}/>회원 정보
              <button style={{display:"inline", float:"right"}} type="button" class="btn btn-outline-warning">회원 정보 변경</button>
            </h3>
            <div class="card-body">
              <div className="row">
                <div className="col-6">
                <h4 class="card-title" style={{textAlign:"center"}}>이름</h4></div>
                <div className="col-5"><h4 style={{textAlign:"center", fontWeight:'bold'}}>김감자</h4></div>
              </div>
              <div className="row">
                <div className="col-6">
                <h4 class="card-title" style={{textAlign:"center"}}>아이디</h4></div>
                <div className="col-5"><h4 style={{textAlign:"center", fontWeight:'bold'}}>potato</h4></div>
              </div>
              <div className="row">
                <div className="col-6">
                <h4 class="card-title" style={{textAlign:"center"}}>이메일</h4></div>
                <div className="col-5" ><h5 style={{textAlign:"center", fontWeight:'bold'}}>potato@naver.com</h5></div>
              </div>
            </div>
          </div>
        </div>
        {/* 활동 통계 */}
        <div className="col-6">
          <div class="card border-warning">
            <h3 class="card-header"><img src='./images/myPage2.png' style={{width:"30px", height:"30px", margin:"0px 10px 0px 0px"}}/>활동 통계</h3>
            <div class="card-body">
              <div className="row">
                <div className="col" style={{textAlign:"center"}}>스터디</div>
                <div className="col" style={{textAlign:"center"}}>프로젝트</div>
                <div className="col" style={{textAlign:"center"}}>소모임</div>
                <div className="col" style={{textAlign:"center"}}>번개</div>
              </div>
              <br />
              <div className="row">
                <div className="col" style={{textAlign:"center", fontWeight:'bold'}}><h1>0</h1></div>
                <div className="col" style={{textAlign:"center", fontWeight:'bold'}}><h1>1</h1></div>
                <div className="col" style={{textAlign:"center", fontWeight:'bold'}}><h1>2</h1></div>
                <div className="col" style={{textAlign:"center", fontWeight:'bold'}}><h1>3</h1></div>
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
            <h3 class="card-header"><img src='./images/myPage3.png' style={{width:"30px", height:"30px", margin:"0px 10px 0px 0px"}}/>최근 작성글
              <button style={{ display: "inline", float: "right" }} type="button" class="btn btn-outline-warning">더보기</button>
            </h3>
            <div class="card-body">
              <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 글을 썼다.</p></button>
              </div>
            </div>
          </div>
        </div>
        {/* 최근 작성 댓글 */}
        <div className="col-6">
          <div class="card border-warning">
            <h3 class="card-header"><img src='./images/myPage4.png' style={{width:"30px", height:"30px", margin:"0px 10px 0px 0px"}}/>최근 작성 댓글
              <button style={{display:"inline", float:"right"}} type="button" class="btn btn-outline-warning">더보기</button>
            </h3>
            <div class="card-body">
            <div class="list-group">
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 댓글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 댓글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 댓글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 댓글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 댓글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 댓글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 댓글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 댓글을 썼다.</p></button>
                <button type="button" class="list-group-item list-group-item-action" style={{textAlign:"center"}}><p style={{fontWeight:'bold', display:"inline"}}>[IT Issue]</p>&nbsp;&nbsp;&nbsp;<p style={{display:"inline"}}>대충 이런 댓글을 썼다.</p></button>
              </div>
            </div>
          </div>
        </div>
      </div>


      
    </div>
  )
}
export default MyPage