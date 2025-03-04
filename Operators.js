// There are different types of operators. The Arithmetic ones are the ones we use for calculations like +, -, *, %, /
// The comparison operators are used to determine the equality or difference between values or variables like ==, ===, !=
// Logical operators are used to determine the logic between values or variables like &&, ||
// Assignment operators are used to assign values to variables

let x = 5 + 5
let y = 10 - 6
console.log ('The new result is', x)
console.log ('The new result is', y) 

let f = 4 
console.log (f == 8) // This should return false

let m = 87
console.log ( m === '87') // This should return false

let person1 = 'James'
let person2 = 'Victor'
if (person1 === 'James' && person2 === 'Victor') {
    console.log('Both conditions are true');
} else {
    console.log('One condition is false');
}

let name = "Jones"
let age = 17
if ( name == "Jones" || age == 17){
    console.log ( 'He is too young to drive')
} else {
    console.log('He can drive home')
}