const chai = require("chai");
const { it } = require("mocha");
const chaiHttp = require('chai-http');
const app = require("../../app");

const { expect } = chai;
chai.use(chaiHttp);

describe("Checking Backend APIs", () => {
    it('GET request at /hello', async () => {
        let response = await chai.request(app).get("/hello");
        expect(response.text).to.be.a('string')
        expect(response.text).to.equal('hello');
    })

    it('GET request at /world', async () => {
        let response = await chai.request(app).get("/world");
        expect(response.text).to.be.a('string')
        expect(response.text).to.equal('world');
    })

    it('GET request at /user', async () => {
        let res = await chai.request(app).get("/user");
        expect(res.body).to.be.a('object');
        expect(res.body).to.have.property("email");
        expect(res.body).to.have.property("password");
        expect(res.body).to.have.property("name");
    })
})
