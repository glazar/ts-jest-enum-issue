import { ColorEnum, consoleLog } from "./file4";

export const square = (x: number) => x * x;
export const cube = (x: number) => x * x * x;

export const consoleLogSquare = (x: number) => consoleLog(square(x));
export const consoleLogCube = (x: number) => consoleLog(cube(x));

export enum NumberEnum {
  Zero = 0,
  One = 1,
  Two = 2
}

export const blue: ColorEnum = ColorEnum.Blue;