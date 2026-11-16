/*
 * `Elevator Floor Tracker`
 * 
 * Write a function trackElevator that simulates an elevator's movement given a starting floor, building bounds, and a sequence of movement commands.
 * 
 * The function takes four parameters:
 * startFloor: The floor where the elevator starts.
 * minFloor: The lowest floor allowed in the building.
 * maxFloor: The highest floor allowed in the building.
 * commands: An array of strings where each element is either "UP" or "DOWN".
 * 
 * Each "UP" command moves the elevator up by 1 floor (if it is not already at maxFloor). 
 * Each "DOWN" command moves the elevator down by 1 floor (if it is not already at minFloor). 
 * Commands that would move the elevator beyond the bounds are capped at the boundary.
 * 
 * Return the final floor number after all commands have been processed.
 */


function trackElevator(
  startFloor: number,
  minFloor: number,
  maxFloor: number,
  commands: string[]
): number {
  let floor = startFloor;

  for (const command of commands) {
    if (command === "UP") {
      if (floor < maxFloor) floor++;
    } else if (command === "DOWN") {
      if (floor > minFloor) floor--;
    }
  }

  return floor;
}


console.log(trackElevator(0, 0, 5, ["UP", "UP", "DOWN"]));                                              // 1
console.log(trackElevator(5, 0, 5, ["UP", "UP"]));                                                      // 5
console.log(trackElevator(0, 0, 5, ["DOWN", "DOWN"]));                                                  // 0
console.log(trackElevator(3, 3, 3, ["UP", "DOWN", "UP"]));                                              // 3 (min = max)
console.log(trackElevator(2, -3, 4, []));                                                               // 2 (has no command)
console.log(trackElevator(-2, -5, 5, ["DOWN", "DOWN", "DOWN", "DOWN", "UP"]));                          // -4