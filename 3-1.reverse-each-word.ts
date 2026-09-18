/*
 * `Reverse Each Word`
 * 
 * Given a string, reverse each word in the string while maintaining the original order of words and spaces.
 */


function reverseEachWord(str: string): string {

  const words: string[] = str.split(/(\s+)/);

  const reversedWords: string[] = words.map(token => {

    if (/^\s+$/.test(token)) {
      return token;
    }

    return token.split("").reverse().join("");

  });

  return reversedWords.join("");
} 


console.log(reverseEachWord("Hello World"));              // "olleH dlroW"
console.log(reverseEachWord("  Hi   there  "));           // "  iH   ereht  "
console.log(reverseEachWord(""));                         // ""
console.log(reverseEachWord("a b  c"));                   // "a b  c"