import { one } from "../file3";

describe("file3", () => {
  it("should expose enum member", () => {
    expect(one).toBe(1);
  });
});