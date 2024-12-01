import utils from "@src/utils/index.ts";

const input = await utils.getInputForDay(1);

const left: Array<number> = [];
const right: Array<number> = [];

for (let i = 0; i < input.length; i++) {
  if (!input[i]) continue;

  const split = input[i].split("   ");

  left.push(Number(split[0]));
  right.push(Number(split[1]));
}

const similarities: Array<number> = [];

for (let i = 0; i < left.length; i++) {
  similarities.push(left[i] * right.filter((r) => r === left[i]).length);
}

console.log(
  "Result:",
  similarities.reduce((a, b) => a + b, 0),
);
