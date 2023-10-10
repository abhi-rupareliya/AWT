//Creating a Symbol
let id = Symbol("id");
let obj = {
  [id]: "21CE117",
  name: "Abhi",
};
// accessing the Symbol property
console.log(obj);
console.log(obj.id); // undefined
console.log(obj[id]); // 21CE117

// symbol are always unique
let s1 = Symbol("s1");
let s2 = Symbol("s2");
console.log(s1 === s2); // false

// Symbol.for() and Symbol.keyFor()
let s3 = Symbol.for("s3");
let s4 = Symbol.for("s3");
console.log(s3 === s4); // true

// symbol are ignored by for in loop
console.log("keys in obj.");
for (let key in obj) {
  console.log(key); // name
}
