import { expect } from "chai"
import slice from "../src/slice.js"

describe("slice.js", () => {
    it("should return [3, 4] with array as [1, 2, 3, 4] and start as 2", () => {
        expect(slice([1, 2, 3, 4], 2)).to.deep.equal([3, 4])
    })

    it("should return [1, 2] with array as [1, 2, 3, 4], start as 0 and end as 2", () => {
        expect(slice([1, 2, 3, 4], 0, 2)).to.deep.equal([1, 2])
    })

    it("should return [] (empty array) with array as [] (empty array)", () => {
        expect(slice([])).to.deep.equal([])
    })

    it("should return [] (empty array) with array as [1, 2, 3, 4], start as 0 and end as 0", () => {
        expect(slice([1, 2, 3, 4], 0, 0)).to.deep.equal([])
    })

    it("should return [2, 3] with array as [1, 2, 3, 4], start as -3 and end as -1", () => {
        expect(slice([1, 2, 3, 4], -3, -1)).to.deep.equal([2, 3])
    })

    it("should return [] (empty array) with array as null", () => {
        expect(slice(null)).to.deep.equal([])
    })

    it("should return [1, 2, 3, 4] with array as [1, 2, 3, 4], start as null", () => {
        expect(slice([1, 2, 3, 4], null)).to.deep.equal([1, 2, 3, 4])
    })

    it("should return [1, 2, 3, 4] with array as [1, 2, 3, 4] and start as -10", () => {
        expect(slice([1, 2, 3, 4], -10)).to.deep.equal([1, 2, 3, 4])
    })

    it("should return [] (empty array) with array as [1, 2, 3, 4], start as 3 and end as 2", () => {
        expect(slice([1, 2, 3, 4], 3, 2)).to.deep.equal([])
    })
})