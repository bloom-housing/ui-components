import React from "react"
import { useForm } from "react-hook-form"
import { PasswordField } from "./PasswordField"

export default {
  title: "Forms/PasswordField",
  decorators: [(storyFn: any) => <div style={{ padding: "1rem" }}>{storyFn()}</div>],
}

export const PasswordFieldDefault = () => {
  const { register } = useForm({ mode: "onChange" })
  return <PasswordField id="password-1" register={register} name={"password"} label={"Password"} />
}

export const PasswordFieldWithError = () => {
  const { register } = useForm({ mode: "onChange" })
  return (
    <PasswordField
      id="password2"
      register={register}
      name={"password"}
      label={"Password"}
      error={true}
      errorMessage={"Password must be at least 8 characters"}
    />
  )
}

export const PasswordFieldWithNote = () => {
  const { register } = useForm({ mode: "onChange" })
  return (
    <PasswordField
      id="password-3"
      register={register}
      name={"password"}
      label={"Password"}
      note={"Must be at least 8 characters and include a number."}
    />
  )
}
