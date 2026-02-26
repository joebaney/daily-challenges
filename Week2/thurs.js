// Challenge 1. Balanced Brackets - Write a function that returns true or false if all brackets are properly matched and closed
const isBalanced = (str) => {
  let stack = [];
  let pairs = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let openingBrackets = "({[";
  let closingBrackets = ")}]";

  for (let i = 0; i < str.length; i++) {
    if (openingBrackets.includes(str[i])) {
      stack.push(str[i]);
    } else if (closingBrackets.includes(str[i])) {
      let popped = stack.pop();
      if (pairs[popped] !== str[i]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

// Challenge 2. Write a function that compares two strings to see if they are anagrams
const isAnagram = (str1, str2) => {
  let cleanStr1 = str1
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");
  let cleanStr2 = str2
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .sort()
    .join("");

  return cleanStr1 === cleanStr2;
};
