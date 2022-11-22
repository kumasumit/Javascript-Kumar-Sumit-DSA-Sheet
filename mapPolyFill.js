// here we need to make polyfill for map
Array.prototype.myMap = function (callback, index) {
  try {
    let arr = [];
    for (let val of this) {
      arr.push(callback(val));
    }
    return arr;
  } catch (error) {
    throw new Error(error.message);
  }
};

let a = [1, 2, 3, 4, 5];
console.log(a.myMap((a) => a * 3));
