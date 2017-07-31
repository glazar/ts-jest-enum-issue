import { blue } from "../file2";

describe("file2", () => {
  it("should expose enum member", () => {
    expect(blue).toBe("BLUE");
  });
});