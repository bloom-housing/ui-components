import React from "react"
import { useForm } from "react-hook-form"
import { Field } from "./Field"

export default {
  title: "Forms/Field",
  decorators: [(storyFn: any) => <div style={{ padding: "1rem" }}>{storyFn()}</div>],
}

export const FieldDefault = () => {
  const { register } = useForm({ mode: "onChange" })
  return <Field register={register} name={"Test Input"} label={"Custom label"} />
}

export const FieldFormattedLabel = () => {
  const { register } = useForm({ mode: "onChange" })
  return (
    <Field
      register={register}
      name={"Test Input"}
      label={
        <>
          Custom label <strong className={"text-alert"}>*</strong>
        </>
      }
    />
  )
}

export const TextFieldError = () => {
  const { register } = useForm({ mode: "onChange" })
  return (
    <Field
      register={register}
      name={"Test Input"}
      label={"Custom label"}
      type={"text"}
      error={true}
      errorMessage={"Custom error message"}
    />
  )
}

export const TextFieldErrorElement = () => {
  const { register } = useForm({ mode: "onChange" })
  return (
    <Field
      register={register}
      name={"Test Input"}
      label={"Custom label"}
      type={"text"}
      error={true}
      errorMessage={<div className="font-bold italic">Custom error message as element</div>}
    />
  )
}

export const CurrencyField = () => {
  const { register, getValues, setValue } = useForm({ mode: "onChange" })
  return (
    <Field
      register={register}
      name={"Test Input"}
      className={"custom-class"}
      controlClassName={"custom-control-class"}
      describedBy={"Test Input"}
      label={"Test Input Custom"}
      type={"currency"}
      getValues={getValues}
      setValue={setValue}
      prepend={"$"}
    />
  )
}

export const CurrencyFieldError = () => {
  const { register, getValues, setValue } = useForm({ mode: "onChange" })
  return (
    <Field
      register={register}
      name={"Test Input"}
      error={true}
      errorMessage={"Custom error message"}
      className={"custom-class"}
      controlClassName={"custom-control-class"}
      describedBy={"Test Input"}
      label={"Test Input Custom"}
      type={"currency"}
      getValues={getValues}
      setValue={setValue}
      prepend={"$"}
    />
  )
}

export const checkboxDefault = () => {
  const { register, getValues, setValue } = useForm({ mode: "onChange" })
  return (
    <Field
      register={register}
      name={"Test Input"}
      describedBy={"Test Input"}
      label={"Test Input"}
      type={"checkbox"}
    />
  )
}

export const checkboxBordered = () => {
  const { register, getValues, setValue } = useForm({ mode: "onChange" })
  return (
    <Field
      register={register}
      name={"Test Input"}
      describedBy={"Test Input"}
      label={"Test Input"}
      type={"checkbox"}
      bordered
    />
  )
}

export const radioDefault = () => {
  const { register, getValues, setValue } = useForm({ mode: "onChange" })
  return (
    <Field
      register={register}
      name={"Test Input"}
      describedBy={"Test Input"}
      label={"Test Input"}
      type={"radio"}
    />
  )
}

export const radioBordered = () => {
  const { register, getValues, setValue } = useForm({ mode: "onChange" })
  return (
    <Field
      register={register}
      name={"Test Input"}
      describedBy={"Test Input"}
      label={"Test Input"}
      type={"radio"}
      bordered
    />
  )
}
