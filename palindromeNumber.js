//given a string check whether the given number is a palindrome or not
// 1234 - 4321 no
// 1111 - 1111 yes

//this is a npm package which will help us to take input from user
var prompt = require("prompt-sync")();

//Method 1: Basic Method without any inbuilt Js Functions
function isPalindromeNumberBasic(number) {
  //here we first reverse the number and
  //then compare the number and reversed number
  //Step 1: initialze remainder as 0
  let remainder = 0;
  let temp = number;
  //Step 2: Run a while loop until num>0
  while (temp > 0) {
    remainder = remainder * 10 + (temp % 10);
    //here we are using Math.floor to to get the integer part of the division
    temp = Math.floor(temp / 10);
  }

  //Step 3: Assign remainder to reverseNumber
  let reverseNumber = remainder;

  //now we compare the reverseNumber and the user entered number
  return reverseNumber === number
    ? "It is a palindrome"
    : "It is not a palindrome";
}

//Method 2: Advanced Method with  inbuilt Js Functions
function isPalindromeNumberAdvanced(number) {
  //here we first reverse the number
  let reverseNumber = parseInt(
    Number(number).toString().split("").reverse().join("")
  );
  //now we compare the reverseNumber and the user entered number
  return reverseNumber === number
    ? "It is a palindrome"
    : "It is not a palindrome";
}

// take input
// by default prompt of javascript input line will take string,
// we need to convert it into number.
const number1 = parseInt(prompt("Enter a number: "));
const number2 = parseInt(prompt("Enter a number: "));
console.log(typeof number1);
// call the functions

const value1 = isPalindromeNumberBasic(number1);
const value2 = isPalindromeNumberAdvanced(number2);

//log the values
console.log(value1);
console.log(value2);
