let ans; // global
function calculateFactorial(number) {
  //   let ans; // local to function

  function Factorial(num) {
    if (num === 0) {
      return 1;
    } else {
      return num * Factorial(num - 1);
    }
  }
  ans = Factorial(number);
  //   return ans
}

// Test the function
const number = 5;

// // "ans" variable inside the function => ReferenceError: ans is not defined
calculateFactorial(number);
console.log(`Factorial of ${number} is: ${ans}`);
