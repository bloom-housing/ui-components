import * as React from "react"
import { useState } from "react"
import { Field, FieldProps } from "./Field"

export interface PasswordFieldProps extends Omit<FieldProps, "type" | "postInputContent"> {
  showPasswordLabel?: string
  hidePasswordLabel?: string
  checkboxDataTestId?: string
}

const PasswordField = (props: PasswordFieldProps) => {
  const {
    showPasswordLabel = "Show password",
    hidePasswordLabel = "Hide password",
    checkboxDataTestId,
    ...fieldProps
  } = props

  const [visible, setVisible] = useState(false)

  const idOrName = props.id || props.name
  const checkboxIdOrName = `${idOrName}-show-password`

  return (
    <>
      <Field {...fieldProps} type={visible ? "text" : "password"} />
      <Field
        type="checkbox"
        id={checkboxIdOrName}
        name={checkboxIdOrName}
        label={visible ? hidePasswordLabel : showPasswordLabel}
        onChange={() => setVisible((prevVisible) => !prevVisible)}
        dataTestId={checkboxDataTestId}
      />
    </>
  )
}

export { PasswordField as default, PasswordField }
