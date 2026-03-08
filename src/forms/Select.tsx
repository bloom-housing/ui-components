import React from "react"
import { ErrorMessage } from "../notifications/ErrorMessage"
import { FormOptions } from "../helpers/formOptions"
import { UseFormMethods, RegisterOptions } from "react-hook-form"

export interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  error?: boolean
  errorMessage?: string
  controlClassName?: string
  labelClassName?: string
  type?: string
  id?: string
  name: string
  label?: string | React.ReactNode
  subNote?: string
  defaultValue?: string
  placeholder?: string
  register?: UseFormMethods["register"]
  validation?: RegisterOptions
  disabled?: boolean
  options: (string | SelectOption)[]
  keyPrefix?: string
  describedBy?: string
  inputProps?: Record<string, unknown>
  dataTestId?: string
}

export const Select = ({
  error,
  errorMessage,
  controlClassName,
  labelClassName,
  id,
  name,
  label,
  placeholder,
  register,
  validation,
  disabled,
  options,
  keyPrefix,
  describedBy,
  inputProps,
  defaultValue,
  subNote,
  dataTestId,
}: SelectProps) => {
  const idOrName = id || name

  return (
    <div className={`field ${error ? "error" : ""}`}>
      <label className={labelClassName} htmlFor={idOrName}>
        {label}
      </label>
      <div className={controlClassName}>
        <select
          className="input"
          id={idOrName}
          name={name}
          data-testid={dataTestId}
          aria-describedby={`${describedBy ? describedBy : ""}  ${
            error ? `${idOrName}-error` : ""
          } ${subNote ? `${idOrName}-sub-note` : ""}`}
          aria-invalid={!!error || false}
          ref={register && register(validation)}
          disabled={disabled}
          defaultValue={defaultValue ?? ""}
          {...inputProps}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          <FormOptions options={options} keyPrefix={keyPrefix} />
        </select>
      </div>
      {subNote && (
        <p className="field-sub-note" id={`${idOrName}-sub-note`}>
          {subNote}
        </p>
      )}
      {error && errorMessage ? (
        <ErrorMessage id={`${idOrName}-error`} error={error}>
          {errorMessage}
        </ErrorMessage>
      ) : (
        <span id={`${idOrName}-error`}></span>
      )}
    </div>
  )
}
