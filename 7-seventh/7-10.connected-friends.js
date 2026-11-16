/*
 * `Connected Friends`
 * 
 * Given an array of undirected friendships represented as pairs of names [person1, person2], and a startPerson, 
 * return the total number of people in the connected network starting from startPerson (including startPerson themselves).
 * 
 * Friendships are mutual. If person A is friends with B, and B is friends with C, then A, B, and C are all in the same connected network.
 * 
 * If startPerson has no listed friendships, the size of their network is 1 (just themselves).
 */


function countConnectedFriends(friendships, startPerson) {
    const graph = new Map();

    const addEdge = (a, b) => {
        if (!graph.has(a)) graph.set(a, []);
        graph.get(a).push(b);
    };

    for (const [a, b] of friendships) {
        addEdge(a, b);
        addEdge(b, a);
    }

    const visited = new Set([startPerson]);
    const queue = [startPerson];

    for (let head = 0; head < queue.length; head++) {
        const person = queue[head];
        for (const friend of graph.get(person) ?? []) {
            if (!visited.has(friend)) {
                visited.add(friend);
                queue.push(friend);
            }
        }
    }

    return visited.size;
}


console.log(countConnectedFriends([["A", "B"], ["B", "C"], ["D", "E"]], "A"));                      // 3
console.log(countConnectedFriends([], "A"));                                                        // 1
console.log(countConnectedFriends([["A", "B"]], "Z"));                                              // 1        (has not in list)
console.log(countConnectedFriends([["A", "B"], ["B", "C"], ["C", "A"]], "A"));                      // 3        (cycle)
console.log(countConnectedFriends([["A", "A"]], "A"));                                              // 1        (self-friendship)
console.log(countConnectedFriends([["A", "B"], ["B", "A"], ["A", "B"]], "A"));                      // 2        (duplicate pair)