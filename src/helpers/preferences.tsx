import React from "react"
import { UseFormMethods } from "react-hook-form"
import { t, GridSection, ViewItem, GridCell, Field, Select, resolveObject } from "../../"

type FormAddressProps = {
  subtitle?: string
  dataKey: string
  enableMailCheckbox?: boolean
  register: UseFormMethods["register"]
  errors?: UseFormMethods["errors"]
  required?: boolean
  stateKeys: string[]
}

export const FormAddress = ({
  subtitle,
  dataKey,
  enableMailCheckbox = false,
  register,
  errors,
  required,
  stateKeys,
}: FormAddressProps) => {
  return (
    <>
      <fieldset>
        <legend className={`text__caps-spaced ${!subtitle ? "sr-only" : ""}`}>
          {!subtitle ? t("application.preferences.options.address") : subtitle}
        </legend>
        <GridSection>
          <GridCell span={2}>
            <ViewItem label={t("application.contact.streetAddress")}>
              <Field
                id={`${dataKey}.street`}
                name={`${dataKey}.street`}
                label={t("application.contact.streetAddress")}
                register={register}
                validation={{ required, maxLength: 64 }}
                error={!!resolveObject(`${dataKey}.street`, errors)}
                errorMessage={
                  resolveObject(`${dataKey}.street`, errors)?.type === "maxLength"
                    ? t("errors.maxLength")
                    : t("errors.streetError")
                }
                readerOnly
              />
            </ViewItem>
          </GridCell>
          <GridCell>
            <ViewItem label={t("application.contact.apt")}>
              <Field
                id={`${dataKey}.street2`}
                name={`${dataKey}.street2`}
                label={t("application.contact.apt")}
                register={register}
                readerOnly
                error={!!resolveObject(`${dataKey}.street2`, errors)}
                validation={{ maxLength: 64 }}
                errorMessage={t("errors.maxLength")}
              />
            </ViewItem>
          </GridCell>

          <GridCell>
            <ViewItem label={t("application.contact.city")}>
              <Field
                id={`${dataKey}.city`}
                name={`${dataKey}.city`}
                label={t("application.contact.city")}
                register={register}
                validation={{ required, maxLength: 64 }}
                error={!!resolveObject(`${dataKey}.city`, errors)}
                errorMessage={
                  resolveObject(`${dataKey}.city`, errors)?.type === "maxLength"
                    ? t("errors.maxLength")
                    : t("errors.cityError")
                }
                readerOnly
              />
            </ViewItem>
          </GridCell>

          <GridCell className="md:grid md:grid-cols-2 md:gap-8" span={2}>
            <ViewItem label={t("application.contact.state")} className="mb-0">
              <Select
                id={`${dataKey}.state`}
                name={`${dataKey}.state`}
                label={t("application.contact.state")}
                labelClassName="sr-only"
                register={register}
                controlClassName="control"
                options={stateKeys}
                keyPrefix="states"
                validation={{ required }}
                error={!!resolveObject(`${dataKey}.state`, errors)}
                errorMessage={t("errors.stateError")}
              />
            </ViewItem>

            <ViewItem label={t("application.contact.zip")}>
              <Field
                id={`${dataKey}.zipCode`}
                name={`${dataKey}.zipCode`}
                label={t("application.contact.zip")}
                register={register}
                validation={{ required, maxLength: 64 }}
                error={!!resolveObject(`${dataKey}.zipCode`, errors)}
                errorMessage={
                  resolveObject(`${dataKey}.zipCode`, errors)?.type === "maxLength"
                    ? t("errors.maxLength")
                    : t("errors.zipCodeError")
                }
                readerOnly
              />
            </ViewItem>
          </GridCell>

          {enableMailCheckbox && (
            <GridCell span={2}>
              <Field
                id="application.sendMailToMailingAddress"
                name="application.sendMailToMailingAddress"
                type="checkbox"
                label={t("application.contact.sendMailToMailingAddress")}
                register={register}
              />
            </GridCell>
          )}
        </GridSection>
      </fieldset>
    </>
  )
}
