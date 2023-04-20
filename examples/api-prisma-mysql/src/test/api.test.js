import request from "supertest"
import app from "../app.js"

describe("user endpoints",  () => {
    it("POST /user should registar an user", () => {
        request(app)
        .post('/user')
        .send({
            email: 'mockemail@test.com',
            password:'1234567' 
        })
        .expect(201)
    })
})