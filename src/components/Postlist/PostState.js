import React, { useState, useEffect } from "react"

const pageRange = (data, rowsPerPage) => {
  const range = [] //페이지 배열[1,2,3,...]
  const num = Math.ceil(data.length / rowsPerPage) //전체 페이지 수
  let i = 1
  for (let i = 1; i <= num; i++) {
    range.push(i)
  }
  return range
}

const sliceData = (data, page, rowsPerPage) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage) //현재 페이지 첫 데이터 ~ 끝 데이터
}

//data, (현재)page, rowsPerPage에 대한 상태관리 필요
const useTable = (data, page, rowsPerPage) => {
  const [tableRange, setTableRange] = useState([""])
  const [slice, setSlice] = useState([])

  useEffect(() => {
    const range = pageRange(data, rowsPerPage)
    setTableRange([...range]) //table range 상태에 저장

    const slice = sliceData(data, page, rowsPerPage)
    setSlice([...slice]) //data slice 상태에 저장
  }, [data, setTableRange, page, setSlice])

  return { slice, range: tableRange }
}

export default useTable //props: table range, page, data slice, setPage
