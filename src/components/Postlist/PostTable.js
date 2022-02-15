import React, { useState } from "react"

import TablePageData from "./PostPagination"
import TableFooter from "./PostTableFooter"

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1)
  const { slice, range } = TablePageData(data, page, rowsPerPage)
  return (
    <div className="col-sm-12 table-responsive">
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
              {/* <tr key={el._id} className="tableRowItems"> */}
              <td className="text-center">{el.id}</td>
              {/* 글 id : <td className="text-center">{el._id}</td> */}
              <td className="tableCell">{el.username}</td>
              {/* 제목 : <td className="text-center">{el.title}</td> */}
              <td className="text-center">{el.name}</td>
              {/* 작성자?? : <td className="text-center">{el.??}</td> */}
              <td className="text-center">{el.email}</td>
              {/* 작성일 : <td className="text-center">{el.date}</td> */}
              <td className="text-center">{el.phone}</td>
              {/* 좋아요?? : <td className="text-center">{el.??}</td> */}
              <td className="text-center">{el.website}</td>
              {/* 조회수?? : <td className="text-center">{el.??}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </div>
  )
}

export default Table
