import * as React from "react"
import { useState } from "react"
import { Field, FieldProps } from "./Field"

export interface PasswordFieldProps
  extends Omit<FieldProps, "type" | "postInputContent" | "className"> {
  showPasswordLabel?: string
  hidePasswordLabel?: string
  checkboxDataTestId?: string
  className?: string
  fieldClassName?: string
}

const PasswordField = (props: PasswordFieldProps) => {
  const {
    showPasswordLabel = "Show password",
    hidePasswordLabel = "Hide password",
    checkboxDataTestId,
    className,
    fieldClassName,
    ...fieldProps
  } = props

  const classes = ["password-field"]

  if (className) {
    classes.push(className)
  }

  const [visible, setVisible] = useState(false)

  const idOrName = props.id || props.name
  const checkboxIdOrName = `${idOrName}-show-password`

  return (
    <div className={classes.join(" ")}>
      <Field {...fieldProps} className={fieldClassName} type={visible ? "text" : "password"} />
      <Field
        type="checkbox"
        id={checkboxIdOrName}
        name={checkboxIdOrName}
        label={visible ? hidePasswordLabel : showPasswordLabel}
        onChange={() => setVisible((prevVisible) => !prevVisible)}
        dataTestId={checkboxDataTestId}
      />
    </div>
  )
}

export { PasswordField as default, PasswordField }
