// you are given a nested Array.
// Write a user defined function to flatten the nested Array
Array.prototype.myFlat = function (depth = 1) {
  // a function to flatten the nested Array via recursion
  function flatten(array, depth) {
    if (!Array.isArray(array)) {
      return [array];
    } else if (depth == 0 || depth == null) {
      return array;
    }

    // if the above base condition is false then iterate over the nested array and call recursively
    let flattenArray = [];
    for (let arr of array) {
      flattenArray.push(...flatten(arr, depth - 1));
    }
    return flattenArray;
  }

  return flatten(this, depth);
};
//write a flat polyfill where default value in case of implementation is 1.
Array.prototype.deepFlat = function (depth = 1) {
  function flattenReduce(array, depth) {
    return depth > 0
      ? //if depth is 1 or more we recursively call the function on every element of the array with depth-1
        array.reduce(
          (acc, item) =>
            Array.isArray(item)
              ? acc.concat(flattenReduce(item, depth - 1))
              : acc.concat(item),
          []
        )
      : //if depth is 0 or negative , we simply return the original array
        array;
  }
  //here we call the flattenReduce function with array as the this of calling array for function deepFlat
  return flattenReduce(this, depth);
};
function f1() {
  //   let arr = [1, 2, [3, 4, [5, 6, 7, [8, 9, 10]]]];
  let arr = [1, 2, [3, 4]];
  console.log(arr.myFlat());
  console.log(arr.deepFlat());
}

f1();
