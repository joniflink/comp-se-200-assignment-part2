import { expect } from "chai"
import add from "../src/add.js"

describe("add.js", () => {
    describe("Both positive", () => {
        it("should return 2 with augend as 1 and addend as 1", () => {
            expect(add(1, 1)).to.equal(2)
        })
    })

    describe("One negative, one positive", () => {
        it("should return 11 with augend as -1 and addend as 12", () => {
            expect(add(-1, 12)).to.equal(11)
        })

        it("should return 4 with augend as 13 and addend as -9", () => {
            expect(add(13, -9)).to.equal(4)
        })

        it("should return -8 with augend as -15 and addend as 7", () => {
            expect(add(-15, 7)).to.equal(-8)
        })

        it("should return -20 with augend as 6 and addend as -26", () => (
            expect(add(6, -26)).to.equal(-20)
        ))

        it("should return 0 with augend as 5 and addend as -5", () => {
            expect(add(5, -5)).to.equal(0)
        })
    })

    describe("Both negative", () => {
        it("should return -9 with augend as -2 and addend as -7", () => {
            expect(add(-2, -7)).to.equal(-9)
        })
    })

    describe("Strings", () => {
        it("should throw an exception with augend as \"two\" and addend as 5", () => {
            expect(() => add("two", 5)).to.throw()
        })
        
        it("should throw an expection with augend as 3 and addend as \"four\"", () => {
            expect(() => add(3, "four")).to.throw()
        })
    })
})
