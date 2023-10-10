class Calculator {
    constructor() {
        this.num1 = 0;
        this.num2 = 0;
        this.result = 0;
    }
    setNum1(num1) {
        this.num1 = num1;
    }
    setNum2(num2) {
        this.num2 = num2;
    }
    add() {
        this.result = this.num1 + this.num2;
    }
    subtract() {
        this.result = this.num1 - this.num2;
    }
    multiply() {
        this.result = this.num1 * this.num2;
    }
    divide() {
        this.result = this.num1 / this.num2;
    }
    getResult() {
        return this.result;
    }
}

module.exports = Calculator;