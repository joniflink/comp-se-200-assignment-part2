import { expect } from "chai"
import toInteger from "../src/toInteger.js"

describe("toInteger.js", () => {
    it("should return \"3\" with value as 3.2", () => {
        expect(toInteger(3.2)).to.be.equal(3)
    })
    it("should return \"0\" with value as Number.MIN_VALUE", () => {
        expect(toInteger(Number.MIN_VALUE)).to.be.equal(0)
    })
    it("should return \"1.7976931348623157e+308\" with value as Infinity", () => {
        expect(toInteger(Infinity)).to.be.equal(1.7976931348623157e+308)
    })
    it("should return \"3\" with value as '3.2'", () => {
        expect(toInteger('3.2')).to.be.equal(3)
    })
})