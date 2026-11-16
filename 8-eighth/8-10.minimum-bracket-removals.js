/*
 * `Minimum Bracket Removals`
 * 
 * Given a string containing only opening '(' and closing ')' brackets, return the 
 * minimum number of brackets that must be removed to make the string balanced.
 * 
 * A string is considered balanced if:
 * 
 * Every opening bracket has a corresponding closing bracket.
 * Every closing bracket has a corresponding opening bracket.
 * The brackets are properly nested (e.g., '()' is balanced, ')(' is not).
 */


function minRemovalsToBalance(s) {
    let open = 0;
    let removals = 0;

    for (const char of s) {

        if (char === "(") {
            open++;

        } else if (char === ")") {
            if (open > 0) {
                open--;

            } else {
                removals++;
            }
        }
    }

    return removals + open;
}


console.log(minRemovalsToBalance("()"));                    // 0
console.log(minRemovalsToBalance("())"));                   // 1
console.log(minRemovalsToBalance("((("));                   // 3
console.log(minRemovalsToBalance(""));                      // 0
console.log(minRemovalsToBalance("()())()("));              // 2