import React, { useState, useEffect } from "react"
import PageName from "../Common/PageName"
import Category from "../Common/Category"
import countriesData from "./PostData"
import Table from "./PostTable"

function PostList() {
  const [countries, setCountries] = useState([...countriesData]);

  // useEffect(() => {
  //   setCountries(Table)
  // }, [])
  
  return (
    <>
      <main>
        <div className="container">
          <PageName />
          <div className="container" style={{ height: "auto", minHeight: "100%", paddingBottom: "20px" }}>
            <div className="row">
              <div className="col-3">
                <Category />{" "}
              </div>
              <Table data={countries} rowsPerPage={10} />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default PostList
