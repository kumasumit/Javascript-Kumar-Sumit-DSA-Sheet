//you are given an array of elements, you need to remove duplicates from the array.
// input
// const arr1 = ["apple", ",mango", "orange","banana", "apple", "mango"];
// output : ["apple", "banana", "mango"]
const arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

//Approach 1:

//here we use filter method
//we traverse the arary and search for the index of the element which gives the index of first occurrence of the element
//if the indexOf() is same as the index of the element, we return the element
//hence we get only unique elements
// for (let index = 0; index < arr.length; index++) {
//   console.log(arr.indexOf(arr[index]), index);
// }
// 0 0
// 1 1
// 0 2
// 3 3
// 1 4
// 1 5

const duplicatesRemovedArray1 = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) === index);
console.log(duplicatesRemovedArray1);
// ["apple", "mango", "orange"];
//Time Complexity: 0(n)
//Space Complexity: 0(n)

// Approach 2:

// Using a Set data structure , Set in javascript is a collection which allows only unique values
const duplicatesRemovedArray2 = [...new Set(arr)];
console.log(duplicatesRemovedArray2);
// ["apple", "mango", "orange"];
//Ask rahul time complexity and space complexity
//Time Complexity:
//Space Complexity:

//Approach 3: Using reduce function

//here we initialze an empty array in the redecuer as accumulator,
//and we iterate over the array and check if the element exists in the accumulator
//if it does, we dont push the element to the accumulator array.
//if it does not , we dont push the element to  the accumulator array.
//Finally we return the accumulator array

const duplicatesRemovedArray3 = (arr) => {
  let unique = arr.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
  return unique;
};
//Time Complexity: 0(n)
//Space Complexity: 0(n)
