// here you need to make a polyfill for reduce
Array.prototype.myReduce = function (callback, initialValue) {
  try {
    let result;
    let type = typeof initialValue;
    if (initialValue == undefined) {
      result = 0;
    }
    for (let val of this) {
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

let a = [1, 2, 3, 4, 5];
console.log(a.myReduce((total, element) => total + element, 0));
