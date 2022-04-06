/*Conditional Operator (ternary operator)
The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as a shortcut for the if statement. (MDN)*/

// Conditional Operator (Ternary Operator)
let age = 25

// Ternary operator
console.log(age >= 21 ? "I'm going to the bar." : "I'm going to the movies.") // -> "I'm going to the bar."

// Standard if/else statement
if (age >= 21) {
    console.log("I'm going to the bar.") // -> This line is executed
} else {
    console.log("I'm going to the movies.")
}


// This is a single line comment

/*

This is a  multiline comment
anything i type in between the /* will not be executed

*/