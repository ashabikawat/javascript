const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];

console.log("======================== step 01 ========================");
console.log(`Total elements in the array is : ${arrayNumbers.length}`);

console.log("======================== step 02 ========================");
const firstElement = arrayNumbers[0];
const lastElement = arrayNumbers[arrayNumbers.length - 1];
console.log(
  `First element is ${firstElement} and last element is ${lastElement}`
);

console.log("======================== step 03 ========================");
const thirdLastElement = arrayNumbers[arrayNumbers.length - 3];
console.log(`Third last element of the given array is ${thirdLastElement}`);

console.log("======================== step 04 ========================");
let evenArray = [];
for (const element of arrayNumbers) {
  if (element % 2 === 0) {
    evenArray.push(element);
  }
}
console.log(`The even numbers are ${evenArray}`);

console.log("======================== step 05 ========================");
let oddArray = [];
for (const element of arrayNumbers) {
  if (element % 2 === 1) {
    oddArray.push(element);
  }
}
console.log(`The odd numbers are ${oddArray}`);

console.log("======================== step 06 ========================");
let sum = 0;
for (const index in arrayNumbers) {
  if (index % 2 === 0) {
    sum = sum + arrayNumbers[index];
  }
}
console.log(`Sum of all the even positioned elements is ${sum}`);

console.log("======================== step 07 ========================");
let sumOfOddNumbers = 0;
for (const index in arrayNumbers) {
  if (index % 2 === 1) {
    sumOfOddNumbers = sumOfOddNumbers + arrayNumbers[index];
  }
}
console.log(`Sum of all the odd positioned elements is ${sumOfOddNumbers}`);

console.log("======================== step 08 ========================");
let sumOfAllNumbers = 0;
for (const element of arrayNumbers) {
  sumOfAllNumbers = sumOfAllNumbers + element;
}
console.log(`Sum of all the elements in an array is ${sumOfAllNumbers}`);

console.log("======================== step 09 ========================");
let multipleOfFive = [];
for (const element of arrayNumbers) {
  if (element % 5 === 0) {
    multipleOfFive.push(element);
  }
}
console.log(`The numbers which are multiple of five is ${multipleOfFive}`);

console.log("======================== step 10 ========================");
console.log(
  `Number 115 is available in the array ==> ${arrayNumbers.includes(115)}`
);

console.log("======================== step 11 ========================");
console.log(
  `Number 23 is available in the array ==> ${arrayNumbers.includes(23)}`
);

console.log("======================== step 12 ========================");
const newArray = [...arrayNumbers];
newArray.splice(3, 0, 55, 66);
console.log(`Updated array is [${newArray}]`);

console.log("======================== step 13 ========================");
const againNewArray = [...arrayNumbers];
againNewArray.splice(4, 3);
console.log(`Updated array is [${againNewArray}]`);
