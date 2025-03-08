//This is one way to write arrays 
const animals = ["cat", "dog", "bird", "sheep","goat","rat","lizard","pig"]

// This is another way to write arrays
const numbers = new Array(1, 2, 3, 4, 5,6,7,8,9);

console.log(animals[0]) // This displays the first element in the array
console.log(animals.length); // This tells us how many elements are in the array

animals.push("bear");// This adds another element to the array
console.log(animals)

animals.unshift("horse")
console.log(animals) // This adds horse as the first element in the array

animals.pop()// This removes the last element in the array
console.log(animals) 

animals.shift() // this removes the first element in the array
console.log(animals)

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}