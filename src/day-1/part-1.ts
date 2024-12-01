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

left.sort();
right.sort();

const differences = [];

for (let i = 0; i < left.length; i++) {
  differences.push(Math.abs(left[i] - right[i]));
}

console.log(
  "Result:",
  differences.reduce((a, b) => a + b, 0),
);
