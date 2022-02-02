import React, { useState } from "react"

import useTable from "./PostState"
import TableFooter from "./PostTableFooter"

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1)
  const { slice, range } = useTable(data, page, rowsPerPage)
  return (
    <div className="col-sm-9 table-responsive">
      <table className="table table-hover align-middle">
        <thead className="table-dark text-center">
          <tr>
            <th className="tableHeader" width="10%">
              번호
            </th>
            <th className="tableHeader" width="40%">
              제목
            </th>
            <th className="tableHeader" width="15%">
              작성자
            </th>
            <th className="tableHeader" width="15%">
              작성일
            </th>
            <th className="tableHeader" width="10%">
              좋아요
            </th>
            <th className="tableHeader" width="10%">
              조회수
            </th>
          </tr>
        </thead>
        <tbody>
          {slice.map((el) => (
            <tr key={el.id} className="tableRowItems">
              <td className="text-center">{el.id}</td>
              <td className="tableCell">{el.title}</td>
              <td className="text-center">{el.name}</td>
              <td className="text-center">{el.date}</td>
              <td className="text-center">{el.liked}</td>
              <td className="text-center">{el.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  )
}

export default Table
