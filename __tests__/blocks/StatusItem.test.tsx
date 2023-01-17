import React from "react"
import { render, cleanup } from "@testing-library/react"
import { StatusItem } from "../../src/blocks/StatusItem"

afterEach(cleanup)

describe("<StatusItem>", () => {
  const strings = {
    applicationDeadline: "Application Due Date",
    edited: "Edited",
    seeListing: "See Listing",
    status: "Status",
    submittedStatus: "Submitted Status",
    viewApplication: "View Application",
    yourNumber: "Your confirmation number is",
  }

  it("renders without error", () => {
    const { getByText } = render(
      <StatusItem
        applicationDueDate={"March 10th, 2022"}
        applicationURL={"application/1234abcd"}
        applicationUpdatedAt={"March 8th, 2022"}
        confirmationNumber={"1234abcd"}
        listingName={"Listing Name"}
        listingURL={"/listing/abcd1234/listing-name"}
        strings={strings}
      />
    )

    expect(getByText("Listing Name")).not.toBeNull()
    expect(getByText("Application Due Date", { exact: false })).not.toBeNull()
    expect(getByText("Your confirmation number is", { exact: false })).not.toBeNull()
  })

  it("renders without a confirmation number or due date if not provided", () => {
    const { getByText, queryByText } = render(
      <StatusItem
        applicationURL={"application/1234abcd"}
        applicationUpdatedAt={"March 8th, 2022"}
        listingName={"Listing Name"}
        listingURL={"/listing/abcd1234/listing-name"}
        strings={strings}
      />
    )

    expect(getByText("Listing Name")).not.toBeNull()
    expect(queryByText("Application Due Date", { exact: false })).toBeNull()
    expect(queryByText("Your confirmation number is")).toBeNull()
  })
})
