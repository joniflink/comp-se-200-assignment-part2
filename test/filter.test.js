import { expect } from "chai"
import filter from "../src/filter.js"

//sample user data for the filter
const users = [
	{ 'user': 'barney', 'active': true },
	{ 'user': 'fred', 'active': false }
]

describe("filter.js", () => {
	it("should reurn array of active users", () => {
		expect(filter(users, ({ active }) => active).toString()).to.equal([{ 'user': 'barney', 'active': true }].toString())
	})
	it("should reurn array of not active users", () => {
		expect(filter(users, ({ active }) => !active).toString()).to.equal([{ 'user': 'fred', 'active': false }].toString())
	})
})