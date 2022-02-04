import React from "react"

function Category() {
  const CateName = ({ link, name }) => {
    return (
      <a href={link} className="list-group-item list-group-item-secondary" style={{ padding: "0.8rem 1rem" }}>
        {name}
      </a>
    )
  }

  return (
    <div style={{ height: "500px" }}>
      <ul className="list-group">
        <CateName link={"/postlist"} name={"IT Issue"} />
        <CateName link={"#"} name={"Session"} />
        <CateName link={"#"} name={"Study"} />
        <CateName link={"#"} name={"Project"} />
      </ul>
    </div>
  )
}

export default Category
