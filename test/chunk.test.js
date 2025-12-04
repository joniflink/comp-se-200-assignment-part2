import { expect } from "chai"
import chunk from "../src/chunk.js"

const array = ['a', 'b', 'c', 'd']

describe("chunk.js", () => {
    describe("Part of initial test plan", () => {
        it("should return two 2 item arrays with array size 2", () => {
            expect(chunk(array, 2)).to.deep.equal([['a', 'b'], ['c', 'd']])
        })
        
        it("should return empty arrays with array size -3", () => {
            expect(chunk(array, -3)).to.deep.equal([])
        })

        it("should return 1-long arrays with no array size", () => {
            expect(chunk(array)).to.deep.equal([['a'], ['b'], ['c'], ['d']])
        })

        it("should return empty with input as null ", () => {
            expect(chunk(null, 1)).to.deep.equal([])
        })

        it("should throw exception with input as 'string' ", () => {
            expect(()=>chunk('string', 1)).to.throw()
        })
    })

    describe("Additional tests", () => {
        it("should return empty arrays with no array", () => {
            expect(chunk([],1)).to.deep.equal([])
        })

        it("should return empty with undefined array ", () => {
            expect(chunk(undefined, 2)).to.deep.equal([])
        })
    })
})