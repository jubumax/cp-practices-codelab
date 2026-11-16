/*
 * `Truncate String with Ellipsis` 
 * 
 * Truncate a given string if its length is greater than the specified maxLength. 
 * If truncation occurs, append "..." to the end of the truncated string. 
 * If the string's length is already within or equal to maxLength, return the string unchanged.
 * 
 * Special consideration: If maxLength is 3 or less and truncation is necessary, 
 * the result should simply be "..." as there isn't enough space for both content and the ellipsis.
 */


function truncateString(str: string, maxLength: number): string {
    
  if (str.length <= maxLength) {
    return str;
  }

  if (maxLength <= 3) {
    return "...";
  }

  return str.slice(0, maxLength - 3) + "...";
}


console.log(truncateString("Hello world, this is a long string", 10));              // "Hello w..."
console.log(truncateString("Short text", 15));                                      // "Short text"
console.log(truncateString("Hello", 10));                                           // "Hello"
console.log(truncateString("Hello World", 3));                                      // "..."
console.log(truncateString("Hello World", 2));                                      // "..."
console.log(truncateString("", 5));                                                 // ""   (returns nothing)
console.log(truncateString("My name", 0));                                          // "..."