// you need to write a program to get 6 digit otp in javascript
const sixDigitOtp = () => {
  // we need to do 100000 at the beginning so that zeros dont come at the start
  let result = 100000 + Math.floor(Math.random() * 100000);
  return result;
};

console.log(sixDigitOtp());
