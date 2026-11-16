/*
 * `Ticket Queue Simulator` 
 * 
 * Simulate a customer service ticket line based on a list of event commands. Your function should process the commands in order and 
 * return an object with two arrays: queue (the people still waiting, in order from front to back) and 
 * served (the people who were served, in the order they were served).
 * 
 * The possible commands are:
 * "join <name>": Adds <name> to the back of the queue. If someone with that name is already in the queue, ignore the command.
 * "leave <name>": Removes <name> from the queue if they are currently waiting. If they are not in the queue, ignore the command.
 * "serve": Removes the person at the front of the queue and appends their name to served. If the queue is empty, do nothing.
 * 
 * Note: A person who has been served is no longer in the queue and may join again later.
 */


function simulateTicketQueue(commands) {
    const queue = [];
    const served = [];

    for (const command of commands) {
        if (command === "serve") {
            if (queue.length > 0) {
                const person = queue.shift();
                served.push(person);
            }
        } else if (command.startsWith("join ")) {
            const name = command.slice(5);
            if (!queue.includes(name)) {
                queue.push(name);
            }
        } else if (command.startsWith("leave ")) {
            const name = command.slice(6);
            const index = queue.indexOf(name);
            if (index !== -1) {
                queue.splice(index, 1);
            }
        }
    }

    return { queue, served };
}


console.log(simulateTicketQueue([
    "join Alice",
    "join Bob",
    "serve",
    "join Charlie",
    "leave Bob",
    "serve",
]));                                                                          // { queue: [], served: [ 'Alice', 'Charlie' ] }

console.log(simulateTicketQueue(["serve"]));                                  // { queue: [], served: [] }
console.log(simulateTicketQueue(["join Alice", "join Alice"]));               // { queue: ["Alice"], served: [] }  (duplicate!)
console.log(simulateTicketQueue(["leave Bob"]));                              // { queue: [], served: [] }
console.log(simulateTicketQueue(["join Alice", "serve", "join Alice"]));      // { queue: ["Alice"], served: ["Alice"]
console.log(simulateTicketQueue([]));                                         // { queue: [], served: [] }