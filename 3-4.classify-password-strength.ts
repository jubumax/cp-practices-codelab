/*
 * `Classify Password Strength`
 * 
 * Given a password string, classify its strength as "Weak", "Medium", or "Strong" based on the following rules:
 * 
 * Strong: The password has a length of 8 or more characters and contains at least one uppercase letter, one lowercase letter, 
 * one digit, and one special character (from !@#$%^&*).
 * 
 * Medium: The password has a length of 6 or more characters and satisfies at least two of the four 
 * character-type conditions (uppercase, lowercase, digit, special character).
 * 
 * Weak: Any password that does not meet the criteria for "Strong" or "Medium".
 */


function classifyPassword(password: string): "Weak" | "Medium" | "Strong" {

  const hasUpper: boolean = /[A-Z]/.test(password);
  const hasLower: boolean = /[a-z]/.test(password);
  const hasDigit: boolean = /[0-9]/.test(password);
  const hasSpecial: boolean = /[!@#$%^&*]/.test(password);

  const conditionsMet: number = [hasUpper, hasLower, hasDigit, hasSpecial].filter(Boolean).length;

  if (password.length >= 8 && hasUpper && hasLower && hasDigit && hasSpecial) {
    return "Strong";
  }

  if (password.length >= 6 && conditionsMet >= 2) {
    return "Medium";
  }

  return "Weak";
}


console.log(classifyPassword("ABC"));                 // "Weak" (length < 6)
console.log(classifyPassword("abcdef"));              // "Weak" (only lowercase)
console.log(classifyPassword("abc123"));              // "Medium"
console.log(classifyPassword("Abcdef1"));             // "Medium"
console.log(classifyPassword("Abc123!@"));            // "Strong"
console.log(classifyPassword(""));                    // "Weak"