/*
 * `Compress Consecutive Characters`
 * 
 * Write a function that takes a string and replaces consecutive repeating 
 * characters with the character followed by the count. 
 * If a character appears only once, do not append a number.
 */


function compressCharacters(str: string): string {
    if (str.length === 0) return "";

  let result = "";
  let count = 1;

  for (let i = 1; i <= str.length; i++) {

    if (i < str.length && str[i] === str[i - 1]) {
      count++;

    } else {
      result += str[i - 1];

      if (count > 1) {
        result += count;

      }
      
      count = 1;
    }
  }

  return result;
}


console.log(compressCharacters("aabcccccaaa"));                 // "a2bc5a3"
console.log(compressCharacters("abcd"));                        // "abcd"
console.log(compressCharacters("hello"));                       // "hel2o"
console.log(compressCharacters(""));                            // ""
console.log(compressCharacters("aabbc"));                       // "a2b2c"