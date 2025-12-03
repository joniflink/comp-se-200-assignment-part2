import { expect } from "chai"
import toNumber from "../src/toNumber.js"

describe("toNumber.js", () => {
    it("should return \"3.2\" with value as 3.2", () => {
        expect(toNumber(3.2)).to.be.equal(3.2)
    })
    it("should return \"5e-324\" with value as Number.MIN_VALUE", () => {
        expect(toNumber(Number.MIN_VALUE)).to.be.equal(5e-324)
    })
    it("should return \"Infinity\" with value as Infinity", () => {
        expect(toNumber(Infinity)).to.be.equal(Infinity)
    })
    it("should return \"3.2\" with value as '3.2'", () => {
        expect(toNumber('3.2')).to.be.equal(3.2)
    })
})