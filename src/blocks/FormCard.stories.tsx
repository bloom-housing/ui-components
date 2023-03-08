import React from "react"
import FormCard from "./FormCard"
export default {
  title: "Blocks/Form Card",
}

export const defaultCard = () => <FormCard header={{ children: "Header" }}>Children</FormCard>

export const noHeader = () => <FormCard>Children</FormCard>
