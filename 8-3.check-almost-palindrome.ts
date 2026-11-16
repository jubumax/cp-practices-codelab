/*
 * `Check Almost Palindrome`
 * 
 * Write a function isAlmostPalindrome that takes a string s and returns true if s can be made into a palindrome by 
 * deleting at most one character, and false otherwise.
 * 
 * A palindrome is a string that reads the same backward as forward.
 */


function isAlmostPalindrome(s: string): boolean {

  const isPalindromeRange = (left: number, right: number): boolean => {

    while (left < right) {
      if (s[left] !== s[right]) return false;

      left++;
      right--;
    }

    return true;
  };

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPalindromeRange(left + 1, right) || isPalindromeRange(left, right - 1);
    }

    left++;
    right--;
  }

  return true;
}


console.log(isAlmostPalindrome("aba"));               // true
console.log(isAlmostPalindrome("abc"));               // false
console.log(isAlmostPalindrome(""));                  // true
console.log(isAlmostPalindrome("a"));                 // true
console.log(isAlmostPalindrome("abca"));              // true (cancel 'b' or 'c')
console.log(isAlmostPalindrome("deeee"));             // true (cancel 'd' thne remains "eeee")