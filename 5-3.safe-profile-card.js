/*
 * `Safe Profile Card` 
 * 
 * When building user interfaces, we often have to deal with incomplete or nested data.
 * Write a function generateProfileCard that takes a user object and returns a formatted profile string in the following format:
 * "{name} | {city} | followers: {followers}"
 * 
 * Fallback Rules —
 * If certain fields are missing (null or undefined), use these fallbacks:
 * name: defaults to "Anonymous"
 * address.city: defaults to "Unknown"
 * social.followers: defaults to 0
 * 
 * Important: 
 * Empty strings "" and the number 0 are valid values and must not be replaced by fallbacks. 
 * Use optional chaining (?.) and the nullish coalescing operator (??) to handle this safely.
 */


function generateProfileCard(user) {
    const name = user.name ?? "Anonymous";
    const city = user.address?.city ?? "Unknown";
    const followers = user.social?.followers ?? 0;

    return `${name} | ${city} | followers: ${followers}`;
}


console.log(generateProfileCard({
    name: "Alice", address: { city: "Dhaka" }, social: { followers: 150 },
}));                                                                                                    // "Alice | Dhaka | followers: 150"
console.log(generateProfileCard({}));                                                                   // "Anonymous | Unknown | followers: 0"
console.log(generateProfileCard({ name: "", address: { city: "" }, social: { followers: 0 } }));        // " |  | followers: 0"
console.log(generateProfileCard({ name: "Bob", address: null, social: undefined }));                    // "Bob | Unknown | followers: 0"