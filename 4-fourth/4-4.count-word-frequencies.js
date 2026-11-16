/*
 * `Count Word Frequencies` 
 * 
 * Given a sentence, return an object containing the frequency count of each word. 
 * Ignore case differences (e.g., treat "The" and "the" as the same word). 
 */


function countWordFrequencies(sentence) {
    const words = sentence.toLowerCase().match(/[a-z0-9]+/g) || [];

    const freq = {};

    for (const word of words) {
        freq[word] = (freq[word] || 0) + 1;
    }

    return freq;
}


console.log(countWordFrequencies("The quick brown fox. The fox jumps!"));      // { the: 2, quick: 1, brown: 1, fox: 2, jumps: 1 }
console.log(countWordFrequencies("Hello, hello, HELLO!"));                     // { hello: 3 }
console.log(countWordFrequencies(""));                                         // {}
console.log(countWordFrequencies("cat dog cat 123 123"));                      // { cat: 2, dog: 1, "123": 2 }