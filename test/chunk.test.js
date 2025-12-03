import { expect } from "chai"
import chunk from "../src/chunk.js"

const array = ['a', 'b', 'c', 'd']

describe("chunk.js", () => {
    it("should retunr two 2 item arrays with array size 2", () => {
        expect(chunk(array, 2)).to.deep.equal([['a', 'b'], ['c', 'd']])
    })
    it("should retunr empty arrays with array size -3", () => {
        expect(chunk(array, -3)).to.equal([])
    })
    it("should retunr array arrays with no array size", () => {
        expect(chunk(array, )).to.deep.equal(array)
    })
    it("should retunr empty arrays with no array", () => {
        expect(chunk([],1)).to.equal([])
    })
    it("should throw exception with input as 'string' ", () => {
        expect(()=>chunk('string', 1)).to.throw()
    })
    it("should retunr empty with input as null ", () => {
        expect(() => chunk(null, 2)).to.deep.equal([])
    })
    it("should retunr empty with undefined array ", () => {
        expect(chunk(undefined, 2)).to.deep.equal([])
    })
})