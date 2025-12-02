import { expect } from "chai"
import filter from "../src/filter.js"

//sample user data for the filter
const users = [
	{ 'user': 'barney', 'active': true },
	{ 'user': 'fred', 'active': false }
]

describe("filter.js", () => {
	it("should return array of active users", () => {
		expect(filter(users, ({ active }) => active)).to.deep.equal([{ 'user': 'barney', 'active': true }])
	})
	it("should return array of not active users", () => {
		expect(filter(users, ({ active }) => !active)).to.deep.equal([{ 'user': 'fred', 'active': false }])
	})
	it("should return empty array when array is null", () => {
		expect(filter(null, ({ active }) => active)).to.deep.equal([[]]);
	});
	it("should return empty array when array is undefined", () => {
		expect(filter(undefined, ({ active }) => active)).to.deep.equal([[]]);
	});
	it("should return empty array when no elements match", () => {
		expect(filter(users, ({ active }) => false)).to.deep.equal([[]]);
	});

})