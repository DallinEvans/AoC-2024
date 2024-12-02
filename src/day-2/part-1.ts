import utils from "@src/utils/index.ts";

const input = await utils.getInputForDay(2);

let count = 0;

outer: for (let i = 0; i < input.length; i++) {
    const line = input[i];
    if (!line) continue;

    const numbers = line.split(" ").map(Number);

    let accending = false;
    let decending = false;

    for (let j = 0; j < numbers.length; j++) {
        const current = numbers[j];
        const next = numbers[j + 1];

        if (next === undefined) continue;

        if (!accending || !decending) {
            if (next > current) {
                accending = true;
            } else if (next < current) {
                decending = true;
            }
        }

        const difference = Math.abs(next - current);

        if (
            (accending && next < current) ||
            (decending && next > current) ||
            (difference > 3 || difference < 1)
        ) {
            continue outer;
        }
    }

    count++;
}

console.log("Result:", count);
