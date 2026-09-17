import * as React from "react"
import { useId } from "react"
import { Cell, StandardTableData, StandardTableProps } from "./StandardTable"

export interface GroupedTableGroup {
  header?: string | React.ReactNode
  className?: string
  data: StandardTableData
}

export interface GroupedTableProps extends Omit<StandardTableProps, "data"> {
  data: GroupedTableGroup[]
}

export const GroupedTable = (props: GroupedTableProps) => {
  const { headers, data, cellClassName } = props
  // Rendered as each row's dom id, so it has to be identical on the server and the client and
  // unique when a page renders more than one table.
  const tableId = useId()

  const headerLabels = Object.values(headers).map((col, index) => {
    const uniqKey = `header-${index}`
    return (
      <th key={uniqKey}>
        {typeof col === "string" ? col : col.name}{" "}
        {col instanceof Object && col.icon ? col.icon : null}
      </th>
    )
  })

  const body: React.ReactNode[] = []

  data.forEach((group: GroupedTableGroup, dataIndex) => {
    const colSpan = Object.keys(headers).length

    const groupHeader = group.header
    const groupClassName = group.className
    const groupData = group.data

    if (groupHeader) {
      body.push(
        <tr key={`${tableId}group-${dataIndex}`}>
          <Cell
            key={`${tableId}group-${dataIndex}-header`}
            className={groupClassName}
            colSpan={colSpan}
          >
            {groupHeader}
          </Cell>
        </tr>
      )
    }

    groupData.forEach((row, groupDataIndex) => {
      const rowKey = row["id"]
        ? `row-${row["id"].content as string}`
        : `${tableId}row-${dataIndex}-${groupDataIndex}`
      const cols = Object.keys(headers).map((colKey, colIndex) => {
        const uniqKey = `${rowKey}-${colIndex}`
        const header = headers[colKey]
        const cell = row[colKey]?.content
        return (
          <Cell key={uniqKey} headerLabel={header} className={cellClassName}>
            {cell}
          </Cell>
        )
      })

      body.push(
        <tr id={rowKey} key={rowKey} className={`group-${groupClassName || ""}`}>
          {cols}
        </tr>
      )
    })
  })

  const tableClasses = ["w-full", "text-xs"]
  if (props.responsiveCollapse) {
    tableClasses.push("responsive-collapse")
  }

  return (
    <div style={{ overflowX: "auto" }}>
      <table aria-label={props.ariaLabel} className={tableClasses.join(" ")}>
        <thead>
          <tr>{headerLabels}</tr>
        </thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  )
}
