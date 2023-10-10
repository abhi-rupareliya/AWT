
// Set Objects
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
console.log("Set: ", mySet);
mySet.add(3).add(4).add(5); // chain
console.log("Set: ", mySet);
mySet.clear();
console.log("Size mySet: ", mySet.size); // 0
console.log("mySet.has(10): ", mySet.has(10)); // false
// Classes
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}.`;
  }
}

const person = new Person("Alice");
console.log(person.greet()); // Output: Hello, my name is Alice.

// Promises
const fetchData = () => {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., API call)
    setTimeout(() => {
      const data = "Data fetched successfully!";
      resolve(data);
      // reject(new Error('Failed to fetch data.')); // Uncomment to simulate rejection
    }, 2000);
  });
};

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

// Symbol
const sym1 = Symbol("key1");
const sym2 = Symbol("key2");
console.log(sym1 !== sym2); // Output: true

// Default Parameters
const greetPerson = (name = "Guest") => `Hello, ${name}.`;
console.log(greetPerson()); // Output: Hello, Guest.
console.log(greetPerson("John")); // Output: Hello, John.

// Function Rest Parameter
const sum = (...numbers) => numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum(1, 2, 3, 4)); // Output: 10
