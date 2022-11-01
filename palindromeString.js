//given a string check whether the given string is a palindrome or not
// adda - adda yes
// papa - apap no

//this is a npm package which will help us to take input from user
var prompt = require("prompt-sync")();

//Method 1: Basic Method without any inbuilt Js Functions
// program to check if the string is palindrome or not
function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  // ask rahul >>> ?? why only half the string??
  for (let i = 0; i < len / 2; i++) {
    //check if first and last string are same
    //check if 2 and 2ndlast string are same or not and so on
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  //if we come out of for loop and we dont find any mismatch
  //return true
  return "It is a palindrome";
}

// take input
const string = prompt("Enter a string: ");

// call the function
const value = checkPalindrome(string);

console.log(value);

//Method 2: Advanced Method with  inbuilt Js Functions
function checkPalindromeAdvanced(string) {
  //here we use inbuilt js functions.
  //Step 1: 
  //convert the string into an array using the string.split() function
  const arrValue = string.split(""); //
  //Step 2:
  // use reverse() method to reverse the array values
  const reveArrVal = arrValue.reverse();
  //Step 3:
  // use join() method to group the array values into the string
  const revString = reveArrVal.join("");
  //Step 4:
  //now compare the orginal string with the revised string
  if (string === revString) {
    // if string condition is equal to the revString
    return " It is a Palindrome string "; // print the Palindrome
  } else {
    return " It is not a Palindrome string "; // if the condition is not true.
  }
}
// take a string from the user  
const str = prompt( ' Enter the string to check Palindrome ');  
const val = checkPalindromeAdvanced(str); // call the function  
console.log(val);  