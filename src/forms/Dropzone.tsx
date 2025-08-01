import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { t } from "../helpers/translator"
import "./Dropzone.scss"

interface DropzoneProps {
  uploader: (file: File) => void
  id: string
  label: string | React.ReactNode
  helptext?: string
  accept?: string | string[]
  progress?: number
  className?: string
  maxFiles?: number
  strings?: {
    chooseFromFolder?: string
    dragHere?: string
    dropHere?: string
    orString?: string
  }
}

const Dropzone = (props: DropzoneProps) => {
  const { uploader } = props
  const classNames = ["field"]
  if (props.className) classNames.push(props.className)

  const maxFiles = props.maxFiles || 1

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      acceptedFiles.forEach((file: File) => uploader(file))
    },
    [uploader]
  )
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: props.accept,
    maxFiles: maxFiles > 1 ? maxFiles : undefined,
    multiple: maxFiles > 1,
  })

  const dropzoneClasses = ["dropzone", "control"]
  if (isDragActive) dropzoneClasses.push("is-active")

  // Three states:
  // * File dropzone by default
  // * Progress > 0 and < 100 shows a progress bar
  // * Progress 100 doesn't show progress bar or dropzone
  return (
    <div className={classNames.join(" ")}>
      <label htmlFor={props.id} className="label">
        {props.label}
      </label>
      {props.helptext && <p className="dropzone__helptext">{props.helptext}</p>}
      {props.progress && props.progress === 100 ? (
        <></>
      ) : props.progress && props.progress > 0 ? (
        <progress className="dropzone__progress" max="100" value={props.progress}></progress>
      ) : (
        <div className={dropzoneClasses.join(" ")} {...getRootProps()}>
          <input id={props.id} {...getInputProps()} data-testid={"dropzone-input"} />
          {isDragActive ? (
            <p>{props.strings?.dropHere ?? t("t.dropFilesHere")}</p>
          ) : (
            <p>
              {props.strings?.dragHere ?? t("t.dragFilesHere")}{" "}
              {props.strings?.orString ?? t("t.or")}{" "}
              <u className="text-primary">
                {props.strings?.chooseFromFolder ?? t("t.chooseFromFolder").toLowerCase()}
              </u>
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export { Dropzone as default, Dropzone }
