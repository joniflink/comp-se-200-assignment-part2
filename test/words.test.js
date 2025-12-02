import { expect } from "chai"
import words from "../src/words.js"

describe("words.js", () => {
    it("should return ['fred','barney','pebbles'] with string as 'fred, barney, & pebbles'", () => {
        expect(words("fred, barney, & pebbles")).to.deep.equal(['fred','barney','pebbles'])
    })

    it("should return ['fred','barney','&','pebbles'] with string as 'fred, barney, & pebbles' and pattern as /[^, ]+/g", () => {
        expect(words("fred, barney, & pebbles", /[^, ]+/g)).to.deep.equal(['fred','barney','&','pebbles'])
    })

    it("should return [] (empty array) with string as '' (empty string)", () => {
        expect(words("")).to.deep.equal([])
    })

    it("should throw an exception with string as an integer (5)", () => {
        expect(words(5)).to.throw()
    })
})