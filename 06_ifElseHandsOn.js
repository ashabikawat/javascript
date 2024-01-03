console.log("========================== step 01 ==========================");

var isEvenOrOdd = function (num) {
  if (num % 2 == 0) {
    console.log(`Given number is ${num} and it is even number`);
  } else {
    console.log(`Given number is ${num} and it is odd number`);
  }
};

isEvenOrOdd(45);
isEvenOrOdd(70);
isEvenOrOdd(67);
isEvenOrOdd(98);

console.log("========================== step 02 ==========================");

var eligibleToVote = function (age) {
  if (age >= 18) {
    console.log(`Your age is ${age}. So, you are eligible to vote`);
  } else {
    console.log(`Your age is ${age}.You are not eligible to vote`);
  }
};

eligibleToVote(18);
eligibleToVote(20);
eligibleToVote(17);
eligibleToVote(40);

console.log("========================== step 03 ==========================");

var countOfWords = function (word) {
  if (word.length > 10) {
    console.log(`Given word is ${word}. It has more than 10 words`);
  } else {
    console.log(`Given word is ${word}. It has less than 10 words`);
  }
};

countOfWords("javascript-ES6");

console.log("========================== step 04 ==========================");

var wordStartsWith = function (word) {
  if (word.startsWith("java")) {
    console.log(`Given word is ${word} and it starts with the word java`);
  } else {
    console.log(
      `Given word is ${word} and it does not start with the word java`
    );
  }
};

wordStartsWith("javascript language");
