import React, { useEffect } from "react"

const TableFooter = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      //data element가 없는데 현재 페이지가 1이 아니면
      setPage(page - 1) //이전 페이지로
    }
  }, [slice, page, setPage])

  return (
    <div className="tableFooter text-center" style={{ padding: "5px" }}>
      <button className="btn btn-outline-dark" style={{ marginRight: "5px" }}>
        &lt;
      </button>
      {range.map((item, index) => (
        <button
          key={index}
          className="btn btn-outline-dark"
          style={{ marginRight: "5px" }}
          onClick={() => setPage(item)} //el로 현재 페이지 바뀜
        >
          {item}
        </button>
      ))}
      <button className="btn btn-outline-dark" style={{ marginRight: "5px" }}>
        &gt;
      </button>
    </div>
  )
}

export default TableFooter
