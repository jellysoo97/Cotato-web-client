import React, { useState, useEffect } from "react"

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

export default TablePageData //props: data slice, table range
