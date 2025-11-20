import { expect } from "chai"
import defaultTo from "../src/defaultTo.js"

describe("defaultTo.js", () => {
    it("should return 5 with value as 5 and defaultValue as 3", () => {
        expect(defaultTo(5, 3)).to.equal(5)
    })

    it("should return 1 with value as null and defaultValue as 2", () => {
        expect(defaultTo(null, 1)).to.equal(1)
    })

    it("should return 1 with value as NaN and defaultValue as 1", () => {
        expect(defaultTo(NaN, 1)).to.equal(1)
    })

    it("should return 1 with value as undefined and defaultValue as 1", () => {
        expect(defaultTo(undefined, 1)).to.equal(1)
    })

    it("should return \"one\" with value as \"one\" and defaultValue as 1", () => {
        expect(defaultTo("one", 1)).to.equal("one")
    })

    it("should return null with value as null and defaultValue as null", () => {
        expect(defaultTo(null, null)).to.equal(null)
    })
})
