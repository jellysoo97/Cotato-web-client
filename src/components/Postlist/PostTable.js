import React, { useState, useEffect } from "react"

import TableFooter from "./PostTableFooter"

const Table = ({ data, rowsPerPage }) => {
  const pageRange = (data, rowsPerPage) => {
    const range = []
    const num = Math.ceil(data.length / rowsPerPage) //전체 페이지 수
    for (let i = 1; i <= num; i++) {
      range.push(i)
    }
    return range //페이지 배열[1,2,3,...]
  }

  const sliceData = (data, page, rowsPerPage) => {
    return data.slice((page - 1) * rowsPerPage, page * rowsPerPage)
    //현재 페이지 첫 데이터 ~ 끝 데이터
  }

  //page, data에 대한 상태관리 필요
  const TablePageData = (data, page, rowsPerPage) => {
    const [tableRange, setTableRange] = useState([])
    const [slice, setSlice] = useState([])

    useEffect(() => {
      const range = pageRange(data, rowsPerPage)
      setTableRange([...range]) //새로운 range state 저장

      const slice = sliceData(data, page, rowsPerPage)
      setSlice([...slice]) //새로운 data slice state 저장
    }, [data, setTableRange, page, setSlice]) // 배열이 변경되는 경우에만 함수 호출

    return { slice, range: tableRange }
  }

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
