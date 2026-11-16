/*
 * `Validate Bangladeshi Mobile Number`
 * 
 * Determine if a given string represents a valid Bangladeshi mobile number. 
 * A valid number must conform to one of the following formats:
 * 
 * Starts with 01, followed by 9 more digits. The digit immediately after 01 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., 01712345678)
 * Starts with +8801, followed by 9 more digits. The digit immediately after +8801 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., +8801712345678)
 * Starts with 8801, followed by 9 more digits. The digit immediately after 8801 must be 3, 4, 5, 6, 7, 8, or 9. (e.g., 8801712345678)
 * 
 * All characters must be digits, except for the optional leading + sign.
 */


function isValidBdMobileNumber(phoneNumber) {

    const pattern = /^(?:\+?880|0)1[3-9]\d{8}$/;

    return pattern.test(phoneNumber);

}


console.log(isValidBdMobileNumber("01712345678"));                           // true
console.log(isValidBdMobileNumber("+8801712345678"));                        // true
console.log(isValidBdMobileNumber("8801712345678"));                         // true
console.log(isValidBdMobileNumber("01212345678"));                           // false (2 is after 01)
console.log(isValidBdMobileNumber("01012345678"));                           // false (0 is after 01)
console.log(isValidBdMobileNumber("0171234567"));                            // false (10 digits)
console.log(isValidBdMobileNumber("017123456789"));                          // false (12 digits)
console.log(isValidBdMobileNumber("+01712345678"));                          // false (+ is only acceptable with +880)
console.log(isValidBdMobileNumber("++8801712345678"));                       // false
console.log(isValidBdMobileNumber("0171234567a"));                           // false (letter)
console.log(isValidBdMobileNumber("017 1234 5678"));                         // false (space)
console.log(isValidBdMobileNumber(""));                                      // false