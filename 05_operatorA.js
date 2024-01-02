console.log("========================== Step 01 ==========================");

function squareOfWordLength(word) {
  console.log(
    `The given string is ${word} and the square of its length is ${
      word.length * word.length
    }`
  );
}

squareOfWordLength("javascript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Developer Smart");

console.log("========================== Step 02 ==========================");

function stringCalculation() {
  var word = "I am react developer";
  var stringLength = word.length;
  var stringArray = word.split(" ");

  console.log(
    `The given string is ${word} ,its length is ${stringLength} and after divide the value is ${
      stringLength / stringArray.length
    }`
  );
  console.log(
    `The given string is ${word} ,its length is ${stringLength} and after multiply the value is ${
      stringLength * stringArray.length
    }`
  );
}

stringCalculation();
