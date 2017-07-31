import { cube, NumberEnum, square } from "./file1";

export const consoleLog = (x: number): void  => {
  console.log(x);
};

export const consoleLogSquare = (x: number) => consoleLog(square(x));
export const consoleLogCube = (x: number) => consoleLog(cube(x));

export enum ColorEnum {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}

export const one: NumberEnum = NumberEnum.One;