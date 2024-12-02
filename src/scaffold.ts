const days = 31;
const parts = 2;

const template = `import utils from "@src/utils/index.ts";

const input = await utils.getInputForDay({{day}});

throw new Error("Not implemented yet");

`;

for (let day = 1; day <= days; day++) {
    for (let part = 1; part <= parts; part++) {
        const path = `./src/day-${day}/`;
        const file = `part-${part}.ts`;
        const pathAndFile = `${path}${file}`;

        try {
            await Deno.lstat(pathAndFile);
        } catch (err) {
            if (err instanceof Deno.errors.NotFound) {
                Deno.mkdir(path, { recursive: true });
                Deno.writeFile(
                    pathAndFile,
                    new TextEncoder().encode(template.replace("{{day}}", `${day}`)),
                );
            }
        }
    }
}
