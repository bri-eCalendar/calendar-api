const request = require("supertest");
const server = require("./server.js");

describe("GET /", function () {
  it('has process.env.DB_ENV as "testing"', () =>
    expect(process.env.DB_ENV).toBe("testing"));

  it("returns 200 ok", async function () {
    let res = await request(server).get("/");
    expect(res.status).toBe(200);
  });
});
