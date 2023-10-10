var array = [10, 7, 9, 1, 0, 3, 4, 8, 9, 3];

console.log("Length of Array : ", array.length);

console.log("Array elements :");
for (var i = 0; i < array.length; i++) {
  console.log(i, " => ", array[i]);
}

array.push(999);
console.log("After push(999): ", array);
array.pop();
console.log("After pop(): ", array);
console.log("Shifted element: ", array.shift());
console.log("After shift(): ", array);
array.unshift(200);
console.log("After unshift(200): ", array);

var array2 = array.join(" _ "); // array elements separated by _
console.log("array2: ", array2);

var array3 = array.concat(["Rajkot", "Ahmedabad", "Junagadh"]);
console.log("Array 3: ", array3);

console.warn("flat():");
var array4 = [1, 2, [3, 4]];
array4 = array4.flat();
console.log(array4);

var array5 = [1, 2, [3, 4, [5, 6]]];
array5 = array5.flat();
console.log(array5);

var array6 = [1, 2, [3, 4, [5, 6]]];
array6 = array6.flat(2);
console.log(array6);

var array7 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
array7 = array7.flat(Infinity);
console.log(array7);

// splice the array
var array8 = [
  "sunday",
  "monday",
  "tuesday",
  "wednessday",
  "thursday",
  "friday",
  "saturday",
];
// start , deleteCount and  element to add
// array8.splice(1,0,"New1")
// console.log(array8);

// array8.splice(2, 10, "New1");
// console.log(array8);
// // [ 'sunday', 'monday', 'New1' ]

// array8.splice(2, 3, "New1");
// console.log(array8);
// // [ 'sunday', 'monday', 'New1', 'friday', 'saturday' ]

// array8.splice(8, 1, "New1");
// console.log(array8);
// // ['sunday','monday','tuesday','wednessday','thursday','friday','saturday','New1']

//slice()
const fruits = ["apple", "banana", "orange", "grape", "mango"];

console.log(fruits.slice(2));
// ["orange", "grape", "mango"]

console.log(fruits.slice(1, 4));
// ["banana", "orange", "grape"]

console.log(fruits.slice(0, 3));
// ["apple", "banana", "orange"]

console.log(fruits.slice(-2));
// ["grape", "mango"]

console.log(fruits.slice(1, -1));
// ["banana", "orange", "grape"]

console.log(fruits.slice());
// ["apple", "banana", "orange", "grape", "mango"]

// object

var Obj = {
  name: "Abhi",
  age: 19,
  gender: "Male",
};

function PrintObject(obj) {
  console.log("Printing object...");
  for (var key in obj) {
    console.log(key, " => ", obj[key]);
  }
}

PrintObject(Obj);
