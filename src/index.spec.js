import { div, mult, sum } from ".";

describe("GET /user",() => {
  it("calculated sum", () => {
    const soma = sum(1, 4);
    expect(soma).toBe(5);
  });

  it("division div", () => {
    const division = div(12, 4);
    expect(division).toBe(3);
  });

  it("multiplicated", () => {
    const multiplicated = mult(3, 4);
    expect(multiplicated).toBe(12);
  });
});
