/*
 * `Convert Sentence to Camel Case`
 * 
 * Given a sentence where words are separated by spaces, convert it into camelCase format. 
 * The first word of the resulting string should start with a lowercase letter, and all subsequent words should start with an uppercase letter. 
 * All other letters should be lowercase, and there should be no spaces.
 */


function convertToCamelCase(sentence: string): string {

    const words: string[] = sentence.split(" ").filter(word => word.length > 0);

    if (words.length === 0) return "";

    const camelCased: string[] = words.map((word, index) => {
        const lowerWord = word.toLowerCase();

        if (index === 0) {
            return lowerWord;
        }

        return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
    });

    return camelCased.join("");
}


console.log(convertToCamelCase("hello world"));                     // helloWorld
console.log(convertToCamelCase("java script is fun"));              // javaScriptIsFun