import React from "react"
import { BADGES } from "../../.storybook/constants"
import { LanguageNav } from "./LanguageNav"

export default {
  title: "Navigation/LanguageNav 🚩",
  decorators: [(storyFn: any) => <div style={{ padding: "1rem" }}>{storyFn()}</div>],
  parameters: {
    badges: [BADGES.GEN2],
  },
}

export const Default = () => (
  <LanguageNav
    languages={[
      {
        label: "English",
        active: true,
        onClick: () => {},
      },
      {
        label: "Spanish",
        active: false,
        onClick: () => {},
      },
    ]}
  />
)
