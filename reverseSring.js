// given a string reverse the string, return the reversed string.
// Input Sumit
// output timuS

//1. A function to reverse a string using Javascript inbuilt methods
function reverseStringAdvanced(str) {
  let stringToArray = str.split("");
  //[ 's', 'u', 'm', 'i', 't' ] is output reversed string
  let reversedStringArray = stringToArray.reverse();
  //this will reverse the string array
  //[ 't', 'i', 'm', 'u', 's' ]
  //now we need to join the reversedStringArray into String
  let reversedString = reversedStringArray.join("");
  //timuS is the reversed string
  return reversedString;
}
console.log(reverseStringAdvanced("sumit"));

//2. A basic function to reverse a string without using Javascript inbuilt methods
function reverseStringBasic(str) {
  //store the length of string in length variable
  let length = str.length;
  //initialize a variable reversedString with empty string
  let reversedString = "";
  //iterate through the string from last to first
  for (let i = length - 1; i >= 0; i--) {
    reversedString += str.charAt(i);
    // console.log(reversedString);
    // l;
    // li;
    // lih;
    // lihk;
    // lihka;
    }
    //after the for loop ends return the reversed string
    return reversedString;

}

console.log(reverseStringBasic("akhil"));
// likha
