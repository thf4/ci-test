import request from "supertest";
import server from "./index";

describe("GET /user", function () {
  it("responds with json", function (done) {
    request(server)
      .get("/")
      .set("Accept", "application/json")
      .expect(200, done);
  });
});
