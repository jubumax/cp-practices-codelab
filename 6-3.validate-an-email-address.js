/*
 * `Validate an Email Address`
 * 
 * A string is considered a valid email address if and only if:
 * It has the format <local>@<domain>.<tld>.
 * Local part (before @): Contains at least one character and consists only of 
 * alphanumeric characters (a-z, A-Z, 0-9), periods (.), underscores (_), or hyphens (-).
 * Domain part (between @ and .): Contains at least one character and consists only of alphanumeric characters (a-z, A-Z, 0-9) or hyphens (-).
 * Top-Level Domain (TLD) (after .): Contains at least two characters and consists only of alphabetical letters (a-z, A-Z).
 * The email must not contain any spaces or additional @ characters.
 */


function isValidEmail(email) {

    const pattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9-]+\.[A-Za-z]{2,}$/;

    return pattern.test(email);

}


console.log(isValidEmail("user@example.com"));                          // true
console.log(isValidEmail("john.doe_1-x@my-site.org"));                  // true
console.log(isValidEmail(""));                                          // false
console.log(isValidEmail("user@example"));                              // false (No TLD)
console.log(isValidEmail("@example.com"));                              // false (No local)
console.log(isValidEmail("user@example.c"));                            // false (TLD less than 2 letters)
console.log(isValidEmail("user@.com"));                                 // false (Empty domain)
console.log(isValidEmail("user@@example.com"));                         // false (Twice @)
console.log(isValidEmail("us er@example.com"));                         // false (Has space)
console.log(isValidEmail("user@exam_ple.com"));                         // false (domain has underscore)
console.log(isValidEmail("user@example.c0m"));                          // false (Digit in TLD)
console.log(isValidEmail("user@sub.example.com"));                      // false (Extra dot in domain)