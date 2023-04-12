import * as React from "react"
import { withKnobs } from "@storybook/addon-knobs"
import { Dropzone } from "./Dropzone"

export default {
  title: "Forms/Dropzone",
  decorators: [(storyFn: any) => <div style={{ padding: "1rem" }}>{storyFn()}</div>, withKnobs],
}

export const defaultDropzone = () => {
  const progressValue = 50
  return (
    <>
      <Dropzone
        id="test-uploading"
        label="Upload File"
        helptext="Select JPEG or PNG files"
        uploader={() => {}}
        accept="image/*"
        progress={progressValue}
      />
    </>
  )
}
