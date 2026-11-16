/*
 * `Find First Unique Character` 
 * 
 * Given a string, find the first character that appears only once in the string. 
 * If no such character exists, return -1. 
 */


function findFirstUniqueChar(s) {
    const freq = {};

    for (const char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    for (const char of s) {
        if (freq[char] === 1) {
            return char;
        }
    }

    return -1;
}


console.log(findFirstUniqueChar("swiss"));      // "w"
console.log(findFirstUniqueChar("aabbcc"));     // -1
console.log(findFirstUniqueChar("x"));          // "x"
console.log(findFirstUniqueChar(""));           // -1