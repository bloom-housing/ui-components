import React from "react"
import { DateField } from "./DateField"
import { useForm } from "react-hook-form"

export default {
  title: "Forms/Date Field",
  decorators: [(storyFn: any) => <div style={{ padding: "1rem" }}>{storyFn()}</div>],
}

export const Default = () => {
  const { register, watch, errors, setValue, handleSubmit } = useForm()

  const onSubmit = (data: any) => {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <DateField
        id="appDueDate"
        name="appDueDate"
        label="Application Due Date"
        register={register}
        required={true}
        setValue={setValue}
        watch={watch}
        error={errors?.appDueDate}
      />
      <br />
      <button type="submit" className="button">
        Submit
      </button>
    </form>
  )
}
