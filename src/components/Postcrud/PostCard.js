import React from "react"

function PostCard() {
  return (
    <div>
      {/* <!-- Nested row for non-featured blog posts--> */}
      <div className="row">
        <div className="col-lg-6">
          {/* <!-- Blog post--> */}
          <div className="card mb-4">
            <a href="#!">
              <img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." />
            </a>
            <div className="card-body">
              <div className="small text-muted">January 2, 2021</div>
              <h2 className="card-title h4">Post Title</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
              <a className="btn btn-primary" href="#!">
                Read more →
              </a>
            </div>
          </div>
          {/* <!-- Blog post--> */}
          <div className="card mb-4">
            <a href="#!">
              <img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." />
            </a>
            <div className="card-body">
              <div className="small text-muted">January 1, 2021</div>
              <h2 className="card-title h4">Post Title</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
              <a className="btn btn-primary" href="#!">
                Read more →
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          {/* <!-- Blog post--> */}
          <div className="card mb-4">
            <a href="#!">
              <img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." />
            </a>
            <div className="card-body">
              <div className="small text-muted">January 1, 2021</div>
              <h2 className="card-title h4">Post Title</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla.</p>
              <a className="btn btn-primary" href="#!">
                Read more →
              </a>
            </div>
          </div>
          {/* <!-- Blog post--> */}
          <div className="card mb-4">
            <a href="#!">
              <img className="card-img-top" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." />
            </a>
            <div className="card-body">
              <div className="small text-muted">January 1, 2021</div>
              <h2 className="card-title h4">Post Title</h2>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam.</p>
              <a className="btn btn-primary" href="#!">
                Read more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard
