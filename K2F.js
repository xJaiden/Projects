//Kelvin being defined VV
const kelvin = 0;
//Converting kelvin to celsius
let celsius = kelvin - 273;

let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log('Newton: ' + newton)
//Converting Celsius to Fahrenheit;
let fahrenheit = celsius * (9/5) + 32;
//Rounding out Fahrenheit
fahrenheit = Math.floor(fahrenheit);
//Printing out Fahrenheit;
console.log(`Kelvin: ${kelvin}
Celsius: ${celsius}
Fahrenheit: ${fahrenheit}`)
console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.')
