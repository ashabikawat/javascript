const arrayNumbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log("");
console.log("--------------------- step 01 --------------------- ");

arrayNumbers.forEach((element, index) => {
  console.log(`${element} ===> ${index}`);
});

console.log("");
console.log("--------------------- step 02 --------------------- ");
arrayNumbers.forEach((number) => {
  if (number > 0) {
    console.log(number);
  }
});

console.log("");
console.log("--------------------- step 03 --------------------- ");
const newArray = [];

arrayNumbers.forEach((number) => {
  if (number < 0) {
    newArray.push(number);
  }
});

console.log(newArray);

console.log("");
console.log("--------------------- step 04 --------------------- ");

arrayNumbers.forEach((number) => {
  if (number % 2 === 0) {
    console.log(number);
  }
});

console.log("");
console.log("--------------------- step 05 --------------------- ");

let sum = 0;

arrayNumbers.forEach((number) => {
  sum = sum + number;
});
console.log(sum);

console.log("");
console.log("--------------------- step 06--------------------- ");

arrayNumbers.forEach((number, index) => {
  if (index % 2 === 0) {
    console.log(number);
  }
});
