import { cube, NumberEnum, square } from "../file1";

describe("file1", () => {
  it("should square numbers", () => {
    expect(square(2)).toBe(4);
  });

  it("should cube numbers", () => {
    expect(cube(3)).toBe(27);
  });

  it("should expose number enum", () => {
    expect(NumberEnum.Zero).toBe(0);
    expect(NumberEnum.One).toBe(1);
    expect(NumberEnum.Two).toBe(2);
  });
});