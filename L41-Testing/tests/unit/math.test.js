const chai = require("chai");
const { it } = require("mocha");
const { product, divide } = require("../../maths/operations");

const { expect } = chai;

describe("Checking Basic Math operations", () => {
    it('Multiply 2 and 3', () => {
        let ans = product(2, 3);
        expect(ans).to.equal(6);
    })

    it('Divide 15 and 3', () => {
        let ans = divide(15, 3);
        expect(ans).to.equal(5);
    })
})
