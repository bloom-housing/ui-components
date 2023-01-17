import React from "react"
import { render, cleanup } from "@testing-library/react"
import { Select } from "../../src/forms/Select"
import { useForm } from "react-hook-form"
import * as translator from "../../src/helpers/translator"

afterEach(cleanup)

const ethnicityKeys = ["hispanicLatino", "notHispanicLatino"]

const DefaultSelect = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register } = useForm({ mode: "onChange" })
  return (
    <Select
      id="application.demographics.ethnicity"
      name="application.demographics.ethnicity"
      placeholder={"Select One"}
      label={"Ethnicity"}
      labelClassName="sr-only"
      register={register}
      controlClassName="control"
      options={ethnicityKeys}
      keyPrefix="application.review.demographics.ethnicityOptions"
    />
  )
}

const ErrorSelect = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register } = useForm({ mode: "onChange" })
  return (
    <Select
      name="application.demographics.ethnicity"
      placeholder={"Select One"}
      label={"Ethnicity"}
      labelClassName="sr-only"
      register={register}
      controlClassName="control"
      options={ethnicityKeys}
      keyPrefix="application.review.demographics.ethnicityOptions"
      error={true}
      errorMessage={"Uh oh!"}
      describedBy={"Ethnicity"}
    />
  )
}

describe("<Select>", () => {
  it("renders default state", () => {
    jest.spyOn(translator, "t").mockReturnValue("Translated String")

    const { getByText, getAllByText } = render(<DefaultSelect />)
    expect(getByText("Ethnicity")).toBeTruthy()
    expect(getByText("Select One")).toBeTruthy()
    expect(getAllByText("Translated String").length).toBeTruthy()
  })
  it("renders with an error", () => {
    const { getByText, getAllByText } = render(<ErrorSelect />)
    jest.spyOn(translator, "t").mockReturnValue("Translated String")

    expect(getByText("Ethnicity")).toBeTruthy()
    expect(getByText("Select One")).toBeTruthy()
    expect(getAllByText("Translated String").length).toBeTruthy()
    expect(getByText("Uh oh!")).toBeTruthy()
  })
})
