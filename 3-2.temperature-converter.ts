/*
 * `Temperature Converter`
 * 
 * Given a temperature value and its unit ('C' for Celsius or 'F' for Fahrenheit), convert the temperature to the other unit. 
 * The result should be a number, rounded to two decimal places.
 */


function convertTemperature(value: number, unit: 'C' | 'F'): number {

  let result: number;

  if (unit === "C") {

    result = (value * 9) / 5 + 32;

  } else if (unit === "F") {
    
    result = ((value - 32) * 5) / 9;

  } else {

    throw new Error("Invalid unit. Use 'C' or 'F'.");

  }

  return Math.round(result * 100) / 100;
  
}


console.log(convertTemperature(0, "C"));            // 32
console.log(convertTemperature(100, "C"));          // 212
console.log(convertTemperature(-40, "C"));          // -40
console.log(convertTemperature(21, "C"));           // 69.8