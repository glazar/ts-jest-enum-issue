import { ColorEnum } from "../file4";

describe("file4", () => {
  it("should expose color enum", () => {
    expect(ColorEnum.Red).toBe("RED");
    expect(ColorEnum.Green).toBe("GREEN");
    expect(ColorEnum.Blue).toBe("BLUE");
  });
});