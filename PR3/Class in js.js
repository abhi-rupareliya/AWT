// class declaration
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// creating object
let person1 = new Person("Abhi", 20);
console.log(person1);
person1.greet();
console.log("person1 instanceof Person", person1 instanceof Person);

// inheritance
class Student extends Person {
  constructor(name, age, id) {
    super(name, age);
    this.id = id;
  }
  greet() {
    console.log(`Hello, my name is ${this.name} and my id is ${this.id}`);
  }
}

let student1 = new Student("Abhi", 20, "21CE117");
console.log("student1 instanceof Student", student1 instanceof Student);
console.log("student1 instanceof Person", student1 instanceof Person);
student1.greet(); // overriding greet method

// static method
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Point(1, 1);
const p2 = new Point(1, 5);
console.log("Distance:", Point.distance(p1, p2)); // static methods are called using Class rather than Objects of class.

// getter and setter and private field
class Rectangle {
  #height = 0;
  #width;
  constructor(height, width) {
    this.#height = height;
    this.#width = width;
  }
  // getters
  get height() {
    return this.#height;
  }
  get width() {
    return this.#width;
  }
  // setters
  set height(value) {
    this.#height = value;
  }
  set width(value) {
    this.#width = value;
  }
}

let rect = new Rectangle(10, 20);
rect.height = 30; // no effect on private field if no setter
console.log(rect.height); // without getter it will give undefined


