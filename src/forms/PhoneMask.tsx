import React from "react"
import MaskedInput from "react-text-mask"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PhoneMask = React.forwardRef((props: any, ref: any) => {
  const { value, onChange, name, disabled, placeholder } = props
  const inputId = props.id ?? name

  return (
    <>
      <MaskedInput
        mask={["(", /[1-9]/, /\d/, /\d/, ")", " ", /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/, /\d/]}
        className="input"
        type="tel"
        placeholder={placeholder ?? ""}
        guide={false}
        id={inputId}
        value={value}
        name={name}
        disabled={disabled}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => {
          e.persist()
          onChange && onChange(e)
        }}
        ref={ref}
        aria-describedby={props["aria-describedby"]}
        aria-invalid={props["aria-invalid"]}
      />
    </>
  )
})
