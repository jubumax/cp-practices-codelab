/*
 * `Notification Badge Counter`
 * 
 * Given an initial notification count initialCount and an array of event objects events, return the final notification badge count.
 * 
 * Each event in events is an object with a type property ("ADD", "READ", or "CLEAR") and an 
 * optional count property (a positive integer, defaulting to 1 if omitted).
 * 
 * Process the events in order:
 * 
 * "ADD": Increase the notification count by count (or 1 if count is omitted).
 * "READ": Decrease the notification count by count (or 1 if count is omitted). 
 * The count cannot drop below 0. If decreasing it would result in a negative number, set it to 0.
 * "CLEAR": Reset the notification count to 0.
 */


interface NotificationEvent {
  type: "ADD" | "READ" | "CLEAR";
  count?: number;
}

function updateNotificationCount(initialCount: number, events: NotificationEvent[]): number {
  let count = initialCount;

  for (const event of events) {
    const amount = event.count ?? 1;

    if (event.type === "ADD") {
      count += amount;
    } else if (event.type === "READ") {
      count = Math.max(0, count - amount);
    } else if (event.type === "CLEAR") {
      count = 0;
    }
  }

  return count;
}


console.log(updateNotificationCount(5, [{ type: "ADD" }, { type: "ADD", count: 3 }]));              // 9
console.log(updateNotificationCount(5, [{ type: "READ", count: 10 }]));                             // 0
console.log(updateNotificationCount(5, [{ type: "CLEAR" }, { type: "ADD", count: 2 }]));            // 2
console.log(updateNotificationCount(3, [{ type: "READ" }]));                                        // 2
console.log(updateNotificationCount(0, []));                                                        // 0
console.log(updateNotificationCount(0, [{ type: "READ" }, { type: "ADD" }]));                       // 1