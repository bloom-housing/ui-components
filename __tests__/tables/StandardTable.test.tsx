import React from "react"
import { render, cleanup } from "@testing-library/react"
import { StandardTable, StandardTableData, TableThumbnail } from "../../src/tables/StandardTable"

afterEach(cleanup)

const headers = {
  number: "t.unit",
  sqFeet: "t.area",
  numBathrooms: "listings.bath",
}

const data = [
  {
    number: { content: "100" },
    sqFeet: { content: "800" },
    numBathrooms: { content: "2" },
  },
  {
    number: { content: "101" },
    sqFeet: { content: "850" },
    numBathrooms: { content: "3" },
  },
]

const headersWithImage = { image: "t.text", ...headers }
const dataWithImage: StandardTableData = [...data]
dataWithImage[0].image = {
  content: (
    <TableThumbnail>
      <img src="/images/listing.jpg" alt="sample" />
    </TableThumbnail>
  ),
}
dataWithImage[1].image = {
  content: (
    <TableThumbnail>
      <img src="/images/logo_glyph.svg" alt="sample" />
    </TableThumbnail>
  ),
}

describe("<StandardTable>", () => {
  it("renders default state", () => {
    const { getByText } = render(<StandardTable headers={headers} data={data} />)
    expect(getByText(data[0].number.content))
    expect(getByText(data[0].sqFeet.content))
    expect(getByText(data[0].numBathrooms.content))
    expect(getByText(data[1].number.content))
    expect(getByText(data[1].sqFeet.content))
    expect(getByText(data[1].numBathrooms.content))
  })

  it("renders with image thumbnails", () => {
    const { container } = render(<StandardTable headers={headersWithImage} data={dataWithImage} />)
    expect(container.getElementsByClassName("table__thumbnail").length).toBe(2)
  })

  it("renders with custom props", () => {
    const { getByText, container } = render(
      <StandardTable
        headers={headers}
        data={data}
        tableClassName={"table-class"}
        cellClassName={"cell-class"}
        responsiveCollapse={true}
      />
    )
    expect(getByText(data[0].number.content))
    expect(getByText(data[0].sqFeet.content))
    expect(getByText(data[0].numBathrooms.content))
    expect(getByText(data[1].number.content))
    expect(getByText(data[1].sqFeet.content))
    expect(getByText(data[1].numBathrooms.content))
    expect(container.getElementsByClassName("table-class").length).toBe(1)
    expect(container.getElementsByClassName("cell-class").length).toBe(6)
  })
})

describe("StandardTable row ids", () => {
  const rowIdsIn = (container: HTMLElement) =>
    Array.from(container.querySelectorAll("tbody tr")).map((row) => row.id)

  it("gives every row an id", () => {
    const { container } = render(<StandardTable headers={headers} data={data} />)

    expect(rowIdsIn(container)).toHaveLength(2)
    expect(rowIdsIn(container).every((id) => id.length > 0)).toBe(true)
  })

  it("does not repeat an id when a page renders two tables", () => {
    const { container } = render(
      <>
        <StandardTable headers={headers} data={data} />
        <StandardTable headers={headers} data={data} />
      </>
    )

    const ids = rowIdsIn(container)
    expect(ids).toHaveLength(4)
    expect(new Set(ids).size).toBe(4)
  })

  it("uses a row's own id when it has one", () => {
    const withIds: StandardTableData = [
      { id: { content: "abc" }, number: { content: "100" } },
      { id: { content: "def" }, number: { content: "101" } },
    ]

    const { container } = render(<StandardTable headers={{ number: "t.unit" }} data={withIds} />)

    expect(rowIdsIn(container)).toEqual(["row-abc", "row-def"])
  })
})
