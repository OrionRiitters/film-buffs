const chai = require('chai');

const auth = require('../../routes/auth/index.js')
const express = require('express')
const request = require('supertest')
const models = require('../../model/models.js')
const api_routes = require('../../routes/api.js')
const CryptoJS = require('crypto-js')
let chaiAsPromised = require("chai-as-promised");
let expect = chai.expect()
let app = express()
chai.use(chaiAsPromised);



app.get('/api', api_routes(models))


describe('POST /auth', function() {
    this.timeout(4000)
    it('responds with username and password', function(done) {

        let hash = CryptoJS.SHA256('hello')
        let hashString = hash.toString(CryptoJS.enc.Hex)

        request(app)
            .post('/api/auth')
            .send({
                username: 'yes',
                password: 'hello'
            })
            .set('Accept', 'application/json')
            .expect(200)
            .then(res => {
                expect(res.body.hash).to.be(hash, done)
                
            })
    })
})


/*

let req = {
    body: {},
};



let res = {
    sendCalledWith: '',
    send: function(arg) { 
        this.sendCalledWith = arg;
    }
};

describe('Auth route', function() {
    describe('post to create route', function() {
        it('Should error out if no args provided ', function() {
            auth.(req, res);
            expect(res.sendCalledWith).to.contain('error');
        });
    })
});
*/
