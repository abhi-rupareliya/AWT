const Calculator = require("./Calculator");

// instantiate a new Calculator object
const calcObj = new Calculator();

// setting operands
calcObj.setNum1(10);
calcObj.setNum2(5);

//opeartions
calcObj.add();
console.log("Addition: " + calcObj.getResult());

calcObj.subtract();
console.log("Subtraction: " + calcObj.getResult());

calcObj.multiply();
console.log("Multiplication: " + calcObj.getResult());

calcObj.divide();
console.log("Division: " + calcObj.getResult());
