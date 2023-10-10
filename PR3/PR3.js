// let keyword
let x = 50;
if (true) {
  let x = 100;
  console.log(x); // 100
}
console.log(x); // 10

// The const keyword
const Pi = 3.14159;
// Pi = 3.14; // Error

// Arrow Functions
// single line function
var add = (a, b) => a + b;
console.log(add(2, 3)); // 5
// arrow Function
var PrintObject = (obj) => {
  for (const key in obj) {
    console.log(key, " = ", obj[key]);
  }
};
PrintObject({ id: "21ce117", name: "abhi" });

// Spread Of Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // [1, 2, 3, 4, 5]

function sumAll(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

console.log("sumAll(1): ", sumAll(1)); // 1 
console.log("sumAll(1, 2, 3): ", sumAll(1, 2, 3)); // 6

// For-of loop
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}

// Map Objects
// Map is a collection of keyed data items like Object.
// The difference is that Map allows keys of any type.

// initializing with values
let map = new Map([
  ["1", "String"],
  [1, "number"],
  [true, "boolean"],
]);
console.log(map);
// empty map
const myMap = new Map();
myMap.set("name", "Abhi").set("id", "21CE117"); // chaining
console.log(myMap.get("id")); // 21CE117
console.log(myMap.get("age")); // undefined
console.log("map size: ", myMap.size); // size of map
myMap.delete("name"); // delete key-value pair
console.log("map size after delete: ", myMap.size);
console.log(`map.has("name"):`, myMap.has("name")); // checking weather key exist or not
myMap.clear(); // clears the map
console.log("map size after clear: ", myMap.size);

// object as key in map
let obj = { name: "Abhi" };
myMap.set(obj, "This is a object"); // object as key
console.log("Keys:", myMap.keys()); // [Map Iterator] { { name: 'Abhi' } }
console.log(myMap.get(obj)); // This is a object

// create a map from object
let obj2 = {
  key1: 1,
  key2: 2,
};
let map2 = new Map(Object.entries(obj2));
console.log(map2);

// Set Objects
const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2);
console.log("Set: ", mySet);
mySet.add(3).add(4).add(5); // chaining
console.log("Set: ", mySet);
mySet.clear(); // clear the set
console.log("Size mySet: ", mySet.size); // 0
console.log("mySet.has(10): ", mySet.has(10)); // check for the value in set

// iterating over set of string
const mySet2 = new Set(["a", "b", "c"]);
console.log("iterating over set of string:");
for (const value of mySet2) {
  console.log(value);
}
// using forEach
// The callback function has 3a value, then the same value again, and the target set.
// compatibility with Map. it has (value,key,map)
// this may help to replace Map with Set in some cases.
mySet2.forEach((value, valueAgain, set) => {
  console.log(value, set);
});

// same methods as Map for set for compatibility.
console.log("mySet2.keys(): ", mySet2.keys()); // returns an iterable object for values.
console.log("mySet2.values(): ", mySet2.values()); // same as set.keys().
console.log("mySet2.entries(): ", mySet2.entries()); // returns an iterable object [value, value]
