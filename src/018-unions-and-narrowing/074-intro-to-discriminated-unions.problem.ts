import { Equal, Expect } from "@total-typescript/helpers";
import { expect, it } from "vitest";

type Circle = {
    kind: "circle";
    radius: number;
};

type Square = {
    kind: "square";
    sideLength: number;
};

type Shape = Square | Circle;

function calculateArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius * shape.radius;
    } else {
        return shape.sideLength * shape.sideLength;
    }
}

it("Should calculate the area of a circle", () => {
    const result = calculateArea({
        kind: "circle",
        radius: 5,
    });

    expect(result).toBe(78.53981633974483);

    type test = Expect<Equal<typeof result, number>>;
});

it("Should calculate the area of a square", () => {
    const result = calculateArea({
        kind: "square",
        sideLength: 5,
    });

    expect(result).toBe(25);

    type test = Expect<Equal<typeof result, number>>;
});
