import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import TablePageData from "./TableData"
import TableFooter from "./TableFooter"

// 부모로부터 data, rowsPerPage 전달받음
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
  // datalist: 테이블 한 페이지에 들어가는 데이터 리스트, range: 전체 테이블 페이지 수

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
                  {/* 테이블 인덱스 */}
                  <td className="tableCell">
                    <Link
                      to={`/cotato/${el.category}/${el.postNumber}`}
                      style={{ color: "inherit", textDecoration: "inherit" }}
                    >
                      {el.title}
                    </Link>
                  </td>
                  {/* <td className="text-center">{el.userId}</td> */}
                  <td className="text-center">{el.username}</td>
                  {/* <td className="text-center">{el.email}</td> */}
                  <td className="text-center">{el.date}</td>
                  {/* <td className="text-center">{el.phone}</td> */}
                  <td className="text-center">{el.liked}</td>
                  {/* <td className="text-center">{el.phone}</td> */}
                  <td className="text-center">{el.views}</td>
                </tr>
              ))
            : ""}
        </tbody>
      </table>

      {/* range(전체 테이블 페이지 수), slice(슬라이스된 데이터), setPage(페이지 상태 함수), page(현재 페이지) */}
      <TableFooter
        range={range}
        slice={datalist}
        setPage={setPage}
        page={page}
      />
    </div>
  )
}

export default Table
