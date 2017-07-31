import { cube, square } from "../file1";

describe("file1", () => {
  it("should square numbers", () => {
    expect(square(2)).toBe(4);
  });

  it("should cube numbers", () => {
    expect(cube(3)).toBe(27);
  });
});