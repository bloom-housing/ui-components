import * as React from "react"
import { Textarea } from "./Textarea"

export default {
  title: "Forms/Textarea",
  decorators: [(storyFn: any) => <div style={{ padding: "1rem" }}>{storyFn()}</div>],
}

export const defaultTextarea = () => (
  <Textarea name={"textarea-test"} label={"Label"} placeholder={"Description"} />
)

export const maxLengthCustom = () => (
  <Textarea name={"textarea-test"} maxLength={10} label={"Label"} placeholder={"Description"} />
)

export const noResize = () => (
  <Textarea name={"textarea-test"} resize={false} label={"Label"} placeholder={"Description"} />
)

export const customSize = () => (
  <Textarea
    name={"textarea-test"}
    resize={false}
    cols={15}
    rows={10}
    label={"Label"}
    placeholder={"Description"}
  />
)

export const disabled = () => (
  <Textarea name={"textarea-test"} disabled={true} label={"Label"} placeholder={"Description"} />
)

export const errorMessage = () => (
  <Textarea
    name={"textarea-test"}
    errorMessage={"Error message"}
    label={"Label"}
    placeholder={"Description"}
  />
)

export const placeholder = () => (
  <Textarea name={"textarea-test"} placeholder={"Custom placeholder"} label={"Label"} />
)
