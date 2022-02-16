import React from "react"

function NavBar() {
  const NavItem = ({ pagename, href }) => {
    return (
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href={href}>
          {pagename}
        </a>
      </li>
    )
  }
  const NavBtn = ({ href, title }) => {
    return (
      <a href={href} className="btn btn-outline-primary" style={{ marginRight: "12px", padding: "0.375rem 1.5rem" }}>
        {title}
      </a>
    )
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {/* <img src="/docs/5.1/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" /> */}
            <i className="bi bi-cloud"></i>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <NavItem pagename={"Home"} href={"/"} />
              <NavItem pagename={"IT Issue"} href={"/it"} />
              <NavItem pagename={"Session"} href={"/session"} />
              <NavItem pagename={"Study"} href={"/study"} />
              <NavItem pagename={"Project"} href={"/project"} />
              <NavItem pagename={"My Page"} href={"/myPage"} />
            </ul>
            <NavBtn href={"/login"} title={"Log in"} />
            <NavBtn href={"/register"} title={"Register"} />
            <NavBtn href={"/edit"} title={"회원정보 수정"} />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
