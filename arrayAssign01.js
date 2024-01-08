console.log("================ Step 01 ================");
var fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const firstElement = fruits_seasonal[0];
const lastElement = fruits_seasonal[fruits_seasonal.length - 1];
console.log(
  `First element is ${firstElement} and the last element ${lastElement}`
);

console.log("================ Step 02 ================");
var fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const addElement = fruits_seasonal.unshift("Papaya");
console.log(`Updated array is ${fruits_seasonal}`);

console.log("================ Step 03 ================");
var fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const removedElement = fruits_seasonal.splice(3, 1);
console.log(`Updated array after removing mango is  ${fruits_seasonal}`);

console.log("================ Step 04 ================");
var fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const insertElement = fruits_seasonal.push("Pineapple");
console.log(`Updated array after adding pineapple is  ${fruits_seasonal}`);

console.log("================ Step 05 ================");
var fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const addMiddleElement = fruits_seasonal.splice(4, 0, "Dragon fruit");
console.log(`Updated array after adding dragon fruit is  ${fruits_seasonal}`);

console.log("================ Step 06 ================");
var fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
const replacedElement = fruits_seasonal.splice(1, 1, "kiwi");
console.log(`Updated array after removing orange is  ${fruits_seasonal}`);

console.log("================ Step 07 ================");
var fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(
  `Elements from 1 to 4 is ${fruits_seasonal.slice(1, fruits_seasonal.length)}`
);

console.log("================ Step 08 ================");
var fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(
  `The last three elements of the given array is ${fruits_seasonal.slice(
    fruits_seasonal.length - 3
  )}`
);
