import { expect } from "chai"
import toNumber from "../src/toNumber.js"

describe("toNumber.js", () => {
    it("should return \"3.2\" with value as 3.2", () => {
        expect(toNumber(3.2)).to.be.equal(3.2)
    })
    it("should return \"0\" with value as 0", () => {
        expect(toNumber(0)).to.equal(0)
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
    it("should return \"NaN\" with value as Symbol.iterator", () => {
        expect(toNumber(Symbol.iterator)).to.be.NaN
    })
    it("should return value of object \"32\" with object with valueOf()", () => {
        const obj = { valueOf: () => 32 }
        expect(toNumber(obj)).to.equal(32)
    })
    it("should return \"NaN\" with object whose valueOf returns an object", () => {
        const obj = { valueOf: () => ({ a: 1 }) }
        expect(toNumber(obj)).to.be.NaN
    })
    it("sshould return \"NaN\" with null object", () => {
        const obj = Object.create(null)
        expect(toNumber(obj)).to.be.NaN
    })

    it("should return \"0\" with boolean false", () => {
        expect(toNumber(false)).to.equal(0)
    })
    it("should return \"1\" with boolean true", () => {
        expect(toNumber(true)).to.equal(1)
    })

    it("should return \"8\" with '  8   ' ", () => {
        expect(toNumber("   8   ")).to.equal(8)
    })
    it("should return \"5\" with binary string '0b101' ", () => {
        expect(toNumber("0b101")).to.equal(5);
    });
    it("should return \"8\" with octal string '0o10' ", () => {
        expect(toNumber("0o10")).to.equal(8)
    })
    it("should return \"NaN\" for a bad hex string", () => {
        expect(toNumber("-0xZZ")).to.be.NaN
    })
    it("should return \"15\" with hex string'0xF'", () => {
        expect(toNumber("0xF")).to.equal(15)
    })
    it("should return \"NaN\" for bad signed hex values", () => {
        expect(toNumber("-0x123")).to.be.NaN
    })
    it("should return \"NaN\" with non number stirng 'not - a - number'", () => {
        expect(toNumber("not-a-number")).to.be.NaN
    })
    it("should hit the value === 0 branch with Number object 0", () => {
        expect(toNumber(new Number(0))).to.equal(0)
    })
})