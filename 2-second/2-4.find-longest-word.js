/*
 * `Find Longest Word` 
 * 
 * Write a function findLongestWord that takes a string (a sentence) and returns the longest word in it.
 * A word is defined as a sequence of one or more letters (a-z, A-Z) or numbers (0-9). Punctuation and spaces should not be considered part of a word.
 * If there are multiple words with the same maximum length, return the first one encountered in the sentence.
 */


function findLongestWord(sentence) {
    const words = sentence.match(/[a-zA-Z0-9]+/g) || [];

    if (words.length === 0) return "";

    let longestWord = words[0];

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}


console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));           // "jumped"
console.log(findLongestWord("I have 2 cats and 1 dog2024."));                           // "dog2024"
console.log(findLongestWord("cat bat mat"));                                            // "cat"
console.log(findLongestWord("Hello world, how are you today?"));                        // "Hello"