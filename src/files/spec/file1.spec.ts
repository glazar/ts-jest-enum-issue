import { cube, square, ColorEnum, NumberEnum } from "../file1";

describe("file1", () => {
  it("should square numbers", () => {
    expect(square(2)).toBe(4);
  });

  it("should cube numbers", () => {
    expect(cube(3)).toBe(27);
  });

  it("should expose color enum", () => {
    expect(ColorEnum.Red).toBe("RED");
    expect(ColorEnum.Green).toBe("GREEN");
    expect(ColorEnum.Blue).toBe("BLUE");
  });

  it("should expose number enum", () => {
    expect(NumberEnum.Zero).toBe(0);
    expect(NumberEnum.One).toBe(1);
    expect(NumberEnum.Two).toBe(2);
  });
});