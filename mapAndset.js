// collection of keyed data items, just like an object. But the main difference is that Map allows keys of any type
/**
 * Methods and properties are:
new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element (the key/value pair) by the key.
map.clear() – removes everything from the map.
map.size – returns the current element count.
 */
let map = new Map();
map.set("1", "str1"); // a string key
map.set(1, "num1"); // a numeric key
map.set(true, "bool1"); // a boolean key
// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
console.log(map.get(1)); // 'num1'
console.log(map.get("1")); // 'str1'
console.log(map.get(true)); // num1
console.log(map.size); // 3
// Map can also use objects as keys.
let john = { name: "John" };
let visitsCountMap = new Map();
visitsCountMap.set(john, 123);
console.log(visitsCountMap.get(john)); // 123
/**
 * Iteration over Map
For looping over a map, there are 3 methods:
*! map.keys() – returns an iterable for keys,
*! map.values() – returns an iterable for values,
*! map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
 */
let recipeMap = new Map([
  ["cucumber", 500],
  ["tomatoes", 350],
  ["onion", 50],
]);
// iterate over keys (vegetables)
for (const vegetables of recipeMap.keys()) {
  console.log(vegetables);
}
// iterate over values (amounts)
for (let amount of recipeMap.values()) {
  console.log(amount); // 500, 350, 50
}

// iterate over [key, value] entries
for (let entry of recipeMap) {
  // the same as of recipeMap.entries()
  console.log(entry); // cucumber,500 (and so on)
}

// Besides that, Map has a built-in forEach method, similar to Array:
recipeMap.forEach((val, key, map) => {
  console.log(`${key}: ${val}`);
});
/**
 * Object.entries: Map from Object
When a Map is created, we can pass an array (or another iterable) with key/value pairs for initialization, like this:
 */
// array of [key, value] pairs
let map2 = new Map([
  ["1", "str1"],
  [1, "num1"],
  [true, "bool1"],
]);
console.log(map.get("1")); // str1
/**
 * If we have a plain object, and we’d like to create a Map from it, then we can use built-in method Object.entries(obj) that returns an array of key/value pairs for an object exactly in that format.
So we can create a map from an object like this:
 */
let obj = {
  name: "John",
  age: 30,
};

let map3 = new Map(Object.entries(obj));
console.log(map.get("name")); // John
/**
 * Here, Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.
 */

/**
 * Object.fromEntries: Object from Map
We’ve just seen how to create Map from a plain object with Object.entries(obj).

There’s Object.fromEntries method that does the reverse: given an array of [key, value] pairs, it creates an object from them:
 */

let prices = Object.fromEntries([
  ["banana", 1],
  ["orange", 2],
  ["meat", 4],
]);

// now prices = { banana: 1, orange: 2, meat: 4 }
console.log(prices.orange); // 2
// ***********************************************
//* SET
// ***********************************************
// special type of a collection - "set of values"(without keys), where each value may occur only once
/**
 * ! new Set([iterable]) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
 * ! set.add(value) – adds a value, returns the set itself.
 * ! set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
 * ! set.has(value) – returns true if the value exists in the set, otherwise false.
 * ! set.clear() – removes everything from the set.
 * ! set.size – is the elements count.
 */
/**
 * The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.

For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.

Set is just the right thing for that:
 */
let set = new Set();
let john2 = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };
// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);
// set keeps only unique values
console.log(set.size); // 3
for (let user of set) {
  console.log(user.name); // John (then Pete and Mary)
}
/**
 * Iteration over Set
We can loop over a set either with for..of or using forEach:
 */
let set2 = new Set(["oranges", "apples", "bananas", "bananas"]);
console.log("****************************************************");
for (const val of set2) console.log(val);
set2.forEach((value, valueAgain, set) => {
  console.log(value);
});

/**
 * Summary
Map – is a collection of keyed values.

Methods and properties:

new Map([iterable]) – creates the map, with optional iterable (e.g. array) of [key,value] pairs for initialization.
map.set(key, value) – stores the value by the key, returns the map itself.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the element by the key, returns true if key existed at the moment of the call, otherwise false.
map.clear() – removes everything from the map.
map.size – returns the current element count.
The differences from a regular Object:

Any keys, objects can be keys.
Additional convenient methods, the size property.
Set – is a collection of unique values.

Methods and properties:

new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
set.add(value) – adds a value (does nothing if value exists), returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.
Iteration over Map and Set is always in the insertion order, so we can’t say that these collections are unordered, but we can’t reorder elements or directly get an element by its number.
 */
