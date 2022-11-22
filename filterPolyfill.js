//here we need to make polyfill for filter
Array.prototype.myFilter = function (callback, index) {
  try {
    let arr = [];
    for (let val of this) {
      if (callback(val) == true) {
        arr.push(val);
      }
    }
    return arr;
  } catch (error) {
    throw new Error(error.message);
  }
};

let a = [1, 2, 3, 4, 5];
console.log(a.myFilter((a) => a % 2 == 0));
