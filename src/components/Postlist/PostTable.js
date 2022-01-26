import React, { useState, useEffect } from "react"
import { useTable, usePagination } from "react-table"
import { columns, data } from "./PostData"
import Pagination from "./Pagination"

function PostTable() {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
      initialState: {
        pageSize: 3,
        pageIndex: 1,
      },
    },
    usePagination
  )

  return (
    <div className="col-sm-9">
      <table {...getTableProps()} className="table table-hover table-bordered">
        <thead className="text-center">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default PostTable
