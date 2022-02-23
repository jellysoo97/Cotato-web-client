import React, { useState } from "react"
import { Link } from "react-router-dom"

import TablePageData from "./TableData"
import TableFooter from "./TableFooter"

const Table = ({ data, rowsPerPage }) => {
  const header = [
    {
      header: "번호",
      width: "5%",
    },
    {
      header: "제목",
      width: "40%",
    },
    {
      header: "작성자",
      width: "10%",
    },
    {
      header: "작성일",
      width: "15%",
    },
    {
      header: "좋아요",
      width: "10%",
    },
    {
      header: "조회수",
      width: "10%",
    },
  ]
  const [page, setPage] = useState(1)
  const { datalist, range } = TablePageData(data, page, rowsPerPage)

  return (
    <div className="col-sm-12 table-responsive">
      <table className="table table-hover align-middle">
        <thead className="table-dark text-center">
          <tr>
            {header.map((item, index) => {
              return (
                <th className="tableHeader" key={index} width={item.width}>
                  {item.header}
                </th>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {datalist
            ? datalist.map((el, index) => (
                <tr key={index} className="tableRowItems">
                  <td className="text-center">{index + 1}</td>
                  <td className="tableCell">
                    <Link to={`${el.postNumber}`} category={el.category}>
                      {el.title}
                    </Link>
                  </td>
                  <td className="text-center">{el.username}</td>
                  <td className="text-center">{el.date}</td>
                  <td className="text-center">{el.liked}</td>
                  <td className="text-center">{el.views}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>
      <TableFooter range={range} slice={datalist} setPage={setPage} page={page} />
    </div>
  )
}

export default Table
