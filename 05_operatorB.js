console.log("========================== Step 01 ==========================");

function greaterNumber(a, b) {
  console.log(
    `Given numbers are ${a} and ${b} and the greater number is ${a > b ? a : b}`
  );
}

greaterNumber(10, -10);
greaterNumber(800, 899);

console.log("========================== Step 02 ==========================");

function isEvenOrOddNum(number) {
  var result =
    number % 2 === 0
      ? ` Given number is ${number} and it is Even`
      : ` Given number is ${number} and it is Odd`;
  return result;
}

console.log(isEvenOrOddNum(29));
console.log(isEvenOrOddNum(44));
console.log(isEvenOrOddNum(0));
console.log(isEvenOrOddNum(101));

console.log("========================== Step 03 ==========================");

function wordLength(word) {
  var result =
    word.length % 2 === 0
      ? `The length of the given word is ${word.length} and it is Even`
      : `The length of the given word is ${word.length} and it is Odd`;
  return result;
}

console.log(wordLength("javascript"));
console.log(wordLength("developer"));
console.log(wordLength("google"));
