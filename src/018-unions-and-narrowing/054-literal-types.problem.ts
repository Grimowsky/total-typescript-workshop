type Directions = "up-right" | "up-left" | "down-right" | "down-left";
function move(direction: Directions, distance: number) {
    // Move the specified distance in the given direction
}

// TESTS

move("up-right", 10);
move("up-left", 5);

move("up-right", 10);

move("down-left", 20);

move("up-right", 20);
