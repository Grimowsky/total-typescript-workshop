import { Expect, Equal } from "@total-typescript/helpers";

async function fetchData(): Promise<number> {
    const response = await fetch("https://api.example.com/data");
    return await response.json();
}

const example = async () => {
    const data = await fetchData();

    type test = Expect<Equal<typeof data, number>>;
};
