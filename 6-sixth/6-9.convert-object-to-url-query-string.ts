/*
 * `Convert Object to URL Query String`
 * 
 * Write a function toQueryString that takes a flat object of key-value pairs (where values are strings or numbers) and 
 * converts it into a URL query string.
 * 
 * Each pair must be formatted as key=value, and pairs must be joined by &. 
 * Both keys and values should be encoded using standard URI component encoding (e.g. encodeURIComponent). 
 * Pairs should appear in the order returned by Object.entries(params).
 * 
 * Do not include a leading ? in the output. If the input object has no keys, return an empty string "".
 */


function toQueryString(params: Record<string, string | number>): string {
    return Object.entries(params)
        .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
        .join("&");
}


console.log(toQueryString({ a: 1, b: "two" }));                                            // a=1&b=two
console.log(toQueryString({ q: "hello world", lang: "en" }));                              // q=hello%20world&lang=en
console.log(toQueryString({ "user name": "A&B=C" }));                                      // user%20name=A%26B%3DC
console.log(toQueryString({ n: 0 }));                                                      // n=0
console.log(toQueryString({ e: "" }));                                                     // e=
console.log(toQueryString({}));                                                            // ""