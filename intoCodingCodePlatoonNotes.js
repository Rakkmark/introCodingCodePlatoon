// var firstName = "Mark"
// var age = "36"

// console.log(
//   firstName + " is " + age + " years old."
// )


// //Data Types
// //Number 10 - whole, 3.14 float 

// //Typeof Operator 
// console.log(typeof 3.14)



// // String Interpolation
// let firstName = 'Tom'
// let currentCity = 'Chicago'

// // String Concatenation
// console.log("My first name is " + firstName + " and I'm currently living in " + currentCity + ".")

// // String Interpolation - PREFERRED
// console.log(`My first name is ${ firstName } and I'm currently living in ${ currentCity }.`)

// Embedding Expressions with String Interpolation
// let x = 10
// let y = 5

// console.log(`${ x } times ${ y } = ${ x * y }`)

// console.log(`Is ${ x } greater than ${ y }? This is a ${ x > y } statement.`)




// Conditional Logic (if/else if/else statements)
// let age = 18

// if (age === 21) {
//   console.log("Woohoo! Let's go to the bar and celebrate")
// } else if (age > 21) {
//   console.log("Let's to the pub.")
// } else if (age === 18) {
//   console.log("Sweet! Let's go vote!") // -> This line is executed
// } else {
//   console.log("Let's go to the movies.")
// }

// Multiple Expressions
// let isRaining = false
// let onVacation = false

// if (isRaining === true && onVacation === false) {
//   console.log("Time to do some house work.")
// } else if (isRaining === true || onVacation === true) {
//   console.log("Perfect time to go fishing.")
// } else {
//   console.log("I'm going to read a book.") // -> This line is executed
// }



// // Conditional Operator (Ternary Operator)
// let age = 25

// // Ternary operator
// console.log(age >= 21 ? "I'm going to the bar." : "I'm going to the movies.") // -> "I'm going to the bar."

// // Standard if/else statement
// if (age >= 21) {
//   console.log("I'm going to the bar.") // -> This line is executed
// } else {
//   console.log("I'm going to the movies.")
// }



//Conditional operators & commenting your code:
/*Conditional Operator (ternary operator)
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else> statement. (MDN)*/


 //What is an Array?

/*Arrays
An array is an ordered list of values. Each value is called an element specified by an index.
let techCos = [ ‘Apple’ , ‘Facebook’ , ‘Microsoft’ , ‘Google’ ]

How to access values in an Array? Access values by their index
*/


/*// Arrays
let techCos = ['Tesla', 'Apple', 'Netfix', 'Amazon']

console.log(techCos[3]) // -> 'Amazon'

techCos[1] = 'Facebook'
techCos[3] = 'Palintir'
console.log(techCos) // -> ['Tesla', 'Facebook', 'Netfix', 'Palintir']

// Adding Elements to the end of Array
techCos.push('Snap')
techCos.push('SpaceX')

console.log(techCos) // -> ['Tesla', 'Facebook', 'Netfix', 'Palintir', 'Snap' , 'SpaceX']

// Remove Elements from end of Array
techCos.pop()

console.log(techCos) // -> ['Tesla', 'Facebook', 'Netfix', 'Palintir', 'Snap' ]

// Add elements to beginning of the array

techCos.unshift('Coinbase')

console.log(techCos) // -> [ 'Coinbase', 'Tesla', 'Facebook', 'Netfix', 'Palintir', 'Snap' ]

// Remove elements from beginning of the array
techCos.shift()

console.log(techCos) // -> [ 'Tesla', 'Facebook', 'Netfix', 'Palintir', 'Snap' ]*/