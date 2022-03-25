// var firstName = "Mark"
// var age = "36"

// console.log(
//   firstName + " is " + age + " years old."
// )


//Data Types
//Number 10 - whole, 3.14 float 

//Typeof Operator 
console.log(typeof 3.14)



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