async function getInputForDay(day: number): Promise<string[]> {
    const response = await fetch(
        `https://adventofcode.com/2024/day/${day}/input`,
        {
            headers: {
                cookie: `session=${Deno.env.get("SESSION")}`,
            },
        },
    );

    const text = await response.text();

    return text.split("\n");
}

export default {
    getInputForDay,
};
