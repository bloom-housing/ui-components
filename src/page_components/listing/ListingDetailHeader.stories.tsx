import * as React from "react"
import { BADGES } from "../../../.storybook/constants"

import { ListingDetailHeader } from "./ListingDetailHeader"

export default {
  title: "Listing/ListingDetailHeader 🚩",
  parameters: {
    badges: [BADGES.GEN2],
  },
}

export const Default = () => {
  return (
    <div style={{ maxWidth: "500px" }}>
      <ListingDetailHeader
        imageAlt={"Building"}
        imageSrc="https://housing.acgov.org/images/listing-eligibility.svg"
        title={"Title"}
        subtitle={"Subtitle"}
      />
    </div>
  )
}
