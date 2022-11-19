// you are giving a string abc,
// write a program to get all the required permutations of the string and they should not repeat
// Input: abc
// Output: abc, acb, bac, bca, cab, cba,

let str = "abc";
const distinctPermutatinsOfAString = (str) => {
  //this is the base case  of recursion
  if (str.length == 2) {
    //here we ar hard coding the base case when the string length is 2.
    let basePer = [str[0] + str[1], str[1] + str[0]];
    return basePer;
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    //here for each iteration, we are separating the first character.
    let firstChar = str[i];
    let remainingStr = "";

    //here we are separating the substrings of the orignal string except the first character.
    for (let j = (i + 1) % str.length; i != j; ) {
      remainingStr += str[j];
      j++;
      //here we are doing j=j%str.length so that j does not exceed array length
      j %= str.length;
    }
    //here we are calling the function on recursion with the remaining substrings of the string
    let allSubstrigPermutation = distinctPermutatinsOfAString(remainingStr);
    //now we run map over the values returned by recursion to add first charatcer to the remaining strings
    allSubstrigPermutation = allSubstrigPermutation.map((item) => {
      return firstChar + item;
    });
    // we push the created string after adding the firstChar to result array
    result.push(...allSubstrigPermutation);
  }
  return result;
};

//here we first convert the array into set to prevent duplicates and then convert Set into Array by destructuring.
console.log([...new Set(distinctPermutatinsOfAString(str))]);
