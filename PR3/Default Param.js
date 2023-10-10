// Default parameter
function greet(name = "Someone?") {
  return `Welcome ${name}.`;
}

console.log(greet("Abhi")); // Welcome Abhi.
console.log(greet()); //  Welcome Someone?.

// Rest parameter and Spread operator
function mul(...args) {
  console.log(args);
  var ans = 1;
  for (let i = 0; i < args.length; i++) {
    ans *= args[i];
  }
  return ans;
}

console.log(mul(1, 2, 3, 4, 5)); 
