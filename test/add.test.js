import { expect } from "chai"
import add from "../src/add.js"

describe("Both positive", () => {
    it("should return 2 with augend as 1 and addend as 1", () => {
        expect(add(1, 1)).to.equal(2)
    })
})
