import React from "react"
import { render, cleanup } from "@testing-library/react"
import { GroupedTable } from "../../src/tables/GroupedTable"
import { t } from "../../src/helpers/translator"

afterEach(cleanup)

export const headers = {
  name: t("t.name"),
  relationship: t("t.relationship"),
  dob: t("application.household.member.dateOfBirth"),
}

const data = [
  {
    data: [
      {
        name: { content: "Akane Breckinridge" },
        relationship: { content: "Husband" },
        dob: { content: "05/01/1985" },
      },
      {
        name: { content: "Mirko Kovalchuk" },
        relationship: { content: "Friend" },
        dob: { content: "05/01/1975" },
      },
    ],
  },
  {
    header: "Reserved",
    className: "reserved",
    data: [
      {
        name: { content: "Trixie Fabian" },
        relationship: { content: "Partner" },
        dob: { content: "06/01/1955" },
      },
      {
        name: { content: "Virginia Kirch" },
        relationship: { content: "Colleague" },
        dob: { content: "12/01/1994" },
      },
    ],
  },
]

describe("<GroupedTable>", () => {
  it("renders without error", () => {
    const { getByText } = render(<GroupedTable headers={headers} data={data} />)
    expect(getByText(headers.name)).toBeTruthy()
    expect(getByText(headers.relationship)).toBeTruthy()
    expect(getByText(headers.dob)).toBeTruthy()

    expect(getByText(data[0].data[0].name.content))
    expect(getByText(data[0].data[0].relationship.content))
    expect(getByText(data[0].data[0].dob.content))

    expect(getByText(data[0].data[1].name.content))
    expect(getByText(data[0].data[1].relationship.content))
    expect(getByText(data[0].data[1].dob.content))

    expect(getByText(data[1].data[0].name.content))
    expect(getByText(data[1].data[0].relationship.content))
    expect(getByText(data[1].data[0].dob.content))

    expect(getByText(data[1].data[1].name.content))
    expect(getByText(data[1].data[1].relationship.content))
    expect(getByText(data[1].data[1].dob.content))
  })
})

describe("GroupedTable row ids", () => {
  const rowIdsIn = (container: HTMLElement) =>
    Array.from(container.querySelectorAll("tbody tr"))
      .map((row) => row.id)
      .filter((id) => id.length > 0)

  it("does not repeat an id when a page renders two tables", () => {
    const { container } = render(
      <>
        <GroupedTable headers={headers} data={data} />
        <GroupedTable headers={headers} data={data} />
      </>
    )

    const ids = rowIdsIn(container)
    expect(ids.length).toBeGreaterThan(0)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it("uses a row's own id when it has one", () => {
    const withIds = [
      { data: [{ id: { content: "abc" }, name: { content: "Akane" } }] },
      { data: [{ id: { content: "def" }, name: { content: "Beatrice" } }] },
    ]

    const { container } = render(<GroupedTable headers={{ name: t("t.name") }} data={withIds} />)

    expect(rowIdsIn(container)).toEqual(["row-abc", "row-def"])
  })
})
