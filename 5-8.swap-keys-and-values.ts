/*
 * `Swap Keys and Values`
 * 
 * Write a function that takes an object and returns a new object where the keys and values are swapped.
 * If multiple keys in the original object share the same value, the key that appears later in the object's property order 
 * should overwrite any previous ones ("later key wins").
 * 
 * Note: In JavaScript, object keys are always strings. Therefore, the values in the 
 * returned object (which were the keys of the input object) should be strings.
 */


function swapKeysAndValues(obj: Record<string, string | number>): Record<string, string> {
  const result: Record<string, string> = {};

  for (const [key, value] of Object.entries(obj)) {
    result[value] = key;
  }

  return result;
}


console.log(swapKeysAndValues({ a: 1, b: 2, c: 3 }));                   // { "1": "a", "2": "b", "3": "c" }
console.log(swapKeysAndValues({ a: 1, b: 1, c: 2 }));                   // { "1": "b", "2": "c" }   (b overwrites a, because b comes later)
console.log(swapKeysAndValues({}));                                     // {}
console.log(swapKeysAndValues({ x: "hello", y: "world" }));             // { hello: "x", world: "y" }
console.log(swapKeysAndValues({ a: "1", b: 1 }));                       // { "1": "b" }  (string "1" & number 1 in same object key, so b overwrites a)