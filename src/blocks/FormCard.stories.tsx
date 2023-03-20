import React from "react"
import FormCard from "./FormCard"
import Heading from "../text/Heading"
export default {
  title: "Blocks/Form Card",
}

export const defaultCard = () => (
  <FormCard header={<Heading priority={1}>Header</Heading>}>Children</FormCard>
)

export const noHeader = () => <FormCard>Children</FormCard>
