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

  it("toggles the input type when the checkbox is clicked", () => {
    const { getByLabelText } = render(<PasswordFieldDefault />)
    const input = getByLabelText("Password") as HTMLInputElement
    const checkbox = getByLabelText("Show password")

    fireEvent.click(checkbox)

    expect(input.type).toBe("text")

    fireEvent.click(checkbox)

    expect(input.type).toBe("password")
  })

  it("preserves the typed value when toggling visibility", () => {
    const { getByLabelText } = render(<PasswordFieldDefault />)
    const input = getByLabelText("Password") as HTMLInputElement

    fireEvent.change(input, { target: { value: "hunter2" } })
    fireEvent.click(getByLabelText("Show password"))

    expect(input.value).toBe("hunter2")
  })

  it("renders the error message when passed through", () => {
    const { getByText } = render(<PasswordFieldError />)
    expect(getByText("Wrong password")).toBeTruthy()
  })

  it("supports a custom show password label", () => {
    const { getByLabelText } = render(<PasswordFieldCustomLabels />)
    expect(getByLabelText("Disclose password")).toBeTruthy()
  })
})
