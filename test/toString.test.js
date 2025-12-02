import { expect } from "chai"
import toString from "../src/toString.js"

describe("toString.js", () => {
    it("should return \"5\" with value as 5", () => {
        expect(toString(5)).to.be.equal("5")
    })

    it("should return \"true\" with value as true", () => {
        expect(toString(true)).to.be.equal("true")
    })

    it("should return \"5.5\" with value as 5.5", () => {
        expect(toString(5.5)).to.be.equal("5.5")
    })

    it("should return \"\" (empty string) with value as null", () => {
        expect(toString(null)).to.be.equal("")
    })

    it("should return \"\" (empty string) with value as undefined", () => {
        expect(toString(undefined)).to.be.equal("")
    })

    it("should return \"string\" with value as \"string\"", () => {
        expect(toString("string")).to.be.equal("string")
    })

    it("should return \"1,2,3\" with value as [1, 2, 3]", () => {
        expect(toString([1, 2, 3])).to.be.equal("1,2,3")
    })
    it("should return \"5\" with value as [null, [undefined, 5]]", () => {
        expect(toString([null, [undefined, 5]])).to.equal(",5")
    })

    it("should return \"Symbol(Symbol.iterator)\" with value as Symbol.iterator", () => {
        expect(toString(Symbol.iterator)).to.be.equal("Symbol(Symbol.iterator)")
    })
    it("should return \"-0\" with value as -INFINITY", () => {
        expect(toString(-0)).to.equal("-0");
    });
})