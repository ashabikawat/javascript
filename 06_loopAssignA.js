// const str = "I am very good IT Developer";

// let count = 0;

// for (let i = 0; i < str.length; i++) {
//   let char = str.charAt(i).toLowerCase();
//   if (
//     char === "a" ||
//     char === "e" ||
//     char === "i" ||
//     char === "o" ||
//     char === "u"
//   ) {
//     count = count + 1;
//   }
// }

// console.log(count);

// function sumOfCube(length) {
//   let count = 0;
//   for (let i = 1; i <= length; i++) {
//     count = count + i * i * i;
//   }
//   console.log(count);
// }
// sumOfCube(5);

const str1 = "Hard work always pays back";
const str2 = "Soon I will be UI IT Champ";

function oddPositionedChars(str) {
  let word = " ";
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i).toLowerCase();
    if (i % 2 == 1 && i !== " ") {
      //   console.log(char);
      word = word + char;
    }
  }
  console.log(word);
}

oddPositionedChars(str1);
// oddPositionedChars(str2);
