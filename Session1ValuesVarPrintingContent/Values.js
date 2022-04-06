// Using 'let' to declare a variable name
//let firstName = "Sabrina"

// re-assigning variables 
firstName = "Josh"

// Re-declaring a variable is not allowed when using the keyword 'let' (will throw an error)
let firstName = 'Tom'

// Using 'const' to declare a variable name
const gravity = 9.8

// Trying to change a value of a contant variable is not allowed when using 'const' (will throw an error)
gravity = 10.2


/*
Values
Every value is a piece is a data or data type and that data type determines how that value behaves

Some values are Numbers (ex: 86)
Some values are Text (ex: “Hello world!”)
Some values are Functions
etc...


Variables
Variables are named labels/identifiers for storing values
Remember from math class variables “x” and “y”?
There are three ways to declare/create a variable in Javascript

var 

The most common variable. It can be reassigned but only accessed within a function. Variables defined with var move to the top when the code is executed. (don’t use anymore)
let

Similar to const, the let variable can be reassigned but not re-declared.
const 

Can not be reassigned and not accessible before they appear within the code.
var, let, and const are reserved keywords in Javascript. You can’t use them for anything other than declaring variables
*/