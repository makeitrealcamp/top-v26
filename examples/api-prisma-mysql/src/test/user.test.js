import request from "supertest";
import app from "../app.js";

describe("user endpoints", () => {
  it("POST /user should registar an user", async () => {
    await request(app)
      .post("/user")
      .send({
        email: "mockemail@test.com",
        password: "1234567",
      })
      .expect(201);
  });

  describe("POST /user/login", () => {
    it("should allow login when user is valid", async () => {
        const res = await request(app)
        .post("/user/login")
        .send({
            username: "mockemail@test.com",
            passwd: "1234567",
        })
        expect(res.body.token).toBeDefined()
      });

    it("should denied when user is wrong", async () => {
        const res = await request(app)
        .post("/user/login")
        .send({
            username: "mockemail@test.com",
            passwd: "12345671234",
        })
        expect(res.body.token).toBeUndefined()
        expect(res.status).toEqual(401)
    })

    it("should fail when request is bad", async () => {
      await request(app)
      .post("/user/login")
      .send({
        email: "mockemail@test.com",
        pass: "1234567",
      })
      .expect(500);
    })
  })
});
