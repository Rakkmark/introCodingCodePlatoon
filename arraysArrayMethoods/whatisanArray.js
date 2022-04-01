// Arrays
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

console.log(techCos) // -> [ 'Tesla', 'Facebook', 'Netfix', 'Palintir', 'Snap' ]

/*Arrays
An array is an ordered list of values. Each value is called an element specified by an index.
let techCos = [ ‘Apple’ , ‘Facebook’ , ‘Microsoft’ , ‘Google’ ]

How to access values in an Array? Access values by their index see access values by their index*/