/*
 * `Is It a Palindrome?`
 * 
 * A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. 
 * For this problem, you need to write a function that checks if a given string is a palindrome.
 * 
 * Your function should ignore case, spaces, and punctuation. 
 * Only alphanumeric characters (letters and numbers) should be considered when determining if the string is a palindrome.
 */


function isPalindrome(str: string): boolean {

  const cleaned: string = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversed: string = cleaned.split("").reverse().join("");

  return cleaned === reversed;
  
}


console.log(isPalindrome(""));                                          // true (empty string)
console.log(isPalindrome("A man, a plan, a canal: Panama"));            // true
console.log(isPalindrome("Race A Car"));                                // false
console.log(isPalindrome("12321"));                                     // true
console.log(isPalindrome(".,!"));                                       // true (because there are no alphanumeric)
console.log(isPalindrome("Was it a car or a cat I saw?"));              // true