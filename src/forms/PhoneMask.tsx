import React from "react"
import { IMaskInput } from "react-imask"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PhoneMask = React.forwardRef((props: any, ref: any) => {
  const { value, onChange, name, disabled, placeholder } = props

  return (
    <>
      <IMaskInput
        aria-labelledby={"phone-label"}
        className="input"
        disabled={disabled}
        id={name}
        mask={"(000) 000-0000"}
        name={name}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        onAccept={(value, _) => {
          onChange(value)
        }}
        placeholder={placeholder ?? ""}
        ref={ref}
        type="text"
        unmask={false}
        value={value}
      />
    </>
  )
})
