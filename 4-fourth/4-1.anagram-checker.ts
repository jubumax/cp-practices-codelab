/*
 * `Anagram Checker`
 * 
 * An anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
 * typically using all the original letters exactly once.
 * 
 * Given two strings, s1 and s2, determine if they are anagrams of each other.
 * 
 * You should consider the strings to be anagrams if they contain the same letters with the same frequency, 
 * regardless of case, spaces, or punctuation. Only alphabetic characters should be considered.
 */


function isAnagram(s1: string, s2: string): boolean {

  const clean = (str: string): string =>
    str.toLowerCase().replace(/[^a-z]/g, "").split("").sort().join("");

  return clean(s1) === clean(s2);
}


console.log(isAnagram("Listen", "Silent"));                                     // true
console.log(isAnagram("A decimal point", "I'm a dot in place"));                // true
console.log(isAnagram("Hello", "World"));                                       // false
console.log(isAnagram("", ""));                                                 // true
console.log(isAnagram("abc", "abcd"));                                          // false (length mismatch)
console.log(isAnagram("Dormitory", "Dirty Room"));                              // true