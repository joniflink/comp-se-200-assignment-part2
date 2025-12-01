import { expect } from "chai"
import clamp from "../src/clamp.js"

describe("clamp.js", () => {
    it("should return -5 with number as -10, lower as -5 and upper as 5", () => {
        expect(clamp(-10, -5, 5)).to.equal(-5)
    })

    it("should return 5 with number as 10, lower as -5 and upper as 5", () => {
        expect(clamp(10, -5, 5)).to.equal(5)
    })

    it("should return 4 with number as 4, lower as -5 and upper as 5", () => {
        expect(clamp(4, -5, 5)).to.equal(4)
    })

    it("should throw an exception with number as \"six\", lower as -5 and upper as 5", () => {
        expect(() => clamp("six", -5, 5)).to.throw()
    })

    it("should throw an exception with number as 5, lower as \"zero\" and upper as 10", () => {
        expect(() => clamp(5, "zero", 10)).to.throw()
    })

    it("should throw an exception with number as 5, lower as 0 and upper as \"ten\"", () => {
        expect(() => clamp(5, 0, "ten")).to.throw()
    })
})
