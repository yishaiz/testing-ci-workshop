const chai = require("chai");
const expect = chai.expect;

const sinon = require("sinon");
const indexPage = require("../../controllers/app.controller.js");

describe("getIndexPage", function () {
    it("should return index page", function () {
        let req = {}
        // Have `res` have a send key with a function value coz we use `res.send()` in our func
        let res = {
            send : sinon.spy()
        }

        indexPage.getIndexPage(req, res);
        // let's see what we get on res.send
        // console.log('xxxxxxxxxxxxx2');

        // console.log(res.send);
    });
});

describe("getIndexPage", function () {
    it("should send hey", function () {
        let req = {}
        // Have `res` have a send key with a function value coz we use `res.send()` in our func
        let res = {
            // replace empty function with a spy
            send : sinon.spy()
        }

        indexPage.getIndexPage(req, res);
        // let's see what we get on res.send
        // console.log(res.send);
        // `res.send` called once
        expect(res.send.calledOnce).to.be.true;
        // expect to get argument `bla` on first call
        expect(res.send.firstCall.args[ 0 ]).to.equal("bla");
    });
});


const user = {
    addUser: (name) => {
        this.name = name;
    }
}

describe("User", function () {
    describe("addUser", function () {
        it("should add a user", function () {
            sinon.spy(user, "addUser");

            // lets log `addUser` and see what we get
            console.log(user.addUser());

            expect(user.addUser.calledOnce).to.be.true;
            // expect(user.addUser.calledTwice).to.be.true;
        });
    });
});
