// This will include the JS problems I did on my own on Wednesday.

// 1. Count the number of occurrences a value appears in an array.
const countOccurrences = (arr, value) => {
  let counter = 0;

  arr.forEach((element) => {
    if (element === value) {
      counter++;
    }
  });

  return counter;
};

// 2. Take in a array of lowercase words and returns a new array where each word is capitalized.
const capitalizeWords = (arr) => {
  return arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
};

// 3. Return a new array with duplicates removed -- Do not use Set
function removeDuplicates(arr) {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

// 4. FizzBuzz, except it needs to loop from 1 to 'n', save the values in an array
function fizzBuzz(n) {
  let arr = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      arr.push("FizzBuzz");
    } else if (i % 3 === 0) {
      arr.push("Fizz");
    } else if (i % 5 === 0) {
      arr.push("Buzz");
    } else {
      arr.push(i);
    }
  }

  return arr;
}
