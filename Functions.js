// This function returns multiplication of three numbers
function multiplesOfNumbers(num1, num2, num3) {
    const multiplication = num1 * num2 * num3;
    console.log(multiplication)
}
multiplesOfNumbers(2, 5, 7);

// This is another way to write functions in JS
const sumOfNumbers = (num1, num2, num3) => {
    const sum = num1 + num2 + num3;
    console.log(sum);
}
sumOfNumbers(2, 6, 7);

// This is another way to write functions in JS
(function(num1, num2) {
    const sum = num1 / num2 
    console.log(sum);
})(35, 7);




