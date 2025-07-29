import React from "react"
import { useForm } from "react-hook-form"
import { TimeField } from "./TimeField"

export default {
  title: "Forms/Time Field",
  decorators: [(storyFn: any) => <div style={{ padding: "1rem" }}>{storyFn()}</div>],
}

export const Default = () => {
  const { register, setValue, watch, errors } = useForm({ mode: "onChange" })

  return (
    <TimeField
      id="time"
      label="Time"
      name="time"
      required={true}
      register={register}
      setValue={setValue}
      watch={watch}
      error={!!errors?.time}
    />
  )
}

export const FormattedLabel = () => {
  const { register, setValue, watch, errors } = useForm({ mode: "onChange" })

  return (
    <TimeField
      id="time"
      label={
        <>
          Time <strong className={"text-alert"}>*</strong>
        </>
      }
      name="time"
      required={true}
      register={register}
      setValue={setValue}
      watch={watch}
      error={!!errors?.time}
    />
  )
}
