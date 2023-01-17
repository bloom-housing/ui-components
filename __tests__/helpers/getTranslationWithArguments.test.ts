import { cleanup } from "@testing-library/react"
import { getTranslationWithArguments } from "../../src/helpers/getTranslationWithArguments"

import * as translator from "../../src/helpers/translator"

afterEach(cleanup)

describe("getTranslationWithArguments", () => {
  it("should return a translated string with no arguments", () => {
    const mock = jest.spyOn(translator, "t")
    getTranslationWithArguments("t.yes")
    expect(mock).toBeCalledWith("t.yes")
  })
  it("should return a translated string with one argument", () => {
    const mock = jest.spyOn(translator, "t")
    getTranslationWithArguments("listings.percentAMIUnit*percent:20")
    expect(mock).toBeCalledWith("listings.percentAMIUnit", { percent: "20" })
  })
  it("should return a translated string with two (or more) arguments", () => {
    const mock = jest.spyOn(translator, "t")
    getTranslationWithArguments(
      "listings.reservedUnitsForWhoAre*communityType:Community Type*reservedType:Reserved Type"
    )
    expect(mock).toBeCalledWith("listings.reservedUnitsForWhoAre", {
      communityType: "Community Type",
      reservedType: "Reserved Type",
    })
  })
})
