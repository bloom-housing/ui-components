import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import { PasswordField } from "../../src/forms/PasswordField"
import { useForm } from "react-hook-form"

afterEach(cleanup)

const PasswordFieldDefault = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register } = useForm({ mode: "onChange" })
  return <PasswordField register={register} name={"password"} label={"Password"} />
}

const PasswordFieldError = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register } = useForm({ mode: "onChange" })
  return (
    <PasswordField
      register={register}
      name={"password"}
      label={"Password"}
      error={true}
      errorMessage={"Wrong password"}
    />
  )
}

const PasswordFieldCustomLabels = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register } = useForm({ mode: "onChange" })
  return (
    <PasswordField
      register={register}
      name={"password"}
      label={"Password"}
      showPasswordLabel={"Disclose password"}
      hidePasswordLabel={"Conceal password"}
    />
  )
}

describe("<PasswordField>", () => {
  it("renders a password input with a show password checkbox", () => {
    const { getByLabelText } = render(<PasswordFieldDefault />)
    const input = getByLabelText("Password") as HTMLInputElement
    expect(input.type).toBe("password")
    expect(getByLabelText("Show password")).toBeTruthy()
  })

  it("toggles the input type and checkbox label when the checkbox is clicked", () => {
    const { getByLabelText, queryByLabelText } = render(<PasswordFieldDefault />)
    const input = getByLabelText("Password") as HTMLInputElement
    const checkbox = getByLabelText("Show password")

    fireEvent.click(checkbox)

    expect(input.type).toBe("text")
    expect(queryByLabelText("Hide password")).toBeTruthy()
    expect(queryByLabelText("Show password")).toBeNull()

    fireEvent.click(getByLabelText("Hide password"))

    expect(input.type).toBe("password")
    expect(queryByLabelText("Show password")).toBeTruthy()
  })

  it("preserves the typed value when toggling visibility", () => {
    const { getByLabelText } = render(<PasswordFieldDefault />)
    const input = getByLabelText("Password") as HTMLInputElement

    fireEvent.change(input, { target: { value: "hunter2" } })
    fireEvent.click(getByLabelText("Show password"))

    expect(input.value).toBe("hunter2")
  })

  it("derives the checkbox id/name from the field's id or name", () => {
    const { container } = render(<PasswordFieldDefault />)
    const checkboxInput = container.querySelector("#password-show-password")
    expect(checkboxInput).toBeTruthy()
  })

  it("renders the error message when passed through", () => {
    const { getByText } = render(<PasswordFieldError />)
    expect(getByText("Wrong password")).toBeTruthy()
  })

  it("supports custom show/hide labels", () => {
    const { getByLabelText } = render(<PasswordFieldCustomLabels />)
    expect(getByLabelText("Disclose password")).toBeTruthy()
    fireEvent.click(getByLabelText("Disclose password"))
    expect(getByLabelText("Conceal password")).toBeTruthy()
  })
})
