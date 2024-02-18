const request = require("supertest");
const server = require("./index");

describe("GET /user", function () {
  it("responds with json", function (done) {
    request(server)
      .get("/")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});
