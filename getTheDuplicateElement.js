//you are given an array of strings, find the duplicate elements
// Input : ["arun", "arun", "kumar", "anjeet"]
// Output: 'arun'
const arr = ["Mike", "Matt", "Nancy", "Adam", "Jenny", "Nancy", "Carl"];
const count = (arr) =>
  arr.reduce(
    (result, value) => ({ ...result, [value]: (result[value] || 0) + 1 }),
    {}
    // don't forget to initialize the accumulator
  );

// console.log(count(arr));
// { Mike: 1, Matt: 1, Nancy: 2, Adam: 1, Jenny: 1, Carl: 1 }

//now we get the duplicate elements
const duplicateItems = (dict) =>
  Object.keys(dict).filter((item) => dict[item] > 1);

console.log(duplicateItems(count(arr)));
// ["Nancy"];
