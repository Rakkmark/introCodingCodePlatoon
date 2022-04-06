/**
 * What is String Interpolation?
String interpolation is the ability to embed expressions or variables within strings 
`My First Name is ${firstName}` back ticks (used for string interpolation)
 */



// String Interpolation
let firstName = 'Tom'
let currentCity = 'Chicago'

// String Concatenation
console.log("My first name is " + firstName + " and I'm currently living in " + currentCity + ".")

// String Interpolation - PREFERRED
console.log(`My first name is ${ firstName } and I'm currently living in ${ currentCity }.`)

// Embedding Expressions with String Interpolation
let x = 10
let y = 5

console.log(`${ x } times ${ y } = ${ x * y }`)

console.log(`Is ${ x } greater than ${ y }? This is a ${ x > y } statement.`)