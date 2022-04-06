/**Conditional Logic (Control Flow)
When you want to control how a computer goes through your program, use control flow!
Evaluates to either true or false (boolean values)
Allows us to select different outcome depending on user input or the result of a computation. */



// Conditional Logic (if/else if/else statements)
let age = 18

if (age === 21) {
    console.log("Woohoo! Let's go to the bar and celebrate")
} else if (age > 21) {
    console.log("Let's to the pub.")
} else if (age === 18) {
    console.log("Sweet! Let's go vote!") // -> This line is executed
} else {
    console.log("Let's go to the movies.")
}

// Multiple Expressions
let isRaining = false
let onVacation = false

if (isRaining === true && onVacation === false) {
    console.log("Time to do some house work.")
} else if (isRaining === true || onVacation === true) {
    console.log("Perfect time to go fishing.")
} else {
    console.log("I'm going to read a book.") // -> This line is executed
}