/**Objects
Objects - Data type/structure that contain many values through key value pairs
Like a dictionary of words (key) and definitions (value) */


// let obj = {
//     key: value
// }

// Example:
let employee = {
    name: 'Ruthie Cohen',
    title: 'cashier',
    salary: 50000
}

// Objects
let movieObj = {
    'title': 'The Lord of the Rings',
    'year': 2001,
    'sales': '$891 million'
}

// // Dot Notation
// console.log(movieObj.title) // -> 'The Lord of the Rings'
// console.log(movieObj.year) // -> 2001
// console.log(movieObj.sales) // -> '$891 million'

// // Bracket Notation
// console.log(movieObj['title']) // -> 'The Lord of the Rings'
// console.log(movieObj['year']) // -> 2001
// console.log(movieObj['sales']) // -> '$891 million'

// Dynamic Keys using Bracket Notation
let movieTitle = 'title'
let movieSales = 'sales'
console.log(movieObj[movieTitle]) // -> 'The Lord of the Rings'
console.log(movieObj[movieSales]) // -> '$891 Million'

// // Changing Values on an Object
// movieObj['title'] = 'The Matrix'
// movieObj['year'] = 1999

// console.log(movieObj) // -> { title: 'The Matrix', year: 1999, sales: '$891 million' }

// // Adding Keys and Values to an Object
// movieObj['leadActor'] = 'keanu reeves'

// console.log(movieObj.leadActor) // -> 'keanu reeves'

// // Does 'leadActor' exist as a key in the object?
// if ('leadActor' in movieObj) {
//     console.log(movieObj.leadActor) // -> 'keanu reeves'
// } else {
//     movieObj['leadActor'] = 'keanu reeves'
// }

// console.log(movieObj.leadActor) // -> 'ke