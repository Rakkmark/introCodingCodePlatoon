// ------- Array Methods & Properties------- //
let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
    /* 
      -REVIEW-
      File: arraysArrayMethoods\whatisanArray.js
      pop() -> removes from end of array
      push() -> adds to end of array
      shift() -> removes from beginning of array
      unshift() -> adds to beginning of array
    */

// .length -> The length property returns the length of the array (can be used on strings as well)
let alphaLength = alpha.length
console.log(alphaLength) // -> 8

// SLICE - ['b', 'c', 'd'] - Does not change original array
let values = alpha.slice(0, 4)
console.log(values) // -> [ 'a', 'b', 'c', 'd' ]
console.log(alpha) // -> [ 'a', 'b', 'c', 'd', 'e', 'f','g', 'h']

// SPLICE - removes or replaces elements in the array. Changes the original array.
alpha.splice(2, 1) // Removes 'c' from the array

alpha.splice(2, 2, 'replaced value')
console.log(alpha) // -> [ 'a', 'b', 'replaced value', 'e', 'f', 'g', 'h' ]

// IndexOf - finds the index of an element in the array.
let indexOfLetter = alpha.indexOf('d')
console.log(indexOfLetter) // -> 3

// PROBLEM: Remove all element from the array after the letter 'e'
let idxOfE = alpha.indexOf('e')
console.log(idxOfE) // -> 4
alpha.splice(idxOfE + 1) // -> 4 + 1 = 5 
console.log(alpha) // -> [ 'a', 'b', 'c', 'd', 'e' ]

/*
 Array Built-In Methods & Properties
Each String, Number, Array, and Object has special-purpose properties and methods associated with it. Below are several associated with Arrays.

.length -> The length property returns the length of the array (can work on strings as well)
slice() -> The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified. (Array slice - MDN)
splice() -> The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. (Array splice - MDN)
indexOf() -> The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. (Array indexOf - MDN)
Please visit MDN to see a complete list of Array built-in methods.
 */