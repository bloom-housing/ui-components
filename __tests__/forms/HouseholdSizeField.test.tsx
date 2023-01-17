import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import { HouseholdSizeField } from "../../src/forms/HouseholdSizeField"
import { useForm } from "react-hook-form"

afterEach(cleanup)

const DefaultHouseholdSize = () => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register } = useForm({ mode: "onChange" })
  return (
    <HouseholdSizeField
      assistanceUrl={""}
      clearErrors={jest.fn()}
      error={null}
      householdSize={3}
      householdSizeMax={3}
      householdSizeMin={2}
      register={register}
      validate={true}
    />
  )
}

type ErrorHouseholdSizeProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  clearErrorsSpy: jest.Mock<unknown, any[]>
}

const ErrorHouseholdSize = (props: ErrorHouseholdSizeProps) => {
  // eslint-disable-next-line @typescript-eslint/unbound-method
  const { register } = useForm({ mode: "onChange" })
  return (
    <HouseholdSizeField
      assistanceUrl={""}
      clearErrors={props.clearErrorsSpy}
      error={{ message: "Uh oh!", type: "validate" }}
      householdSize={1}
      householdSizeMax={3}
      householdSizeMin={2}
      register={register}
      validate={true}
      strings={{
        getAssistance: "Get Assistance",
        dontQualifyDescription: "Unfortunately it appears you do not qualify for this listing.",
      }}
    />
  )
}

describe("<HouseholdSizeField>", () => {
  it("renders default state", () => {
    const { queryByText } = render(<DefaultHouseholdSize />)
    expect(queryByText("Uh oh!")).toBeNull()
    expect(queryByText("Unfortunately it appears you do not qualify for this listing.")).toBeNull()
    expect(queryByText("Get Assistance")).toBeNull()
  })
  it("renders error state", () => {
    const clearErrorsSpy = jest.fn()
    const { getByText, getByRole } = render(<ErrorHouseholdSize clearErrorsSpy={clearErrorsSpy} />)
    expect(getByText("Uh oh!")).toBeTruthy()
    expect(getByText("Unfortunately it appears you do not qualify for this listing.")).toBeTruthy()
    expect(getByText("Get Assistance")).toBeTruthy()
    fireEvent.click(getByRole("button"))
    expect(clearErrorsSpy).toHaveBeenCalledTimes(1)
  })
})
