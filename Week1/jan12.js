// Challenge 1 ===============================================================================
// Write a function that takes a name and returns a greeting string.
// If no name is provided, default to "stranger".
//
// Examples:
// greet("Joe") → "Hello, Joe!"
// greet() → "Hello, stranger!"
function greet(name = "stranger") {
    return `Hello, ${name}!`
}

console.log(greet("Joe"))
console.log(greet())

// Challenge 2 ===============================================================================
// Given a number, return "Even" if it is even or "Odd" if it is odd.
//
// Examples:
// isEvenOrOdd(10) → "Even"
// isEvenOrOdd(5) → "Odd"
function isEvenOrOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd"
}

console.log(isEvenOrOdd(10))
console.log(isEvenOrOdd(5))

// Challenge 3 ===============================================================================
// Given an array of values, return the sum of only the positive numbers.
// Non-number values and negative numbers should be ignored.
// Returns 0 for an empty array.
//
// Example:
// sumPositive([1, -3, 4, 0, -2, 7]) → 12
const sumPositive = arr => {
    if (arr.length === 0) return 0

    let total = 0
    
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number" && arr[i] > 0) {
            total += arr[i]
        }
    }

    return total
}

console.log(sumPositive([1, -3, 4, 0, -2, 7]))
console.log(sumPositive([1, 5, -3, 'cat', 'dog', 15, -17]))

// Challenge 4 ===============================================================================
// Given an array of strings, return a new array where:
// - each string is trimmed
// - converted to lowercase
// - empty strings are removed
//
// Assumes the array contains only strings.
//
// Example:
// cleanStrings(["  Hello ", "", " WoRLd "]) → ["hello", "world"]
function cleanStrings(arr) {
    let cleanedArr = []

    for (let i = 0; i < arr.length; i++) {
        let trimmedStr = arr[i].trim()
        if (trimmedStr.length !== 0) {
            cleanedArr.push(trimmedStr.toLowerCase())
        }
    }

    return cleanedArr
}

console.log(cleanStrings(["  Hello ", "", " WoRLd", "   ", "CHATgpt "]))

// Challenge 5 ===============================================================================
// Given an array of numbers, return an object containing:
// - the minimum value
// - the maximum value
// - the average (rounded to 2 decimals)
//
// Returns null for an empty array.
//
// Example:
// analyzeNumbers([10, 5, 8, 20])
// → { min: 5, max: 20, average: 10.75 }
function analyzeNumbers(arr) {
    if (arr.length === 0) return null
    let total = 0

    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }

    let min = Math.min(...arr)
    let max = Math.max(...arr)
    let average = Number((total / arr.length).toFixed(2))

    let numbersObj = {
        "min" : min,
        "max" : max,
        "average" : average
    }

    return numbersObj
    

}

console.log(analyzeNumbers([10, 5, 8, 20]))