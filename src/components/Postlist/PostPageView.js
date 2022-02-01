import React from "react"
import Category from "../Basic/Category"
import PostEach from "./PostEach"
import Comments from "../comments/Comments"


function PostPageView() {
    return (
    <>
      <div className="container"> 
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
            <div className="col-3">
              
            </div>
            <div className="col-9">
            {/* <div className="col-9" style={{ backgroundColor: "pink"}}> */}
              <Comments />
            </div>
          </div>
        </div>
          
      </div>
    </>
      
    )
  }
export default PostPageView