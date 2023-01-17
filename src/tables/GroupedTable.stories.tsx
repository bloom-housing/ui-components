import React from "react"

import { GroupedTable } from "./GroupedTable"
import { mockData } from "../tables/StandardTable.stories"

export default {
  title: "Tables/GroupedTable",
  decorators: [(storyFn: any) => <div style={{ padding: "1rem" }}>{storyFn()}</div>],
}

const headers = {
  name: "Name",
  relationship: "Relationship",
  dob: "Date of Birth",
}

const data = [
  {
    header: "Reserved",
    className: "reserved",
    data: mockData,
  },
  {
    data: mockData,
  },
]

export const Default = () => <GroupedTable headers={headers} data={data} />
