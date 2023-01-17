import * as React from "react"
import { useForm } from "react-hook-form"
import HouseholdSizeField from "./HouseholdSizeField"

export default {
  title: "Forms/HouseholdSizeField",
  decorators: [(storyFn: any) => <div style={{ padding: "1rem" }}>{storyFn()}</div>],
}

export const errorHouseholdSizeField = () => {
  const { register } = useForm({ mode: "onChange" })
  return (
    <HouseholdSizeField
      assistanceUrl={""}
      clearErrors={() => {
        alert("clearErrors called")
      }}
      error={{ message: "Uh oh!", type: "validate" }}
      householdSize={1}
      householdSizeMax={3}
      householdSizeMin={2}
      register={register}
      validate={true}
      strings={{
        dontQualifyDescription:
          "Please make changes if you believe you might have made a mistake. Be aware that if you falsify any information on your application you will be disqualified. If the information you entered is accurate, we encourage you to check back in the future as more properties become available.",
        dontQualifyHeader: "Unfortunately it appears you do not qualify for this listing.",
        getAssistance: "Get Assistance",
        householdTooBigError: "Your household size is too big.",
        householdTooSmallError: "Your household size is too small.",
      }}
    />
  )
}
