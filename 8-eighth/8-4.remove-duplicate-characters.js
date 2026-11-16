/*
 * `Remove Duplicate Characters`
 * 
 * Given a string, return a new string with all duplicate characters removed. 
 * The order of the characters in the original string must be preserved, 
 * and only the first occurrence of each character should be kept.
 */


function removeDuplicateCharacters(str) {
    const seen = new Set();
    let result = "";

    for (const char of str) {

        if (!seen.has(char)) {
            seen.add(char);
            result += char;
        }

    }

    return result;
}


console.log(removeDuplicateCharacters("hello"));                    // "helo"
console.log(removeDuplicateCharacters("aabbcc"));                   // "abc"
console.log(removeDuplicateCharacters("abc"));                      // "abc"
console.log(removeDuplicateCharacters("112233!!"));                 // "123!"
console.log(removeDuplicateCharacters(""));                         // ""
console.log(removeDuplicateCharacters("aAbB"));                     // "aAbB" (case-sensitive)
console.log(removeDuplicateCharacters("a b a b"));                  // "a b" (space is also a character)