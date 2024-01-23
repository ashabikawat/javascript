const arrayNumbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.log("--------------------- step 01 --------------------- ");

const newArray = arrayNumbers.map((number) => {
  return number + 10;
});

console.log(newArray);

console.log("");
console.log("--------------------- step 02 --------------------- ");

const cubeOfArray = arrayNumbers.map((number) => {
  return number * number * number;
});

console.log(cubeOfArray);

console.log("");
console.log("--------------------- step 03 --------------------- ");

const sumOfIndex = arrayNumbers.map((number, index) => {
  return index + number;
});

console.log(sumOfIndex);
