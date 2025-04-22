/*
1. Write a function for each operation listed above using the Math 
module. 
2. Test each function with sample inputs to ensure it works as intended. 
3. Combine the individual functions into a single "calculator" program 
where the user can select an operation and input the required values. 
4. Test the calculator by performing the following: 
● Find the absolute value of -45.67. 
● Raise 5 to the power of 3. 
● Calculate the square root of 144. 
● Determine the largest and smallest values from [3, 78, -12, 0.5, 27]. 
● Generate a random number between 1 and 50. 
● Round 23.67891 to 2 decimal places. */

function absoluteValue(num) {
    return Math.abs(num); // abs = absolute value
};
console.log(absoluteValue(-45.67)); // 45.67


function powerCalc(num, power) {
    return Math.pow(num, power); // pow = power raised to
};
console.log(powerCalc(5,3)); // 125 
console.log(powerCalc(4,3)); // 64

function squareRoot(num) {
    return Math.sqrt(num); // sqrt = square root
};
console.log(squareRoot(81)); // 9
console.log(squareRoot(144)); // 12
console.log(squareRoot(7)); // 2.6457513110645906


function findMaxMin(arr) {
    let max = Math.max(...arr); // getting max value and storing in max variable
    let min = Math.min(...arr); // getting min value and storing in min variable
    return {max, min}; // returning the max and min values as a new object
};
console.log(findMaxMin([1, 6, 90, 111, 0, -2])); // {max: 111, min: -2}
console.log(findMaxMin([3, 78, 12, 0.5, 27])); // {max: 78, min: .5}


function getrandomNumber(max, min=0) {
    let randNum = Math.random();
    console.log(randNum);
    return randNum * (max - min) + min;
};
console.log(getrandomNumber(100, 0));
console.log(getrandomNumber(10));
console.log(getrandomNumber(50, 1));


function roundNum(num, decimalPlaces) {
    let factor = Math.pow(10, decimalPlaces); // linear with decimal places, 10 based on the number of decimal places
    return Math.round(num * factor) / factor; // using round to get to nearest integer and converting back to 10 based decimal system places
}
console.log(roundNum(23.67891, 2));// 23.68
console.log(roundNum(23.67891, 3));// 23.679
console.log(roundNum(4.568975694876388468989, 9));// 4.568975695