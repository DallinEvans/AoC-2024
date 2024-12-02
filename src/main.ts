import "jsr:@std/dotenv/load";

let day = 0;
let part = 0;

for (let i = 0; i < Deno.args.length; i++) {
    const arg = Deno.args[i];
    const split = arg.split("=");

    switch (split[0]) {
        case "--day":
            day = parseInt(split[1]);
            break;
        case "--part":
            part = parseInt(split[1]);
            break;
    }
}

if (day === 0) {
    day = parseInt(prompt("Please enter the day:") ?? "0");
}

if (part === 0) {
    part = parseInt(prompt("Please enter the part:") ?? "0");
}

try {
    await import(`@src/day-${day}/part-${part}.ts`);
} catch (e) {
    console.error(e);
}
