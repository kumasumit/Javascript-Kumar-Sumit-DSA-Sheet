// you are given a String, write the power set or all the subsequences of that string
// input: abc
//output: [{}, {a}, {ab}, {abc}, {b}, {bc}, {c}, {ac}] this is the power set/subssequences of that string abc.
//for any given set there are 2tothepwern number of subsets, for abc , the number of subsets is 2tothepower3 = 8.
//here index is the starting point, str is the main string and sub is the suvstring

const subsequencesOfString = (index, str, sub) => {
  //this is the base case when index reached the end of the string
  if (index === str.length) {
    //this is done to collect te last character of every case.
    return [sub];
  }
  //this is the case when we take the first character
  let case1WhenWeTakeTheFirstChar = subsequencesOfString(
    index + 1,
    str,
    sub + str[index]
  );
  //this is the case when we dont take the first character
  let case2WhenWeDontTakeTheFirstChar = subsequencesOfString(
    index + 1,
    str,
    sub
  );
  return [...case2WhenWeDontTakeTheFirstChar, ...case1WhenWeTakeTheFirstChar];
};

//here we first convert the array into set to prevent duplicates and then convert Set into Array by destructuring.
console.log(subsequencesOfString(0, "abc", ""));
