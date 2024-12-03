import utils from "@src/utils/index.ts";

const input = await utils.getInputForDay(2);

let count = 0;

function isSafe(numbers: Array<number>, retrying: boolean = false): boolean {
    for (let i = 0; i < numbers.length; i++) {
        const previous = numbers[i - 1];
        const current = numbers[i];
        const next = numbers[i + 1];

        const difference = Math.abs(next - current);

        if (
            (previous < current && next < current) ||
            (previous > current && next > current) ||
            (difference > 3 || difference < 1)
        ) {
            if (!retrying) {
                for (let j = 0; j < numbers.length; j++) {
                    if (isSafe(numbers.filter((_, k) => k !== j), true)) {
                        return true;
                    }
                }
            }

            return false;
        }
    }

    return true;
}

for (let i = 0; i < input.length; i++) {
    const line = input[i];
    if (!line) continue;

    const numbers = line.split(" ").map(Number);

    if (isSafe(numbers)) {
        count++;
    }
}

console.log("Result:", count);
