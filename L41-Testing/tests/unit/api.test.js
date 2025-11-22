const chai = require("chai");
const { it } = require("mocha");
const chaiHttp = require('chai-http');
const app = require("../../app");
const { default: mongoose } = require("mongoose");
const User = require("../../models/User");

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


describe("Checking Database and API", () => {
    before(async function () {
        const uri = "mongodb://localhost:27017/test";
        await mongoose.connect(uri);
    });

    // beforeEach(async function () {
    //     await User.deleteMany({});
    // });

    // afterEach(async function () {
    //     // can reset other collections if needed
    // });

    after(async function () {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
    });

    it("Checking Entry in DB", async () => {
        let user = await User.create({
            name: 'kartik',
            email: 'kartik@codingblocks.com',
            password: 'password'
        })

        let res = await chai.request(app).get(`/checkuser?email=${user.email}`);

        expect(res).to.have.status(200);
        expect(res.body).to.be.an("object");

        expect(res.body).to.have.property("email", user.email);
        expect(res.body).to.have.property("password");
        expect(res.body).to.have.property("name");

    })


})
