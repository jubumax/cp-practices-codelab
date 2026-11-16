/*
 * `Title Case a Sentence` 
 * 
 * Write a function titleCaseSentence that takes a string as input and returns a new string where the 
 * first letter of each word is capitalized, and the rest of the letters in each word are lowercase.
 * 
 * Words are separated by one or more spaces. Leading or trailing spaces, and multiple spaces between words, 
 * should be handled gracefully, resulting in a single space separating the title-cased words.
 */


function titleCaseSentence(sentence) {

    const words = sentence.trim().split(/\s+/).filter(word => word.length > 0);

    const titleCased = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    return titleCased.join(" ");
}


console.log(titleCaseSentence("hello world"));                              // "Hello World"
console.log(titleCaseSentence("  HELLO   WorLD  "));                        // "Hello World"
console.log(titleCaseSentence("a short sentence"));                         // "A Short Sentence"
console.log(titleCaseSentence("the QUICK brown FOX"));                      // "The Quick Brown Fox"
console.log(titleCaseSentence(""));                                         // ""   (returns nothing)
console.log(titleCaseSentence("   "));                                      // ""   (returns nothing)