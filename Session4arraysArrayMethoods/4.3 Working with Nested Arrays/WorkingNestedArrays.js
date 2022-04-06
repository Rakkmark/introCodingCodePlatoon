// Nested Arrays
let techCos = ['Tesla', 'Apple', 'Netfix', 'Amazon']
console.log(techCos[1]) // -> 'Apple'

let movieInfo = [
    [1, 2, 3],
    ['The Lord of the Rings', 'The Matrix', 'The Big Lebowski'],
    [2001, 1999, 1998]
]

console.log(movieInfo[1][2]) // -> The Big Lebowski
console.log(movieInfo[2][1]) // -> 1999

let nestedArray = ['A', [10, 20, 30], 100, [
    ['Five', 'Six']
]]

console.log(nestedArray[3][0][1]) // -> 'Six'