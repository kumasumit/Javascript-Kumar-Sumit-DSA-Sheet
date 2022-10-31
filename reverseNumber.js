// given a numberreverse the number, return the reversed number.
// Input 1234
// output 4321

// 1. A function to reverse a number using Javascript inbuilt methods
function reverseNumberAdvanced(num) {
  // Step 1:
  //first we change the number into String by passing num
  //as a parameter to String interface
  let numberToString = String(num);
  // return typeof(numberToString); string
  // Step 2: Convert the string into Array
  let numberToStringArray = numberToString.split("");
  //Step 3: Reverse the Array
  let reversedArray = numberToStringArray.reverse();
  // Step 4: Join the reversed Array into String
  let reversedArrayString = reversedArray.join("");
  //this will return the reversedArraystring
  //Step 5: Now convert the string back to number
  // return typeof(parseInt(reversedArrayString));
  // return typeof(Number(reversedArrayString));
  // parseInt, and Number will change string into number in javascript
  return parseInt(reversedArrayString);
}
console.log(reverseNumberAdvanced(123409));

//2. A basic function to reverse a number without using Javascript inbuilt methods
function reverseNumberBasic(num) {
  //Step 1: initialze remainder as 0
  let reamainder = 0;
  //Step 2: Run a while loop until num>0
  while (num > 0) {
    reamainder = reamainder * 10 + (num % 10);
    //here we are using Math.floor to to get the integer part of the division
    num = Math.floor(num / 10);
  }
  //Step 3: Assign remainder to reverseNumber
  let reverseNumber = reamainder;
  return reverseNumber;
}
console.log(reverseNumberBasic(123456));
//654321
